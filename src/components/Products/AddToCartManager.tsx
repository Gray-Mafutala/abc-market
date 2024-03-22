import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { MdAddShoppingCart } from "react-icons/md";
import { TbMinus, TbPlus } from "react-icons/tb";

import {
  addItemToShoppingCart,
  decreaseItemQty,
  increaseItemQty,
  removeItemFromShoppingCart,
  selectQtyOfSpecificItem,
} from "../../redux/slices/shoppingCartSlice";

type AddToCartManagerProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  priceBeforeDiscount: number;
};

const AddToCartManager = ({
  id,
  title,
  image,
  price,
  priceBeforeDiscount,
}: AddToCartManagerProps) => {
  const dispatch = useAppDispatch();
  const qtyOfSpecificItem = useAppSelector((state) =>
    selectQtyOfSpecificItem(state, id)
  );

  const handleDecreaseAndRemoveItemFromCart = (id: number) => {
    qtyOfSpecificItem <= 1
      ? dispatch(removeItemFromShoppingCart(id))
      : dispatch(decreaseItemQty(id));
  };

  return (
    <>
      {/* btn to add to cart */}
      {qtyOfSpecificItem === 0 && (
        <button
          onClick={() =>
            dispatch(addItemToShoppingCart({ id, title, image, price, priceBeforeDiscount, quantity: 1 }))
          }
          className="border border-slate-300 text-slate-500 text-lg 
          font-medium w-full h-[46px] px-4 rounded-3xl flex items-center
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
      )}

      {/* decrease, current qty and increase */}
      {qtyOfSpecificItem > 0 && (
        <div
          className="h-[46px] border border-slate-300 rounded-3xl
          flex items-center justify-between"
        >
          {/* btn to decrease item qty */}
          <button
            onClick={() => handleDecreaseAndRemoveItemFromCart(id)}
            className="h-full border-r flex-grow flex justify-center
            items-center text-slate-500 hover:text-primary-blue/70
            duration-300"
          >
            <TbMinus size={24} />
          </button>

          {/* current qty */}
          <span
            className="w-16 text-center text-slate-700 text-lg font-bold
            px-2 truncate"
          >
            {qtyOfSpecificItem}
          </span>

          {/* btn to increase item qty */}
          <button
            onClick={() => dispatch(increaseItemQty(id))}
            className="h-full border-l flex-grow flex justify-center
            items-center text-slate-500 hover:text-primary-blue/70
            duration-300"
          >
            <TbPlus size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartManager;
