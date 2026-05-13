# Splash Screen y Pantallas de Carga

Demo breve para exposición de Programación móvil.

## Como usarla desde cualquier PC

Clona el repositorio:

```bash
git clone https://github.com/Valerieperezc/Splash-Screen.git
cd Splash-Screen
```

Despues abre `index.html` en el navegador.

No necesita instalar dependencias ni ejecutar servidores, porque la demo esta hecha con HTML, CSS y JavaScript puro.

Tambien puedes abrirlo desde la terminal:

```bash
open index.html
```

En Windows, puedes hacer doble clic sobre `index.html`.

## Que muestra

La demo muestra tres momentos:

1. Splash Screen: aparece apenas inicia la app y presenta la identidad visual.
2. Loading Screen: informa que la app esta preparando datos.
3. Pantalla principal: se muestra cuando la carga termina.

Tambien incluye un boton para simular error, porque una buena pantalla de carga debe comunicar cuando algo falla.

## Descripción

Al abrir una app, el usuario no deberia ver una pantalla en blanco. Primero usamos un Splash Screen, que muestra marca, color y logo mientras inicia la aplicacion. Despues, si la app todavia necesita validar sesion o cargar datos, usamos una Loading Screen con mensaje y progreso. Cuando todo esta listo, pasamos a la pantalla principal. Si ocurre un error, la app debe explicarlo y permitir reintentar.
