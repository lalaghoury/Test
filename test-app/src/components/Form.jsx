import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Onion Rings",
      username: "Alex Martin",
      image:
        "https://i.ibb.co/Fs5k7RD/s-homepage-recipe-row-36700-erin-me-1384569-a-93-f-4-fde-a-6-ce-3-e-21-b-69-b-04-fa-1.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage:
        "https://i.ibb.co/0rWTFWF/s-homepage-person-s-hand-holding-alarm-clock-hand-breakfast-table-min-1.png",
      blogheading: "Unlocking the Benefits of Intermittent Fasting for ",
      blogslogan:
        "Weight Management and Health Weight Management and Health Weight   ...",
      categoryimage: "https://i.ibb.co/kyrjVm3/s-homepage-ellipse-26.png",
      categoryname: "Breakfast recipes",
    },
    {
      id: 2,
      name: "Italian Pastry",
      username: "Aasil Ghoury",
      image: "https://i.ibb.co/HCgKfxk/f.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage:
        "https://i.ibb.co/68b21J7/s-homepage-wepik-export-20230925201745-jeb-61.png",
      blogheading: "Unlocking the Benefits of Intermittent Fasting for ",
      blogslogan: " Unveiling the Hidden Dangers ....",
      categoryimage: "https://i.ibb.co/ThVCNby/s-homepage-ellipse-27.png",
      categoryname: "Lunch recipes",
    },
    {
      id: 3,
      name: "Chicken Rolls",
      username: "Zaki Ghoury",
      image: "https://i.ibb.co/r4kLgx3/c.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/44M81Jt/s-homepage-ellipse-28.png",
      categoryname: "Dinner recipes",
    },
    {
      id: 4,
      name: "Omlet + Sandwitch",
      username: "Ali Usman",
      image: "https://i.ibb.co/0KBZMGF/a.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/S5hNd65/s-homepage-ellipse-29.png",
      categoryname: "Appetizer recipes",
    },
    {
      id: 5,
      name: "Vegg Rolls",
      username: "Ms. Amalia Shields",
      image: "https://i.ibb.co/Vw4dGyT/d.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/mtPPMy4/s-homepage-ellipse-30.png",
      categoryname: "Salad recipes",
    },
    {
      id: 6,
      name: "Indian Style",
      username: "M.Beahan",
      image: "https://i.ibb.co/FHC3cJj/aa.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/r5Lv90t/s-homepage-ellipse-32.png",
      categoryname: "Pizza recipes",
    },
    {
      id: 7,
      name: "",
      username: "",
      image: "",
      userimage: "",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/0mtrZJ5/s-homepage-ellipse-31.png",
      categoryname: "Smooothie recipes",
    },
    {
      id: 8,
      name: "",
      username: "",
      image: "",
      userimage: "",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/m5YDmdL/s-homepage-ellipse-33.png",
      categoryname: "Pasta recipes",
    },
    {
      id: 9,
      name: "",
      username: "",
      image: "",
      userimage: "",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "",
      categoryname: "Pasta recipes",
    },
  ]);

  const [recipeId, setRecipeId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [userimage, setUserimage] = useState("");
  const [blogimage, setBlogimage] = useState("");
  const [blogheading, setBlogheading] = useState("");
  const [blogslogan, setBlogslogan] = useState("");
  const [categoryimage, setCategoryimage] = useState("");
  const [categoryname, setCategoryname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPostRequest();
  };
  async function sendPostRequest() {
    const postData = {
      name,
      username,
      image,
      userimage,
      blogimage,
      blogheading,
      blogslogan,
      categoryimage,
      categoryname,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/recipe",
        postData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  async function sendGetRequest() {
    try {
      const response = await axios.get(
        `http://localhost:5000/recipe/${recipeId}`
      );
      console.log(`sendGetRequest worked`);
      console.log(response.data);
      setRecipeId("");
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  async function sendDeleteRequest() {
    const recipe = await sendGetRequest();
    console.log(`recipe: `, recipe);
    console.log(`recipe Id: `, recipe._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/recipe/${recipe._id}`
      );
      console.log(`after delete`, response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">username</label>
        <input
          type="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="userimage">User Image URL</label>
        <input
          type="text"
          id="userimage"
          name="userimage"
          value={userimage}
          onChange={(e) => setUserimage(e.target.value)}
        />
        <label htmlFor="blogimage">Blog Image URL</label>
        <input
          type="text"
          id="blogimage"
          name="blogimage"
          value={blogimage}
          onChange={(e) => setBlogimage(e.target.value)}
        />
        <label htmlFor="blogheading">blogheading</label>
        <input
          type="text"
          name="blogheading"
          id="blogheading"
          value={blogheading}
          onChange={(e) => setBlogheading(e.target.value)}
        />
        <label htmlFor="blogslogan">blogslogan</label>
        <input
          type="text"
          name="blogslogan"
          id="blogslogan"
          value={blogslogan}
          onChange={(e) => setBlogslogan(e.target.value)}
        />
        <label htmlFor="categoryname">categoryname</label>
        <input
          type="text"
          name="categoryname"
          id="categoryname"
          value={categoryname}
          onChange={(e) => setCategoryname(e.target.value)}
        />
        <label htmlFor="categoryimage">categoryimage</label>
        <input
          type="text"
          name="categoryimage"
          id="categoryimage"
          value={categoryimage}
          onChange={(e) => setCategoryimage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={recipeId}
          onChange={(e) => setRecipeId(e.target.value)}
          placeholder="Enter RecipeId"
        />
        <button onClick={sendDeleteRequest}>Delete</button>
      </form>

      <div>
        {data.map((item) => (
          <p key={item.id}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Form;
