import React from "react";

const UserProfile = props => {
    let role = '';

    if (props.admin) {
        role = 'admin'
    } else {
        role = 'guest'
    };

    return (
        <div>
            <h1><span className='badge bg-primary'>{role}</span>My name is {props.name} and my favorite show is {props.favoriteShow}.</h1>
        </div>
    )
}

export default UserProfile;