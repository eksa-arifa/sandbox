import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Contact() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <section className="contact" id="contact">
      <div className="left" data-aos="flip-left" data-aos-duration="500">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F13%2F68%2F93136842d12d5865931e2950d351c81a.png&f=1&nofb=1&ipt=e831d881f942fd1cbe948547880a0b1ee82ffae16461ec824e60b0e83ba90eae&ipo=images" alt="PP DARK COY" />
                </div>
                <div className="right" data-aos="fade-left" data-aos-delay="500">
                    <h2>Contact</h2>
                    <p>Email: eksaarifa@gmail.com</p>
                </div>
      </section>
    </>
  );
}
