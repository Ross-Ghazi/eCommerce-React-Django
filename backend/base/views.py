from re import I
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from rest_framework.response import Response
from .models import Product
from .Serializers import ProductSerializer,USerSerializer,USerSerializerWithToken
# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self, attrs):
        data = super().validate(attrs)
        serializer=USerSerializerWithToken(self.user).data

        for k,v in serializer.items():
            data[k]=v


        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getUserProfile(request):   
    user=request.user
    serializer=USerSerializer(user, many=False)
    return Response(serializer.data)



@api_view(["GET"])
@permission_classes([IsAdminUser])
def getUsers(request):   
    users=User.objects.all()
    serializer=USerSerializer(users, many=True)
    return Response(serializer.data)



@api_view(["GET"])
def getRoutes(request):
    routes=["wwwww","eeeee"]
    return Response(routes)



@api_view(["GET"])
def getProducts(request):   
    products=Product.objects.all()
    serializer=ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getProduct(request, pk):   
    product=  Product.objects.get(_id=pk)
    serializer=ProductSerializer(product, many=False)
    return Response(serializer.data)