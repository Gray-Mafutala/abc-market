import { useState } from "react";

import { RiArrowUpDoubleLine, RiArrowDownDoubleLine } from "react-icons/ri";
import { ProductType } from "../../types";
import { Timestamp } from "firebase/firestore";

type OrderPlacedCardProps = {
  orderID: string;
  createdAt: Timestamp;
  products: ProductType[];
  totalPaid: number;
};

const OrderPlacedCard = ({
  orderID,
  createdAt,
  products,
  totalPaid,
}: OrderPlacedCardProps) => {
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

  return (
    <div className="shadow-[0_1px_4px_#00000029] rounded-xl pb-3">
      {/* header */}
      <div className="flex flex-col gap-y-4 bg-slate-50 p-6 pb-3 rounded-t-xl">
        <div className="flex justify-between">
          <p className="flex flex-col">
            <span className="text-xl font-semibold">
              Ordered on {getFormattedOrderDate()}
            </span>
            <span className="text-cyan-500 text-[14px]">{orderID}</span>
          </p>

          <p>
            <span className="text-[14px]">Paid</span>{" "}
            <span className="text-xl font-semibold">${totalPaid}</span>
          </p>
        </div>

        <button
          onClick={toogleOpenDetails}
          className="text-base text-gray-50 bg-blue-950 font-medium py-[6px] px-3 
          rounded-md whitespace-nowrap select-none duration-300 
          hover:bg-gray-600 hover:text-blue-100 
          focus:shadow-[0_0_0_2px_#3b82f6] self-start flex gap-x-2"
        >
          More details
          {openDetails ? (
            <RiArrowDownDoubleLine size={24} />
          ) : (
            <RiArrowUpDoubleLine size={24} />
          )}
        </button>
      </div>

      {/* main content (products) */}

      <div
        className={
          openDetails
            ? `h-auto rounded-b-lg px-6 py-5 flex flex-col gap-y-4 duration-300`
            : `h-0 overflow-hidden rounded-b-lg px-6 flex flex-col gap-y-4 duration-300`
        }
      >
        {products.map((product) => (
          <div key={product.id} className="border-2">
            {JSON.stringify(product)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPlacedCard;
