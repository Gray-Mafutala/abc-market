import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  increaseItemQty,
  decreaseItemQty,
  selectQtyOfSpecificItem,
  removeItemFromCart,
} from "../../redux/slices/cartSlice";

import { TbMinus, TbPlus } from "react-icons/tb";

type AddToCartManagerProps = {
  productId: number;
};

const AddToCartManager = ({ productId }: AddToCartManagerProps) => {
  const dispatch = useAppDispatch();

  const qtyOfSpecificItem = useAppSelector((state) =>
    selectQtyOfSpecificItem(state, productId)
  );

  const handleDecreaseAndRemoveItemFromCart = (id: number) => {
    qtyOfSpecificItem <= 1
      ? dispatch(removeItemFromCart(id))
      : dispatch(decreaseItemQty(id));
  };

  return (
    <div className="border rounded-[4px] h-8 mobileM:w-full flex justify-between">
      <button
        onClick={() => handleDecreaseAndRemoveItemFromCart(productId)}
        className="w-full px-2 flex justify-center items-center
        hover:text-primary-blue/70 duration-300"
      >
        <TbMinus size={20} />
      </button>

      <span className="w-full px-3 flex justify-center items-center border-x">
        {qtyOfSpecificItem}
      </span>

      <button
        onClick={() => dispatch(increaseItemQty(productId))}
        className="w-full px-2 flex justify-center items-center
        hover:text-primary-blue/70 duration-300"
      >
        <TbPlus size={20} />
      </button>
    </div>
  );
};

export default AddToCartManager;
