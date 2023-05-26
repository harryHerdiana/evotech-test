'use client';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { Post } from '@/lib/types/Post';
import { PostItemContent } from './PostPage.styled';
import {
  PostImageWrapper,
  PostItemTitle,
  PostItemWrapper,
} from '@/components/PostItem/PostItem.styled';

const getPostByID = async (id: number): Promise<Post> => {
  const data = await fetch(`https://evo.tech/wp-json/wp/v2/posts/${id}`);
  const post = await data.json();
  return post;
};

export default async function BlogPage({ params }: { params: { id: number } }) {
  const post = await getPostByID(params.id);

  return (
    <main className={styles.main}>
      <PostItemWrapper>
        {post.yoast_head_json.og_image.map((image) => (
          <PostImageWrapper key={post.id}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              alt={image.url}
              src={image.url}
            />
          </PostImageWrapper>
        ))}

        <PostItemTitle>{post.title.rendered}</PostItemTitle>
        <PostItemContent
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </PostItemWrapper>
    </main>
  );
}
