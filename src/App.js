import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
function App() {
  return (
    <Provider store={Store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
