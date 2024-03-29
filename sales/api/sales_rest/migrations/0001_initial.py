# Generated by Django 4.0.3 on 2022-12-12 05:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=50)),
                ('year', models.PositiveSmallIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='PotentialCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('phone_number', models.PositiveBigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SaleRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.PositiveIntegerField()),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='automobile', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='customer', to='sales_rest.potentialcustomer')),
            ],
        ),
        migrations.CreateModel(
            name='SalesPerson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('employee_number', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SalesList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_list_customer', to='sales_rest.potentialcustomer')),
                ('price', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_price', to='sales_rest.salerecord')),
                ('sales_person', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_list_sales_person', to='sales_rest.salesperson')),
                ('vin', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_list_vin', to='sales_rest.automobilevo')),
            ],
        ),
        migrations.AddField(
            model_name='salerecord',
            name='sales_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sales_person', to='sales_rest.salesperson'),
        ),
        migrations.CreateModel(
            name='EmployeeSalesList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='employee_sales_list_customer', to='sales_rest.potentialcustomer')),
                ('price', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='employee_sales_price', to='sales_rest.salerecord')),
                ('sales_person', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='employee_sales_list_sales_person', to='sales_rest.salesperson')),
                ('vin', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='employee_sales_list_vin', to='sales_rest.automobilevo')),
            ],
        ),
    ]
