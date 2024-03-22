import useFetch from "../../hooks/useFetch";

import { useAppSelector } from "../../redux/hooks";
import { selectSearchValue } from "../../redux/slices/searchBarSlice";
import { selectSortingOption } from "../../redux/slices/productFilteringSlice";
import filterAndSortProducts, {
  sortingOptionsType,
} from "../../helpers/productFiltering";

import { ProductType } from "../../types";
import ProductCard from "../Products/ProductCard";
import SkeletonProductCard from "../Products/SkeletonProductCard";
import FetchDataErrorDisplay from "../UI/FetchDataErrorDisplay";
import CustomerX from "../Sections/CustomerX";
import NoProductFound from "../UI/NoProductFound";

const SearchResults = () => {
  const URL = "https://fakestoreapi.com/products";
  const { data, isLoading, error } = useFetch<ProductType[]>(URL);

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
    // center inner wrapper
    <div className="centered-container flex flex-col gap-y-6">
      {/* header - title and products count for current category */}
      <header className="flex items-center gap-x-3">
        <h2 className="text-2xl mobileL:text-3xl text-slate-500 font-bold">
          Search results
        </h2>

        <p className="text-sm font-semibold text-slate-400 whitespace-nowrap">
          {isLoading
            ? "... products"
            : `${filteredProducts && filteredProducts?.length} ${
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

        {/* B - if isLoading=true, then show Skeleton loading... */}
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

        {/* C - if isLoading=false, then show all products 
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

        {/* when no results are found, suggestions are displayed */}
        {!error &&
          !isLoading &&
          filteredProducts &&
          filteredProducts?.length < 1 && (
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

        {/* We provide best customer experiences... */}
        <CustomerX />
      </div>
    </div>
  );
};

export default SearchResults;
