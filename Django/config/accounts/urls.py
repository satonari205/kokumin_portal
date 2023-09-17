from django.urls import path,include
from . import views
from .views import UserList

app_name = 'accounts'

urlpatterns = [
    path('token/', include('djoser.urls')),
    path('token/', include('djoser.urls.jwt')),
    path('users/', UserList.as_view()),
]