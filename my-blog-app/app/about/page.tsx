export const dynamic = "force-dynamic";

export default async function SSRpage() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const post = await res.json();

    return (
      <div>
        <h1 className="text-3xl font-bold mb-4 text-amber-600">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{post.name}</h2>
          <p className="text-gray-600 mb-2">Email: {post.email}</p>
          <p className="text-gray-600 mb-2">Phone: {post.phone}</p>
          <p className="text-gray-600">Website: {post.website}</p>
        </div>
      </div>
    );
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }
    return <div>Error: {message}</div>;
  }
}
