import Jar from "../assets/img/jar-bottle.svg";
import Footerbg from "../assets/img/footerbg.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative">
      <img
        src={Footerbg}
        alt="footer bg"
        className="w-full h-auto object-cover "
      />

      <img
        src={Jar}
        alt="Jar"
        className="absolute lg:bottom-[22.5%] lg:size-80 lg:left-[70%] lg:transform lg:-translate-x-1/2 

        md:bottom-[22.5%] md:size-44 md:left-[70%] md:transform md:-translate-x-1/2 
        
        bottom-[22.5%] size-20 left-[70%] transform -translate-x-1/2
        "
      />
    </footer>
  );
};

export default Footer;
