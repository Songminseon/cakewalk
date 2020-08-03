# Generated by Django 3.0.6 on 2020-08-03 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='like_post',
            field=models.ManyToManyField(blank=True, related_name='like_user', to='main.Product'),
        ),
        migrations.AddField(
            model_name='account',
            name='mem_address',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='mem_email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='mem_name',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='mem_phone',
            field=models.CharField(max_length=25, null=True),
        ),
    ]