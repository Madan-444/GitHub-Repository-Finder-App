import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    state = {
        text: ''
    }
    onChanger = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submithandle = (e) => {
        e.preventDefault()
        if (this.state.text === '') {
            this.props.setAlert('Please Enter something', 'success')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({
                text: ''
            })
        }

    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand"> <img src='/githubpng.png' height='50px' />  {this.props.title} </a>
                
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/"><h2>Home </h2><span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about"><h2>About </h2></Link>
                    </li>
                   
                </ul>
                {
                    this.props.showClearbutton && <button type="button" class="btn btn-secondary" onClick={this.props.clearUser} value={this.state} >Clear All</button>
                }
                <form className="form-inline" onSubmit={this.submithandle}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name='text' value={this.state.text} onChange={this.onChanger} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value={this.state.text} >Search</button>
                </form>


            </nav>
        )
    }
}

export default Navbar
