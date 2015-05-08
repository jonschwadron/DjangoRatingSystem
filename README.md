# 5-Star Rating System

This 5-star rating system is designed to work with Django 1.8 and comes with CSRF protection.

## Version
1.0

## Installation

### models.py
```sh
rating = IntegerField(max_length=20, default=0)
```

### views.py
```sh
def rate_object(request, object_pk):
    object = get_object_or_404(Mesh.objects.all(), id=mesh_pk)
    if not 'rating' in request.DATA:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    object.rating = request.DATA['rating']
    object.save()
    return Response(status=status.HTTP_200_OK)
```

### urls.py
```sh
url(r'^yourapp/rate/(?P<object_pk>\d+)/',
    yourapp.views.rate_object,
    name='rate_object'),
```
