import React from 'react'
import { useRecoilState } from 'recoil'
import { drawerState } from '@recoil/ui/Drawer'
import style from './Drawer.module.scss'

const Drawer = () => {
  const [state, setState] = useRecoilState(drawerState)
  return <div>Drawer</div>
}

export default Drawer
