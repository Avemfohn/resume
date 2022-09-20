from distutils.command.upload import upload
from django.db import models
from django.conf import settings
from django.utils import timezone

class TopDescription(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    
    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=20,blank=True, null=True)
    image = models.FileField(blank=True, null=True, upload_to="skills")
    score = models.IntegerField(default=80, blank=True, null=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=100,blank=True, null=True)
    image = models.ImageField(blank=True, null=True, upload_to="projects")
    type = models.CharField(max_length=20,blank=True, null=True)
    link = models.URLField(max_length=200, blank=True)
    def __str__(self):
        return self.name        

class Contact(models.Model):
    
    timestamp = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(verbose_name="Email")
    subject = models.CharField(max_length=50,blank=True)
    message = models.TextField(verbose_name="Message")

    def __str__(self):
        return self.email 

class Certificate(models.Model):
    date = models.DateField(blank=True,null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    platform = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True) 
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name

class Education(models.Model):
    degree_name= models.CharField(max_length=40,blank=True,null=True)   
    school_name= models.CharField(max_length=40,blank=True,null=True)   
    starting_date = models.DateField(blank=True,null=True)
    ending_date = models.DateField(blank=True,null=True)
    description = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.school_name

class Experience(models.Model):
    company=models.CharField(max_length=40,blank=True,null=True)
    title= models.CharField(max_length=40,blank=True,null=True)   
    location= models.CharField(max_length=40,blank=True,null=True)   
    starting_date = models.DateField(blank=True,null=True)
    ending_date = models.DateField(blank=True,null=True)
    description = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.company

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title        


