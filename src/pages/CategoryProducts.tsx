import { useParams } from "react-router-dom";
import { useEffect } from "react";

import useFetch from "../hooks/useFetch";
import SkeletonProductCard from "../components/Products/SkeletonProductCard";
import ProductCard from "../components/Products/ProductCard";
import FetchDataErrorDisplay from "../components/UI/FetchDataErrorDisplay";
import PageWrapper from "../components/Wrappers/PageWrapper";
import CustomerX from "../components/Sections/CustomerX";

const CategoryProducts = () => {
  const { category } = useParams();

  const baseURL = "https://fakestoreapi.com/products/category";
  const { data, isLoading, error } = useFetch<ProductType[]>(
    `${baseURL}/${category}`
  );

  useEffect(() => window.scrollTo(0, 0), [category]);

  const categoryTitle =
    category !== undefined
      ? category?.charAt(0).toUpperCase().concat(category.slice(1)).toString()
      : "";

  return (
    <PageWrapper
      title={categoryTitle}
      items={`${data?.length} products`}
      bodyContentStyles="flex flex-col gap-y-12 mobileL:gap-y-16 
      tablet:gap-20"
    >
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

      {/* ...customer experiences */}
      <CustomerX />
    </PageWrapper>
  );
};

export default CategoryProducts;
