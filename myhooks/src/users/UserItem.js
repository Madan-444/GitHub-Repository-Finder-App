import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './App.css'


class UserItem extends Component {

    render() {
        const { user } = this.props
        // console.log(user)
        return (
        
            <div className='container mt-4' >
                <div className='row'>
                    <div className='col-4'>
                        <div className="card" style={{ width: '18rem', display:'inline block' }}>
                            <img src={user.avatar_url} className="card-img-top border " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {user.login} </h5>
                                <p className="card-text"> </p>
                                <Link to={`/user/${user.login}`} className="btn btn-secondary">View Details</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        



        )
    }
}

export default UserItem
