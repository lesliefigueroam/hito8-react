# 🍕 Pizzería Mamma Mia - Hito 6

## 📘 Descripción del proyecto

Proyecto desarrollado como parte del curso de **Desafío Latam**.  
Esta aplicación web simula el sitio de una pizzería, permitiendo visualizar pizzas disponibles, ver sus detalles individuales y realizar un pedido mediante un carrito de compras.

El desarrollo se realizó utilizando **React** y **Context API** para manejar el estado global de la aplicación, evitando el uso de props innecesarias y mejorando la escalabilidad del proyecto.

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/createContext)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Bootstrap 5](https://getbootstrap.com/)

## 📂 Estructura del proyecto

- `src/pages/`: Contiene las páginas principales (Home, Register, Login, Cart, Pizza, Profile, NotFound).
- `src/context/`: Contiene las páginas principales (Home, Register, Login, Cart, Pizza, Profile, NotFound).
- `src/componentes/`: Contiene componentes reutilizables (Navbar, Footer, etc).
- `src/App.jsx`: Configuración de las rutas con React Router.

## 🚀 Funcionalidades principales

### 🏠 Página principal (`/`)

- Muestra todas las pizzas disponibles, obtenidas desde una API externa.
- Cada pizza se renderiza mediante el componente `CardPizza`.
- Incluye botones para:
  - **Ver más**: lleva al detalle de la pizza seleccionada.
  - **Añadir**: agrega la pizza al carrito global.

### 🍕 Detalle de pizza (`/pizza/:id`)

- Muestra la información completa de una pizza: nombre, descripción, ingredientes y precio.
- Incluye un botón para añadir la pizza al carrito directamente desde la vista de detalle.
- Los datos se obtienen del `PizzaContext`, evitando nuevas llamadas a la API.

### 🛒 Carrito de compras (`/cart`)

- Muestra las pizzas agregadas al carrito global.
- Permite aumentar o disminuir las cantidades con botones `+` y `–`.
- Calcula el total del pedido automáticamente y en tiempo real.
- Si el carrito está vacío, muestra un mensaje indicativo.

### 🔝 Navbar

- Visible en todas las páginas.
- Muestra el total del carrito (actualizado dinámicamente).
- Contiene los enlaces principales de navegación.

---

## 🧠 Contextos implementados

### 🟢 CartContext

Administra el estado global del carrito de compras. Incluye funciones para:

- `addToCart(pizza)` → agrega una pizza al carrito.
- `updateQuantity(id, amount)` → modifica la cantidad de una pizza.
- `total` → calcula el monto total en base a los productos agregados.

### 🟣 PizzaContext

Administra el estado global de las pizzas obtenidas desde la API. Incluye:

- Fetch automático a la API: [https://api-pizzas-eou9.onrender.com/api/pizzas](https://api-pizzas-eou9.onrender.com/api/pizzas)
- Manejadores de **loading** y **error**.
- Posibilidad de reutilizar los datos en distintos componentes sin repetir fetchs.

---

## ⚙️ Requisitos previos

- Node.js v16 o superior
- npm o yarn

## 🛠️ Instalación y ejecución

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/lesliefigueroam/hito6-react.git
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
[https://hito6-react.vercel.app/](https://hito6-react.vercel.app/)

---

## 🧾 Observaciones del hito

- ✅ Implementación completa del manejo de estado global con Context API.
- ✅ Cálculo dinámico del total del carrito.
- ✅ Navegación entre vistas usando React Router DOM.
- ✅ Integración opcional del PizzaContext (punto 6).
- ✅ Vista individual para cada pizza.
- ✅ Diseño responsivo con Bootstrap 5.

## 👤 Autoría

- Leslie Figueroa
- 💻 Proyecto académico — Hito 6: Pizzería Mamma Mía (React + Context API)

```

```
