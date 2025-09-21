import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import React from 'react';
import { User } from '@/interfaces';

const Users: React.FC<{ posts: User[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;