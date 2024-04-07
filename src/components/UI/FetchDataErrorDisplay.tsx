import { BsDatabaseX } from "react-icons/bs";

const FetchDataErrorDisplay = ({ msg }: { msg: string }) => {
  return (
    <div
      className="px-4 mt-8 mb-20 flex flex-col items-center
      text-center gap-y-1"
    >
      <div className="flex flex-col mobileM:flex-row items-center justify-center gap-x-4">
        <BsDatabaseX
          className="text-slate-200 text-[24px] min-w-[24px]
          mobileL:text-[28px] mobileXL:text-[32px]"
        />
        <p
          className="font-medium text-gray-400 text-lg mobileL:text-xl
          mobileXL:text-2xl"
        >
          An error has occurred:{" "}
          <span className="font-semibold text-slate-400">"{msg}"</span>
        </p>
      </div>

      <p className="text-base text-slate-500">
        Please check your internet connection, then reload the page, or try
        again later !
      </p>
    </div>
  );
};

export default FetchDataErrorDisplay;
