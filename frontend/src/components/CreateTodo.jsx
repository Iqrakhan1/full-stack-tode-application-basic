import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col items-center p-6">
      <input
        required
        className="border-2 border-gray-300 p-3 rounded-lg mb-4 w-full max-w-md"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        required
        className="border-2 border-gray-300 p-3 rounded-lg mb-4 w-full max-w-md"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-green-500 text-white p-3 rounded-lg w-full max-w-md hover:bg-green-600 transition-colors"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: { "Content-type": "application/json" },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added");
          });
        }}>
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
