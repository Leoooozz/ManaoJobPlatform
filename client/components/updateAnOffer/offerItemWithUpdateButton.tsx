import React from 'react';
import { JobOfferInterface } from '@/types/Interface';
import Link from 'next/link'; // Importez Link depuis Next.js

interface JobOfferWithUpdateProps {
    jobOffer: JobOfferInterface;
}

const OfferItemWihtUpdate: React.FC<JobOfferWithUpdateProps> = ({ jobOffer }) => {
    return (
        <div className="flex justify-center mb-4 mt-4">
            <a className="rounded-xl w-3/4 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center">
                <div className="col-span-8">
                    <p className="text-blue-600 font-semibold">{jobOffer.title}</p>
                </div>
                <div className="col-span-4">
                    <p className="text-sm text-gray-800 font-light text-right">{jobOffer.status}</p>
                </div>
                <div className="col-span-12">
                    <p className="text-sm text-gray-800 font-light">{jobOffer.description}</p>
                </div>
                <div className="col-span-6 text-left">
                    <p className="text-sm text-gray-800 font-light">Company: {jobOffer.company}</p>
                </div>
                <div className="col-span-6 text-right">
                    <p className="text-sm text-gray-800 font-light">{jobOffer.publication_date}</p>
                </div>
                <div className="col-span-12 flex items-center justify-center">
                    <Link href={`/updateAnOffer/${jobOffer.id}`} className="bg-blue-500 rounded-full p-2 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-white hover:text-blue-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l-7-7 7-7 7 7-7 7z"
                                />
                            </svg>
                    </Link>
                </div>
            </a>
        </div>
    );
};

export default OfferItemWihtUpdate;
