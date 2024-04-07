import { useAppSelector } from "../redux/hooks";
import { selectSearchValue } from "../redux/slices/searchBarSlice";

import SectionCategoryProducts from "../components/Sections/SectionCategoryProducts";
import CustomerX from "../components/Sections/CustomerX";
import SlidingBannerAds from "../components/Sections/SlidingBannerAds";
import SearchResults from "../components/SearchResults";

const sliders = [
  {
    imgPath: "./src/assets/images/banner/jewelry.jpg",
    alt: "jewelry",
    link: "/products/category/jewelery",
    id: "01",
  },
  {
    imgPath: "./src/assets/images/banner/electronics.jpg",
    alt: "electronics",
    link: "/products/category/electronics",
    id: "02",
  },
  {
    imgPath: "./src/assets/images/banner/men's-clothing.jpg",
    alt: "men's-clothing",
    link: "/products/category/men's%20clothing",
    id: "03",
  },
  {
    imgPath: "./src/assets/images/banner/women's-clothing.jpg",
    alt: "women's clothing",
    link: "/products/category/women's%20clothing",
    id: "04",
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
