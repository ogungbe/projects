from django.contrib import admin
from .models import *

admin.site.register(PizzaSize)
admin.site.register(PizzaCrust)
admin.site.register(PizzaSauce)
admin.site.register(PizzaCheese)
admin.site.register(PizzaToppings)
admin.site.register(Pizza)
admin.site.register(CustomerDetails)
