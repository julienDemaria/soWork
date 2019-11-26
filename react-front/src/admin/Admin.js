import React, { Component } from "react";
import Posts from "../post/Posts";
import Users from "../user/Users";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";

class Admin extends Component {
    state = {
        redirectToHome: false
    };

    componentDidMount() {
        if (isAuthenticated().user.role !== "admin") {
            this.setState({ redirectToHome: true });
        }
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <div className="jumbotron rounded-0 text-center bg-dark text-light">
                    <h2 className="font-weight-bold">Admin Dashboard</h2>
                </div>
                <div className="container-fluid">
                    <div className="column">
                        <div className="container-fluid">
                            <Posts />
                        </div>
                        <div className="container-fluid">
                            <hr />
                            <Users />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
