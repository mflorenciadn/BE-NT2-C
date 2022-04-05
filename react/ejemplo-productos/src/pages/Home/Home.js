import CupcakesList from "../../compenents/CupcakesList/CupcakesList";
import Banner from "../../compenents/Banner/Banner";
import cupcakes from "../../data/cupcakes";
import "./Home.css";

const Home = () => (
  <>
    <Banner />
    <CupcakesList products={cupcakes} />
  </>
);

export default Home;
