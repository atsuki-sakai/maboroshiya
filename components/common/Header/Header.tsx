import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu } from '@components/icon'

import { useRecoilState } from 'recoil'
import { drawerState } from '@recoil/ui/Drawer'

import style from './Header.module.scss'

const Header = () => {
  const [state, setState] = useRecoilState(drawerState)
  return (
    <header className={style.header}>
      <div className={style.header_overlay_container}>
        <div className={style.background_image_container}>
          <Image
            className={style.background_image}
            src={'/images/14.webp'}
            width={1920}
            height={1080}
            alt="footer background image"
          />
          <div className={style.header_container}>
            <div className={style.header_wrapper}>
              <div className={style.header_container}>
                <h1>まぼろし屋</h1>
                <p>此処でしか味わえない旬を味わう。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.menu_container}>
        <button onClick={() => setState(!state)}>
          <Menu className={style.menu_icon} />
        </button>
      </div>
    </header>
  )
}

export default Header
