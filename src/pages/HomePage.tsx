import SectionCategoryProducts from "../components/Products/SectionCategoryProducts";
import CustomerX from "../components/Sections/CustomerX";
import SlidingBannerAds from "../components/Sections/SlidingBannerAds";

const sliders = [
  {
    imgPath: "https://placehold.co/600x400/000/FFF",
    alt: "",
    link: "",
    id: "01",
  },
  {
    imgPath: "https://placehold.co/600x400/f00/FFF",
    alt: "",
    link: "",
    id: "02",
  },
  {
    imgPath: "https://placehold.co/600x400/aaa/FFF",
    alt: "",
    link: "",
    id: "03",
  },
];

const HomePage = () => {
  return (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div
        className="centered-container flex flex-col gap-y-12
        mobileL:gap-y-16 tablet:gap-20"
      >
        <SlidingBannerAds sliders={sliders} />

        {/* Electronics products */}
        <SectionCategoryProducts titlePrefix="The best on" category="electronics" />

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
    </main>
  );
};

export default HomePage;
