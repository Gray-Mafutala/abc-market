import { MdLocationOn } from "react-icons/md";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";

const WelcomeTopBar = () => {
  return (
    <div className="hidden tablet:block px-4 bg-off-white">
      {/* center inner container */}
      <div
        className="centered-container h-[42px] flex items-center justify-between 
        text-gray-500 text-sm"
      >
        <p>Welcome to worldwide ABC Market!</p>

        <div className="flex items-center gap-x-4">
          <button
            className="flex items-center gap-x-[6px] duration-300
            hover:text-primary-blue"
          >
            <MdLocationOn size={18} className="text-primary-blue" />
            <span className="pr-4 border-r border-r-[#d9d9d9]">
              Select your location
            </span>
          </button>

          <button
            className="flex items-center gap-x-[6px] duration-300
            hover:text-primary-blue"
          >
            <TbTruckDelivery size={18} className="text-primary-blue" />
            <span className="pr-4 border-r border-r-[#d9d9d9]">
              Track your order
            </span>
          </button>

          <button
            className="flex items-center gap-x-[6px] duration-300
            hover:text-primary-blue"
          >
            <TbDiscount2 size={18} className="text-primary-blue" />
            <span>All Offers</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTopBar;
