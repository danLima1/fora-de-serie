import { Link } from "react-router-dom";
import React from 'react'
import { motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from '../../assets/images/hero/bob-esponja-31.mp4';

const Hero = () => {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video" >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <section className="header-info flex-container flex-column txt-center pop-font txt-white">
        <motion.div
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <span>Bem vindo!</span>
          <h1 className="txt-white">Experimente nossos produtos</h1>
          <p className="txt-white">
          Veja nossos produtos abaixo
          </p>
        </motion.div>

        <div className="header-btns flex-container flex-row">

          <Link className=" passive-button-style  " to="/menu">
           Ver Cardapio
          </Link>
        </div>
      </section>

    </section>

  );
}

export default Hero;