import { TbBrandCashapp, TbTruckDelivery } from "react-icons/tb";
import { PiMaskHappy } from "react-icons/pi";
import { MdFiberNew } from "react-icons/md";

const customerExperiences = [
  {
    id: "01",
    icon: <TbBrandCashapp />,
    title: "Original Products",
    info: "We provide money back guarantee if the product are not original",
  },
  {
    id: "02",
    icon: <PiMaskHappy />,
    title: "Satisfation Guarantee",
    info: "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    id: "03",
    icon: <MdFiberNew />,
    title: "New Arrival Everyday",
    info: "We updates our collections almost everyday",
  },
  {
    id: "04",
    icon: <TbTruckDelivery />,
    title: "Fast & Free Shipping",
    info: "We offer fast and free shipping for our loyal customers",
  },
];

const CustomerX = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <h2
        className="text-lg mobileL:text-xl mobileXL:text-2xl
        text-slate-500 font-bold border-b border-b-[#ededed] pb-3
        mobileL:pb-4 inline-grid mobileM:block"
      >
        We provide best customer experiences
      </h2>

      <div
        className="grid grid-cols-1 mobileM:grid-cols-2 tabletM:grid-cols-4
        gap-8"
      >
        {customerExperiences.map(({ id, icon, title, info }) => (
          <div
            key={id}
            className="flex flex-col items-center mobileM:items-start
            text-center mobileM:text-left"
          >
            <span
              className="mobileM:self-start p-2 bg-slate-200 
              text-slate-700 text-2xl rounded-md"
            >
              {icon}
            </span>
            <h4
              className="text-slate-700 font-medium text-lg
              my-1 mobileM:my-2"
            >
              {title}
            </h4>
            <p className="text-slate-400 text"> {info} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerX;
