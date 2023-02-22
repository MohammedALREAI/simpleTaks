import Head from 'next/head'

import ProductDetails from '@/components/product-detials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple task </title>
        <meta
          name="description"
          content="Simple task for the interview"
        />
      </Head>
      <main>
       <ProductDetails/>
       </main>
    </>
  )
}
