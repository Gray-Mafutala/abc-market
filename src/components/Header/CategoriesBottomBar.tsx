import CategoryItems from "./CategoryItems";

const CategoriesBottomBar = () => {
  return (
    <ul
      className="px-4 hidden tabletM:flex items-center justify-center py-4 
      gap-x-6 text-sm border-b border-b-[#ededed] leading-[18px]
      text-slate-600 font-medium whitespace-nowrap"
    >
      <CategoryItems
        itemStyles="px-[14px] py-[10px] bg-blue-light rounded-[18px] 
        duration-300 hover:bg-primary-blue/80 hover:text-white 
        active:bg-transparent active:text-primary-blue 
        active:shadow-[0_0_0_2px_#008ecc] focus:shadow[0_0_0_2px_#008ecc]"
      />
    </ul>
  );
};

export default CategoriesBottomBar;
