import { useLocation } from "react-router-dom";

import useGetDocsFromFirestore from "../hooks/useGetDocsFromFirestore";

import { BiPackage } from "react-icons/bi";
import UserItemsPageWrapper from "../components/Wrappers/UserItemsPageWrapper";
import OrderPlacedCard from "../components/OrderPlacedCard";
import FetchDataErrorDisplay from "../components/UI/FetchDataErrorDisplay";
import SkeletonOrderPlacedCard from "../components/OrderPlacedCard/SkeletonOrderPlacedCard";

const OrdersPage = () => {
  const location = useLocation();

  const ordersCount = 0;
  const [ordersList, isLoading, error] = useGetDocsFromFirestore("orders");

  return (
    <UserItemsPageWrapper
      title="Order history"
      itemsCount={ordersCount}
      labelForItemsCount="orders"
      bodyContentStyles={
        ordersCount === 0
          ? "flex flex-col text-center gap-x-3"
          : "grid grid-cols-1 gap-6 mobileXL:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4"
      }
    >
      {/*{location.state.orderPlaced && <>confetti explosion</>}*/}

      {error && <FetchDataErrorDisplay msg={error.message} />}

      {!error && isLoading && (
        <ul className="flex flex-col gap-y-8">
          <SkeletonOrderPlacedCard />
          <SkeletonOrderPlacedCard />
          <SkeletonOrderPlacedCard />
          <SkeletonOrderPlacedCard />
        </ul>
      )}

      {!error && !isLoading && ordersCount === 0 ? (
        <div className="mt-4 flex flex-col items-center text-center gap-y-2">
          <BiPackage className="text-8xl text-slate-300" />
          <p className="text-lg text-slate-400 font-medium tracking-wide">
            You have not yet placed an order.
          </p>
        </div>
      ) : (
        ordersList?.map((order) => (
          <OrderPlacedCard key={order.id} {...order} />
        ))
      )}
    </UserItemsPageWrapper>
  );
};

export default OrdersPage;
