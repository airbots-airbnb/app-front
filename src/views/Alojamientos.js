import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageAlojamientos from '../components/Alojamientos/PageAlojamientos';

function Alojamientos() {
    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <Header />
                    <PageAlojamientos />
                <Footer />
            </div>
        </div>
    )
}

export default Alojamientos;
