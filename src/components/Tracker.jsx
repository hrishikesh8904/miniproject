import React, { useState } from "react";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
function Tracker() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNode(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Navbarcmp active="tracker"></Navbarcmp>
      <div className="tracker-one">
        <div className="tracker-one-1">
          <h1>One Day at a Time</h1>
          <h3>Set Small Goals, To achieve Bigger Goals</h3>
        </div>
        <img src="tracker.webp" alt="" />
      </div>
      <div className="tracker-two">
        <h1>Track Your Day</h1>
      </div>
      <div className="tracker-three">
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNode}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Tracker;
