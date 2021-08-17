from django.urls import path
from base.views import order_views as views  


urlpatterns = [
   path("add/", views.addOrrderItems),
   path("<str:pk>/", views.getOrderById),
   path("<str:pk>/pay", views.updateOrderToPaid)
    ]