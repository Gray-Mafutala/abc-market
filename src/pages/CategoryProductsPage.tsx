import { useParams } from "react-router-dom";
import { ProductType } from "../types";

import { useAppSelector } from "../redux/hooks";
import { selectSortingOption } from "../redux/slices/productFilteringSlice";
import { selectSearchValue } from "../redux/slices/searchBarSlice";

import useFetch from "../hooks/useFetch";
import SkeletonProductCard from "../components/Products/SkeletonProductCard";
import ProductCard from "../components/Products/ProductCard";
import FetchDataErrorDisplay from "../components/UI/FetchDataErrorDisplay";
import NoProductFound from "../components/UI/NoProductFound";
import CustomerX from "../components/Sections/CustomerX";

import filterAndSortProducts, {
  sortingOptionsType,
} from "../helpers/productFiltering";

const CategoryProductsPage = () => {
  // fetch data of current category
  const { category } = useParams();
  const baseURL = "https://fakestoreapi.com/products/category";
  const { data, isLoading, error } = useFetch<ProductType[]>(
    `${baseURL}/${category}`
  );
  const categoryTitle =
    category !== undefined
      ? category?.charAt(0).toUpperCase().concat(category.slice(1)).toString()
      : "";

  // to apply filters on products list (search by product title and description and sorting by one option)
  const valueToSearch = useAppSelector(selectSearchValue);
  const sortingOption = useAppSelector(selectSortingOption);
  const filteredProducts =
    data &&
    filterAndSortProducts({
      products: data as ProductType[],
      valueToSearch,
      sortingOption: sortingOption as sortingOptionsType,
    });

  return (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div className="centered-container flex flex-col gap-y-6">
        {/* header - title and products count for current category */}
        <header className="flex items-center gap-x-3">
          <h2 className="text-2xl mobileL:text-3xl text-slate-500 font-bold">
            {categoryTitle}
          </h2>

          <p className="text-sm font-semibold text-slate-400 whitespace-nowrap">
            {isLoading
              ? "... products"
              : `${error ? "0" : filteredProducts?.length} 
              
              ${
                filteredProducts && filteredProducts?.length > 1
                  ? "products"
                  : "product"
              }`}
          </p>
        </header>

        {/* body */}
        <div className="flex flex-col gap-y-12 mobileL:gap-y-16 tablet:gap-20">
          {/* A - if an error has occurred */}
          {error && <FetchDataErrorDisplay msg={error.message} />}

          {/* B - if isLoading===true, then show Skeleton loading... */}
          {!error && isLoading && (
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

          {/* C - if isLoading===false, then show all products 
            of this category (as ProductCard)  */}
          {!error &&
            !isLoading &&
            filteredProducts &&
            filteredProducts?.length > 0 && (
              <ul
                className="grid grid-cols-1 gap-y-8 gap-x-6 mobileXL:grid-cols-2
                tabletM:grid-cols-3 laptop:grid-cols-4"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    category={product.category}
                  />
                ))}
              </ul>
            )}

          {!error &&
            !isLoading &&
            filteredProducts &&
            filteredProducts?.length < 1 && (
              // when no results are found, suggestions are displayed
              <NoProductFound>
                <ul
                  className="grid grid-cols-1 gap-y-8 gap-x-6 mobileXL:grid-cols-2
                  tabletM:grid-cols-3 laptop:grid-cols-4"
                >
                  {data.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      rating={product.rating}
                      category={product.category}
                    />
                  ))}
                </ul>
              </NoProductFound>
            )}

          {/* Section - "We provide best customer experiences..." */}
          <CustomerX />
        </div>
      </div>
    </main>
  );
};

export default CategoryProductsPage;
