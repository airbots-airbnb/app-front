import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Search from '../views/Search';
import Singup from '../views/Singup';
import image from '../images/cover_bg_3.jpg';
import payload from '../utils/payload';


function TabsHome() {
    return (
        <div className="fh5co-hero">
            <div className="fh5co-overlay"></div>
            <div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${image})` }} >
                <div className="desc">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 col-md-5">
                                <div className="tabulation animate-box">
                                    <>
                                        <Tabs defaultActiveKey="Search" transition={false} id="noanim-tab-example">
                                            <Tab eventKey="Search" title="Buscar">
                                               <Search/>
                                            </Tab>
                                            <Tab eventKey="Reservar" title="Reservar">

                                            </Tab>{
                                            payload().isAuthenticated?(
                                               <></>
                                            ) :
                                            <Tab eventKey="Registrarse" title="Registrarse">
                                            <Singup/>  
                                          </Tab>}
                                        </Tabs>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default TabsHome;