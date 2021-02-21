import Footer from "./footer";
import Navbar from "./navbar";

const layout = ({ children }) => {
   return (
      <div className="content">
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};

export default layout;
