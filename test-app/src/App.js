import React, { useState } from "react";
const axios = require("axios");
import "./App.css";

function App() {
  async function sendPostRequest() {
    const postData = {
      title,
      body,
      author,
    };
    try {
      const response = await axios.post("http://localhost:5000/blog", postData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="App">
      <form>
        <div>
          <label>Enter The Title: </label>
          <input
            name="title"
            type="Text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Enter The Body Text: </label>
          <input
            name="body"
            type="Text"
            placeholder="Enter the body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label>Enter The Author: </label>
          <input
            name="author"
            type="Text"
            placeholder="Enter the author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button onClick={sendPostRequest}>Sumbit & Fetch</button>
      </form>
    </div>
  );
}

export default App;
