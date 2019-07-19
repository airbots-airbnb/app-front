import React, { Fragment } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Alojamientos from '../components/Alojamientos/PageAlojamientos';

function Home() {
    return (
        <Fragment>
            <div id="fh5co-wrapper">
                <div id="fh5co-page">
                    <Header />
                    <Form />
                    <Content />
                    <Alojamientos />
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
