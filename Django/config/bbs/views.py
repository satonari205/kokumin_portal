from django.shortcuts import render

from rest_framework import generics

from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class ReplyListAPIView(generics.ListAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
