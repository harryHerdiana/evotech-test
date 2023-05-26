'use client';
import styles from './page.module.css';
import { Post } from '@/lib/types/Post';
import PostItem from '@/components/PostItem/PostItem';

const getAllPosts = async (): Promise<[Post]> => {
  const data = await fetch('https://evo.tech/wp-json/wp/v2/posts');
  const posts = await data.json();
  return posts;
};

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className={styles.main}>
      {posts.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </main>
  );
}
