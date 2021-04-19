import './App.css';
import Header from './Components/Header'
import Signin from './Pages/Signin'
import Landing from './Pages/Landing';
import About from './Pages/About'
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='App'>
      
      <Router>
        <Switch>
        <Route path='/signin' exact component={Signin}/>
        <div>
        <Header/>

          <Route path='/'  exact component={Landing}/>
          <Route path='/about' exact component={About}/>
        </div>
        </Switch>
      </Router>
        
        </div>
    )
  }
}

export default App;