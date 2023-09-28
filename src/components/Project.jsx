import "./Project.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Project() {
  const [gitRepo, setGitRepo] = useState(null);

  useEffect(() => {
    Aos.init()

    fetch("https://api.github.com/users/eksa-arifa/repos")
    .then(res=>res.json())
    .then(data=>setGitRepo(data))
  }, []);

  return (
    <>
      <section className="project" id="project">
        <div className="left" data-aos="fade-right" data-aos-delay="500">
          <h2>Projects</h2>
          <div className="list">
            {(gitRepo != null)?gitRepo.map((e)=>{
                return (
                  <a key={e.id} href={e.html_url}>
                    {e.name}
                  </a>
                )
            }): ""}
          </div>
        </div>
        <div className="right" data-aos="flip-right" data-aos-duration="500">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpAKRdDow-48%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=506c52e49475795a0b4b4ecd67bdb3bf92f5948f989bdacbd8b5699dc7201e25&ipo=images"
            alt="Dark PP"
          />
        </div>
      </section>
    </>
  );
}
