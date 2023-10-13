import React from 'react';
import { JobOfferInterface } from '../../../types/Interface';

interface JobOfferProps {
  jobOffer: JobOfferInterface;
}
const JobOfferItem: React.FC<JobOfferProps> = ({ jobOffer }) => {
  return (
    <div className="flex justify-center mb-4 mt-4">
      <a className="rounded-xl w-3/4 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center">
        {/* Titre en haut à gauche */}
        <div className="col-span-8">
          <p className="text-blue-600 font-semibold">{jobOffer.title}</p>
        </div>
        
        {/* Statut en haut à droite */}
        <div className="col-span-4">
          <p className="text-sm text-gray-800 font-light text-right">{jobOffer.status}</p>
        </div>

        {/* Description en texte de la carte */}
        <div className="col-span-12">
          <p className="text-sm text-gray-800 font-light">{jobOffer.description}</p>
        </div>

        {/* Entreprise en dessous de la description */}
        <div className="col-span-6 text-left">
          <p className="text-sm text-gray-800 font-light">Company : {jobOffer.company}</p>
        </div>

        {/* Date en bas à droite */}
        <div className="col-span-6 text-right">
          <p className="text-sm text-gray-800 font-light">{jobOffer.publication_date}</p>
        </div>
      </a>
    </div>
  );
};

export default JobOfferItem;
