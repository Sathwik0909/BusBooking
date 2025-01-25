import TopSearchCard from "../../components/TopSearchCard";
import RootLayout from "../../layout/RootLayout";

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-300 font-bold">
          Top Search <span className="text-primary">Routes</span>
        </h1>
      </div>

      {/* Top Search tickets */}
      <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard
          routheFrom={"Lagos"}
          routeTo={"Abuja"}
          timeDuration={"6h 30m"}
          price={"$50"}
        />
        <TopSearchCard
          routheFrom={"New York"}
          routeTo={"Boston"}
          timeDuration={"4h 15m"}
          price={"$40"}
        />
        <TopSearchCard
          routheFrom={"San Francisco"}
          routeTo={"Los Angeles"}
          timeDuration={"6h 00m"}
          price={"$60"}
        />
        <TopSearchCard
          routheFrom={"Chicago"}
          routeTo={"Detroit"}
          timeDuration={"5h 45m"}
          price={"$55"}
        />
        <TopSearchCard
          routheFrom={"Miami"}
          routeTo={"Orlando"}
          timeDuration={"3h 30m"}
          price={"$35"}
        />
        <TopSearchCard
          routheFrom={"Houston"}
          routeTo={"Dallas"}
          timeDuration={"4h 00m"}
          price={"$45"}
        />
        
      </div>
    </RootLayout>
  );
};

export default TopSearch;
