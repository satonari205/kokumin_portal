from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'accounts'

urlpatterns = [
    path('', views.UserListAPIView.as_view(), name="accounts"),
]