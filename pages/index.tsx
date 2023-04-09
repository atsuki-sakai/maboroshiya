import React, { useEffect } from 'react'
import style from '@styles/pages/home.module.scss'
import Image from 'next/image'

import '@splidejs/react-splide/css'

import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Home() {
  return (
    <div className={style.root}>
      <div className={style.splide_container}>
        <div className={style.splide_overlay}>
          <div className={style.splide_overlay_container}>
            <p>味わってみませんか？</p>
            <p>本場の黒枝豆</p>
            <p>丹波篠山の</p>
          </div>
        </div>
        <Splide
          options={{ autoplay: true, speed: 2000, rewind: true, arrows: false }}
        >
          <SplideSlide>
            <Image
              className={style.slide_image}
              src={'/images/2.webp'}
              width={1920}
              height={1080}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={style.slide_image}
              src={'/images/3.webp'}
              width={1920}
              height={1080}
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={style.slide_image}
              src={'/images/4.webp'}
              width={1920}
              height={1080}
              alt=""
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className={style.product_description_container}>
        <Image
          className={style.product_image}
          src={'/images/15.webp'}
          width={1920}
          height={1080}
          alt=""
        />
        <div className={style.product_description_container_overlay}>
          <div className={style.prodct_description_container_overlay_wrapper}>
            <span>まぼろし屋のこだわり。</span>
            <p>
              「わら一本の革命」「自然農法」「砂漠の緑化」
              「マグサイサイ賞受賞」
              世界が共鳴した農哲学は、千年先を見据えた灯。
              筆舌に尽くしがたい正信の軌跡は、
              今なお刻々と移り行く時代においても
              脈動として止まることを知らない。 詳 し く は こ ち ら
            </p>
          </div>
        </div>
      </div>
      <div>HELLOW</div>
    </div>
  )
}
