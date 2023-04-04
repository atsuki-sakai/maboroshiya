import React, { ReactNode } from 'react'

import { Header, Footer, Drawer, SplashScreen } from '@components/common'

import style from './Layout.module.scss'

interface Props {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <SplashScreen />
      <Header />
      <main className={style.root}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
