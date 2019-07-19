import React, { Fragment } from 'react';
import Header from '../components/Header';
import TabsHome from '../components/Tabs';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Home() {
    return (
        <Fragment>
            <div id="fh5co-wrapper">
                <div id="fh5co-page">
                    <Header />
                    <TabsHome />
                    {/* <Form /> */}
                    <Content />
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
