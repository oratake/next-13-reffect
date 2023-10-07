import prisma from '@/lib/prisma';
import { Post } from '@prisma/client';
import AddPost from './AddPost';

const Page = async () => {
  const response = await fetch('http://localhost:3000/api/posts');
  const apiPosts: Post[] = await response.json();

  const posts = await prisma.post.findMany();

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">記事一覧</h1>
      <h2>prisma直で取得</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>APIから取得</h2>
      <ul>
        {apiPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <AddPost />
    </div >
  );
}

export default Page;
