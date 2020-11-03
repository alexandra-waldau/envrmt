import React, { Component, createContext } from "react";
import { auth }  from "./firebaseIndex";

const AuthContext = createContext({ user: null });

class AuthProvider extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentdidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState( {
                user: userAuth
            });
        })
    }

    render() {
        return (
            <AuthContext.Provider value={this.state.user}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;