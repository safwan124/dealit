import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
      <Outlet /> {/* This will dynamically load the current route's content */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
