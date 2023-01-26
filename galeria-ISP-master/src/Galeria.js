import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import "./Galeria.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import primeiraImg from "./imgs/primeiraFoto.svg"
import segundaImg from "./imagens/segundaFoto.svg"
import terceiraImg from "./imagens/terceiraFoto.svg"
import quartaImg from "./imagens/quartaFoto.svg"
import quintaImg from "./imagens/quintaFoto.svg"
import sextaImg from "./imagens/sextaFoto.svg"
import setimaImg from "./imagens/setimaFoto.svg"
import oitavaImg from "./imagens/oitavaFoto.svg"
import nonaImg from "./imagens/nonaFoto.svg"

export default function Galeria() {
  return (
    <>
      <div className="texth2">
        <h2 className="h2-text">Galeria</h2>
      </div>
    <div className="container-galeria">
      <Swiper
      modules={[ Navigation, Pagination ]}
      slidesPerView={3}
      spaceBetween={100}
      pagination={{ clickable: true}}
      >
        <SwiperSlide><img src={primeiraImg} alt="primeiraImg"/></SwiperSlide>
        <SwiperSlide><img src={segundaImg} alt="segundaImg"/></SwiperSlide>
        <SwiperSlide><img src={terceiraImg} alt="terceiraImg"/></SwiperSlide>
        <SwiperSlide><img src={quartaImg} alt="quartaImg"/></SwiperSlide>
        <SwiperSlide><img src={quintaImg} alt="quintaImg"/></SwiperSlide>
        <SwiperSlide><img src={sextaImg} alt="sextaImg"/></SwiperSlide>
        <SwiperSlide><img src={setimaImg} alt="setimaImg"/></SwiperSlide>
        <SwiperSlide><img src={oitavaImg} alt="oitavaImg"/></SwiperSlide>
        <SwiperSlide><img src={nonaImg} alt="nonaImg"/></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

