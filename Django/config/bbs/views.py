from django.shortcuts import render

from rest_framework import generics
from drf_multiple_model.views import ObjectMultipleModelAPIView

from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

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

# class TweetAPIViews(generics.RetrieveAPIView):
#     serializer_class = TweetSerializer

#     def get_queryset(self):
#         queryset = Tweet.objects.all()
#         tweet_id = self.request.query_params.get('id')
#         if tweet_id is not None:
#             queryset = queryset.filter(id = tweet_id)
#         return queryset

# class ReplyListAPIView(generics.ListAPIView):
#     serializer_class = ReplySerializer

#     def get_queryset(self):
#         # queryset_tweet = Tweet.objects.all()
#         queryset = Reply.objects.all()
#         tweet_id = self.request.query_params.get('tweet',None)
#         # tweet_id = self.request.query_params.get('tweet')
#         if tweet_id is not None:
#             # queryset_tweet = queryset_tweet.filter(id = tweet_id)
#             queryset = queryset.filter(tweet = tweet_id)
#         return queryset

# class ReplyListAPIView(ObjectMultipleModelAPIView):

#     def get_queryset(self,request):
#         tweet_id = request.query_params.get('tweet')
#         querylist = (
#             {'queryset': Tweet.objects.filter(id = tweet_id),
#             'serializer_class': TweetSerializer},
#             {'queryset': Reply.objects.filter(tweet= tweet_id),
#             'serializer_class': ReplySerializer},
#         )
#         return querylist
