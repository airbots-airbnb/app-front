import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from 'react-apollo-hooks'
import Input from '../components/Input';
import useForm from '../hooks/useForm';

const ADD_USUARIO = gql`
    mutation CreateUsuario($data:createUsuarioInput!){
        createUsuario(data:$data){
            _id,
            nombre
        }
    }
`

function Singup({history}) {
    const [SendSingup,{error}] = useMutation(ADD_USUARIO)
    const catchSubmit = async (fields)=>{
        if(fields.password===fields.confirmpassword){
            fields.telefono= parseInt(fields.telefono);
            delete fields.confirmpassword;
             await SendSingup({variables:{data:{...fields}}})
             error? alert("Hubo un error") :
             alert("Usuario Guardado")
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

                  <Input name="usuario"
							label="Usuario"
							type="text"
							placeholder=""
							value={inputs.usuario}
							onChange={handleInputChange}
							required 
							/>
                    <Input name="nombre"
							label="Nombre"
							type="text"
							placeholder
							value={inputs.nombre}
                            onChange={handleInputChange}
                            required 
							/>
                    <Input name="primerapellido"
							label="Apellido paterno"
							type="text"
							placeholder=""
							value={inputs.primerapellido}
                            onChange ={handleInputChange}
                            required
							/>
                    <Input name="segundoapellido"
							label="Apellido Materno"
							type="text"
							placeholder=""
							value={inputs.segundoapellido}
							onChange ={handleInputChange}
							/>
                    <Input name="correo"
							label="Correo"
							type="email"
							placeholder=""
							value={inputs.correo}
							onChange ={handleInputChange}
							/>
                    <Input name="telefono"
							label="Telefono"
							type="tel"
							placeholder=""
							value={inputs.telefono}
							onChange ={handleInputChange}
							/>
                <Input name="password"
							label="Contraseña"
							type="password"
							placeholder=""
							value={inputs.password}
                            onChange ={handleInputChange}
                            required
							/>
                <Input name="confirmpassword"
							label="Confirmar Contraseña"
							type="password"
							placeholder=""
							value={inputs.confirmpassword}
							onChange ={handleInputChange}
							/>
                <Input name="sexo"
							label="Género"
							type="text"
							placeholder="Hombre/Mujer/Otro"
							value={inputs.sexo}
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