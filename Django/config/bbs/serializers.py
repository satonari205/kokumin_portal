from rest_framework import serializers
from .models import Tweet, Reply, User

# mediaURL = "http://127.0.0.1:8000/media/"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('id','nickname','image')

class ReplyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('id','nickname')

class TweetListSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)
    user = UserSerializer()
    # image1 = serializers.SerializerMethodField()
    # image2 = serializers.SerializerMethodField()

    # def get_image1(self, obj):
    #     return f"{mediaURL}{obj.image1}" if obj.image1 else None

    # def get_image2(self, obj):
    #     return f"{mediaURL}{obj.image2}" if obj.image2 else None

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')

class TweetCreateSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'content', 'posted_at', 'image1', 'image2')

class ReplySerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)
    user = ReplyUserSerializer()
    # image = serializers.SerializerMethodField()

    # def get_image(self, obj):
    #     return f"{mediaURL}{obj.image}" if obj.image else None

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')

class ReplyCreateSerializer(serializers.ModelSerializer):
    posted_at = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)

    class Meta:
        model = Reply
        fields = ('id','tweet','user','content','posted_at','image')
