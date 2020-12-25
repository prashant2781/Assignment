import React, {Component} from 'react';

class Login extends Component {
    constructor()
    {
        super();
        this.state = {
            name:"",
            password: '',
            nameError: "",
            passwordError:""
        };
    }

    login()
    {
        fetch("https://swapi.dev/api/people/?search=" + this.state.name ).then((data)=>{
            data.json().then((resp) => {
                 if(this.state.name === "" && this.state.password === "")
                    {
                        this.setState(
                            {nameError:"Invalid Name", passwordError:"Password length should be more thans 5"}
                        )            
                         return false;           
                    }
                
                else if (resp.results.length>0)
                {
                         console.warn(this.props.history.push('Home'));
                                      
                }
                else
                {
                   alert("Please check username and password")
                    
                }
            })
        })
     
    }

    render () {       
    
            return (
                <div>
                    <input type="text" placeholder="Name" name="user" onChange={(event) =>this.setState({name:event.target.value})} /><br/>
                    <span style={{color:"red", fontSize:"12px"}}>{this.state.nameError}</span><br/>
                    <input type="password" name="password" placeholder="Password" onChange={(event) =>this.setState({password:event.target.value})} /><br/>
                        <span style={{color:"red", fontSize:"12px"}}>{this.state.passwordError}</span><br/>
                       <button onClick={()=>{this.login()}} >Login</button>
                </div>
            );
         }
    }    


export default Login;