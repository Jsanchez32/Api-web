
# Turismo Reservacion

Bienvenidos al sistema de reservaciones de Deportes extremos donde podras ver nuestro catalogo de deportes escoger el que mas te guste y poder agendar tu reservacion de manera online especificando ciertos campos

# Objetivos del Proyecto

El objetivo principal de este proyecto es facilitar la reservacion para tu deporte extremo favorito

1. **Gestión Eficiente**: Proporcionar a los usuarios una manera rapida y eficiente de reservar alguna actividad deportiva para una fecha en especifico
2. **Interfaz Intuitiva**: Proporcionarle a los usuarios una interfaz donde les sea facil navegar y entender brindandoles la informacion necesario

# Componentes del Proyecto

## Swagger
- Para visualizar el Swagger basta con inciar el servidor en el backend y dirigirese a a la siguiente ruta [`Swagger`](http://localhost:8000/api-docs/) 

## Esquema Base de datos
- El esquema de relaciones podra acceder con el siguiente enlace [`Esquema`](https://lucid.app/lucidchart/73d3e8c6-ee38-4e37-80b2-29220bf93bee/edit?view_items=mBo5xSu69EYm&invitationId=inv_4b9cbb7a-397f-437e-9aa9-ec1ed0e7296e)

## Maquetacion
- Para observar la maquetacion dirigirse al sigiente enlace del Figma [`Maquetacion`](https://www.figma.com/file/PEefxu4phCQsC05WO83vJi/Turismo-Reservacion?type=design&node-id=7%3A14&mode=design&t=EkVGH2FHBriJtMsW-1)

# Uso y Funcionaniento

1. Dentro de carpeta backend y frontend realizar el comando ``npm i`` en la consola para instalar las dependencias necesarias
2. Dentro de backend ejecutar ``npm run dev`` para ejecutar el servidor
3. Dentro de React ejecutar ``npm run start`` para ejecutar la pagina

## Login

- Al inicar el proyecto se encontrara con un login el cual le pide email y contraseña si desea entrar como administrador entrar con el correo ``admin1@example.com`` y la password ``adminpassword``

- Si desea ingresar como usario usar el correo ``michael.jackson@gmail.com`` y la password ``michaelpass789`` o cualquier otro dentro de la coleccion **Usuarios**

## Reservacion
- Para realizar alguna reservacion basta con dirigirese al apartado de **Reservacion** y diligenciar los datos que correspondan funciona tanto con usuarios como administrador
## Perfil

- Si ingreso como usuario dentro de perfil podra encontrar las reservaciones realizadas por dicho usuario con su informacion correspondiente

- Si ingreso como administrador dentro de perfil podra encontrar todas las reservaciones guardadas en la coleccion **Reservaciones** y cada una por medio de los botones podra actualizarla o borrarla