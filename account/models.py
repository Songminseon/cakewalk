from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    choice = (('선택1','선택1_1'),('선택2','선택2_2'),('선택3','선택3_3'))

class Test(models.Model):

   
    test3 = models.CharField(max_length=10)


# Create your models here.
