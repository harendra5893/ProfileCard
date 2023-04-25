import "./App.css";
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <Card
        data={{
          image: "https://i.pravatar.cc/150?img=3",
          designation: "UI / UX DESIGNER",
          Name: "Aryan Shirani",
        }}
      />

      <Card
        data={{
          image: "https://i.pravatar.cc/150?img=1",
          designation: "SOFTWARE DEVELOPER",
          Name: "Ritu Sharma",
        }}
      />

      <Card
        data={{
          image: "https://i.pravatar.cc/150?img=11",
          designation: "WEB DEVELOPER",
          Name: "Robert sandz",
        }}
      />
    </div>
  );
}

export default App;
