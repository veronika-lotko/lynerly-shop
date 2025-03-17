import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

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
