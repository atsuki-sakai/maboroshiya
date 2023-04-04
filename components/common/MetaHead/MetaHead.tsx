import React, { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title?: string
  description?: string
  url?: string
  ogImgPath?: string
  type?: string
  siteName?: string
  children?: ReactNode | ReactNode[]
}

const MetaHead = ({
  title = 'boiler template',
  description = '',
  ogImgPath = '',
  url = '',
  type = 'website',
  siteName = '',
  children,
}: Props) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url + router.asPath}></link>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url + router.asPath} />
      <meta property="og:image" content={ogImgPath} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content={url.split('://')[1]} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgPath} />
      <meta name="thumbnail" content={ogImgPath} />
      <meta property="fb:app_id" content="" />
      {children && children}
    </Head>
  )
}

export default MetaHead
