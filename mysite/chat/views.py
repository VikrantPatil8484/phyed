from django.shortcuts import render, redirect
from chat.models import Room, Message
from django.http import HttpResponse, JsonResponse
from .models import Message
# Create your views here.
def home(request):
    return render(request, 'home.html')

def room(request, room):
    username = request.user
    room_details = Room.objects.get(name=room)
    return render(request, 'room.html', {
        'username': username,
        'room': room,
        'room_details': room_details
    })

def checkview(request):
    room = request.POST['room_name']
    username = request.user

    if Room.objects.filter(name=room).exists():
        username=request.user
        return redirect('/chat/'+room+'/?username='+'username')
    else:
        new_room = Room.objects.create(name=room)
        new_room.save()
        username=request.user
        return redirect('/chat/'+room+'/?username='+'username')

def send(request):
    message = request.POST['message']
    username = request.user
    room_id = request.POST['room_id']

    new_message = Message.objects.create(value=message, user=username, room=room_id)
    new_message.save()
    return HttpResponse('Message sent successfully')

def getMessages(request, room):
    room_details = Room.objects.get(name=room)

    messages = Message.objects.filter(room=room_details.id)
    return JsonResponse({"messages":list(messages.values())})
