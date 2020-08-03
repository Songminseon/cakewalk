# Generated by Django 3.0.6 on 2020-08-03 11:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('str_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('str_name', models.CharField(max_length=200)),
                ('str_email', models.CharField(max_length=100)),
                ('str_phone', models.CharField(max_length=100)),
                ('str_address', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=200)),
                ('product_image', models.ImageField(upload_to='images/')),
                ('product_description', models.CharField(max_length=500)),
                ('product_default_price', models.IntegerField()),
                ('product_color', models.CharField(choices=[('WH', 'White'), ('PI', 'Pink'), ('SK', 'Skyblue'), ('BR', 'Brown'), ('RE', 'Red'), ('YE', 'Yellow'), ('GR', 'Green')], default='WH', max_length=10)),
                ('product_shape', models.CharField(choices=[('R', 'Round'), ('S', 'Square'), ('H', 'Heart')], default='R', max_length=10)),
                ('product_text', models.CharField(default=None, max_length=10)),
                ('product_text_color', models.CharField(choices=[('WH', 'White'), ('PI', 'Pink'), ('SK', 'Skyblue'), ('BR', 'Brown'), ('RE', 'Red'), ('YE', 'Yellow'), ('GR', 'Green')], default='WH', max_length=10)),
                ('like_num', models.PositiveIntegerField(default=0)),
                ('str_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Store')),
            ],
        ),
    ]