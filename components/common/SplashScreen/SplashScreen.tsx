import React from 'react'

import style from './SplashScreen.module.scss'

const SplashScreen = () => {
  return (
    <div id="splash_screen" className={style.splash_screen}>
      <div className={style.container}>
        <div className={style.wrapper}>Splash Screen</div>
      </div>
    </div>
  )
}

export default SplashScreen
