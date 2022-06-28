import './Content.css'
import Home from '../../Pages/Home/Home'
import Staff from '../../Pages/Staff/Staff'
import Shop from '../../Pages/Shop/Shop'
import GuestBook from '../../Pages/GuestBook/GuestBook'
import PageTitle from './PageTitle'

const Content = (props) => {
    let pageTitle = props.page;
    if (pageTitle === "Home"){
        pageTitle = "Southern Hemisphere Institute of Technology";
    }
    return <div className='contents'>
        <PageTitle title={pageTitle} />
        {props.page === "Home" && <Home />}
        {props.page === "Staff" && <Staff />}
        {props.page === "Shop" && <Shop />}
        {props.page === "Guest Book" && <GuestBook />}
    </div>
}

export default Content;