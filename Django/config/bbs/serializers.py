from rest_framework import serializers
from .models import Tweet, Reply, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('id','username','image')

class TweetListSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)
    user = UserSerializer()

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')

class TweetSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')

class ReplySerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)
    user = UserSerializer()

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')

class ReplyCreateSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')
