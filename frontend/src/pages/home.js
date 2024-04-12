import React, { useEffect, useState } from "react";
import NotesDetail from "../components/notes-detail";
import NoteForm from "../components/note-form";

const Home = () => {
  const [notlar, setNotlar] = useState(null);
  const [noteError, setNoteError] = useState();

  // Function to fetch notes
  const fetchNotes = async () => {
    try {
      const response = await fetch("/api/v1/notes");
      const responseData = await response.json(); // Extract JSON data from response

      if (response.ok) {
        setNotlar(responseData.data); // Set notlar state with the data array
      } else {
        setNoteError(
          responseData.message || "An error occurred while fetching notes."
        );
        setNotlar([]); // Set notlar to an empty array
      }
    } catch (err) {
      console.error("Error fetching notes:", err);
      setNoteError("An error occurred while fetching notes.");
      setNotlar([]); // Set notlar to an empty array
    }
  };

  useEffect(() => {
    fetchNotes(); // Initial fetch when component mounts

    // Polling - Fetch notes every 5 seconds
    const intervalId = setInterval(fetchNotes, 1000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <div className="not-form">
        <NoteForm />
      </div>
      <div className="notlar">
        {notlar &&
          notlar.map((item) => <NotesDetail key={item._id} note={item} />)}
      </div>
    </div>
  );
};

export default Home;
