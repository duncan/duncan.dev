import Head from 'next/head'
import Link from 'next/link'
import { Site } from '../lib/site'
import { Content, ContentCollectionProps } from '../lib/content'
import { GetStaticPropsResult } from 'next'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import PhotoArticle from '../components/photoArticle'
import LinkArticle from '../components/linkArticle'

export default function Home(props: ContentCollectionProps) {
  return (
    <Layout home>
      <Head>
        <title>Duncan Davidson</title>
      </Head>

      {/* <header className="container mx-auto max-w-xl pt-12 px-4">
        <div className="text-5xl pb-4"></div>
        <h1 className="text-4xl font-extrabold">Duncan Davidson</h1>
  
      </header> */}
      {/* 
      <section className="container prose mx-auto max-w-xl pt-6 px-4">
        <h2>
          Software developer, photographer, and author. American immigrant
          living in Berlin, Germany.
        </h2>
      </section> */}

      {props.collection.map((content) => {
        switch (content.type) {
          case 'link': {
            return LinkArticle({ content: content, home: true })
          }
          case 'photo': {
            return PhotoArticle({ content: content, home: true })
          }
          default: {
            return TextArticle({ content: content, home: true })
          }
        }
      })}
    </Layout>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let propsCollection = await Promise.all(
    Site.instance()
      .latestContent(10)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
