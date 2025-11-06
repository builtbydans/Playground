"use client";

export default function ThisExamples() {
  const person = {
    name: "Nosheen",
    regular() {
      console.log("Regular function:", this.name);
    },
    arrow: () => {
      console.log("Arrow function:", this?.name);
    },
  };

  return (
    <div className="space-x-4">
      <button
        className="px-3 py-2 bg-blue-600 text-white rounded"
        onClick={() => person.regular()}
      >
        Regular
      </button>
      <button
        className="px-3 py-2 bg-green-600 text-white rounded"
        onClick={() => person.arrow()}
      >
        Arrow
      </button>
    </div>
  );
}
