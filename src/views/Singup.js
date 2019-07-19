import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from 'react-apollo-hooks'
import Input from '../components/Input';
import useForm from '../hooks/useForm';

const ADD_USUARIO = gql`
    mutation CreateUsuario($data:createUsuarioInput!){
        createUsuario(data:$data){
            _id,
            first_name
        }
    }
`

function Singup({history}) {
    const [SendSingup,{error}] = useMutation(ADD_USUARIO)
    const catchSubmit = async (fields)=>{
        if(fields.cPassword===fields.cConfirmPassword){
            delete fields.cConfirmPassword;
             await SendSingup({variables:{data:{...fields}}})
             error? alert("Hubo un errorsaso") :
             history.push('/login');
        }
        else{
            alert("Los Passwords no coiciden");
        }     

    }
    const {inputs,handleInputChange,handleSubmit} = useForm(catchSubmit);
    return (
        <div id="flights">
            <div className="row">
                <form onSubmit={handleSubmit}>

                  <Input name="cUsuario"
							label="Usuario"
							type="text"
							placeholder=""
							value={inputs.cUsuario}
							onChange={handleInputChange}
							required 
							/>
                    <Input name="cNombre"
							label="Nombre"
							type="text"
							placeholder
							value={inputs.cNombre}
                            onChange={handleInputChange}
                            required 
							/>
                    <Input name="cPrimerApellido"
							label="Apellido paterno"
							type="text"
							placeholder=""
							value={inputs.cPrimerApellido}
                            onChange ={handleInputChange}
                            required
							/>
                    <Input name="cSegundoApellido"
							label="Apellido Materno"
							type="text"
							placeholder=""
							value={inputs.cSegundoApellido}
							onChange ={handleInputChange}
							/>
                    <Input name="cCorreo"
							label="Correo"
							type="email"
							placeholder=""
							value={inputs.cCorreo}
							onChange ={handleInputChange}
							/>
                    <Input name="iTelefono"
							label="Telefono"
							type="tel"
							placeholder=""
							value={inputs.iTelefono}
							onChange ={handleInputChange}
							/>
                <Input name="cPassword"
							label="Contraseña"
							type="password"
							placeholder=""
							value={inputs.cPassword}
                            onChange ={handleInputChange}
                            required
							/>
                <Input name="cConfirmPassword"
							label="Confirmar Contraseña"
							type="password"
							placeholder=""
							value={inputs.cConfirmPassword}
							onChange ={handleInputChange}
							/>                  
                    <div className="col-xs-12">
                        <input type="submit" className="btn btn-primary btn-block" value="Registrarse" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Singup;