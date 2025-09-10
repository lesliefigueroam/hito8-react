
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './componentes/Home';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import RegisterPage from "./componentes/RegisterPage";
import LoginPage from "./componentes/LoginPage";
function App() {


  return (
    <>
      <Navbar/>
      {/* <Home /> */}
        {/* <RegisterPage /> */}
    <LoginPage />
      <Footer/>
      
    </>
  )
}

export default App
