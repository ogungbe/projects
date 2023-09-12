from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name="index"),
    path('creation/', views.create_pizza, name="createpizza"),
    path('creation/delivery/', views.delivery, name="delivery"),
    path('congrats/', views.congrats, name="congrats"),
    path('ready/', views.ready, name="ready"),

]
