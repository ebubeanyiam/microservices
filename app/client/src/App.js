import "./App.css";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

function App() {
  return (
    <div className="App container">
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
