import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Blob />
      <main className="relative -top-20 z-30 mx-6 mb-20 text-white lg:mx-40">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
