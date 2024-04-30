import Banner from "../components/Banner";
import CategorySection from "./CategorySection";
import CraftItems from "./CraftItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <CategorySection></CategorySection>
        </div>
    );
};

export default Home;