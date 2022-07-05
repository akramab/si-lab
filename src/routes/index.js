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
import IndexUji from '../pages/IndexUji';
import DataPemeriksaan from '../pages/DataPemeriksaan';
import ParameterUji from '../pages/ParameterUji';
import ParameterUji2 from '../pages/ParameterUji2';
import DokterPengirim from '../pages/DokterPengirim';
import DataPetugas from '../pages/DataPetugas';
import DataPasien from '../pages/DataPasien';
import DataReagen from '../pages/DataReagen';
import ChangePassword from '../pages/ChangePassword';
import LaporanReagen from '../pages/LaporanReagen';
import LaporanPemeriksaan from '../pages/LaporanPemeriksaan';


function CustomRouter () {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<HomePageLayout><Home /></HomePageLayout> }/>
                <Route exact path="/registrasi" element={<HomePageLayout><Registrasi /></HomePageLayout> }/>
                <Route exact path="/kunjungan" element={<HomePageLayout><Kunjungan /></HomePageLayout> }/>
                <Route exact path="/index-uji" element={<HomePageLayout><IndexUji /></HomePageLayout> }/>
                <Route exact path="/data-pemeriksaan" element={<HomePageLayout><DataPemeriksaan /></HomePageLayout> }/>
                <Route exact path="/kelompok-parameter-uji" element={<HomePageLayout><ParameterUji /></HomePageLayout> }/>
                <Route exact path="/data-parameter-uji" element={<HomePageLayout><ParameterUji2 /></HomePageLayout> }/>
                <Route exact path="/dokter-pengirim" element={<HomePageLayout><DokterPengirim /></HomePageLayout> }/>
                <Route exact path="/data-petugas" element={<HomePageLayout><DataPetugas /></HomePageLayout> }/>
                <Route exact path="/data-pasien" element={<HomePageLayout><DataPasien /></HomePageLayout> }/>
                <Route exact path="/data-reagen" element={<HomePageLayout><DataReagen /></HomePageLayout> }/>
                <Route exact path="/change-password" element={<HomePageLayout><ChangePassword /></HomePageLayout> }/>
                <Route exact path="/laporan-reagen" element={<HomePageLayout><LaporanReagen /></HomePageLayout> }/>
                <Route exact path="/laporan-pemeriksaan" element={<HomePageLayout><LaporanPemeriksaan /></HomePageLayout> }/>
            </Routes>
        </Router>
    )
  }

  export default CustomRouter;