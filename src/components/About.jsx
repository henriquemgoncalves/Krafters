import React, { useEffect } from 'react'
import '../styles/components/about.sass'
import AOS from 'aos'

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div id='about'>
        <section className='about-section'>
            <div className="overlay"></div>
        </section>
        <section className='about-section'>
            <div className="info" id='about-info' data-aos="fade-up" data-aos-duration="2000">
                <h2>Sobre <span>Nós</span></h2>
                <p>
                    Somos apaixonados por transformar ideias em experiências digitais incríveis. Acreditamos que um site não é apenas uma página na internet, mas a identidade digital de um negócio. Por isso, combinamos design moderno, tecnologia e estratégia para criar sites que não só impressionam visualmente, mas também geram resultados.
                <br></br><br></br>
                    Nosso compromisso é desenvolver soluções personalizadas, responsivas e otimizadas para que sua marca se destaque no mundo digital. Seja para pequenos negócios, empreendedores ou grandes empresas, entregamos projetos que unem criatividade, funcionalidade e performance.
                    <br></br><br></br>
                    Se você busca um site profissional que realmente represente seu negócio, está no lugar certo. Vamos juntos construir sua presença online e levar sua marca para o próximo nível!
                </p>
            </div>
        </section>
        <section className='about-section'>
            <div className="overlay"></div>    
        </section>     
    </div>
  )
}

export default About
