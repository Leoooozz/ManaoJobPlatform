import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JobOfferInterface } from '@/types/Interface';
import OfferItemWihtUpdate from './offerItemWithUpdateButton';

const UpdateJobList = () => {
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

    return (
        <div>
            <ul>
                {jobOffers.map((offer) => (
                    <li key={offer.id} className="w-3/4 mx-auto transition delay-150 duration-300 ease-in-out hover:scale-105">
                        <OfferItemWihtUpdate jobOffer={offer} />
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default UpdateJobList;
