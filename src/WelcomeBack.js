import "./WelcomeBack.css";

function WelcomeBack({ name = "valued customer", adjective = "nice" }) {
    /* Use of import .css
    return (
        <div style={{ border: "1px solid #000", textAlign: "center", borderRadius: "4px" }}>
            <p>Welcome back, <span className="username">{adjective} {name}</span>!</p>
        </div>
    );*/
    
// Storing styles within the variable instead of importing css. 
  const pStyle = {
    color: "black",
    fontFamily: "Zen Dots, cursive",
  };
  const userName = {
    padding: "2px 4px",
    marginRight: "2px",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
  };

  return (
    <p style={pStyle}>
      Welcome back,{" "}
      <span style={userName}>
        {adjective} {name}
      </span>
      !
    </p>
  );
  }

export default WelcomeBack;