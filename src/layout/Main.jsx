
import Home from "../components/Home/Home";
import Footer from "../shared/Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Main = () => {
  return (
    <div className="mx-2 md:mx-6 lg:mx-8 max-w-[2000px]">
      <Home />
      <Footer/>
      
    </div>
  );
};

export default Main;