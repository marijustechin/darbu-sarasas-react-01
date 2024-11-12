import { useState } from 'react';
import { NewToDoForm } from './components/NewToDoForm';

function App() {
  const [toDos, setToDos] = useState([]);

  let checkedClass = 'flex gap-1';

  function toggleCheck(id, completed) {
    if (completed) {
      checkedClass = 'flex gap-1 font-semibold';
    } else {
      checkedClass = 'flex gap-1';
    }
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <main className="bg-slate-700 text-gray-300 p-10">
      <h1 className="uppercase drop-shadow-lg font-semibold text-3xl">
        Turimų atlikti darbų sąrašas
      </h1>
      <NewToDoForm />
      <h1 className="text-2xl my-2">Neatlikti darbai</h1>
      {toDos.length === 0 && <p>Darbų nėra</p>}
      <ul className="flex flex-col gap-2">
        {toDos.map((todo) => {
          return (
            <li key={todo.id} className="flex gap-2">
              <label className={`${checkedClass}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleCheck(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteToDo(todo.id)}
                className="border-slate-400 border-[1px] px-1 rounded-md text-rose-400 hover:border-rose-500"
              >
                Ištrinti
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
