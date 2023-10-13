import Link from 'next/link'
import React from 'react'

const UpdateAjobCard = () => {
    return (
        <Link href="/updateAnOffer" className="block w-72 h-50 p-6 bg-gradient-to-br from-blue-200 to-green-300 shadow-md rounded-lg mx-6 cursor-pointer transition transform hover:scale-105">
            <div className="flex flex-col h-full justify-center">
                <div className="text-3xl text-center font-semibold mb-4">UPDATE  AN OFFER</div>
            </div>
        </Link>
    )
}

export default UpdateAjobCard