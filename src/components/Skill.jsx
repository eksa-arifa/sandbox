import "./Skill.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export function Skill(){
    useEffect(()=>{
        Aos.init()
    }, [])
    return(
        <>
            <section className="skill" id="skill">
                <div className="left" data-aos="flip-left" data-aos-duration="500">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdivedigital.id%2Fwp-content%2Fuploads%2F2022%2F07%2F17-Anime-Keren-Tersenyum-Tipis.jpg&f=1&nofb=1&ipt=6ab9f4510bdb0d333f978af912d1612b2bad01a45580d27d7473875f7343cc88&ipo=images" alt="PP DARK COY" />
                </div>
                <div className="right" data-aos="fade-left" data-aos-delay="500">
                    <h2>Skill And Tools</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Codeigniter</li>
                        <li>Laravel</li>
                        <li>ReactJS</li>
                        <li>Linux(Ubuntu, Debian)</li>
                        <li>NextJS</li>
                        <li>Flutter</li>
                        <li>Git</li>
                        <li>MySql</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                        <li>Postman</li>
                        <li>VSCode</li>
                    </ul>
                </div>
            </section>
        </>
    )
}