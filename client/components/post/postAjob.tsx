import axios from 'axios';
import React, { useState } from 'react'
import router, { useRouter } from 'next/router';
const PostAjob = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobStatus, setJobStatus] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const publicationDate = new Date().toISOString();
        try {
            const response = await axios.post('http://localhost:3000/job-offers', {
                title: jobTitle,
                description: jobDescription,
                company: companyName,
                publication_date: publicationDate,
                status: jobStatus
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            console.log('Réponse de la requête POST :', response.data);
            router.push('/jobs');
        }
        catch (error) {
            console.error('Error during the post request');
        }
    };
    return (
        <div className="w-full max-w-lg mx-auto mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="jobTitle"
                    >
                        Job Title
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="jobTitle"
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="jobDescription"
                    >
                        Job Description
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="jobDescription"
                        placeholder="Job Description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="companyName"
                    >
                        Company Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="companyName"
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="jobStatus"
                    >
                        Job Status
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="jobStatus"
                        value={jobStatus}
                        onChange={(e) => setJobStatus(e.target.value)}
                        required
                    >
                        <option value="active">Active</option>
                        <option value="expired">Expired</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
                {/* Bouton de soumission */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostAjob;
