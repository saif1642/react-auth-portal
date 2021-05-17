import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import login from './Login.png';
import React,{useState} from 'react';
import swal from 'sweetalert';

function App() {
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');
  const handleValidate = (e) => {
    e.preventDefault();
    if(user == 'saiftest@gmail.com' && password == '123456'){
      swal('Login successfull','Welcome to react','success');
    }else{
      swal('Wrong credential','Please try again','error');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
         <h1>Authentication Portal</h1>
         <div className="row">
           <div className="col-md-6">
             <img className="float-right" src={login} width="300"/>
           </div>
           <div className="col-md-6 bg-dark p-5 rounded">
              <form onSubmit={handleValidate}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => {setUser(e.target.value)}} placeholder="Enter Email.."/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value)}}  placeholder="Enter password.." />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
           </div>
         </div>
      </header>
    </div>
  );
}

export default App;
