import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module'
import { RecoilRoot } from 'recoil'

import { Layout } from '@components/common'

const GTM_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID || ''

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Google Analytics
    TagManager.initialize({ gtmId: GTM_TRACKING_ID })
  }, [router.events])
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
