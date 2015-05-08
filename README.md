Add an integer field to models.py
rating = IntegerField(max_length=20, default=0)

Add a method in views.py
def rate_mesh(request, mesh_pk):
    mesh = get_object_or_404(Mesh.objects.all(), id=mesh_pk)
    if not 'rating' in request.DATA:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    mesh.rating = request.DATA['rating']
    mesh.save()
    return Response(status=status.HTTP_200_OK)

Add an url in urls.py

url(r'^yourapp/rate/(?P<mesh_pk>\d+)/',
    yourapp.views.rate_mesh,
    name='rate_mesh'),
