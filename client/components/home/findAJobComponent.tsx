import Link from 'next/link';

const FindJobCard = () => {
  return (
    <Link href="/jobs" className="block w-72 h-96 p-6 bg-gradient-to-br from-blue-200 to-blue-300 shadow-md rounded-lg mx-6 cursor-pointer transition transform hover:scale-105">
        <div className="text-3xl text-center font-semibold mb-4">FIND YOUR DREAM JOB</div>
        <p className="text-gray-700 mb-6">
          Looking for an amazing job? Browse through our job listings to find the perfect opportunity.
        </p>
    </Link>
  );
};

export default FindJobCard;
