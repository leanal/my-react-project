import React, { useEffect, useState } from "react";

export default function ProfileEdit({ userID }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({});
    const abortController = new AbortController(); // Create a new `AbortController`
  
    async function loadUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`,
          { signal: abortController.signal } // Pass the `AbortController` signal to `fetch()`
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted", userID);
        } else {
          throw error;
        }
      }
    }
  
    loadUser();
  
    return () => {
      console.log("cleanup", userID);
      abortController.abort(); // Cancels any pending request or response
    };
  }, [userID]); // <-- Added dependency on `userID`

  useEffect(() => {
    const oldTitle = document.title;
    if (user.name) {
      document.title = `${user.name} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
    return () => document.title = oldTitle; // puts back original title after clean up
  }, [user]); // Rerun this effect when the user changes

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
      }
    );
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  };

  if (user.id) {
    return (
      <form name="profileEdit" onSubmit={submitHandler}>
        <fieldset>
          <legend>API User ID: {user.id}</legend>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              type="text"
              required={true}
              value={user.username}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              value={user.email}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    );
  }
  return "Loading...";
}