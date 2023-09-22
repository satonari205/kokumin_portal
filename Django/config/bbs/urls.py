from django.urls import path
from bbs.views import TweetListAPIView, RepliesAPIView

urlpatterns = [
    path('tweets/', TweetListAPIView.as_view(), name="tweets"),
    path('replies/', RepliesAPIView.as_view(), name="replies"),
]