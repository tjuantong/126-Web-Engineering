#to create the table in the database
from django.db import models

#used for the UserProfile model
from django.contrib.auth.models import User

#import multiselectfield for checkbox
#pip install django-multiselectfield
from multiselectfield import MultiSelectField


class UserProfile(models.Model):

    INTEREST_CHOICES = (
        ('Art', 'Art'),
        ('Business', 'Business'),
        ('Career', 'Career'),
        ('Design', 'Design'),
        ('Environment', 'Environment'),
        ('Gaming', 'Gaming'),
        ('Health', 'Health'),
        ('Leadership', 'Leadership'),
        ('Media', 'Media'),
        ('Politics', 'Politics'),
        ('Programming', 'Programming'),
        ('Technology', 'Technology'),
    )

    user = models.OneToOneField(User, on_delete = models.CASCADE)
    age = models.IntegerField()
    occupation = models.CharField(max_length=200, default='')
    city = models.CharField(max_length=250, default='')
    country = models.CharField(max_length=200, default='')
    province = models.CharField(max_length=200, default='')
    school = models.CharField(max_length=250, default='')
    course_yr_lvl = models.CharField(max_length=250, default='')
    interest = MultiSelectField(choices = INTEREST_CHOICES, default='')

    #to use in the User Profile django admin
    @property
    def name(self):
        return "%s"%(self.user.username)

    def __str__(self):
        return self.user.username
