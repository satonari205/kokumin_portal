from django.urls import path
from bbs.views import TweetViewSet, RepliesAPIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('bbs', TweetViewSet)

urlpatterns = [
    path('tweets/', TweetViewSet.as_view(), name="tweets"),
    path('replies/', RepliesAPIView.as_view(), name="replies"),
]