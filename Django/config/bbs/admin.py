from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Tweet

class TweetAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'content', 'posted_at','image1','image2')

admin.site.register(Tweet, TweetAdmin)