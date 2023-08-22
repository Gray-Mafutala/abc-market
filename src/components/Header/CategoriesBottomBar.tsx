import CategoryItems from "./CategoryItems";

const CategoriesBottomBar = () => {
  return (
    <div className="border-b border-b-[#ededed]">
      {/* inner centered container */}
      <ul
        className="centered-container hidden tabletM:flex items-center 
        justify-evenly py-4 gap-x-6 text-md text-slate-600 font-medium 
        leading-[18px] whitespace-nowrap"
      >
        <CategoryItems
          withIcon={true}
          itemStyles="px-5 py-[10px] bg-blue-light rounded-3xl
          duration-300 hover:bg-primary-blue/80 hover:text-white
          active:bg-transparent active:text-primary-blue
          active:shadow-[0_0_0_2px_#008ecc] focus:shadow[0_0_0_2px_#008ecc]"
          activeItemStyles="px-5 py-[10px] rounded-3xl
          bg-primary-blue/80 text-white"
        />
      </ul>
    </div>
  );
};

export default CategoriesBottomBar;
