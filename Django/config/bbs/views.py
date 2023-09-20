from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class TweetListAPIView(ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetCreateAPIView(CreateAPIView):
    serializer_class = TweetSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer_data = request.data.copy()
        serializer_data['user'] = request.user.id

        serializer = self.get_serializer(data=serializer_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class TweetAndRepliesAPIView(APIView):
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
