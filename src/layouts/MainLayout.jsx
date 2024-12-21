import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";

export default function MainLayout() {
  return (
    <>
      <Blob />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
