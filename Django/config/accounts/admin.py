from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User

class TweetAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'username', 'password','image','bio')

admin.site.register(User, TweetAdmin)