from django.urls import path
from . import views

app_name = 'bbs'

urlpatterns = [
    path('tweets/', views.TweetListAPIView.as_view(), name="tweets"),
    path('tweets/create', views.TweetCreateAPIView.as_view(), name="tweets"),
    path('replies/', views.TweetAndRepliesAPIView.as_view(), name="replies"),
    # path('replies/', views.ReplyListAPIView.as_view(), name="replies"),
]