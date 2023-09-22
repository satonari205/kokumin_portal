from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class RepliesAPIView(APIView):
    def get(self, request):
        tweet_id = request.query_params.get('tweet')
        tweet = get_object_or_404(Tweet, id=tweet_id)
        replies = Reply.objects.filter(tweet=tweet_id)

        tweet_serializer = TweetSerializer(tweet)
        reply_serializer = ReplySerializer(replies, many=True)

        data = {
            "Tweet": tweet_serializer.data,
            "Reply": reply_serializer.data
        }
        return Response(data, status=status.HTTP_200_OK)
