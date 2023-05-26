export interface Post {
  id: number;
  date: string;
  modified: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head_json: {
    author: string;
    og_image: {
      url: string;
      width: number;
      height: number;
    }[];
  };
}
