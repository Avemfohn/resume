from django.shortcuts import render
from .models import (Contact, TopDescription,Project,Education,Experience)
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .serializers import (ProjectSerializer, TopDescpSerializer,EducationSerializer,ExperinceSerializer,ContactSerializer)
from rest_framework import permissions,status
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet,ModelViewSet
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def top_intros(request):
    tops= TopDescription.objects.all()
    serializer = TopDescpSerializer(tops, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def top_intro(request,pk):
    tops= TopDescription.objects.get(id=pk)
    serializer = TopDescpSerializer(tops, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def project_fields(request):
    projects= Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def project_field(request,pk):
    projects= Project.objects.get(id=pk)
    serializer = ProjectSerializer(projects, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def educations(request):
    educations= Education.objects.all()
    serializer = EducationSerializer(educations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def experinces(request):
    projects= Experience.objects.all()
    serializer = ExperinceSerializer(projects, many=True)
    return Response(serializer.data)

class ContactViewSet(mixins.CreateModelMixin,GenericViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
    permission_classes = (permissions.AllowAny,)