import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const UpdateOffer = () => {
    const router = useRouter();
    const { id } = router.query; // Obtenir l'ID de l'offre d'emploi depuis l'URL

    // État pour stocker les données de l'offre d'emploi actuelle
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        company: '',
        status: '',
    });

    // Fonction pour gérer les modifications des champs du formulaire
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData({
            ...jobData,
            [name]: value,
        });
    };

    // Effect pour charger les données de l'offre d'emploi actuelle depuis le serveur
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/job-offers/${id}`)
                .then((response) => {
                    // Pré-remplir le formulaire avec les données actuelles
                    setJobData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching job data:', error);
                });
        }
    }, [id]);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.patch(`http://localhost:3000/job-offers/${id}`, jobData);
            // Rediriger vers la liste des offres après la mise à jour
            router.push('/jobs');
        } catch (error) {
            console.error('Error updating job data:', error);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Job Title
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Job Title"
                        name="title"
                        value={jobData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                    >
                        Job Description
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Job Description"
                        name="description"
                        value={jobData.description}
                        onChange={handleInputChange}
                        style={{ minHeight: '150px' }}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="company"
                    >
                        Company Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="company"
                        type="text"
                        placeholder="Company Name"
                        name="company"
                        value={jobData.company}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="status"
                    >
                        Job Status
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="status"
                        name="status"
                        value={jobData.status}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="active">Active</option>
                        <option value="expired">Expired</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateOffer;
