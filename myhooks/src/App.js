import React, { Component, Fragment } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import UserFetch from './users/UserFetch';
import { Alert } from './components/layout/Alert';
import { About } from './components/layout/About';
import User from './users/User';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[],
       user:{},
       loading:false,
       alert:null
    }
  }
  // async componentDidMount (){
  //   this.setState({loading:true});
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     loading:false,
  //     users:res.data
  //   })
  // }
  
  searchUsers= async text=> {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      loading:false,
      users:res.data.items,
    })
    // console.log(this.state.users)
  }
  getUsers= async username=> {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      loading:false,
      user:res.data
    })
    // console.log(this.state.users)
  }
  clearUser=()=> {
    // console.log('clear user happed')
    this.setState({
      loading:false,
      users:[]
    })
  }
  //Set Alert
  setAlert =(msg,type)=> {
    this.setState({
      alert:{msg,type}
    })
    setTimeout(()=> this.setState({alert:null}),3000)
  }
  render() {
    return (
     <Router>
        <div>
        <Navbar  title= 'Github finder' searchUsers={this.searchUsers} clearUser={this.clearUser} showClearbutton={this.state.users.length ? true: false} setAlert={this.setAlert} /> 
        <Switch>
        
          <Route exact path ='/' render={props=> (
            <Fragment>
              
              <UserFetch loading={this.state.loading} users={this.state.users} />
              <Alert alert= {this.state.alert}  />
            </Fragment>
            
          )} />
          <Route path ='/about' component={About} />
          <Route exact path='/user/:login' render={props=> (
            <User {...props} getUsers={this.getUsers} user={this.state.user} />
          )} />
         
        </Switch>

      </div>
     </Router>
    )
  }
}

export default App
