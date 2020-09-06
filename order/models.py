from django.db import models
from django.contrib.auth.models import User

class Order(models.Model):
    order_user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_store = models.CharField(max_length=25)
    order_product = models.CharField(max_length=25)
    order_number = models.CharField(max_length=20)
    order_cake_img = models.ImageField(upload_to = 'images/')
    order_price = models.PositiveIntegerField()
    order_date = models.DateField()
    order_pickuptime = models.TimeField()
    order_state = models.CharField(max_length=20)

    def __str__(self):
        return self.order_number + self.order_state

class Review(models.Model):
    review_info = models.OneToOneField(Order, on_delete=models.CASCADE)
    review_star = models.FloatField()
    review_title = models.CharField(max_length=50)
    review_body = models.TextField()
    review_img = models.ImageField(upload_to = 'images/')
    review_like = models.PositiveIntegerField(default=0)
    review_unlike = models.PositiveIntegerField(default=0) #리뷰가 도움이 되었나요?

    def __str__(self):
        return self.review_title

