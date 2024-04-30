import Banner from "../components/Banner";
import CategorySection from "./CategorySection";
import CraftItems from "./CraftItems";
import Feature from "./Feature";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <CategorySection></CategorySection>
            <Feature></Feature>
            <Team></Team>
        </div>
    );
};

export default Home;