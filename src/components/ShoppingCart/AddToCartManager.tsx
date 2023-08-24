import { TbMinus, TbPlus } from "react-icons/tb";

const AddToCartManager = () => {
  return (
    <div className="border rounded-[4px] h-8 w-full flex justify-between">
      <button
        className="w-full flex justify-center items-center
        hover:text-primary-blue/70 duration-300"
      >
        <TbMinus size={20} />
      </button>

      <span className="w-full flex justify-center items-center border-x">
        1
      </span>

      <button
        className="w-full flex justify-center items-center
        hover:text-primary-blue/70 duration-300"
      >
        <TbPlus size={20} />
      </button>
    </div>
  );
};

export default AddToCartManager;
