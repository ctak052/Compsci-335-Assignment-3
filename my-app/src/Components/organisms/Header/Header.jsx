import { NavUL, CustomNav } from './styles'
import { useNavigate } from 'react-router-dom';
import Button from "../../atoms/Button/Button"

const Header = (props) =>{
    const logoUrl = 'http://localhost:5000/api/GetLogo';
    const navigate = useNavigate();
    return (
        <CustomNav>
            <img src={logoUrl} style={{height: '100px'}} alt="Southern Hemisphere Institute Of Technology Logo"/>
            <NavUL>
                <Button size="lg" onClickHandler={() => navigate(`/`)} text="Home" />
                <Button size="lg" onClickHandler={() => navigate(`/staff`)} text="Staff" />
                <Button size="lg" onClickHandler={() => navigate(`/shop`)} text="Shop" />
                <Button size="lg" onClickHandler={() => navigate(`/guestbook`)} text="Guest Book" />
            </NavUL>
        </CustomNav>
    );
}

export default Header