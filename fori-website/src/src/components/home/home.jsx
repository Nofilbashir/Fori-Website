import React from "react";
import Banner1 from './banner1/banner1';
import Banner2 from './banner2/banner2';
import Banner5 from './banner5/banner5';
import Banner6 from './banner6/banner6';
import Banner7 from './banner7/banner7';
import Banner66 from "./banner66/banner66";
import Footer from "../footer/footer"
function Home (){
    return(
        <div>

       <Banner1/>
       <Banner2 />
       <Banner5 />
       <Banner66/>
       <Banner6 />
       <Banner7 />
       <Footer />

       </div>
    )
}
export default Home;