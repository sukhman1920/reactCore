function CarCard({ coche, onComprar }) {
    return (
        <div className="producto">
            <h2>{coche.nombre}</h2>
            <img src={coche.imagen} alt={coche.nombre} />
            <p>{coche.precio.toLocaleString("es-ES")} $</p>
            <button type="button" onClick={() => onComprar(coche)}>
                Comprar
            </button>
        </div>
    );
}

export default CarCard;