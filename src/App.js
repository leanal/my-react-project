import "./App.css";
/*
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import Notifications from "./Notifications";

function App() {
  
  const name = "Leana";
  const url = "https://www.thinkful.com/";
  const linkText = "Thinkful";
  const element = (
    <p>
      <h1>My React App</h1>
      {" "}
      <h2>Hey, {name}! Please visit <a href={url}>{linkText}</a>.</h2>
    </p>
  );
  const notifications = ["You received a package", "The weather is sunny"];


  return (
    <>
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack />
      <Greeting language="es" />
      <Greeting />
      <Notifications notifications={notifications} />
      
    </>
  );
}*/

/*
import Clock from "./Clock";

function App() {
  const loggedIn = true;

  return <Clock loggedIn={loggedIn}/> //loggedIn &&  <Clock />; //}
}
*/
/*
///// LISTS /////
const todos = [
  "Finish the Lists & Tables checkpoint",
  "Clean my desk",
  "Make lunch",
];

function App() {
  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return <ul>{listItems}</ul>;
}
*/
/*
///// TABLES /////
import React from "react";

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

function App() {
  const rows = todos.map(({completed, description}, index) => {
    return (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
*/

/*
////////// LIST AND TABLE //////////
import ListTable from "./ListTable";

function App() {
  const roster = [
    { id: "1", firstName: "John", lastName: "Smith", location: "California" },
    { id: "2", firstName: "April", lastName: "White", location: "Nebraska" },
    { id: "3", firstName: "Jane", lastName: "Doe", location: "Florida" },
  ];
  return (
    <>
    <ListTable detailed={false} roster={roster} />
    <ListTable detailed={true} roster={roster} />
    </>
  );
}
*/

/*
////// use of bootstrap with className instead of class
import WelcomeBack from "./WelcomeBack";
import Quote from "./Quote"; // bootstrap

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};


function App() {
  return (
    <>
      <WelcomeBack name="Joe" adjective="funny" />
      <Quote quote={quote} />
    </>
  );
}

export default App;
*/

/////////// useState()
/*
import React, { useState } from "react";

function App() {
  const handleClick = (e) => console.log(e.target);
  const [subscribed, setSubscribed] = useState(false); // subscribed is a variable, setSubscribed() used to update the state variable.
  console.log("Subscribed status:", subscribed);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={handleClick}>Click</button>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </section>
  );
}
*/

/*
import React, { useState } from "react";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount(subscribedCount + 1);
          setSubscribedCount((currentCount) => currentCount + 1);
          setSubscribedCount((currentCount) => currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}
*/

/*
import React from "react";
import IncrementButtons from "./IncrementButtons";

function App() {
  return <IncrementButtons />;
}
*/

/*
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="My content." />;
    </div>
  );
}
*/

/*
import React, { useState } from "react";
import Content1 from "./Content1";
import Header1 from "./Header1";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const handleCounterClick = () => setFontSize(prevFontSize => prevFontSize + 2)
  return (
    <div>
      <Header1 loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleCounterClick={handleCounterClick} fontSize={fontSize} />
      <Content1 loggedIn={loggedIn} handleCounterClick={handleCounterClick} fontSize={fontSize} />
    </div>
  );
}
*/

/*
///// ARRAYS AND OBJECT AS STATE
import CoinTossCounter from "./CoinTossCounter";

function App() {

  return <CoinTossCounter />;
}
*/

/*
///// QUALIFIED
import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  //const timestamps = [1000000000000, 1000000001000]; // Date.now() OUTPUT sample
    const [clicked, setClicked] = useState([]);
    const handleClick = () => {
        setClicked([...clicked, Date.now()])
    }
    
  return (
      <div>
      <ClickTimes handleClick={handleClick} />
      <TimestampsDisplay timestamps={clicked} />
      </div>
  );
}
*/

/*
//// Forms with Input Fields
import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";

function App() {
  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );

  return (
    <>
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
    </>
  );
}
*/



//// complex forms
/*
import SubscriberForm1 from "./SubscriberForm1";

function App() {
  return <SubscriberForm1 />;
}
*/

/*
///// useEffect , cleanup , abortController
import React, { useState } from "react";
import "../src/App.css";
import ProfileEdit from "./ProfileEdit";

function App() {
  const [userId, setUserID] = useState(1);

  const userIds = [1, 2, 3, 4];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
    </div>
  );
}
*/

//// FRONT END MOCK INTERVIEW
import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
          <PostDetail posts={posts} />
    </div>
  );
}

export default App;
