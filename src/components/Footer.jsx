import React, { useEffect } from 'react'
import '../styles/components/footer.sass'
import AOS from 'aos'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"

const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer>
        <h2>
            &copy;{new Date().getFullYear()} - Desenvolvido por Henrique.
        </h2>
        <div id='social'>
          <div className="content-social">
            <a 
              href="https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.github.com/henriquemgoncalves" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
              >
              <FaGithub/>
            </a>
            <a 
              href="https://wa.me/5511940007976" 
              target='_blank'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              >
              <FaWhatsapp/>
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
