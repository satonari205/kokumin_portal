from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'bbs'

urlpatterns = [
    path('', views.BbsListAPIView.as_view(), name="bbs"),
]