import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useGetDocsFromFirestore from "../hooks/useGetDocsFromFirestore";

import { BiPackage } from "react-icons/bi";
import UserItemsPageWrapper from "../components/Wrappers/UserItemsPageWrapper";
import OrderPlacedCard from "../components/OrderPlacedCard";
import FetchDataErrorDisplay from "../components/UI/FetchDataErrorDisplay";
import SkeletonOrderPlacedCard from "../components/OrderPlacedCard/SkeletonOrderPlacedCard";

import { OrderPlacedType } from "../types";
import OrderPlacedStatus from "../components/OrderPlacedStatus";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectOrderPlacedStatus } from "../redux/slices/orderPlacedSlice";
import {
  selectSearchValue,
  setSearchValue,
} from "../redux/slices/searchBarSlice";
import { SortingOptionsValue, setSortingOption } from "../redux/slices/productFilteringSlice";

export const ORDERS_COLLECTION_NAME = "orders";

const OrdersPage = () => {
  const location = useLocation();

  const orderPlacedStatus = useAppSelector(selectOrderPlacedStatus);

  const { docs, isLoading, error } = useGetDocsFromFirestore<OrderPlacedType>(
    ORDERS_COLLECTION_NAME
  );
  const ordersCount = docs.length;

  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(setSearchValue(""));
      dispatch(setSortingOption(SortingOptionsValue.DEFAULT));
  }, [dispatch]);

  // to apply filters on orders list (search by order tracking number and sorting by date desc.)
  const valueToSearch = useAppSelector(selectSearchValue);

  const ordersSortedByDateDesc = !isLoading
    ? docs.sort(
        (a, b) =>
          b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime()
      )
    : [];

  const filteredAndSortedOrderList =
    valueToSearch !== ""
      ? ordersSortedByDateDesc.filter((order) =>
          order.orderId
            .toLowerCase()
            .startsWith(valueToSearch.trim().toLowerCase())
        )
      : ordersSortedByDateDesc;

  return (
    <>
      {/* displays order status */}
      {orderPlacedStatus !== undefined && location.state?.showOrderStatus && (
        <OrderPlacedStatus />
      )}

      {/* OrderPage itself */}
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
        {error && <FetchDataErrorDisplay msg={error.message} />}

        {!error && isLoading && (
          <ul className="grid grid-cols-1 gap-6 mobileXL:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
            <SkeletonOrderPlacedCard />
            <SkeletonOrderPlacedCard />
            <SkeletonOrderPlacedCard />
            <SkeletonOrderPlacedCard />
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
          filteredAndSortedOrderList.map((order) => (
            <OrderPlacedCard key={order.orderId} {...order} />
          ))
        )}
      </UserItemsPageWrapper>
    </>
  );
};

export default OrdersPage;
