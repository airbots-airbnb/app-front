import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import useForm from '../hooks/useForm';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

const LOGIN= gql`
mutation LOGIN($correo:String!,$password:String!){
    login(correo:$correo,password:$password){
        token
    }
}
` 

function Login({history}) {
    const [sendLogin] = useMutation(LOGIN);
    const submitLogin = async (fields)=>{
      const mutation = await  sendLogin({variables:{...fields}})
                                    .catch(e=>console.log(e));
      if (mutation){
          const {login} =mutation.data;
          localStorage.setItem('blogToken',login.token);
          history.push('/alojamientos');
      }
    }
    const {inputs,handleInputChange,handleSubmit}= useForm(submitLogin);

    return (
        <>
            <Header />

            <main className="container">
            <section className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <form onSubmit={handleSubmit}>

                  
                    <Input name="correo"
							label="Correo"
							type="email"
							placeholder=""
							value={inputs.correo}
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
                      
                    <div className="col-xs-12">
                        <input type="submit" className="btn btn-primary btn-block" value="Iniciar Sesión" />
                    </div>
                </form>
                </div>
            </section>
        </main>

            <Footer />
        </>

    )
}

export default Login;