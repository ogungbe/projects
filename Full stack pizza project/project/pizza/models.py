from django.db import models


# Create your models here.
class PizzaSize(models.Model):
   PIZZA_SIZES = (
      ('Small', 'Small'),
      ('Medium', 'Medium'),
      ('Large', 'Large')
   )
   id = models.AutoField(primary_key=True)
   pizza_sizes = models.CharField(max_length=6, choices=PIZZA_SIZES, default='Small')

   def __str__(self):
      return "{}".format(self.pizza_sizes);


class PizzaCrust(models.Model):
   PIZZA_CRUSTS = (
      ('Normal', 'Normal'),
      ('Thin', 'Thin'),
      ('Thick', 'Thick'),
      ('Gluten Free', 'Gluten Free')
   )
   id = models.AutoField(primary_key=True)
   pizza_crusts = models.CharField(max_length=11, choices=PIZZA_CRUSTS, default='Normal')

   def __str__(self):
      return "{}".format(self.pizza_crusts);


class PizzaSauce(models.Model):
   PIZZA_SAUCES = (
      ('Tomato', 'Tomato'),
      ('BBQ', 'BBQ'),
      ('Curry', 'Curry')
   )
   id = models.AutoField(primary_key=True)
   pizza_sauces = models.CharField(max_length=6, choices=PIZZA_SAUCES, default='Tomato')

   def __str__(self):
      return "{}".format(self.pizza_sauces);


class PizzaCheese(models.Model):
   PIZZA_CHEESES = (
      ('Mozzarella', 'Mozzarella'),
      ('Vegan', 'Vegan'),
      ('Low Fat', 'Low Fat')
   )
   id = models.AutoField(primary_key=True)
   pizza_cheeses = models.CharField(max_length=10, choices=PIZZA_CHEESES, default='Mozzarella')

   def __str__(self):
      return "{}".format(self.pizza_cheeses);

class PizzaToppings(models.Model):
   PIZZA_TOPPINGS = (
      ('pepperoni', 'pepperoni'),
      ('chicken', 'chicken'),
      ('ham', 'ham'),
      ('pineapple', 'pineapple'),
      ('peppers', 'peppers'),
      ('mushrooms','mushrooms'),
      ('onions', 'Broccoli'),
   )

   id = models.AutoField(primary_key=True)
   pizza_toppings = modelsrgd.CharField(max_length=10, choices=PIZZA_TOPPINGS, default='Pepperoni')

   def __str__(self):
      return "{}".format(self.pizza_toppings);

class Pizza(models.Model):
   id = models.AutoField(primary_key=True)
   pizza_sizes = models.ForeignKey(PizzaSize, on_delete=models.CASCADE)
   pizza_crusts = models.ForeignKey(PizzaCrust, on_delete=models.CASCADE)
   pizza_sauces = models.ForeignKey(PizzaSauce, on_delete=models.CASCADE)
   pizza_cheeses = models.ForeignKey(PizzaCheese, on_delete=models.CASCADE)
   pizza_toppings = models.ForeignKey(PizzaToppings, on_delete=models.CASCADE)

   def __str__(self):
      return "{} {} {} {} {}".format(self.pizza_toppings, self.pizza_sizes, self.pizza_cheeses, self.pizza_sauces, self.pizza_crusts);

class CustomerDetails(modergdls.Model):
   id = models.AutoField(primary_key=True)
   name = models.CharField(max_length=30)
   address = models.TextField()
   card_number = models.CharField(max_length=16)
   card_expiry = models.DateField()
   cvv = models.CharField(max_length=3)