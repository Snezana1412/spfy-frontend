import './App.css';
//import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from './pages';
import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './services/Spotify';

// const Root = () => {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Root />}>
//         <Route index element={<Home />} />
//         <Route index element={<Login />} />
//       </Route>
//     </>,
//   ),
// );

function App() {
  const [token, setToken] = useState();
  const tokenLocalStorage = localStorage.getItem('token');
  console.log('🚀 ~ App ~ tokenLocalStorage:', tokenLocalStorage);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      //spotify.setAccessToken(_token);
      localStorage.setItem('token', _token);
      console.log('token', token);
    }

    console.log('token', token);
  }, []);
  return <div className="app">{tokenLocalStorage ? <Home /> : <Login />}</div>;
  // return <RouterProvider router={router} />;
}

export default App;
