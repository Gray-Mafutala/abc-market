import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "./ui/Loader";
import ErrorDisplay from "./ui/ErrorDisplay";

type CategoryProductsProps = {
  titlePrefix: string;
  category: string;
};

const CategoryProducts = ({ titlePrefix, category }: CategoryProductsProps) => {
  const baseURL = "https://fakestoreapi.com/products/category";
  const { data, isLoading, error } = useFetch<ProductType[]>(
    `${baseURL}/${category}?limit=4`
  );

  // if an error has occurred
  if (error)
    return <ErrorDisplay msg={`An error has occurred: ${error.message}`} />;

  // isLoading
  if (isLoading) return <Loader />;

  return (
    <section className="flex flex-col gap-y-10">
      {/* header */}
      <header
        className="flex items-center justify-between border-b
        pb-4 border-b-[#ededed]"
      >
        <h2
          className="text-2xl text-slate-500 font-bold relative
          after:absolute after:w-full after:h-1 after:bg-primary-blue/80
          after:left-0 after:-bottom-4 after:rounded-md"
        >
          {titlePrefix}{" "}
          <strong className="text-primary-blue/80">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </strong>
        </h2>

        <Link
          to={`/products/category/${category}`}
          className="flex items-center gap-x-1 whitespace-nowrap
          text-slate-600 hover:text-primary-blue hover:gap-x-2
          duration-300"
        >
          <span className="font-medium">View All</span>
          <IoIosArrowForward size={24} className="text-primary-blue" />
        </Link>
      </header>

      {/* first 4 products of this category */}
      <ul className="grid grid-cols-4 gap-x-6">
        {data !== undefined &&
          data.map((product) => (
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
      </ul>
    </section>
  );
};

export default CategoryProducts;