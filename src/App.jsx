import React, { useState, useContext } from "react";

import { GlobalContext } from "./store/Provider";
import { addBook, removeBook, updateBook } from "./store/actions/books";

function App() {
  const [form, setForm] = useState({
    title: "",
    author: "",
  });

  const [update, setUpdate] = useState({
    title: "",
    author: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const { booksState, booksDispatch } = useContext(GlobalContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addBook(form)(booksDispatch);
    setForm({
      title: "",
      author: "",
    });
  };

  const handleRemove = (id) => {
    removeBook(id)(booksDispatch);
  };

  const updateClickHandler = (book) => {
    setIsOpen(true);
    setUpdate({ ...book });
  };

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    updateBook(update)(booksDispatch);
    setUpdate({
      title: "",
      author: "",
    });
    setIsOpen(false);
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="Book title"
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Book author"
          name="author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <br />

      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Remove</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {booksState.books.list.map((book) => (
            <tr key={`book-${book.id}`}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td onClick={() => handleRemove(book.id)}>🗑</td>
              <td onClick={() => updateClickHandler(book)}>✏️</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      {isOpen && (
        <form onSubmit={updateSubmitHandler}>
          <input
            placeholder="Book title"
            name="title"
            value={update.title}
            onChange={(e) => setUpdate({ ...update, title: e.target.value })}
          />
          <input
            placeholder="Book author"
            name="author"
            value={update.author}
            onChange={(e) => setUpdate({ ...update, author: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
      )}
    </main>
  );
}

export default App;
