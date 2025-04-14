"use client";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const Home: React.FC = () => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutReached(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = !bannerLoaded && !timeoutReached;

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="content">
          <Banner onLoaded={() => setBannerLoaded(true)} />
          <Products />
          <Reviews />
          <Contact />
        </div>
      )}
      <style jsx>{`
        .content {
          filter: ${isLoading ? "blur(5px)" : "none"};
        }
      `}</style>
    </div>
  );
};

export default Home;
