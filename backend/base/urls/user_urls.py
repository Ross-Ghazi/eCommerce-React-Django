from django.urls import path
from base.views import user_views as views  


urlpatterns = [
    path('profile/',views.getUserProfile),
    path('profile/update/',views.updateUserProfile),
    path('',views.getUsers),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/',views.registerUsers ),
    ]