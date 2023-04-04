import React, { ReactNode } from 'react'

import { Header, Footer, Drawer, SplashScreen } from '@components/common'

import style from './Layout.module.scss'

interface Props {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className={style.root}>
      <SplashScreen />
      <Header />
      <main>{children}</main>
      <Footer />
      <Drawer />
    </div>
  )
}

export default Layout
