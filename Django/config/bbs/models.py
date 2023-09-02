from django.db import models
from accounts.models import User

class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tweets")
    content = models.TextField(max_length=10000)
    reply_to = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    posted_at = models.DateTimeField(auto_now_add=True)
    image1 = models.ImageField(upload_to='images/', null=True, blank=True)
    image2 = models.ImageField(upload_to='images/', null=True, blank=True)

    def clean(self):
        if not self.content and not any([self.image1, self.image2]):
            raise models.ValidationError("Content and image cannot both be empty.")

    def save(self, *args, **kwargs):
        self.full_clean()  # Run the clean() method
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Tweet by {self.user.username} at {self.posted_at}"