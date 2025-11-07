
import Link from 'next/link'
async function getPost(id: string) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      
      console.log(`Failed to fetch post ${id}, status: ${res.status}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Network error fetching post:', error);
    return null;
  }
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
  let post;
  
  try {
    post = await getPost(params.id);
  } catch (error) {
    post = null;
  }

  
  if (!post) {
    return (
      <div>
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to all posts
          </Link>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-2">{params.id}</p>
          <p className="text-gray-500 text-sm">This might be because the post doesnot exist or there was a network error.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to all posts
        </Link>
      </div>
      
      <article className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <span>Post ID: {post.id}</span>
          <span>•</span>
          <span>By User #{post.userId}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Technology</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Web Development</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Next.js</span>
          </div>
        </div>
      </article>
    </div>
  );
}