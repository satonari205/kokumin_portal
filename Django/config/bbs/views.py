from django.shortcuts import render

from rest_framework import generics
from drf_multiple_model.views import ObjectMultipleModelAPIView

from .models import Tweet,Reply
from .serializers import TweetSerializer,ReplySerializer

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetAPIViews(generics.RetrieveAPIView):
    serializer_class = TweetSerializer

    def get_queryset(self):
        queryset = Tweet.objects.all()
        tweet_id = self.request.query_params.get('id')
        if tweet_id is not None:
            queryset = queryset.filter(id = tweet_id)
        return queryset

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

class ReplyListAPIView(ObjectMultipleModelAPIView):
    lookup_field = 'pk'

    def get_querylist(self):
        tweet_id = self.kwargs.get(self.lookup_field)
        querylist = (
            {'queryset': Tweet.objects.filter(id = tweet_id),
             'serializer_class': TweetSerializer},
            {'queryset': Reply.objects.filter(tweet= tweet_id),
             'serializer_class': ReplySerializer},
        )
        return querylist
