import React, { Component } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.match.params.login);
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hirable
        } = this.props.user

        return (
            <div className="media">
                <img src={avatar_url} height='300px' class="align-self-center mr-3" alt={login} />
                <div class="media-body">
                <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h4 class="display-4">{name}, {location} </h4>
                            <p class="lead"> {bio} </p>
                            <hr/>
                            <p>No of followers: {followers} </p>
                            <p>No of following:  {following} </p>
                            <p>No of Repositories:  {public_repos} </p>
                        </div>
                        <hr/>
                        <a href={html_url}>Visit here {html_url} </a>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default User
