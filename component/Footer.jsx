import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full  flex flex-col gap-4 pt-8 pb-2'>
            <div className='w-full h-0.5 rounded-md bg-gray-600'></div>
            <div className='w-4/5 sm:w-full mx-auto text-gray-400 flex flex-col sm:flex-row text-center justify-between gap-4'>
                <p className='text-sm'>Copyright © Aazmeer Ali 2025. All Right Reserved.</p>
                <p className='text-sm'>Developed by Aazmeer Ali</p>
            </div>
        </footer>
    )
}

export default Footer
