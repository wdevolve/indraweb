import Head from 'next/head'

const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />
  </Head>
)

export default SEO
