# Generated by Django 5.0.6 on 2024-07-05 13:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='customuser',
            options={'managed': True, 'verbose_name': 'Usuario', 'verbose_name_plural': 'Usuarios'},
        ),
        migrations.AlterModelTable(
            name='customuser',
            table='usuarios',
        ),
    ]
