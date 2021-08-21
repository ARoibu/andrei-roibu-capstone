import { Link } from 'react-router-dom'
import './Nav.scss'
import Logo from '../../assets/icons/Logo.png'
export default function Nav() {
    return(
        <div className='nav'>
            
            <div className='nav__links'>
                <Link className='nav--link' to={'/'}><p className='nav__generator'>Exercise Generator</p></Link>
                <Link to={'/'}><img className='nav__logo' src={Logo}/></Link>
                <Link className='nav--link' to={'/log'}><p className='nav__log'>Workout Log</p></Link>
            </div>
        </div>
    );
};