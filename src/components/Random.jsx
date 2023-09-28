import { useEffect, useState } from "react"
import "./Random.css"
import Aos from "aos";
import "aos/dist/aos.css"


export default function Random(){
    const [active, setActive] = useState([false, false, false])


    function togleBro(p){
        if(p == 1){
            setActive([true, false, false])
        }else if(p == 2){
            setActive([false, true, false])
        }else{
            setActive([false, false, true])
        }
    }

    useEffect(()=>{
        Aos.init()
    }, [])



    return (
        <>
            <section className="random">
                <h2>Random (Top 3 Anime Favoritku {"(Musim Ini)"})</h2>
                <div className="flex">
                    <div className={`card ${(active[0])? "active" : ""}`} onClick={()=>togleBro(1)}>
                        <img src="https://otakudesu.wiki/wp-content/uploads/2023/07/136728.jpg" alt="thumb" />
                        <div className="bukaan">
                            {">"}
                        </div>
                        <div className="detail">
                            <div className="judul"><a href="https://animazaa.vercel.app/detail/mushoku-tensi-s2-sub-indo">Mushoku Tensei II: Isekai Ittara Honki Dasu</a></div>
                            <div className="alasan">
                                karena, menurut saya alurnya lumayan bagus, walaupun kental dengan genre ec*i nya
                                tapi itulah yang membuat anime ini terkesan tidak munafik.
                            </div>
                        </div>
                    </div>
                    <div className={`card ${(active[1])? "active" : ""}`} onClick={()=>togleBro(2)}>
                        <img src="https://otakudesu.wiki/wp-content/uploads/2021/10/Takt-Op.-Destiny-Sub-Indo.jpg" alt="thumb" />
                        <div className="bukaan">
                            {">"}
                        </div>
                        <div className="detail">
                            <div className="judul"><a href="https://animazaa.vercel.app/detail/takt-destiny-sub-indo">Takt Op. Destiny</a></div>
                            <div className="alasan">
                                Saya suka alurnya, penuh dengan drama dan adegan action yang menurut saya dikemas dengan sangat baik,
                                namun ada hal yang tidak saya suka dari anime ini, yaitu endingnya yang menurut saya kurang bisa dinikmati bagi penikmat
                                happy ending.
                            </div>
                        </div>
                    </div>
                    <div className={`card ${(active[2])? "active" : ""}`} onClick={()=>togleBro(3)}>
                        <img src="https://otakudesu.wiki/wp-content/uploads/2023/07/136277.jpg" alt="thumb" />
                        <div className="bukaan">
                            {">"}
                        </div>
                        <div className="detail">
                            <div className="judul"><a href="https://animazaa.vercel.app/detail/hiroya-piece-sub-indo">Horimiya: Piece</a></div>
                            <div className="alasan">
                                Anime romance terbaik yang pernah saya tonton, dengan genre romance komedi tanpa drama,
                                cocok ditonton dikala galau dan gabut.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}