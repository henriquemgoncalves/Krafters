import React, { useEffect } from 'react'
import '../styles/components/service.sass'
import { LiaLaptopCodeSolid } from "react-icons/lia"
import { FiShoppingCart } from "react-icons/fi"
import { BiMessageSquareDetail } from "react-icons/bi"
import { IoIosTrendingUp } from "react-icons/io"
import { MdOutlineDesignServices } from "react-icons/md"
import AOS from 'aos'

const jobs = [
    {id: 1, icon: <LiaLaptopCodeSolid size={50} color='#078ed0'/>, title: "Desenvolvimento de sites institucionais e landing pages", description: '"Dê uma identidade digital profissional ao seu negócio com um site que impressiona e converte."'},
    {id: 2, icon: <FiShoppingCart size={50} color='#078ed0'/>, title: "Criação de e-commerces funcionais e intuitivos", description: '"Venda mais com uma loja virtual rápida, segura e otimizada para a melhor experiência do usuário."'},
    {id: 3, icon: <BiMessageSquareDetail size={50} color='#078ed0'/>, title: "Desenvolvimento de blogs e portfólios profissionais", description: '"Destaque seu trabalho ou compartilhe seu conhecimento com um site feitopara engajar e crescer."'},
    {id: 4, icon: <IoIosTrendingUp size={50} color='#078ed0'/>, title: "Otimização de SEO para melhor posicionamento no Google", description: '"Melhoramos sua visibilidade e colocamos seu site no topo das buscas."'},
    {id: 5, icon: <MdOutlineDesignServices size={50} color='#078ed0'/>, title: "Web design e prototipação no Figma", description: '"Criamos layouts modernos e estratégicos para garantir que seu site seja visualmente incrivel e funcional"'},
]

const Service = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div id='services'>
        <div className="content">
            <div data-aos="fade-left" data-aos-duration="1000" className="text-title">
                <h1>Nosso <span>Trabalho</span></h1>
                <h3>Construindo sonhos e relações duradouras.</h3>
                <p>Unimos tecnologia e criatividade para oferecer soluções digitais completas. Criamos sites modernos, responsivos e personalizados, focados na identidade do seu negócio e na melhor experiência para seus clientes.</p>
            </div>

            {jobs.map((job) => (
                <div data-aos="fade-left" data-aos-duration="1000" key={job.id} className="jobs">
                    <>{job.icon}</>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                </div> 
            ))}
                      
        </div>      
    </div>
  )
}

export default Service