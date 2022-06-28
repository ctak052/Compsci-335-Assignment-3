import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageTitle from "../../atoms/PageTitle/PageTitle";
import { CenteredContent } from "./styles";
const PageTemplate = (props) => {
    return (
        <div>
          <header>
            <Header/>
          </header>
          <CenteredContent>
            <PageTitle title={props.title} />
            {props.children}
          </CenteredContent>
          <Footer version={props.version} />
        </div>
      );
}

export default PageTemplate;