from .models import Tweet,Reply
from .serializers import (
    TweetListSerializer,
    TweetSerializer,
    ReplySerializer,
    ReplyCreateSerializer,
)
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class TweetListAPIView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Tweet.objects.all()
    serializer_class = TweetListSerializer

class TweetRetrieveAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TweetListSerializer

    def get(self,request,pk):
        tweet = get_object_or_404(Tweet, id=pk)
        serializer = self.serializer_class(tweet)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TweetCreateAPIView(generics.CreateAPIView):
    permission_class = [permissions.IsAuthenticated]
    serializer_class = TweetSerializer
    queryset = Tweet.objects.all()

class RepliesListAPIView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ReplySerializer

    def get_queryset(self):
        tweet_id = self.kwargs.get('pk')
        replies = Reply.objects.filter(tweet=tweet_id)
        return replies

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response({"Reply": serializer.data})

class ReplyCreateAPIView(generics.CreateAPIView):
    permission_class = [permissions.IsAuthenticated]
    queryset = Reply.objects.all()
    serializer_class = ReplyCreateSerializer