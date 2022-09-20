from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Contact


@receiver(post_save, sender=Contact)
def send_mail(request, sender, **kwargs):
        contact = Contact()
        subject = request.POST.get('subject')
        message =  request.POST.get('message')
        from_email = request.POST.get('email')

        contact.email = from_email
        contact.subject = subject
        contact.message = message
        contact.save()

        if subject and message and from_email:
            try:
                send_mail(subject, message, from_email, ['mertcan.erc@hotmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return HttpResponseRedirect('/contact/thanks/')
        else:
            return HttpResponse('Make sure all fields are entered and valid.')