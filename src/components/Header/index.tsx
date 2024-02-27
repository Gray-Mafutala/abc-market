import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CategoriesBottomBar from "./CategoriesBottomBar";
import Navbar from "./Navbar";
import WelcomeTopBar from "./WelcomeTopBar";

const Header = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(observerRef, {});
  const isIntersecting = !!entry?.isIntersecting;

  return (
    <>
      {/* nav sticky */}
      <div
        className={
          isIntersecting
            ? "fixed -translate-y-[100%]"
            : "translate-y-0 duration-500 ease-out fixed w-full z-20"
        }
      >
        <Navbar />
      </div>

      <header>
        <WelcomeTopBar />
        <Navbar />

        {/* watcher to show nav-sticky */}
        <div ref={observerRef}></div>

        <CategoriesBottomBar />
      </header>
    </>
  );
};

export default Header;
