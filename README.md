# 🍕 Pizzería Mamma Mia - Hito 5

Proyecto desarrollado como parte del curso de **Desafío Latam**.  
Este hito implementa **React Router** para manejar el enrutamiento en la aplicación de la pizzería.

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)

## 📂 Estructura del proyecto

- `src/pages/`: Contiene las páginas principales (Home, Register, Login, Cart, Pizza, Profile, NotFound).
- `src/componentes/`: Contiene componentes reutilizables (Navbar, Footer, etc).
- `src/App.jsx`: Configuración de las rutas con React Router.

## ⚙️ Requisitos previos

- Node.js v16 o superior
- npm o yarn

## 🛠️ Instalación y ejecución

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/tuusuario/pizzeria-mamma-mia.git
   cd pizzeria-mamma-mia
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir la URL que aparece en consola (por defecto [http://localhost:5173](http://localhost:5173)).

## 🔗 API

Este proyecto consume una **API proporcionada por Desafío Latam** para obtener la información de las pizzas.  
⚠️ **La API no está incluida en este repositorio**.

⚠️ **Antes**, la API debía ejecutarse de manera local.  
**Ahora**, la API está disponible en línea en Render:

```
https://api-pizzas-eou9.onrender.com
```

✅ No es necesario ejecutar la API localmente para que la aplicación funcione correctamente.

⚠️ **Nota importante sobre Render:** Los servidores gratuitos en Render entran en **modo de suspensión** si no reciben solicitudes durante unos minutos.  
Esto significa que la **primera solicitud después de un periodo de inactividad puede tardar entre 30 y 60 segundos** en responder mientras el servidor se vuelve a levantar.

> Si deseas usar tu propia instancia local de la API, sigue las instrucciones originales de la academia.

## 👤 Autor

- Leslie Figueroa
