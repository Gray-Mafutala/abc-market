import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";
import FetchDataErrorDisplay from "../UI/FetchDataErrorDisplay";
import SkeletonProductCard from "./SkeletonProductCard";

import { IoIosArrowForward } from "react-icons/io";
import { ProductType } from "../../types";

type CategoryProductsProps = {
  titlePrefix: string;
  category: string;
};

const SectionCategoryProducts = ({ titlePrefix, category }: CategoryProductsProps) => {
  const baseURL = "https://fakestoreapi.com/products/category";
  const { data, isLoading, error } = useFetch<ProductType[]>(
    `${baseURL}/${category}?limit=4`
  );

  return (
    <section id={category} className="flex flex-col gap-y-10">
      {/* header */}
      <header
        className="flex items-center justify-between border-b
        pb-3 mobileL:pb-4 border-b-[#ededed] gap-x-8"
      >
        <h2
          className="text-lg mobileL:text-xl mobileXL:text-2xl 
          text-slate-500 font-bold relative after:absolute 
          after:w-full after:h-1 after:left-0 after:-bottom-3
          mobileL:after:-bottom-4 after:bg-primary-blue/80
          after:rounded-md inline-grid mobileM:block"
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

      {/* body */}
      {/* A - if an error has occurred */}
      {error && <FetchDataErrorDisplay msg={error.message} />}

      {/* B - if isLoading===true, then show Skeleton loading... */}
      {isLoading && (
        <ul
          className="grid grid-cols-1 gap-y-8 gap-x-6 mobileXL:grid-cols-2
          tabletM:grid-cols-3 laptop:grid-cols-4"
        >
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
        </ul>
      )}

      {/* C - if isLoading===false, then show first 4 products
            (ProductCard) of this category */}
      {!isLoading && (
        <ul
          className="grid grid-cols-1 gap-y-8 gap-x-6 mobileXL:grid-cols-2
          tabletM:grid-cols-3 laptop:grid-cols-4"
        >
          {data !== undefined &&
            data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
        </ul>
      )}
    </section>
  );
};

export default SectionCategoryProducts;
