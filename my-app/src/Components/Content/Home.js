import PageTemplate from "../PageTemplate";
import "../../App.css";


const Home = () => {
  return (
    <PageTemplate>
      <div id="home_page" style={{display: "visible", width: "100%"}}>
        <p>
          Welcome to Southern Hemisphere Institute Of Technology, more commonly
          known as "SHIT"! We are a high end education facility that come from the
          rarest end of the world! New Zealand! We are dedicated to providing the
          best experience to our community.
        </p>
        <div style={{width: "100%", textAlign: "center"}} >
          <img
            src="http://localhost:5000/api/GetLogo"
            style={{width: '50%'}}
            alt="Southern Hemisphere Institute Of Technology Logo"
          />
          <h4 style={{marginTop: "0"}}>
            Commited to providing the classic SHIT experience!
          </h4>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Home;
