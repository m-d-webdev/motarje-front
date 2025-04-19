import Image from 'next/image'
import React from 'react'

const UserAvatar = ({ id, image = "", firstName, lastName, time }) => {
    return (
        <div className='r-s-s'>
            <Image
                src={image}
                alt={"user image"}
                width={70}
                height={70}
                className='rounded-full object-cover object-top'
            />
        </div>
    )
}

export default UserAvatar
