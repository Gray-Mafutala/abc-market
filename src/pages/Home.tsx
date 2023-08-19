import CategoryProducts from "../components/CategoryProducts";
import SlidingBannerAds from "../components/SlidingBannerAds";

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

const Home = () => {
  return (
    <main className="px-4 pt-5 pb-32 bg-slate-50">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-32">
        <SlidingBannerAds sliders={sliders} />

        {/* Electronics products */}
        <CategoryProducts
          titlePrefix="Grab the best deals on"
          category="electronics"
        />

        {/* Jewelery products */}
        <CategoryProducts titlePrefix="Top" category="jewelery" />

        {/* Men's clothing products */}
        <CategoryProducts
          titlePrefix="Best value on"
          category="men's clothing"
        />

        {/* Women's clothing products */}
        <CategoryProducts
          titlePrefix="Enjoy discounts on"
          category="women's clothing"
        />
      </div>
    </main>
  );
};

export default Home;
