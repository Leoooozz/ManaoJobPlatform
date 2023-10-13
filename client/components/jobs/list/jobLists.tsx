"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { JobOfferInterface } from '../../../types/Interface';
import JobOfferItem from '../Offer/JobOfferItem';
import axios from 'axios';

const JobsList = () => {
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
          <li key={offer.id} className="w-3/4 mx-auto transition delay-150 duration-300 ease-in-out hover:scale-105 "> 
            <Link href={`/jobs/${offer.id}`}>
              <JobOfferItem jobOffer={offer} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
