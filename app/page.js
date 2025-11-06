import Counter from "./components/Counter";
import Users from "./components/Users";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">🧠 JavaScript Playground</h1>
      <ul className="space-y-2 list-disc pl-5">
        <li>
          <a className="text-blue-500 hover:underline" href="/this">
            this keyword
          </a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline" href="/closures">
            closures
          </a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline" href="/async">
            async & promises
          </a>
        </li>
      </ul>
      <Users />
    </main>
  );
}
