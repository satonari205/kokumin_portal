from django.shortcuts import render

from rest_framework import generics

from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

class TweetListAPIView(generics.ListAPIView):
    serializer_class = TweetSerializer

    def get_queryset(self):
        queryset = Tweet.objects.all()
        tweet_id = self.request.query_params.get('id')
        if tweet_id is not None:
            queryset = queryset.filter(id = tweet_id)
        return queryset

class ReplyListAPIView(generics.ListAPIView):
    serializer_class = ReplySerializer

    def get_queryset(self):
        queryset = Reply.objects.all()
        tweet_id = self.request.query_params.get('tweet')
        if tweet_id is not None:
            queryset = queryset.filter(tweet = tweet_id)
        return queryset

