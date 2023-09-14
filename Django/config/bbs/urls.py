from django.urls import path
from . import views

app_name = 'bbs'

urlpatterns = [
    path('tweets/', views.TweetListAPIView.as_view(), name="tweets"),
    path('replies/<int:pk>/', views.ReplyListAPIView.as_view(), name="replies"),
]