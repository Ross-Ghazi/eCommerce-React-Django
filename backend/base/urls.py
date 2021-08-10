from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes),
    path('products/',views.getProducts),
    path('users/profile/',views.getUserProfile),
    path('users/',views.getUsers),

    path('products/<str:pk>',views.getProduct),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    ]