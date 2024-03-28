import React from 'react'
//375px
import ImgOne375 from '../../assets/images/landing-gallery/FOTO-1-2-1-1024x768 (1).jpeg'
import ImgTwo375 from '../../assets/images/landing-gallery/Red-Coffee-Pinheiros_Ambiente_Marcio-Hirosse20.webp'
import ImgThree375 from '../../assets/images/landing-gallery/black-lake-harry-potter-metepec-1.jpg'
import ImgFour375 from '../../assets/images/landing-gallery/scooby-doo-lanches.jpg'
//700
import ImgOne700 from '../../assets/images/landing-gallery/FOTO-1-2-1-1024x768 (1).jpeg'
import ImgTwo700 from '../../assets/images/landing-gallery/Red-Coffee-Pinheiros_Ambiente_Marcio-Hirosse20.webp'
import ImgThree700 from '../../assets/images/landing-gallery/black-lake-harry-potter-metepec-1.jpg'
import ImgFour700 from '../../assets/images/landing-gallery/scooby-doo-lanches.jpg'

const Gallery = () => {
  return (
    <article className="gallery flex-container flex-column">
      <img
        src={ImgOne375}
        srcSet={` ${ImgOne700} 700w, ${ImgOne375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
      />
      <img
        src={ImgTwo375}
        srcSet={` ${ImgTwo700} 700w, ${ImgTwo375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
      />
      <img
        src={ImgThree375}
        srcSet={` ${ImgThree700} 700w, ${ImgThree375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
      />
      <img
        src={ImgFour375}
        srcSet={` ${ImgFour700} 700w, ${ImgFour375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
      />
    </article>
  )
}

export default Gallery
