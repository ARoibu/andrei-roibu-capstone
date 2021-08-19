import { Link } from 'react-router-dom'
import './Nav.scss'

export default function Nav() {
    return(
        <div className='nav'>
            <Link to={'/'}><h2 className='nav__logo'>D.U.E.L</h2></Link>
            <div className='nav__links'>
                <Link className='nav--link' to={'/'}><p className='nav__generator'>Exercise Generator</p></Link>
                <Link className='nav--link' to={'/log'}><p className='nav__log'>Workout Log</p></Link>
            </div>
        </div>
    );
};