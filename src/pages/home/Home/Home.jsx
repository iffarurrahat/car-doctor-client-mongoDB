import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurProducts from "../OurProducts/OurProducts";
import OurService from "../OurService/OurService";
import Schedule from "../Schedule/Schedule";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <OurService />
            <Schedule />
            <OurProducts />
        </div>
    );
};

export default Home;