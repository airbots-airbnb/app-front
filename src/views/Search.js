import React from 'react';
import Input from '../components/Input';

function Search() {
    return (
        <div id="flights">
            <div className="row">
                <form>

                  <Input name="Lugar"
							label="Lugar: "
							type="text"
							placeholder="Col. México"
							value=""
							onChange
							required 
							/>
                    <Input name="huespedes"
							label="No. de huéspedes: "
							type="text"
							placeholder="5"
							value=""
							onChange 
							/>
                    <Input name="PrecioI"
							label="Precio de: "
							type="text"
							placeholder="1000"
							value=""
							onChange 
							/>
                    <Input name="PrecioF"
							label="Hasta: "
							type="text"
							placeholder="5000"
							value=""
							onChange="" 
							/>
                    <div className="col-xs-12">
                        <input type="submit" className="btn btn-primary btn-block" value="Encuentra tu espacio" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Search;