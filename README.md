# Equipo 01

## BackEnd

URL DE LA API: http://54.234.185.146:8080

- Endpoints:
    - Peliculas (**BASE /api/v1/movies**):
        - GET Listado de películas **/api/v1/movies**
        - GET Película por id **/api/v1/movies/:id**
        - GET Todas las películas por nombre **/api/v1/movies/filter?title=:titulo**
            
        - POST Crear película: 
            - Body: _{"title", "actors", "director", "composer", "review", "image_url", "trailer_url", "release_date", "rt_score", "imdb_score", "mc_score", ["generos"], ["plataformas"], ["puntuaciones"] }_

        - POST Guardar imagen **/api/v1/movies/image**
            A traves de form data: key=image value=archivo. enviar peticion como multipart/form-data en lugar de application/json
        - PUT Actualizar película: 
            - Body: _{"title", "actors", "director", "composer", "review", "image_url", "trailer_url", "release_date", "rt_score", "imdb_score", "mc_score", ["generos"], ["plataformas"], ["puntuaciones"] }_
            - **_(ACLARACIÓN: Cuando se manda petición PUT, se manda el OBJETO COMPLETO)_**

        - DELETE Eliminar película por id **/api/v1/movies/:id**
   
