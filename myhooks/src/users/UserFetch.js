import React, { Component } from 'react'
import UserItem from './UserItem'
 class UserFetch extends Component {
    render() {
        return (
            <div style={userStyle}>
               {
                   this.props.users.map((user)=> (
                       <UserItem  key ={user.id} user={user} />
                   ))
               }
               {
                this.props.loading?<div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div> : <div></div>
        }
               
            </div>
        )
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumn:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default UserFetch
