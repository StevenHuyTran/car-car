# Generated by Django 4.0.3 on 2022-12-08 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_rename_vehicle_vin_appointment_auto_vin_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='auto_vin',
            field=models.CharField(blank=True, max_length=17, null=True),
        ),
    ]