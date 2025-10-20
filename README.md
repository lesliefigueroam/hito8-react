# 🍕 Pizzería Mamma Mía - Hito 7

## 📘 Descripción del proyecto

Proyecto desarrollado como parte del curso de **Desafío Latam**.  
Esta aplicación web simula el sitio de una pizzería, permitiendo visualizar pizzas disponibles, ver sus detalles individuales, iniciar o cerrar sesión de manera simulada y realizar un pedido mediante un carrito de compras.

El desarrollo se realizó utilizando **React**, **React Router DOM** y **Context API** para manejar el estado global de la aplicación, evitando el uso de props innecesarias y mejorando la escalabilidad del proyecto.

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/createContext)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Bootstrap 5](https://getbootstrap.com/)

## 📂 Estructura del proyecto

- `src/pages/`: Contiene las páginas principales (Home, Register, Login, Cart, Pizza, Profile, NotFound).
- `src/context/`: Contiene los contextos globales (UserContext, CartContext, PizzaContext).
- `src/componentes/`: Contiene componentes reutilizables (Navbar, Footer, CardPizza, etc).
- `src/routes/`: Contiene componentes wrapper para las rutas protegidas y públicas (ProtectedRoute, PublicOnlyRoute).
- `src/App.jsx`: Configuración de rutas con React Router DOM y wrappers de protección.

---

## 🚀 Funcionalidades principales

### 🏠 Página principal (`/`)

- Muestra todas las pizzas disponibles, obtenidas desde la **API de Render**.
- Cada pizza se renderiza mediante el componente `CardPizza`.
- Incluye botones:
  - **Ver más** → lleva al detalle de la pizza seleccionada (`/pizza/:id`).
  - **Añadir** → agrega la pizza al carrito global.

### 🍕 Detalle de pizza (`/pizza/:id`)

- Muestra la información completa de una pizza: nombre, descripción, ingredientes y precio.
- Incluye un botón para añadir la pizza al carrito directamente desde la vista de detalle.
- **Ahora realiza una petición real** a la API:  
  `https://api-pizzas-eou9.onrender.com/api/pizzas/:id`
- Maneja estados de carga, error y validación de datos.

### 🛒 Carrito de compras (`/cart`)

- Muestra las pizzas agregadas al carrito global.
- Permite aumentar o disminuir las cantidades con botones `+` y `–`.
- Calcula el total del pedido automáticamente y en tiempo real.
- **Botón Pagar:**
  - Habilitado si el usuario tiene sesión iniciada (`token=true`).
  - **Deshabilitado tras cerrar sesión (Logout)**, cumpliendo el requerimiento del hito.
- Si el carrito está vacío, muestra un mensaje indicativo.

### 👤 Sistema de usuario (simulado)

- Implementado con `UserContext`.
- Contiene `token` (true/false), `login()` y `logout()`.
- Al iniciar la app, el `token` es **true** por defecto.
- El botón **Logout** cambia `token=false` y muestra las opciones **Login/Register**.
- Al reiniciar el servidor, `token` vuelve a **true** (comportamiento esperado por el hito).

### 🔝 Navbar

- Visible en todas las páginas.
- Muestra el total del carrito actualizado dinámicamente.
- Contiene enlaces a **Home** y **Total** (siempre visibles).
- Muestra opciones según sesión:
  - **Profile / Logout** si `token=true`.
  - **Login / Register** si `token=false`.

---

## 🧠 Contextos implementados

### 🟢 CartContext

Administra el estado global del carrito de compras. Incluye funciones para:

- `addToCart(pizza)` → agrega una pizza al carrito.
- `updateQuantity(id, amount)` → modifica la cantidad de una pizza.
- `total` → calcula el monto total.

### 🟣 PizzaContext

Administra la lista global de pizzas obtenidas desde la API de Render:

- URL base: [https://api-pizzas-eou9.onrender.com/api/pizzas](https://api-pizzas-eou9.onrender.com/api/pizzas)
- Manejadores de **loading** y **error**.

### 🔵 UserContext

Controla la sesión de usuario simulada:

- `token` → comienza en **true**.
- `login()` → cambia a `true`.
- `logout()` → cambia a `false`.

Utilizado en `Navbar`, `Cart`, y en las rutas protegidas.

---

## 🔐 Rutas protegidas

- `/profile` → solo accesible con `token=true` (caso contrario redirige a `/login`).
- `/login` y `/register` → accesibles solo si `token=false` (caso contrario redirigen al Home).

Rutas implementadas mediante los componentes:

- `ProtectedRoute`
- `PublicOnlyRoute`

---

## ⚙️ Requisitos previos

- Node.js v16 o superior
- npm o yarn

## 🛠️ Instalación y ejecución

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/lesliefigueroam/hito7-react.git
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

✅ No es necesario ejecutar la API localmente para que la aplicación funcione correctamente.

⚠️ **Nota importante sobre Render:** Los servidores gratuitos en Render entran en **modo de suspensión** si no reciben solicitudes durante unos minutos.
Esto significa que la **primera solicitud después de un periodo de inactividad puede tardar entre 30 y 60 segundos** en responder mientras el servidor se vuelve a levantar.

> Si deseas usar tu propia instancia local de la API, sigue las instrucciones originales de la academia.

---

## 🌐 Proyecto en línea

Si deseas ver el proyecto en funcionamiento, puedes acceder aquí:
[https://hito7-react.vercel.app/](https://hito7-react.vercel.app/)

---

## 🧾 Observaciones del hito

- ✅ Uso de useParams con petición real a /api/pizzas/:id.
- ✅ Implementación de UserContext con token, login() y logout().
- ✅ Deshabilitación del botón Pagar al cerrar sesión (token=false).
- ✅ Navbar dinámico según estado del usuario.
- ✅ Rutas protegidas y públicas con ProtectedRoute y PublicOnlyRoute.
- ✅ Manejo de errores y estados de carga en las peticiones.
- ✅ Cumplimiento completo de los criterios de la rúbrica (Completamente logrado).

## 👤 Autoría

- Leslie Figueroa
- 💻 Proyecto académico — Hito 7: Pizzería Mamma Mía (React + Context API + Router)

```

```
