# Generated by Django 3.2.4 on 2021-06-25 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('draftwebivent', '0002_auto_20210625_1345'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='age',
            field=models.IntegerField(),
        ),
    ]