import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { TbMinus, TbPlus } from "react-icons/tb";

const AddToCartManager = () => {
  const [qty, setQty] = useState(0);

  return (
    <>
      {qty === 0 ? (
        <button
          onClick={() => setQty(1)}
          className="border border-slate-300 text-slate-500 text-lg 
          font-medium w-full py-2 px-4 rounded-[18px] flex items-center
          justify-center gap-x-4 whitespace-nowrap duration-300
          hover:border-transparent hover:bg-primary-blue/70
          [&>*]:hover:text-white"
        >
          <span>Add to cart</span>
          <MdAddShoppingCart
            size={24}
            className="min-w-[24px] text-slate-400"
          />
        </button>
      ) : (
        <div
          className="border border-slate-300 rounded-[18px]
          flex items-center justify-between"
        >
          {/* btn to remove */}
          <button
            onClick={() => setQty((prev) => prev - 1)}
            className="py-2 border-r flex-grow flex justify-center
            text-slate-500 hover:text-primary-blue/70 duration-300"
          >
            <TbMinus size={24} />
          </button>

          {/* current qty */}
          <span
            className="w-16 text-center text-slate-700 text-lg font-bold
            px-2 truncate"
          >
            {qty}
          </span>

          {/* btn to add */}
          <button
            onClick={() => setQty((prev) => prev + 1)}
            className="py-2 border-l flex-grow flex justify-center
            text-slate-500 hover:text-primary-blue/70 duration-300"
          >
            <TbPlus size={24} />
          </button>
        </div>
      )}
    </>
  );

  {
    qty === 0 ? <button onClick={() => setQty(1)}> Hello</button> : "";
  }
};

export default AddToCartManager;
