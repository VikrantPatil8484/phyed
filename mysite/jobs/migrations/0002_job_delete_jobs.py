# Generated by Django 4.1.5 on 2023-05-21 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_logo', models.ImageField(upload_to='jobs/images')),
                ('job_company', models.CharField(max_length=50)),
                ('job_title', models.CharField(max_length=50)),
                ('job_desc', models.CharField(max_length=200)),
                ('job_listed', models.DateField(default='')),
                ('job_last', models.DateField(default='')),
            ],
        ),
        migrations.DeleteModel(
            name='Jobs',
        ),
    ]
