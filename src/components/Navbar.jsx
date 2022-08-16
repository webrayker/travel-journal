import logo from '/logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo"/>
            <h4>my travel journal.</h4>
        </nav>
    )
}