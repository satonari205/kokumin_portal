from rest_framework import serializers
from .models import Tweet, Reply

class TweetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')
        
class ReplySerializer(serializers.ModelSerializer):

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')

