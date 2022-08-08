from cloudinary.models import CloudinaryField
from django.db import models
from config.constants import *


# Create your models here.
class Item(models.Model):
    class Meta(object):
        db_table = 'item'

    status= models.CharField(
        'Status',blank=False, default='inactive', max_length=50, db_index=True, choices=STATUS
    )
    name= models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True, default='Anonymous'
    )
    price= models.DecimalField(
        'Price', blank=False, null=False, max_digits=5, decimal_places=2
    )
    image= CloudinaryField(
        'Image', blank=False, null=False
    )
    created_at= models.DateTimeField(
        "Created At", blank=True, auto_now_add=True
    )
    updated_at= models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )
    def __str__(self):
        return self.name 
