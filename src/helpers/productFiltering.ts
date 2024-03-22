import { sortingOptionsValue } from "../redux/slices/productFilteringSlice";
import { ProductType } from "../types";

// Search products
type searchByTitleAndDescType = {
  products: ProductType[];
  valueToSearch: string;
};
const searchByTitleAndDesc = ({
  products,
  valueToSearch,
}: searchByTitleAndDescType) => {
  const productsFilteredByTitle = products.filter(
    ({ title }) =>
      title.trim().toLowerCase().indexOf(valueToSearch.trim().toLowerCase()) !==
      -1
  );

  // min: one word
  const productsFilteredByDescription = products.filter((product) => {
    if (!productsFilteredByTitle.includes(product))
      product.description
        .trim()
        .toLowerCase()
        .split(" ")
        .includes(valueToSearch.trim().toLowerCase());
  });

  // Places results based on title before results based on desciption
  return [...productsFilteredByTitle, ...productsFilteredByDescription];
};

// Sort products by "option"
export type sortingOptionsType = keyof typeof sortingOptionsValue;
type sortByOptionType = {
  products: ProductType[];
  option: sortingOptionsType;
};
const sortByOption = ({ products, option }: sortByOptionType) => {
  switch (option) {
    case sortingOptionsValue.LOW_TO_HIGH:
      return products.sort(
        (productA, productB) => productA.price - productB.price
      );

    case sortingOptionsValue.HIGH_TO_LOW:
      return products.sort(
        (productA, productB) => productB.price - productA.price
      );

    case sortingOptionsValue.AVG_CUSTOMER_REVIEW:
      return products.sort(
        (productA, productB) => productB.rating.rate - productA.rating.rate
      );

    default:
      return products;
  }
};

// apply searchByTitleAndDesc and sortByOption
type filterAndSortProductsType = {
  products: ProductType[];
  valueToSearch: string;
  sortingOption: sortingOptionsType;
};
const filterAndSortProducts = ({
  products,
  valueToSearch,
  sortingOption,
}: filterAndSortProductsType) => {
  const searchResults = searchByTitleAndDesc({ products, valueToSearch });
  const searchAndSortResults = sortByOption({
    products: searchResults,
    option: sortingOption,
  });
  return searchAndSortResults;
};

export default filterAndSortProducts;
