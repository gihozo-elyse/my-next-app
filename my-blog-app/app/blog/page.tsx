export const dynamic = "auto"; 

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const posts: Post[] = await res.json();
  return posts.slice(0, 10);
}

export default async function Blog() {
  let posts: Post[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return (
      <div className="text-center py-8">
        <p className="text-sm text-gray-500 mt-2">Error: {message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <article key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
          </article>
        ))}
      </div>
    </div>
  );
}
