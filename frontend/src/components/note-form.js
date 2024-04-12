import React, { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const not = { title, description };
    const response = await fetch("/api/v1/notes", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      console.log("Yeni bir not eklendi", json);
    }

    if (!response.ok) {
      const errorMessage = json.error || "Title is required !!!";
      setError(errorMessage);
      console.error("Error:", errorMessage);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3 className="form-title">Add a New Note</h3>
      <div className="create-group">
        <div>
          <label className="form-subtitle"> Note title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="form-subtitle"> Note description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NoteForm;
