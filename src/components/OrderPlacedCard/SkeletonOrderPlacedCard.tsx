const SkeletonOrderPlacedCard = () => {
  return (
    <li className="w-full flex flex-col">
      <span
        className="skeleton-bg-gradient animate-sloading w-full h-16 bg-gray-300 rounded-t-xl"
      ></span>
      <span
        className="w-full h-[1px] bg-gray-400"
      ></span>
      <span
        className="skeleton-bg-gradient animate-sloading w-full h-28 bg-gray-300 rounded-b-xl"
      ></span>
    </li>
  );
};

export default SkeletonOrderPlacedCard;
