import PropTypes from 'prop-types';

import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const authInfo = { name: "nodi nala khal bil" }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children:PropTypes.node
}