from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from .models import Movie, Genre

# Create your views here.

# We create fns that takes the request from the user
# and emits a response

def index(request):
  return render(request, 'views/index.html')
  # return HttpResponse("Hello world")


"""
  read_all: Movie.objects.all()
  get by id: Movie.objects.get(id=1)
  filter: Movie.objects.filter(in_stock=0)

"""
def catalog(request):
  movies = Movie.objects.all() # read the movies tables
  # titles = ', '.join([m.title for m in movies])
  # return HttpResponse(titles)
  return render(request, 'views/catalogtest.html', { 'title': 'FROM BACKED', 'movies': movies} )

def test(request):
  return HttpResponse("This is a test page!")

def developer(request):
  return HttpResponse("Robert Ziegler")

def details(request, movie_id):
  try:
    movie = Movie.objects.get(id=movie_id) # read that movie
    return render(request, 'views/details.html', { "id": movie_id, "movie": movie })
  except Movie.DoesNotExist:
    raise Http404() # raise a 404 error