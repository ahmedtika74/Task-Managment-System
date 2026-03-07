import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <ToDoList />
    </div>
  );
}

export default App;
