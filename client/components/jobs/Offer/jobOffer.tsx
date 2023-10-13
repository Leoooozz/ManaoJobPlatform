"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { JobOfferInterface } from '../../../types/Interface';
import axios from 'axios';
import JobOfferItem from './JobOfferItem';


const JobOfferComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    const [jobOffer, setJobOffer] = useState<JobOfferInterface | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/job-offers/${id}`);
                setJobOffer(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l\'offre d\'emploi', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!jobOffer) {
        return <div>Offre d'emploi non trouvée</div>;
    }

    return (
        <div>
            <JobOfferItem jobOffer={jobOffer} />
        </div>
    );
};

export default JobOfferComponent;
