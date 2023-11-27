# Notes Project

Este proyecto consta de dos partes: el backend construido con Django 4.2.7 y el frontend construido con Angular 17.0.3

## Requisitos

- **Node Version Manager (nvm):** 0.39.2
- **Node.js:** 20.10.0
- **npm:** (La versión de npm generalmente se instala junto con Node.js)
- **pip:** 23.3.1
- **Python:** 3.11


## Backend (Django)

### Configuración del Entorno Virtual

1. Accede a la carpeta `backend`:

    ```bash
    cd backend
    ```

2. Crea un entorno virtual:

    ```bash
    python3 -m venv env
    ```

3. Activa el entorno virtual:

    - En Linux/macOS:

        ```bash
        source env/bin/activate
        ```

    - En Windows:

        ```bash
        .\env\Scripts\activate
        ```

### Instalación de Dependencias

1. Instala las dependencias de Django:

    ```bash
    pip install -r requirements.txt
    ```

### Configuración de la Base de Datos (PostgreSQL)

1. Asegúrate de tener PostgreSQL instalado y configurado en tu sistema.

2. Crea una base de datos llamada "notes" en PostgreSQL.

3. Actualiza la configuración de la base de datos en `backend/settings.py`. Asegúrate de configurar las credenciales correctas para tu base de datos PostgreSQL:

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'notes',
            'USER': 'tu_usuario',
            'PASSWORD': 'tu_contraseña',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

### Aplicación de Migraciones y Creación de Superusuario

1. Aplica las migraciones:

    ```bash
    python manage.py migrate
    ```

2. Crea un superusuario para acceder al panel de administración:

    ```bash
    python manage.py createsuperuser
    ```

### Ejecutar el Servidor

1. Inicia el servidor Django:

    ```bash
    python manage.py runserver
    ```

El backend estará disponible en [http://localhost:8000/](http://localhost:8000/). El panel de administración estará disponible en [http://localhost:8000/admin/](http://localhost:8000/admin/).

## Frontend (Angular)

### Instalación de Dependencias

1. Accede a la carpeta `frontend`:

    ```bash
    cd frontend
    ```
   
2. Instalar Angular 17:

   ```bash
    npm install -g @angular/cli
    ```

3. Instala las dependencias de Angular:

    ```bash
    yarn install
    ```

### Ejecutar el Servidor de Desarrollo

1. Inicia el servidor de desarrollo de Angular:

    ```bash
    ng serve
    ```

El frontend estará disponible en [http://localhost:4200/](http://localhost:4200/)

¡Listo! Ahora puedes acceder al backend y frontend por separado. Asegúrate de tener ambos servidores ejecutándose mientras trabajas en tu proyecto.
