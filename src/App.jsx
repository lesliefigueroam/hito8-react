import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import RegisterPage from "./componentes/RegisterPage";
import LoginPage from "./componentes/LoginPage";
import Cart from "./componentes/Cart";
function App() {
  return (
    <>
      <Navbar />
      {/* <Home />
      <RegisterPage /> 
      <LoginPage />*/}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
