import React from "react";

const NotesDetail = ({ note }) => {
  return (
    <div className="not-detay">
      <h4>{note.title}</h4>
      <p>{note.description}</p>
      <p className="zaman">{note.createdAt}</p>
    </div>
  );
};

export default NotesDetail;
