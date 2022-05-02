import './Content.css'
import Home from './Home'
import Staff from './Staff'
import Shop from './Shop'
import GuestBook from './GuestBook'
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