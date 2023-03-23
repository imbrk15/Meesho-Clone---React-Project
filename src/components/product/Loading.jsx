import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
    return (
        <>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
        </>
    )
}
