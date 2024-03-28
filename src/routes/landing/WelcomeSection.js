import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../assets/images/welcome-section/Pink-Donut-PNG-Cutout.png'
import PizzaTwo from '../../assets/images/welcome-section/transparent-ice-cream-64a8e23a9fb484.8381703516887895626542.png'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo} alt="" className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -100
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne} alt="" className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 100
          }}
          transition={{ duration: 5 }}
        />
        <h2 className="txt-white">
       Bem vindo ao <span>Fora de serie</span> cafeteria
        </h2>
        <p>
        Bem-vindo à nossa cafeteria temática, onde a magia do cinema, dos desenhos e das séries ganha vida! Aqui, cada xícara de café é uma jornada pelos universos favoritos dos fãs. Nossa decoração transporta você para cenários icônicos, e nossa equipe apaixonada compartilha sua paixão por filmes, desenhos e séries enquanto serve os melhores cafés e petiscos inspirados em personagens e cenas famosas. Sinta-se em casa enquanto desfruta de comidas especiais como "Torta escocesa (pica pau)" ou "Hambúrguer de siri (Bob esponja)". Uma experiência única que combina a arte do café com a cultura pop, tudo em um ambiente acolhedor e descontraído. Venha viver a mágica conosco!
        </p>
      </section>
      <LazyLoadImage
    
      />
    </article>
  )
}

export default WelcomeSection;