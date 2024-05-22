from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from app import views 
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path("app/", views.home), 
    path('register/', views.register), 
    path("", views.home),
    path("home/", views.home),
    path("login/", views.login),
    path("accounts/login/", views.login),
    path("logout/", views.logout, name="logout"),
    path("dashboard/status/", views.status), 
    path("recomendation/", views.recomendation),
    path("dashboard/recommendation/", views.recomendation),
    path("advanced/", views.advanced),
    path("dashboard/advanced", views.advanced),
    path("more_details/", views.more_details, name="more_details"), 
    path("dashboard/search/", views.get_exploits_by_cve),
    path("Configuration/", views.configuration),
    path("document/", views.document),
    path("dashboard/configuration", views.configuration),
    path("user/password", views.PasswordChange), 
    path("password/", views.PasswordChange),
    path("dashboard/payment", views.payment),
    path('load_content/<str:content_name>/', views.load_content, name='load_content'), 
    path('auth/password-remind/', views.ForgotPasswordView),
    path('auth/emailAuth/<str:authURL>', views.auth_backend),
    path('auth/passwordreset/<str:pwd_remindURL>', views.pwd_remind_backend),
    path('user/feedback/', views.feedback)    
]

urlpatterns += staticfiles_urlpatterns()

