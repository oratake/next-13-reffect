import { Suspense } from 'react';
import UserList from './UserList';
import OtherUserList from './OtherUserList';

export const metadata = {
  title: 'ユーザの一覧ページ',
  description: 'JSONPlaceHolderからユーザ一覧を取得するページ',
};

const Page = async () => {

  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John',
      email: 'john@example.com',
    }),
  });

  const data = await response.json();

  console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p className="text-red-700">Loading UserList...</p>}>
        <UserList />
      </Suspense>
      <Suspense fallback={<p>Loading OtherUserList...</p>}>
        <OtherUserList />
      </Suspense>
    </div>
  );
};

export default Page;
