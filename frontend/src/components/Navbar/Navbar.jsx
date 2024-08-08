import "./Navbar.css"

export default function Navbar() {
    return (
        <header className="header">
            <nav className="logo">
                <a href="#">Horizont</a>
            </nav>
            <nav className="atalho">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <input type="search" />
            </nav>
        </header>
    )
}
