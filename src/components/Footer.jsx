import React from 'react'

export const Footer = () => {
    return (
        <div className='text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200'>
            <h1>
                2021 VNSearch, Inc. Made by Valentín Galfré
            </h1>
            <a 
                className='dark:text-blue-400 text-blue-700'
                href='https://github.com/galfrevn'
                target="_blank"
                rel='noreferrer'
            >
                Follow me
            </a>            
        </div>
    )
}

