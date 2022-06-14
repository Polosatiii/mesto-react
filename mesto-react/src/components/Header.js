import logo from '../images/logo.svg'

function Header() {

    return (
        <header className="header">
            <a className="header__logo-link" href="/#" target="self">
                <img className="logo" src = {logo} alt="Логотип"/></a>
        </header>
    );
}

export default Header