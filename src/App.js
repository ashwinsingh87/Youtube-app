import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/Body/MainContainer";
import VideoPage from "./components/VideoPage/VideoPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <VideoPage />,
      },
    ],
  }, {
    path: "/",
    element: <Header/>,
  },
]);
function App() {
  return (
    <Provider store={Store}>
      
            
        <RouterProvider router={appRouter} />
    
    </Provider>
  );
}

export default App;
