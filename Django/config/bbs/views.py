from django.shortcuts import render

from rest_framework import generics

from .models import Tweet
from .serializers import BbsSerializer


class BbsListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = BbsSerializer
