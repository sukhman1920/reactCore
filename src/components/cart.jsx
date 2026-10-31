function Cart({ carrito, cantidad, total, onEliminar }) {
    return (
        <section className="carrito">
            <h2>Carrito</h2>

            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                carrito.map((compra) => (
                    <p key={compra.id}>
                        {compra.nombre} - {compra.precio.toLocaleString("es-ES")} $
                        <button onClick={() => onEliminar(compra.id)}>
                            Eliminar
                        </button>
                    </p>
                ))
            )}

            <p>Cantidad: {cantidad}</p>
            <p>Total: {total.toLocaleString("es-ES")} $</p>
        </section>
    );
}

export default Cart;