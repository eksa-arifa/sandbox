import "./About.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function About(){
    useEffect(()=>{
        Aos.init()
    }, [])
    return(
        <>
        <section className="about" id="about">
            <div className="left" data-aos="fade-right" data-aos-delay="500">
                <h2>About Me</h2>
                <p>Izinkan saya memperkenalkan diri terlebih dahulu kepada para sepuh sekalian. Nama saya Muhammad Eksa Arifa,
                    saya tinggal di Yogyakarta, saat ini saya sedang mengenyam pendidikan di SMK jurusan RPL(Rekayasa Perangkat Lunak) atau 
                    bahasa kerennya Software Engineering. Sejak masih SMP dulu lebih tepatnya pada masa pandemi covid 19 yang melanda hampir
                    seluruh dunia. Saya mulai tertarik dengan dunia pemrogramman, bukan tanpa alasan yang waktu itu saya sedang 
                    merasa bosan nggak tau lagi mau ngapain di beranda youtube saya tiba-tiba lewat video yang berjudul "10 Kesalahan Programmer Pemula"
                    dari channel WPU(Web Programming Unpas). Rasa penasaran saya pun muncul dan entah kenapa saya klik video tersebut dan menontonnya hingga akhir.
                    Sejak saat itulah saya mulai tertarik untuk mempelajari pemrogramman web dari channel tersebut. Saya sangat berterimakasih kepada beliau,
                    karena tanpa beliau mungkin sampai saat ini saya hanya orang biasa yang gaptek dan asing dengan teknologi. Saya ucapkan terimakasih
                    juga pada pandemi covid 19 yang secara tidak langsung memberi saya tujuan hidup baru yaitu menjadi seorang Programmer handal. Sekian perkenalan dari Saya
                    mohon maaf kalau terlalu panjang. Baru kali ini saya niat ngetik sepanjang ini entah kenapa haha. Baiklah silakan lanjut scroll, hal menarik lainnya masih menunggu
                    dibawah sana.
                </p>
            </div>
            <div className="right" data-aos="flip-right" data-aos-duration="500">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fde%2F03%2F03%2Fde030344490cd0b0906295787e4eea50.jpg&f=1&nofb=1&ipt=114295bd3d4f1b8462fd2bb13434b9e8294897fc5c3307c459f1dfa0290b3485&ipo=images" alt="Logo" />
            </div>
        </section>
        </>
    )
}