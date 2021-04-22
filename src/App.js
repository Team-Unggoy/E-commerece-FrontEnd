import React from 'react'
import Header from './Components/Header'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing';
import About from './Pages/About'
import { connect } from 'react-redux'
import * as actions from './store/actions/auth'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.onTryAutoSignup()
  }
  

  render(){

    return(
      <div className='App'>
      
      <Router>
        <Switch>
        <Route path='/signin' exact render={(props) => <Signin {...this.props}/>}/>
        <Route path='/signup' exact component={Signup}/>
        <div>
        <Header {...this.props}/>

          <Route path='/'  exact render={(props) => <Landing {...this.props}/>}/>
          <Route path='/about' exact component={About}/>
        </div>
        </Switch>
      </Router>
        
        </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);