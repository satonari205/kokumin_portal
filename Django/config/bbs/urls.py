from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'bbs'

urlpatterns = [
    path('tweets/', views.TweetListAPIView.as_view(), name="tweets"),
    path('replies/', views.ReplyListAPIView.as_view(), name="replies"),
]