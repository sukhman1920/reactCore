import CarCard from "./carcard";

function CarList({ coches, busqueda, setBusqueda, onComprar }) {
    const cochesFiltrados = coches.filter((coche) =>
        coche.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <section>
            <div className="busqueda">
                <input
                    type="text"
                    placeholder="Buscar Coche"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            <div className="catalogo">
                {cochesFiltrados.map((coche) => (
                    <CarCard
                        key={coche.id}
                        coche={coche}
                        onComprar={onComprar}
                    />
                ))}
            </div>
        </section>
    );
}

export default CarList;