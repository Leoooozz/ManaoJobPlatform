import Link from 'next/link';

const PostJobCard = () => {
  return (
    <Link href="/recruiterSpace" className="block w-72 h-96 p-6 bg-gradient-to-br from-green-200 to-green-300 shadow-md rounded-lg mx-6 cursor-pointer transition transform hover:scale-105">
        <div className="text-3xl text-center font-semibold mb-4">RECRUITER SPACE</div>
        <p className="text-gray-700 mb-6">
          Are you an employer? Post your job listings and reach out to potential candidates easily.
        </p>
    </Link>
  );
};

export default PostJobCard;
