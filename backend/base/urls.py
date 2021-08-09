from django.contrib import admin
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('',views.getRoutes),
    path('products/',views.getProducts),
    path('products/<str:pk>',views.getProduct),
    path('users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]