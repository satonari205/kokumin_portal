from django.urls import path
from accounts.views import (
    get_current_user,
    UserRetrieveAPIView,
    RegisterAPIView,
)
urlpatterns = [
     path('current/', get_current_user, name='current_user'),
    path('<int:pk>/', UserRetrieveAPIView.as_view()),
    path('register/',RegisterAPIView.as_view()),
]