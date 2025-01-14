import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Feature from "./components/feature";

const App = () => {
  return (
    <div>
      <div className="sticky z-[2] inset-x-0">
        <Navbar />
      </div>
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default App;
