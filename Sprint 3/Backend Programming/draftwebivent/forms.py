from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import UserProfile


class RegistrationForm(UserCreationForm):
    first_name = forms.CharField(max_length=200, required=True)
    last_name = forms.CharField(max_length=200, required=True)
    
    class Meta:
        model = User
        fields = (
                    'username', 
                    'first_name', 
                    'last_name',
                    'password1',
                    'password2',
                )
        
        #commit says that it could be saved into the database
        '''def save(self, commit=True):
            user = super(RegistrationForm, self).save(commit=False)  
            user.first_name = self.cleaned_data['first_name']
            user.last_name = self.cleaned_data['last_name']

            if commit:
                user.save()

            return user
        '''

class UserProfileForm(forms.ModelForm):
    age = forms.IntegerField(max_value=80, min_value=12, required=True)
    occupation = forms.CharField(max_length=200, required=True)
    school = forms.CharField(max_length=250, required=True)
    course_yr_lvl = forms.CharField(max_length=250, required=True)
    city = forms.CharField(max_length=100, required=True)
    province = forms.CharField(max_length=100, required=True)
    country = forms.CharField(max_length=100, required=True)
    
    class Meta:
        model = UserProfile
        fields = (
                    'age', 
                    'occupation', 
                    'city', 
                    'province', 
                    'country', 
                    'school', 
                    'course_yr_lvl', 
                    'interest'
                )

        
        '''def save(self, commit=True):
            profile_user = super(UserProfileForm, self).save(commit=False)     #
            profile_user.age = self.cleaned_data['age']
            profile_user.occupation = self.cleaned_data['occupation']

            if commit:
                profile_user.save()

            return profile_user
        '''

class EditProfileForm(forms.ModelForm):
    first_name = forms.CharField(max_length=200, required=True)
    last_name = forms.CharField(max_length=200, required=True)
    class Meta:
        model = User 
        fields = (
                    'first_name', 
                    'last_name'
                )

class EditUserProfileForm(forms.ModelForm):
    age = forms.IntegerField(max_value=80, min_value=12, required=True)
    occupation = forms.CharField(max_length=200, required=True)
    school = forms.CharField(max_length=250, required=True)
    course_yr_lvl = forms.CharField(max_length=250, required=True)
    city = forms.CharField(max_length=100, required=True)
    province = forms.CharField(max_length=100, required=True)
    country = forms.CharField(max_length=100, required=True)
    
    class Meta:
        model = UserProfile
        fields = (
                    'age', 
                    'occupation', 
                    'city', 
                    'province', 
                    'country', 
                    'school', 
                    'course_yr_lvl', 
                    'interest'
                )