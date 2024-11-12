import { useState } from 'react';

export const NewToDoForm = () => {
  const [newItem, setNewItem] = useState('');
  const [toDos, setToDos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    if (newItem) {
      setToDos((currentToDos) => {
        return [
          ...currentToDos,
          {
            id: crypto.randomUUID(),
            title: newItem,
            completed: false,
          },
        ];
      });

      setNewItem('');
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label htmlFor="new-item">Naujas įrašas</label>
        <input
          type="text"
          id="new-item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="bg-sky-300 text-slate-800 p-2 rounded-md"
        />
      </div>
      <button className="w-full bg-slate-500 p-2 rounded-md hover:bg-slate-800">
        Pridėti
      </button>
    </form>
  );
};
