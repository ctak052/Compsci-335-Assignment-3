import NavMenu from "./Header/NavMenu";
import Footer from "./Footer/Footer";
const PageTemplate = (props) => {
    return (
        <div>
          <header>
            <NavMenu/>
          </header>
            {props.children}
          <Footer />
        </div>
      );
}

export default PageTemplate;