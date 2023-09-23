from django.urls import path
from bbs.views import (
    TweetListAPIView,
    TweetCreateAPIView,
    RepliesAPIView,
    ReplyCreateAPIView,
)

urlpatterns = [
    path('tweets/', TweetListAPIView.as_view(), name="tweets"),
    path('tweets/create/', TweetCreateAPIView.as_view(), name="tweets"),
    path('replies/', RepliesAPIView.as_view(), name="replies"),
    path('replies/create/', ReplyCreateAPIView.as_view(), name="tweets"),
]