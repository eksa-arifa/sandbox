import { GitHub, Instagram } from "react-feather"
import "./Home.css"


export default function Home(){
    return (
        <>
            <section className="home" id="home">
                <div className="inviso"></div>
                <div className="text-section">
                    <h2>Sugeng Rawuh Sepuh!!!</h2>
                    <p>Dengan hormat saya sambut sepuh-sepuh sekalian. Mohon maaf kalau masih banyak kekurangan puh, aku mah masih pemula. Ini bukan portfolio, ini hanya tempatku bersenang-senang dan mengasah skill.</p>
                    <div className="link">
                        <a href="#">
                            <GitHub/>
                        </a>
                        <a href="#">
                            <Instagram/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}