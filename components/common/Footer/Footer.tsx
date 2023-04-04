import React from 'react'

import style from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.background_image_container}>
        <Image
          className={style.background_image}
          src={'/images/3.webp'}
          width={1920}
          height={1080}
          alt="footer background image"
        />
      </div>
      <div className={style.footer_overlay}>
        <div className={style.footer_container}>
          <p className={style.footer_title}>まぼろし屋</p>
          <div className={style.footer_grid}>
            <div className={style.grid_item}>
              <ul>
                <li className={style.infomation_item}>
                  <p>所在地</p>
                  <span>丹波篠山市山田-237</span>
                  <p>郵便番号</p>
                  <span>669-2133</span>
                </li>
              </ul>
            </div>
            <div className={style.grid_item_2}>
              <p>MENU</p>
              <ul>
                <li>
                  <Link href={'/'}>全ての商品を見る</Link>
                </li>
                <li>
                  <Link href={'/'}>お問い合せ</Link>
                </li>
                <li>
                  <Link href={'/'}>よくある質問</Link>
                </li>
                <li>
                  <Link href={'/'}>利用規約</Link>
                </li>
                <li>
                  <Link href={'/'}>返金ポリシー</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
