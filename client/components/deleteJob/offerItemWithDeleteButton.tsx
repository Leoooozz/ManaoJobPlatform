import React from 'react';
import { JobOfferInterface } from '@/types/Interface';

interface JobOfferWithDeleteProps {
    jobOffer: JobOfferInterface;
    onDelete: () => void;
}

const JobOfferItemWithDelete: React.FC<JobOfferWithDeleteProps> = ({ jobOffer, onDelete }) => {
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
                    <div className="bg-pink-100 rounded-full p-2 cursor-pointer" onClick={onDelete}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-600 hover:text-red-800"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default JobOfferItemWithDelete;
