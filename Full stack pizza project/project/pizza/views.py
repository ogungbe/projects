from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import *
from .forms import *

def index(request):
    return render(request, 'index.html')

def create_pizza(request):
    if request.method == "POST":
				# create a new copy of the form with the data the user 
				# entered , it is stored in request.POST
        form = PizzaForm(request.POST)
        if form.is_valid():
            emp = form.save() # create the Employee object and save it
						# send the user to a confirmation page saying
						# confirming that they filled in the form and the data was saved 
            return render(request, 'ready.html', {'emp':emp})
        else:
						# form has errors
						# send the form back to the user
            return render(request, 'creation.html', {'form': form})
    else:
        # normal get reuqest, user wants to see the form 
        form = PizzaForm()
        return render(request, 'creation.html', {'form': form})

def delivery(request):
    all_pizzas = Pizza.objects.latest('id')
    if request.method == "POST":
				# create a new copy of the form with the data the user 
				# entered , it is stored in request.POST
        form = DetailsForm(request.POST)
        if form.is_valid():
            emp = form.save() # create the Employee object and save it
						# send the user to a confirmation page saying
						# confirming that they filled in the form and the data was saved 
            return render(request, 'congrats.html', {'emp':emp, 'Pizza':all_pizzas})
        else:
						# form has errors
						# send the form back to the user
            return render(request, 'delivery.html', {'form': form})
    else:
        # normal get reuqest, user wants to see the form 
        form = DetailsForm()
        return render(request, 'delivery.html', {'form': form})

def ready(request):
    return render(request, 'ready.html')

def congrats(request):
    all_pizzas = Pizza.objects.latest('id')
    return render(request, 'congrats.html', {'Pizza':all_pizzas})