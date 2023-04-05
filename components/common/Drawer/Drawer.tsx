import React from 'react'
import Link from 'next/link'
import { useRecoilState } from 'recoil'

import { drawerState } from '@recoil/ui/Drawer'
import style from './Drawer.module.scss'
import { Call, Close, Menu } from '@components/icon'

const Drawer = () => {
  const [state, setState] = useRecoilState(drawerState)
  return (
    <div
      className={`${
        state
          ? `${style.drawer} ${style.show}`
          : ` ${style.drawer} ${style.hide}`
      }`}
    >
      <div className={style.infomation}>
        <button aria-label="Drawer Close" onClick={() => setState(!state)}>
          <Close className={style.close_icon} />
        </button>
      </div>
      <div className={style.drawer_header}>
        <p>ようこそ まぼろし屋へ</p>
      </div>
      <div className={style.drawer_content}></div>
      <div className={style.drawer_content_wrapper}>
        <Link href={''}>
          <div className={style.drawer_menu}>
            <p>ホーム</p>
          </div>
        </Link>
        <Link href={''}>
          <div className={style.drawer_menu}>
            <p>ホーム</p>
          </div>
        </Link>
        <Link href={''}>
          <div className={style.drawer_menu}>
            <p>ホーム</p>
          </div>
        </Link>
        <Link href={''}>
          <div className={style.drawer_menu}>
            <p>ホーム</p>
          </div>
        </Link>
      </div>
      <div className={style.drawer_footer}>
        <Link href={'/'}>
          <div className={style.footer_infomation}>
            <Call className={style.call_icon} />
            <p>お問い合せはこちら</p>
          </div>
          <div className={style.address}>丹波篠山市山田-237</div>
        </Link>
      </div>
    </div>
  )
}

export default Drawer
