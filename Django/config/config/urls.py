from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('api/', include('bbs.urls')),
    path('api/users/', include('accounts.urls')),

    re_path('', TemplateView.as_view(template_name='index.html')),

    path('admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)