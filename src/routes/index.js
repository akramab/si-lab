import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import Login from '../pages/Login';
  import Home from '../pages/Home';
  import HomePageLayout from '../layouts/Homepage/Homepage.layout';
  import Registrasi from '../pages/Registrasi';
  import Kunjungan from '../pages/Kunjungan'


  function CustomRouter () {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<HomePageLayout><Home /></HomePageLayout> }/>
                <Route exact path="/registrasi" element={<HomePageLayout><Registrasi /></HomePageLayout> }/>
                <Route exact path="/kunjungan" element={<HomePageLayout><Kunjungan /></HomePageLayout> }/>
            </Routes>
        </Router>
    )
  }

  export default CustomRouter;