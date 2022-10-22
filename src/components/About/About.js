import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {

    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <h3>Email: {user?.email}</h3>
        </div>
    );
};

export default About;