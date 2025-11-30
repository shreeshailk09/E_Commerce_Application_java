import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCard from "../../components/HomeSectionCard/HomeSectionCard";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/Men/mens_kurta";
const HomePage = () => {
  return (
    <div>   
       <MainCarousel />
       <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"} />
        <HomeSectionCarousel sectionName={"Men's suits"}/>
        <HomeSectionCarousel sectionName={"saree"}/>
        <HomeSectionCarousel sectionName={"Shoes"}/>
        <HomeSectionCarousel sectionName={"Special sale"}/>
        <HomeSectionCarousel />
       </div>
    </div>
    );  
};
export default HomePage;
