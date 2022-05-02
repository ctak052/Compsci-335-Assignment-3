import './NavMenu.css'
import { useNavigate } from 'react-router-dom';

const NavMenu = (props) =>{
    const logoUrl = 'http://localhost:5000/api/GetLogo';
    const navigate = useNavigate();
    return (
        <nav>
            <img src={logoUrl} style={{height: '100px'}} alt="Southern Hemisphere Institute Of Technology Logo"/>
            <ul>
                <li className="btn_default lg" onClick={() => navigate(`/`)}>Home</li>
                <li className="btn_default lg" onClick={() => navigate(`/staff`)}>Staff</li>
                <li className="btn_default lg" onClick={() => navigate(`/shop`)}>Shop</li>
                <li className="btn_default lg" onClick={() => navigate(`/guestbook`)}>Guest Book</li>
            </ul>
        </nav>
    );
}

export default NavMenu