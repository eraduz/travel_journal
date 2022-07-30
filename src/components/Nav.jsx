import Logo from '../assets/logo.png'

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <img src={Logo} />
            <h1>my travel journal.</h1>
        </nav>
    )
}