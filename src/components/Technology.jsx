import React, { useEffect } from 'react'
import '../styles/components/technology.sass'
import AOS from 'aos'

const Technology = () => {

    useEffect(() => {
            AOS.init();
          }, [])

  return (
    <div id='tech'>
        <div className="content">
            <div className="text" data-aos="fade" data-aos-duration="1500">
                <h1>Utilizamos o que há de melhor em <span>Tecnologia</span>.</h1>
                <p>
                    Para isso, utilizamos as melhores tecnologias do mercado: HTML, CSS e JavaScript para estruturação e interatividade, ReactJS para aplicações dinâmicas, Sass e Styled Components para um design moderno e eficiente, SQL para armazenamento e gerenciamento de dados, e Figma para criação e prototipação de interfaces.
                </p>
            </div>
            
            <div className="slider" data-aos="fade" data-aos-duration="2000">
                <div className="list-tech">
                    <div className="item"><img src='/skills/html.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/css.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/javascript.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/sass.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/react.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/styled.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/mysql.png' alt='Logo Skills' /></div>
                    <div className="item"><img src='/skills/figma.png' alt='Logo Skills' /></div>
                </div>
            </div> 
        </div>   
    </div>
  )
}

export default Technology
