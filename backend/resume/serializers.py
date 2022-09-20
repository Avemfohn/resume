from rest_framework.serializers import ModelSerializer
from .models import Education, TopDescription,Project,Experience, Contact

class TopDescpSerializer(ModelSerializer):
    class Meta:
        model = TopDescription
        fields = '__all__' 

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'        

class EducationSerializer(ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperinceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ('email', 'subject', 'message')