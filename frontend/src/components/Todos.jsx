export function Todos({ todos }) {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-gray-50 min-h-screen">
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-lg bg-white">
            <h1 className="text-2xl font-bold text-gray-700 mb-2 capitalize">
              {todo.title}
            </h1>
            <h2 className="text-md text-gray-600 mb-4">{todo.description}</h2>
            <button
              className={`px-4 py-2 rounded-md text-white transition ${
                todo.completed
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => {
                // Add a function to handle the completed status here
              }}>
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg">All todos</p>
      )}
    </div>
  );
}
