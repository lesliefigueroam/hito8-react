# 🍕 Pizzería Mamma Mía - Hito 8 (React + Context + Auth + Checkout)

## 📘 Descripción del proyecto

Aplicación web desarrollada como parte del curso de **Desafío Latam**.  
Permite listar pizzas, ver sus detalles, autenticar usuarios, gestionar un carrito de compras y realizar un **checkout** contra una API con **JWT**.

Se implementó con **React + Vite**, **React Router DOM** y **Context API** para manejar estado global (usuario, carrito y pizzas).

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/createContext)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Bootstrap 5](https://getbootstrap.com/)

## 📂 Estructura del proyecto

```
src/
  componentes/
    Navbar.jsx
    Footer.jsx
    CardPizza.jsx
    ...
  context/
    UserContext.jsx      # login, register, logout, getProfile; token/email persistidos
    CartContext.jsx      # addToCart, updateQuantity, removeItem, clearCart; total y count
    PizzaContext.jsx     # catálogo y detalle desde la API
  pages/
    Home.jsx             # listado de pizzas
    Pizza.jsx            # detalle de pizza (/pizza/:id)
    Cart.jsx             # carrito + pago (checkout)
    Profile.jsx          # perfil (usa getProfile)
    LoginPage.jsx
    RegisterPage.jsx
    OrderSuccess.jsx     # resumen post-compra
    NotFound.jsx
  routes/
    ProtectedRoute.jsx   # requiere sesión
    PublicOnlyRoute.jsx  # accesible solo sin sesión
  config.js              # API_BASE centralizada
  App.jsx                # configuración de rutas
```

---

## 🚀 Funcionalidades principales

### 🏠 Inicio `/`

- Muestra pizzas desde la API (Render)
- Botones para ver detalle y agregar al carrito

### 🍕 Detalle `/pizza/:id`

- Solicita datos reales a la API
- Muestra descripción, ingredientes y precio
- Permite agregar al carrito

### 👤 Autenticación real

| Función                     | Detalle                                          |
| --------------------------- | ------------------------------------------------ |
| `register(email, password)` | POST → `/auth/register`                          |
| `login(email, password)`    | POST → `/auth/login`, guarda **token + email**   |
| Persistencia                | `localStorage` (mantiene sesión al refrescar ✅) |
| `getProfile()`              | GET → `/auth/me` con **Bearer JWT**              |
| `logout()`                  | limpia estado y localStorage                     |

### 🧾 Perfil `/profile`

- Protegido
- Muestra email del usuario traído desde la API
- Botón **Cerrar sesión**

### 🛒 Carrito `/cart`

- Sumar / restar cantidad
- Total dinámico
- **Checkout real:**
  - POST → `/checkouts` con **Bearer Token**
  - Mensaje de éxito
  - Limpia carrito
  - Redirige a `/order-success` con resumen

### 🎉 Order Success `/order-success`

- Muestra resumen de compra
- Si se entra directo, redirige a `/`

### 🔐 Rutas protegidas

- `/profile`, `/order-success` solo con sesión
- `/login`, `/register` solo sin sesión

---

## ⚙️ Requisitos previos

- Node.js v16 o superior
- npm o yarn

## 🛠️ Instalación y ejecución

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/lesliefigueroam/hito8-react.git
   cd hito6-react
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

## 🔗 API utilizada

Este proyecto consume una **API proporcionada por Desafío Latam** para obtener la información de las pizzas.  
⚠️ **La API no está incluida en este repositorio**.

⚠️ **Antes**, la API debía ejecutarse de manera local.  
**Ahora**, la API está disponible de manera púbica en Render:

```
https://api-pizzas-eou9.onrender.com
```

Cada pizza tiene el siguiente formato:

```json
{
  "id": "p001",
  "name": "Napolitana",
  "price": 5990,
  "ingredients": ["mozzarella", "tomate", "orégano"],
  "desc": "Una pizza tradicional con ingredientes frescos y auténticos.",
  "img": "https://..."
}
```

### 🔗 Configuración de API

```js
// src/config.js
//export const API_BASE = "http://localhost:5000/api";
export const API_BASE = "https://api-pizzas-eou9.onrender.com/api";
```

✅ No es necesario ejecutar la API localmente para que la aplicación funcione correctamente.

⚠️ **Nota importante sobre Render:** Los servidores gratuitos en Render entran en **modo de suspensión** si no reciben solicitudes durante unos minutos.
Esto significa que la **primera solicitud después de un periodo de inactividad puede tardar entre 30 y 60 segundos** en responder mientras el servidor se vuelve a levantar.

> Si deseas usar tu propia instancia local de la API, sigue las instrucciones originales de la academia.

---

## 🌐 Proyecto en línea

Si deseas ver el proyecto en funcionamiento, puedes acceder aquí:
[https://hito8-react.vercel.app/](https://hito8-react.vercel.app/)

---

## ✅ Checklist del Hito 8

- [x] Registro e inicio de sesión reales
- [x] JWT guardado en **localStorage**
- [x] Logout borra credenciales
- [x] `getProfile()` con Bearer JWT
- [x] Rutas protegidas / públicas
- [x] Carrito global con Context
- [x] Checkout real con JWT
- [x] Mensaje de éxito + redirección + limpieza del carrito
- [x] Navbar dinámico según sesión
- [x] Consumo de API remota desde Render

---

## 👤 Autoría

- Leslie Figueroa
- 💻 Proyecto académico — Hito 8: Pizzería Mamma Mía (React + Context + Auth + Checkout)

```

```
