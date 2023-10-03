from django.urls import path,include
from accounts.views import (
    get_current_user,
    UserRetrieveAPIView,
    # RegisterAPIView,
    # CSRFView,
)

# from dj_rest_auth.views import (
#     LogoutView,
#     UserDetailsView,
# )

# from prj_auth import views as prj_auth_views

urlpatterns = [
    path('current/', get_current_user, name='current_user'),
    path('<int:pk>/', UserRetrieveAPIView.as_view()),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
    # path('register/',RegisterAPIView.as_view()),
]