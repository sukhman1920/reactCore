import { useState, useEffect } from "react";
import Header from "./components/header";
import CarList from "./components/carlist";
import Cart from "./components/cart";
import "./App.css";

function App() {
    const coches = [
        {
            id: 1,
            nombre: "Ferrari LaFerrari",
            precio: 500000,
            imagen: "/imagenes/ferrari_laferrari.webp"
        },
        {
            id: 2,
            nombre: "Lamborghini Temerario",
            precio: 320000,
            imagen: "/imagenes/lamborghini.jpg"
        },
        {
            id: 3,
            nombre: "Porsche 911 GT Turbo S",
            precio: 195000,
            imagen: "/imagenes/porsche.jpg"
        }
    ];

    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem("carrito");
        return guardado ? JSON.parse(guardado) : [];
    });

    const [busqueda, setBusqueda] = useState("");
    const [modoOscuro, setModoOscuro] = useState(false);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    function comprar(coche) {
        const compra = {
            ...coche,
            id: Date.now()
        };

        setCarrito([...carrito, compra]);
    }

    function eliminar(id) {
        setCarrito(carrito.filter((compra) => compra.id !== id));
    }

    const cantidad = carrito.length;

    const total = carrito.reduce(
        (suma, compra) => suma + compra.precio,
        0
    );

    return (
        <div className={modoOscuro ? "app oscuro" : "app"}>
            <Header
                modoOscuro={modoOscuro}
                cambiarModo={() => setModoOscuro(!modoOscuro)}
            />

            <CarList
                coches={coches}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                onComprar={comprar}
            />

            <Cart
                carrito={carrito}
                cantidad={cantidad}
                total={total}
                onEliminar={eliminar}
            />

            <footer>
                © 2026 LA SUK SHOP · Exclusividad sobre ruedas.
            </footer>
        </div>
    );
}

export default App;