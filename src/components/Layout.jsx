import { Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import Sidebar from './Sidebar/Sidebar';
import BodyBackground from './Body/BodyStyles';

import Footer from './Footer/Footer';
import Home from '../pages/Home/Home';
import FullPlaylistComponent from '../pages/FullPlaylistComponent';
import { PlaylistsProvider } from '../reducers/playlistReducer';
import SingePlaylistComponent from '../pages/SinglePlaylistComponent/SingePlaylistComponent';
import Search from '../pages/Search/Search';

const Layout = () => {
  return (
    <>
      <div className="spotify-body">
        <Sidebar />
        <BodyBackground>
          <div className="body">
            <Header />
            <PlaylistsProvider>
              <div className="body-contents">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/playlist/:playlistId" element={<SingePlaylistComponent />} />
                  <Route path="/category/:categoryId" element={<FullPlaylistComponent />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </div>
            </PlaylistsProvider>
          </div>
          <Footer />
        </BodyBackground>
      </div>
      <div className="spotify-footer"></div>
    </>
  );
};
export default Layout;
