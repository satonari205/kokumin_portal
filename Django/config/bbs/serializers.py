from rest_framework import serializers
from .models import Tweet
from accounts.serializers import UserSerializer

class BbsSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Tweet
        fields = ('id','user','content','reply_to','posted_at','image')