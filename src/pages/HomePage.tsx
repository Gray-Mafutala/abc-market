import { useAppSelector } from "../redux/hooks";
import { selectSearchValue } from "../redux/slices/searchBarSlice";

import SectionCategoryProducts from "../components/Sections/SectionCategoryProducts";
import CustomerX from "../components/Sections/CustomerX";
import SlidingBannerAds from "../components/Sections/SlidingBannerAds";
import SearchResults from "../components/SearchResults";

const sliders = [
  {
    imgPath: "./src/assets/images/ads-banner/ads-1.jpg",
    alt: "a1",
    link: "",
    id: "01",
  },
  {
    imgPath: "./src/assets/images/ads-banner/ads-2.jpg",
    alt: "a2",
    link: "",
    id: "02",
  },
  {
    imgPath: "./src/assets/images/ads-banner/ads-3.jpg",
    alt: "a3",
    link: "",
    id: "03",
  },
];

const HomePage = () => {
  const valueToSearch = useAppSelector(selectSearchValue);

  return (
    <main className="common-main-container-styles">   
      {valueToSearch === "" && (
        // center inner wrapper
        <div className="centered-container flex flex-col gap-y-12 mobileL:gap-y-16 tablet:gap-20">
          <SlidingBannerAds sliders={sliders} />

          {/* Electronics products */}
          <SectionCategoryProducts
            titlePrefix="The best on"
            category="electronics"
          />

          {/* Jewelery products */}
          <SectionCategoryProducts titlePrefix="Top" category="jewelery" />

          {/* Men's clothing products */}
          <SectionCategoryProducts
            titlePrefix="Best value on"
            category="men's clothing"
          />

          {/* Women's clothing products */}
          <SectionCategoryProducts
            titlePrefix="Enjoy discounts on"
            category="women's clothing"
          />

          {/* Customer Experiences section */}
          <CustomerX />
        </div>
      )}

      {/* what will be displayed after a search */}
      {valueToSearch !== "" && <SearchResults />}
    </main>
  );
};

export default HomePage;
