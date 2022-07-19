import React from "react";
import { Fade } from "react-reveal";
import AboutSubscription from "../../components/AboutSubscription/AboutSubscription";
import Devices from "../../components/Devices/Devices";
import Footer from "../../components/Footer/Footer";
import Forbusiness from "../../components/ForBusiness/Forbusiness";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Questions from "../../components/Questions/Questions";
import "./home.scss";
import Delivery from "../../components/Delivery/Delivery";
import ForWhom from "../../components/ForWhom/ForWhom";
import { useState } from "react";

function Home() {
  const [siderBar, setSideBar] = useState(false);

  return (
    <div onClick={() => setSideBar(false)}>
      <div id="home" className="home">
        <Header setSideBar={setSideBar} siderBar={siderBar} />
        <Hero />
      </div>
      <AboutSubscription />
      <Fade bottom>
        <Devices />
        <ForWhom />
        <Delivery />
      </Fade>
      <Questions />
      <Fade bottom>
        <Forbusiness />
      </Fade>

      <Footer />
    </div>
  );
}

export default Home;
