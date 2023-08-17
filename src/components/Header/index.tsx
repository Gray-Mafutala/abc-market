import CategoriesBottomBar from "./CategoriesBottomBar";
import Navbar from "./Navbar";
import WelcomeTopBar from "./WelcomeTopBar";

const Header = () => {
  return (
    <header>
      <WelcomeTopBar />
      <Navbar />
      <CategoriesBottomBar />
    </header>
  );
};

export default Header;
