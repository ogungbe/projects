from django import forms
from .models import *

class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['pizza_sizes', 'pizza_crusts', 'pizza_sauces', 'pizza_cheeses', 'pizza_toppings']

class DetailsForm(forms.ModelForm):
    class Meta:
        model = CustomerDetails
        fields = ['name', 'address', 'card_number', 'card_expiry', 'cvv']