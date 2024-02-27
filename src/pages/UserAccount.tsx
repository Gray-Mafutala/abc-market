import { selectAuth, userSignOut } from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userSignOut());
  };

  return (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div className="centered-container">
        {/* UserAccount itself */}
        <div
          className="flex flex-col gap-y-7 bg-white px-6 pt-4 pb-6
          max-w-sm mx-auto rounded-md shadow-sm"
        >
          {/* header */}
          <header className="flex items-center justify-between gap-x-6">
            {/* title */}
            <h2 className="text-2xl mobileL:text-3xl text-slate-500 font-bold">
              My account
            </h2>

            {/* btn to log out */}
            <button
              onClick={logout}
              title="Sign out"
              className="text-slate-700 hover:text-primary-blue duration-300"
            >
              <FiLogOut size={24} />
            </button>
          </header>

          {/* body */}
          {/* avatar, full name and email */}
          <div
            className="flex flex-col gap-y-2 items-center text-center 
            mobileM:flex-row justify-between mobileM:text-left"
          >
            <img
              src={
                currentUser?.photoUrl
                  ? currentUser.photoUrl
                  : "https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
              }
              alt="avatar of current user"
              className="rounded-full border w-28 aspect-square h-auto object-contain"
            />

            <p className="flex flex-col">
              <span className="text-slate-700 text-lg mobileM:text-xl font-bold">
                {currentUser?.displayName}
              </span>
              <span className="text-slate-500 text-base font-medium">
                {currentUser?.email}
              </span>
            </p>
          </div>

          {/* Links to orders and favorites pages */}
          <div
            className="flex flex-col mobileL:flex-row mobileL:justify-between
            text-base mobileM:text-lg font-medium text-slate-500 gap-5"
          >
            <Link
              to="/orders"
              className="w-full text-center py-1 rounded-md border-2
              border-slate-300 hover:border-primary-blue
              hover:text-primary-blue active:bg-primary-blue
              active:text-white duration-300"
            >
              My orders
            </Link>

            <Link
              to="/favorites"
              className="w-full text-center py-1 rounded-md border-2
              border-slate-300 hover:border-primary-blue
              hover:text-primary-blue active:bg-primary-blue
              active:text-white duration-300"
            >
              My wishlist
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserAccount;
