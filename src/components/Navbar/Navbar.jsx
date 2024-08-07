import "./Navbar.css"

export default function Navbar() {
    return (
        <header>
            <div>
                <h1>Horizont</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            <i></i>
                            <label htmlFor="">Home</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i></i>
                            <label htmlFor="">Services</label>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i></i>
                            <label htmlFor="">About Us</label>
                        </a>
                    </li>
                    <li>
                        <i></i>
                        <input type="search" name="" id="" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
