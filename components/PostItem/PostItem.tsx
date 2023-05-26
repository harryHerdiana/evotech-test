import { Post } from '@/lib/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import {
  PostImageWrapper,
  PostItemExceprt,
  PostItemLink,
  PostItemTitle,
  PostItemWrapper,
} from './PostItem.styled';

const PostItem: React.FC<Post> = (props: Post) => {
  const { id, yoast_head_json, title, excerpt } = props;
  return (
    <PostItemWrapper>
      {yoast_head_json.og_image.map((image) => (
        <PostImageWrapper key={id}>
          <Image
            fill
            style={{ objectFit: 'contain' }}
            alt={image.url}
            src={image.url}
          />
        </PostImageWrapper>
      ))}

      <PostItemTitle>{title.rendered}</PostItemTitle>
      <PostItemExceprt dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      <Link href={`blog/${id}`}>
        <PostItemLink>CONTINUE READING ...</PostItemLink>
      </Link>
    </PostItemWrapper>
  );
};

export default PostItem;
