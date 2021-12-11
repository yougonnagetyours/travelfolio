import React from 'react'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components'
 
const PostDetails = ({ post }) => {

  console.log(post)  

  return (
    <div className=''>
      
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
        fallback: true,
    }
}
