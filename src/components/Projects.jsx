import React, { useEffect } from 'react'
import '../styles/components/projects.sass'
import { FaRegFileCode, FaRegUser } from "react-icons/fa"
import { MdMobileFriendly } from "react-icons/md"
import AOS from 'aos'

const Projects = () => {

    useEffect(() => {
            AOS.init();
          }, [])

  return (
    <div id='projects'>
        <div className="content">
            <div className="item" data-aos="fade-right" data-aos-duration="1500">
                <FaRegFileCode size={40} color='#078ed0'/>
                <h1>+700</h1>
                <p>Projetos</p>
            </div>
            <div className="item" data-aos="fade-right" data-aos-duration="1500">
                <MdMobileFriendly size={40} color='#078ed0'/>
                <h1>+450</h1>
                <p>APPS criados</p>
            </div>
            <div className="item" data-aos="fade-right" data-aos-duration="1500">
                <FaRegUser size={40} color='#078ed0'/>
                <h1>+300</h1>
                <p>Clientes</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
