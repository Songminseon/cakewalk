from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Store(models.Model):
    str_id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    str_name = models.CharField(max_length=200)
    str_email = models.CharField(max_length=100)
    str_phone = models.CharField(max_length=100)
    str_address = models.CharField(max_length=300)

    def __str__(self):
        return self.str_id

class Product(models.Model):
    str_id = models.ForeignKey(Store, on_delete=models.CASCADE)
    product_id = models.CharField(max_length=100, primary_key=True)
    product_name = models.CharField(max_length=200)
    product_image = models.ImageField(upload_to = 'images/')
    product_description = models.CharField(max_length=500)
    product_default_price = models.IntegerField()
    
    WHITE = 'WH'
    PINK = 'PI'
    SKYBLUE = 'SK'
    BROWN = 'BR'
    RED = 'RE'
    PURPLE = 'PU'
    YELLOW = 'YE'
    GREEN = 'GR'
    
    COLOR = (
        (WHITE, 'White'),
        (PINK, 'Pink'),
        (SKYBLUE, 'Skyblue'),
        (BROWN, 'Brown'),
        (RED, 'Red'),
        (YELLOW, 'Yellow'),
        (GREEN, 'Green'),
    )
    product_color = models.CharField(max_length=10, choices=COLOR, default=WHITE)


    ROUND = 'R'
    SQUARE = 'S'
    HEART = 'H'

    SHAPE = (
        (ROUND, 'Round'),
        (SQUARE, 'Square'),
        (HEART, 'Heart'),
    )
    product_shape = models.CharField(max_length=10, choices=SHAPE, default=ROUND)

# 테두리, 문구, 문양, 줄무늬,
# 윗면
    product_text = models.CharField(max_length=10, default=None)
    product_text_color = models.CharField(max_length=10, choices=COLOR, default=WHITE)

    
    # DECO = (
    #     (TEXT, 'Text'),
    #     (NONE, 'None'),
    #     (ALL, 'All'),
    # )
    # product_deco = models.BooleanField()

    like_num = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.product_name