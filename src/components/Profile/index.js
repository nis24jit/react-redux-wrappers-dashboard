import React, {Component} from 'react';

class Profile extends Component {
    
    render() {
        return ( 
                <div className="row">
                    <div className="col-md-7">
            
                        <div className="card" id="profile">
                            <h3 className="card-header">Public Profile</h3>
                            <div className="card-block">
            
                                <div className="row">
                                    <div className="col-md-3 text-xs-center">
                                        <img src="${this.props.user.avatar_url}" styles="{max-width: 100%}" className="img-circle mx-auto" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <label className="h6">Username</label>
                                            <input type="text" id="username" className="form-control" value="${this.props.user.login}" />
                                        </div>
                                        <div className="form-group">
                                            <label className="h6">Name</label>
                                            <input type="text" id="name" className="form-control" value="user.name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="h6">Email</label>
                                            <input type="email" id="email" className="form-control" value="user.email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-check-label h6">
                                                <input type="checkbox" className="form-check-input" checked /> Keep my email address private
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="h6">Company</label>
                                            <input type="text" id="company" className="form-control" value="user.company" />
                                        </div>
                                        <div className="form-group">
                                            <label className="h6">Location</label>
                                            <input type="text" id="location" className="form-control" value="user.location" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary" >Update profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="card" id="delete-account">
                            <h3 className="card-header">Delete Account</h3>
                            <div className="card-block">
                                <p>You will immediately lose access to your repositories and all other information associated with your account. <strong>This cannot be undone!</strong></p>
                                <button className="btn btn-danger" >Delete Account</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
            
                        <div className="card" id="notifications">
                            <h3 className="card-header">Notifications</h3>
                            <div className="card-block">
                                <h4 className="h6">Automatically watch repositories?</h4>
                                <p className="text-muted">When you are given push access to a repository, automatically receive notifications for it.</p>
                                <p><kendo-switch></kendo-switch></p>
                                <h4 className="h6">Receive updates to any conversations via email?</h4>
                                <p><kendo-switch checked="true"></kendo-switch></p>
                                <h4 className="h6">Receive updates to any repositories via email?</h4>
                                <p><kendo-switch checked="true"></kendo-switch></p>
                            </div>
                        </div>
                        <div className="card" id="password">
                            <h3 className="card-header">Update password</h3>
                            <div className="card-block">
                                <div className="form-group">
                                    <label className="h6">Old password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="h6">New password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div clclassNameass="form-group">
                                    <label className="h6">Confirm password</label>
                                    <input type="password" class="form-control" />
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

export default Profile;