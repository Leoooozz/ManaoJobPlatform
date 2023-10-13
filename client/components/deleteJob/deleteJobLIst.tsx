import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import JobOfferItemWithDelete from './offerItemWithDeleteButton';
import { JobOfferInterface } from '@/types/Interface';

const JobsListWithDelete = () => {
    const [jobOffers, setJobOffers] = useState<JobOfferInterface[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/job-offers');
                setJobOffers(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des offres d\'emploi', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteOffer = async (offerId: number) => {
        try {
            await axios.delete(`http://localhost:3000/job-offers/${offerId}`);
            setJobOffers((offers) => offers.filter((offer) => offer.id !== offerId));

        } catch (error) {
            console.error('Error deleting job offer', error);
        }

    };

    return (
        <div>
            <ul>
                {jobOffers.map((offer) => (
                    <li key={offer.id} className="w-3/4 mx-auto transition delay-150 duration-300 ease-in-out hover:scale-105">
                            <JobOfferItemWithDelete jobOffer={offer} onDelete={() => handleDeleteOffer(offer.id)} />
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default JobsListWithDelete;
