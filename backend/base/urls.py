from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes),
    path('products/',views.getProducts),
    path('products/<str:pk>',views.getProduct),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    ]