import Head from 'next/head'
import { Hero, PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="container scroll-smooth mx-auto px-4 sm:px-10 mb-8">
      <Head>
        <title>Travelfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div id="blog" className="lg:col-span-8 col-span-1 mt-2">
          {posts.map((post, index) => <PostCard key={index} post={post.node} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>  
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts() || []);

  return {
    props: { posts }
  }
}
