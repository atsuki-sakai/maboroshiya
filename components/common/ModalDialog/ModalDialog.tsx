import React, { ReactElement, ReactNode, useEffect } from 'react'
import { Close } from '@components/icon'

import style from './ModalDialog.module.scss'

interface Props {
  show: boolean
  closeModal?: () => void
  children: ReactNode | ReactNode[]
  hideModal?: boolean
}

const ModalDialog = ({
  children,
  show,
  closeModal,
  hideModal = false,
}: Props) => {
  const handle = (e: any) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (show) {
      document.addEventListener('wheel', handle, { passive: false })
      document.addEventListener('touchmove', handle, { passive: false })
    }
    return () => {
      if (show) {
        document.removeEventListener('wheel', handle)
        document.removeEventListener('touchmove', handle)
      }
      window.removeEventListener('scroll', handle)
    }
  }, [show])
  return (
    <div className="relative">
      <div
        className={`${
          show
            ? !hideModal
              ? style.overlay
              : `${style.dark} ${style.overlay}`
            : style.hidden
        }`}
      >
        <div className={`${!hideModal ? style.modal_container : 'hidden'}`}>
          <div className={`${!hideModal ? style.modal_wrapper : 'hidden'}`}>
            {closeModal && (
              <div className={style.modal_header}>
                <button
                  className={style.close_button}
                  aria-label="Close Modal Button"
                  onClick={closeModal}
                >
                  <Close />
                </button>
              </div>
            )}
            {!hideModal ? children : null}
          </div>
        </div>
        {!hideModal ? null : children}
      </div>
    </div>
  )
}

export default ModalDialog
