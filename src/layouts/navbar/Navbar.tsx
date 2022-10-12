import { SearchButton } from "../../components/ui/SearchButton";
import { SignButton } from "../../components/ui/SignButton";
import Logo from '../../assets/img/logo.svg';
import './../../styles/navbar.scss'

export function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar--logo">
                <img src={Logo} width={142} height={32}></img>
            </div>
            <div className="Navbar--links">
                <h3 className="customLink">Buy a house</h3>
                <h3 className="customLink">Rent a house</h3>
                <h3 className="customLink">Mortgage</h3>
            </div>
            <SignButton text={'Sign up'}/>
        </div>
    )
}