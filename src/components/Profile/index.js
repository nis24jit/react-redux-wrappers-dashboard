import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userRetrieved} from './../../actions';
import {Switch} from '@progress/kendo-inputs-react-wrapper';

    const baseUrl = 'https://api.github.com/users/simonssspirit';
    const Success = () => {
            return (
                <div className="alert alert-success">
                 <strong>Success!</strong> The profile is updated!
                </div>
            );
    }

    const Warning = () => {
            return (
                <div className="alert alert-warning">
                 <strong>Deleted!</strong> The profile is Removed!
                </div>
            );
    }
    class Profile extends Component {

    constructor(props) {
            super(props);
            this.state = {
                alertVisible: false,
                deleteAlertVisible:false
            }
            this.updateProfile = this.updateProfile.bind(this);
            this.deleteProfile = this.deleteProfile.bind(this);
        }
        

    componentDidMount() {
        let headers = {
            // Generate your own token through https://github.com/settings/tokens

            'Authorization': "token 4cc78d10870448008aa1f1a0ef55daa5bc10579d"
        };

        let url = baseUrl;

        return fetch(url, {
                method: 'GET',
                accept: 'application/json',
                headers: headers
            })
            .then(response => response.json())
            .then(json => this.props.dispatch(userRetrieved(json)));
    }

    updateProfile = (e) => {
        this.setState({ alertVisible: true })
        setTimeout(function() { this.setState({alertVisible: false}); }.bind(this),2000);
    }
    deleteProfile = (e) => {
        this.setState({ deleteAlertVisible: true })
        setTimeout(function() { this.setState({deleteAlertVisible: false}); }.bind(this),2000);
    }
    
    render() {
        
        return (
            <div className="row">
                <div className="col-md-7">

                    <div className="card" id="profile">
                        <h3 className="card-header">Public Profile</h3>
                        <div className="card-block">

                            <div className="row">
                                <div className="col-md-3 text-xs-center">
                                    <img src={this.props.users.avatar_url} className="img-circle mx-auto"/>
                                </div>
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label className="h6">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            value={this.props.users.login}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Name</label>
                                        <input type="text" id="name" className="form-control" value={this.props.users.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={this.props.users.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label h6">
                                            <input type="checkbox" className="form-check-input" defaultChecked/>
                                            Keep my email address private
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="form-control"
                                            value={this.props.users.company}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Location</label>
                                        <input
                                            type="text"
                                            id="location"
                                            className="form-control"
                                            value={this.props.users.location}/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={this.updateProfile}>Update profile</button>
                                    </div>
                                    { this.state.alertVisible && <Success /> }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" id="delete-account">
                        <h3 className="card-header">Delete Account</h3>
                        <div className="card-block">
                            <p>You will immediately lose access to your repositories and all other
                                information associated with your account.
                                <strong>This cannot be undone!</strong>
                            </p>
                            <button className="btn btn-danger" onClick={this.deleteProfile}>Delete Account</button>
                            <div className="delete-container">
                              { this.state.deleteAlertVisible && <Warning /> }
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="col-md-5">

                    <div className="card" id="notifications">
                        <h3 className="card-header">Notifications</h3>
                        <div className="card-block">
                            <h4 className="h6">Automatically watch repositories?</h4>
                            <p className="text-muted">When you are given push access to a repository,
                                automatically receive notifications for it.</p>
                            <p>
                                <Switch></Switch>
                            </p>
                            <h4 className="h6">Receive updates to any conversations via email?</h4>
                            <p>
                                <Switch checked={true}></Switch>
                            </p>
                            <h4 className="h6">Receive updates to any repositories via email?</h4>
                            <p>
                                <Switch checked={true}></Switch>
                            </p>
                        </div>
                    </div>
                    <div className="card" id="password">
                        <h3 className="card-header">Update password</h3>
                        <div className="card-block">
                            <div className="form-group">
                                <label className="h6">Old password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="h6">New password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="h6">Confirm password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-secondary">Change password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {users: state.users.users}
}

Profile = connect(mapStateToProps)(Profile);

export default Profile;