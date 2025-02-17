import React, { useEffect } from 'react'
import '../styles/components/banner.sass'
import AOS from 'aos'

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section>
        <video playsInline autoPlay loop muted>
            <source src="/video/bg-banner.mp4" type="video/mp4"/>
        </video>
        <div className="content" >
            <h1 data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-sine">Desenvolvemos sua presença digital com estratégia e criatividade.</h1>
            <h3 data-aos="fade" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                Criamos experiências digitais memoráveis para sua marca. Desenvolvimento web 
                que une <span>beleza, funcionalidade e performance.</span> 
            </h3>
        </div>
    </section>
  )
}

export default Banner
