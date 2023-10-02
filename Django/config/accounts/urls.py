from django.urls import path
from accounts.views import (
    get_current_user,
    UserRetrieveAPIView,
    RegisterAPIView,
    CSRFView,
)

# from dj_rest_auth.views import (
#     LogoutView,
#     UserDetailsView,
# )

# from prj_auth import views as prj_auth_views

urlpatterns = [
    path('current/', get_current_user, name='current_user'),
    path('<int:pk>/', UserRetrieveAPIView.as_view()),
    path('register/',RegisterAPIView.as_view()),
    # path("auth/login/", prj_auth_views.LoginView.as_view(), name="rest_login"),
    # path("auth/logout/", LogoutView.as_view(), name="rest_logout"),
    # path("auth/token/refresh/", prj_auth_views.RefreshView.as_view(), name="token_refresh"),
    path("csrf/", CSRFView.as_view(), name="csrf_token"),
]