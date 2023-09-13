from django.shortcuts import render

from rest_framework import generics

from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

class TweetListAPIView(generics.ListAPIView):
    serializer_class = TweetSerializer

    def get_queryset(self):
        queryset = Tweet.objects.all()
        tweet = self.request.query_params.get('id', None)
        if tweet is not None:
            queryset = queryset.filter(id = )
        return tweet

class ReplyListAPIView(generics.ListAPIView):
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()

