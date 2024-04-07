import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import { ProductType } from "../../types";

import { Timestamp } from "firebase/firestore";
import { OrderPlacedProductDetailsType } from "../../types/OrderPlaced";

import { RiArrowDownDoubleLine } from "react-icons/ri";
import { BsDatabaseX } from "react-icons/bs";

type OrderPlacedCardProps = {
  orderId: string;
  createdAt: Timestamp;
  products: OrderPlacedProductDetailsType[];
  totalPaid: number;
};

const OrderPlacedCard = ({
  orderId,
  createdAt,
  products,
  totalPaid,
}: OrderPlacedCardProps) => {
  // show or hide details management
  const [openDetails, setOpenDetails] = useState(false);

  const getFormattedOrderDate = () => {
    const orderDate = createdAt.toDate();
    const date = orderDate.getDate();
    let month = "";
    switch (orderDate.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;

      default:
        month = "Dec";
        break;
    }
    const year = orderDate.getFullYear();
    return date + " " + month + ", " + year;
  };

  const toogleOpenDetails = () =>
    setOpenDetails((prevOpenDetails) => !prevOpenDetails);

  // get details of goods purchased
  const URL = "https://fakestoreapi.com/products";
  const { data, isLoading, error } = useFetch<ProductType[]>(URL);

  const getProductImgById = (id: number): string => {
    const product = data?.find((product) => product.id === id);
    return product ? product.image : "";
  };

  return (
    <div className="self-start shadow-[0_1px_2px_#00000024] rounded-xl">
      <div
        className={
          openDetails
            ? "flex flex-col gap-y-4 bg-slate-100 p-5 pb-4 rounded-t-xl"
            : "flex flex-col gap-y-4 bg-slate-100 p-5 pb-4 rounded-xl"
        }
      >
        {/* header */}
        <header className="flex flex-col">
          <span className="text-lg font-bold text-slate-600">
            Ordered on {getFormattedOrderDate()}
          </span>
          <span className="text-cyan-500 text-xs font-semibold">{orderId}</span>
          <span className="mt-4 w-[calc(100%+40px)] -ml-5 h-[1px] bg-slate-400"></span>
        </header>

        <p className="flex items-end gap-x-6">
          <span className="text-slate-400 font-medium">Total paid</span>
          <span className="text-primary-blue text-xl font-bold tracking-wide">
            ${totalPaid}
          </span>
        </p>

        {/* btn to see more */}
        <button
          onClick={toogleOpenDetails}
          className="text-base rounded-md whitespace-nowrap select-none py-[6px] px-3
          bg-primary-blue text-white font-medium border-2 border-transparent  
          hover:text-primary-blue hover:bg-white hover:border-primary-blue
          active:text-white active:bg-primary-blue duration-200 
           self-start flex gap-x-2 "
        >
          More details
          <RiArrowDownDoubleLine
            size={24}
            className={openDetails ? "duration-300" : "rotate-180 duration-300"}
          />
        </button>
      </div>

      {/* goods purchased */}
      <div className="px-6">
        <div
          className={
            openDetails
              ? `overflow-x-auto scrollbar-h-2 min-h-[160px] h-auto py-5 mb-4 flex gap-x-4 duration-300`
              : `overflow-hidden h-0 px-6 flex gap-x-4 duration-300`
          }
        >
          {error && (
            <div className="flex flex-col gap-y-2 text-center">
              <div className="flex flex-col items-center gap-x-2">
                <BsDatabaseX
                  size={24}
                  className="text-slate-200 min-w-[24px]"
                />
                <p className="text-lg">
                  <span className="font-medium text-gray-400">
                    An error has occurred:
                  </span>{" "}
                  <span>
                    <span className="font-semibold text-slate-400">
                      "{error.message}"
                    </span>
                  </span>
                </p>
              </div>

              <p className="text-base text-slate-500">
                Please check your internet connection, then reload the page, or
                try again later !
              </p>
            </div>
          )}

          {!error && isLoading && (
            <span className="flex w-full justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-primary-blue">
                <g>
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      dur="1.5s"
                      calcMode="spline"
                      values="0 150;42 150;42 150;42 150"
                      keyTimes="0;0.475;0.95;1"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="1.5s"
                      calcMode="spline"
                      values="0;-16;-59;-59"
                      keyTimes="0;0.475;0.95;1"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="2s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </g>
              </svg>
            </span>
          )}

          {!error &&
            !isLoading &&
            products.map((product) => (
              <div key={product.id} className="flex gap-x-4">
                <div className="relative w-16 h-28">
                  <span
                    className="absolute -top-2 -right-2 rounded-full p-1 text-white
                  bg-slate-600 text-xs font-semibold select-none"
                  >
                    x {product.quantity}
                  </span>

                  <img
                    src={getProductImgById(product.id)}
                    alt=""
                    className="select-none border p-1 rounded-md object-contain  
                    min-w-[64px] w-16 min-h-[96px] h-24"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedCard;
