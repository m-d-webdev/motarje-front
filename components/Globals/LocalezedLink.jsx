"use client";
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const LocalezedLink = ({ children, className, href, params }) => {
    const { lang } = useParams();


    return (
        <Link
            className={className}
            href={`${href}`}
        >
            {children}
        </Link>
    )
}

export default LocalezedLink
