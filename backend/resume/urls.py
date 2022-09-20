from xml.etree.ElementInclude import include
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"contact",views.ContactViewSet)
urlpatterns = [
    path('topintro/', views.top_intros, name='top_intro'),
    path('topintro/<str:pk>/', views.top_intro, name='top_intro'),
    path('projectfield/', views.project_fields, name='project_field'),
    path('projectfield/<str:pk>/', views.project_field, name='project_field'),
    path('education/', views.educations, name='education'),
    path('experience/',views.experinces, name="experience"),
    #path('contact/',views.contact_view, name='contact'),
]
urlpatterns += router.urls