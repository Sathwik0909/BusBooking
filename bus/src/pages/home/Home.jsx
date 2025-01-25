import Hero from "./Hero";
import Services from "./Services";
import TopSearch from "./TopSearch";

const Home = () => {
  return (
    <div className=" space-y-16 w-full min-h-screen pb-16">
      <Hero />

      <Services />

      <TopSearch/>
    </div>
  );
};

export default Home;
