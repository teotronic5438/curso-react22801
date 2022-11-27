import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavScrollExample from '../Navbar/NavScrollExample';
import Home from "../Home/Home";
import Nosotros from "../Nosotros/Nosotros";
import Contacto from "../Contacto/Contacto";
// import Button from "react-bootstrap/esm/Button";
import Galeria from "../Galeria/Galeria";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories";
// Una vez realizada la importación se necesita realizar varias cosas:
// 1-Envolver la aplicación en un BrowserRouter
// 2-Crear un Switch, en el cual se proyectarán las vistas navegadas
// 3-Crear las rutas (Route´s) de las distintas secciones para navegar

const Router = () => {
    // const Home = () => <h1>Home</h1>;
    const Pets = () => <h1>Pet List</h1>;
    const Layout = () => <h1>Layout</h1>;
    const Productos = () => <h1>Productos</h1>
    // const Categorias = () => <h1>Categorias</h1>
    const ItemDetailContainer = () => <h1>ItemDetailContainer</h1>
    const Cart = () => <h1>Cart</h1>

    return (
        <>
            <BrowserRouter>
                <NavScrollExample />
                <Routes>
                    <Route path="*" element={ <NotFound /> } />
                    <Route path="/" element={ <Home />} />
                    <Route path="/listadoproductos" element={<Productos />} />
                    <Route path="/category/:categoria" element={<Categories />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/layout" element={<Layout />}></Route>
                    <Route path="/home" element={ <Home />} />
                    <Route path="/pets" element={<Pets />}></Route>
                    <Route path="/nosotros" element={ <Nosotros />}></Route>
                    <Route path="/contacto" element={ <Contacto />}></Route>
                    <Route path="/galeria" element={ <Galeria />} />

                </Routes>
            </BrowserRouter>
            <Footer />
            {/* <Footer>
                <CTABaner />
            </Footer> */}
        </>
    );
};

export default Router;