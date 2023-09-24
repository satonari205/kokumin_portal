from django.urls import path
from bbs.views import (
    TweetListAPIView,
    TweetCreateAPIView,
    TweetRetrieveAPIView,
    RepliesListAPIView,
    ReplyCreateAPIView,
)

urlpatterns = [
    path('tweets/', TweetListAPIView.as_view(), name="tweets"),
    path('tweets/<int:pk>/', TweetRetrieveAPIView.as_view(), name="tweets"),
    path('tweets/create/', TweetCreateAPIView.as_view(), name="tweets"),
    path('replies/<int:pk>', RepliesListAPIView.as_view(), name="replies"),
    path('replies/create/', ReplyCreateAPIView.as_view(), name="tweets"),
]