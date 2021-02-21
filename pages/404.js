import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
         router.push("/");
      }, 3000);
   }, []);

   return (
      <div className="container">
         <h1>NotFound</h1>
         <p>Error</p>
      </div>
   );
};

export default NotFound;
