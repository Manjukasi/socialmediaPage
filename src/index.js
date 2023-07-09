import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ProfilePage from './components/profilePage';
import ToDo from './components/Todo';
import Gallery from './components/Gallery';
import Post from './components/Post';
import PersonDetail from './components/PersonDetails';
import Logout from './components/LogoutComponent';


const App = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/profile/:profileId",
        element: <ProfilePage />,
        children: [
          {
            path: "/profile/:profileId",
            element: <PersonDetail/>
          },
          {
            path: "post",
            element: <Post />
          },
          {
            path: "gallery",
            element: <Gallery/>
          },
          {
            path: "todo",
            element: <ToDo />
          },
        ]
      },
      {
        path: "/",
        element: < Logout />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

