import React, { useState } from "react";

function StreamList() {
  // State to store user input and the list of events
  const [userInput, setUserInput] = useState("");
  const [events, setEvents] = useState([]);
  
  // Handle the form submit (add an event)
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the page from refreshing
    
    // Input validation: Check if the input is not empty
    if (userInput.trim() === "") {
      alert("Please enter a valid event!");
      return;
    }
    
    // Add the event to the list and clear the input
    setEvents([...events, userInput]);
    setUserInput("");  // Clear the input field
  };

  // Handle the change in the input field
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="stream-list">
      <h1>StreamList</h1>

      {/* Form for input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter an event"
        />
        {/* Add Event button with Font Awesome icon */}
        <button type="submit">
          <i className="fa fa-plus"></i> Add Event
        </button>
      </form>

      {/* List of events */}
      <div className="event-list">
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StreamList;
