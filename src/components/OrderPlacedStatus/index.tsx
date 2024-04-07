import { useState } from "react";

import ModalWrapper from "../Wrappers/ModalWrapper";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  OrderPlacedStatusEnum,
  selectOrderPlaced,
  setOrderPlacedStatus,
} from "../../redux/slices/orderPlacedSlice";

import { MdError } from "react-icons/md";
import SuccessCheckAnim from "./SuccessCheckAnim";

const OrderPlacedStatus = () => {
  const orderPlaced = useAppSelector(selectOrderPlaced);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(true);
  const closeOrderPlacedStatus = () => {
    setIsOpen(false);
    dispatch(setOrderPlacedStatus(undefined));
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={closeOrderPlacedStatus}
      modalWrapperAddStyles={
        isOpen
          ? "inset-0 duration-300"
          : "inset-0 translate-y-[100%] duration-300"
      }
      closeBtnAddStyles="top-3 right-3 mobileXL:-right-12 mobileXL:top-0"
      innerWrapperStyles="relative w-full h-screen mobileL:max-w-[480px] mx-auto
      mobileL:h-auto mobileL:mt-10 mobileL:rounded-lg bg-white text-gray-500
      font-medium py-4 px-5 flex pt-10 text-center"
    >
      {/* order not placed - ERROR */}
      {orderPlaced.status === OrderPlacedStatusEnum.Error && (
        <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-y-8">
          {/* error animated svg */}
          <MdError size={96} className="text-red-400" />
          <p className="flex flex-col gap-y-3">
            <span className="text-red-400 text-3xl font-bold">
              Order not placed !
            </span>
            <span className="text-lg text-slate-400">
              An error has occured:{" "}
              {orderPlaced.error instanceof Error && orderPlaced.error.message}
            </span>
          </p>
        </div>
      )}

      {/* play confetti animation when order placed successfuly */}
      {orderPlaced.status === OrderPlacedStatusEnum.Success && (
        <Fireworks autorun={{ speed: 3, duration: 2000 }} />
      )}

      {/* order placed - SUCCESS */}
      {orderPlaced.status === OrderPlacedStatusEnum.Success && (
        <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-y-5">
          {/* success check animation */}
          <SuccessCheckAnim />
          <p className="flex flex-col gap-y-3">
            <span className="text-primary-blue text-3xl font-bold">
              Order Placed !
            </span>
            <span className="text-lg text-slate-400">
              Your order has been placed.
            </span>
          </p>
        </div>
      )}
    </ModalWrapper>
  );
};

export default OrderPlacedStatus;
