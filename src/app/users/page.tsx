type User = {
  id: string,
  name: string,
  email: string,
};

const getUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = response.json();
  console.log(users);
  return users;
}

const Page = async () => {
  const users = await getUsers();

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

