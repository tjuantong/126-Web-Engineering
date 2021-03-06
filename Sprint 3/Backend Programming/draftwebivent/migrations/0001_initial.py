# Generated by Django 3.2.4 on 2021-06-21 02:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField()),
                ('occupation', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=250)),
                ('country', models.CharField(max_length=200)),
                ('province', models.CharField(max_length=200)),
                ('school', models.CharField(max_length=250)),
                ('course_yr_lvl', models.CharField(max_length=250)),
                ('interest', multiselectfield.db.fields.MultiSelectField(choices=[('Art', 'Art'), ('Business', 'Business'), ('Career', 'Career'), ('Design', 'Design'), ('Environment', 'Environment'), ('Gaming', 'Gaming'), ('Health', 'Health'), ('Leadership', 'Leadership'), ('Media', 'Media'), ('Politics', 'Politics'), ('Programming', 'Programming'), ('Technology', 'Technology')], max_length=101)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
