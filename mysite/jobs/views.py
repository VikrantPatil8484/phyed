from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def jobs(request):
    return render(request, 'jobs/jobs.html')
def job(request):
    return render(request, 'jobs/jobs.html')

from .models import Job

def job_list(request):
    jobs = Job.objects.all()
    return render(request, 'job_list.html', {'jobs': jobs})
