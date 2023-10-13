import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JobCount = () => {
    const [jobCount, setJobCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/job-offers'); // Remplacez par l'URL de votre API
                const jobData = await response.data;
                setJobCount(jobData.length); // Mettez à jour le nombre d'emplois
            } catch (error) {
                console.error('Erreur lors de la récupération des offres d\'emploi', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center mb-4 mt-4 text-blue-600 font-bold text-4xl">
            {jobCount} OFFER{jobCount !== 1 ? 'S' : ''} AVAILABLE{jobCount !== 1 ? 'S' : ''}
        </div>
    );
}

export default JobCount;
