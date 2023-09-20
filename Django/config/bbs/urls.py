from django.urls import path
from bbs.views import TweetListAPIView, TweetCreateAPIView, TweetAndRepliesAPIView

app_name = 'bbs'

urlpatterns = [
    path('tweets/', TweetListAPIView.as_view(), name="tweets"),
    path('tweets/create', TweetCreateAPIView.as_view(), name="post"),
    path('replies/', TweetAndRepliesAPIView.as_view(), name="replies"),
]