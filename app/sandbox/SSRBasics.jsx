/*
Finish the Next.js page so that it fetches posts server-side from
https://jsonplaceholder.typicode.com/posts?_limit=5
and renders titles.
*/

export default function Home({ posts }) {
  return (
    <div>
      <h1>Latest Posts</h1>
      {/* render post titles */}
    </div>
  );
}

// implement getServerSideProps()
