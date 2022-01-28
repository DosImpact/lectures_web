import Todo from "./pages/todo/Todo";
import Post from "./pages/post/Post";
import { Router } from "react-router-dom";
import { customHistory } from "./redux/store";

function App() {
  return (
    <Router history={customHistory}>
      <Todo />
      <Post />
    </Router>
  );
}

export default App;
