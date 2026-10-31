function Header({ modoOscuro, cambiarModo }) {
    return (
        <header>
            <h1>LA SUK SHOP</h1>

            <button onClick={cambiarModo}>
                {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
            </button>
        </header>
    );
}

export default Header;