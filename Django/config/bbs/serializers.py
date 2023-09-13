from rest_framework import serializers
from .models import Tweet, Reply

class TweetSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')
        
class ReplySerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')

