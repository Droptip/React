import React from 'react';

const Avatar = ({ name, surname }) => {
    const initials = '${name[0]}${surname[0]}';

    return (
        <div>
        {initials}
        </div>
    );
};

export default Avatar;