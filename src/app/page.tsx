import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
// import Products from "./components/Products";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
}
