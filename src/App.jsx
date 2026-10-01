import NavbarAndHero from "./components/Navbar";
import Products from "./components/Product";
import AboutAndContact from "./components/AboutAndContact";
import IntroLoader from "./components/IntroLoader";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-slate-50 font-sans text-slate-800 min-h-screen">
      {/* Jab tak loading true hai, intro dikhega */}
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}

      {/* Main Website Components */}
      <NavbarAndHero />
      <Products />
      <AboutAndContact />
    </div>
  );
};

export default App;
