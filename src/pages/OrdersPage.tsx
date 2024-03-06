import UserItemsPageWrapper from "../components/Wrappers/UserItemsPageWrapper";

const OrdersPage = () => {
  return (
    <UserItemsPageWrapper
      title="My Orders"
      itemsCount={0}
      labelForItemsCount="orders"
    >
      Orders...
    </UserItemsPageWrapper>
  );
};

export default OrdersPage;
