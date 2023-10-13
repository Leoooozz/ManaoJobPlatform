import DeleteAjobCard from '@/components/recruiterSpace/deleteAjobCard';
import CardForPostRecruiterSpace from '@/components/recruiterSpace/postAjobCard';
import UpdateAjobCard from '@/components/recruiterSpace/updateAjobCard';
const recruiterSpacePage = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
            <div className="mb-6">
                <CardForPostRecruiterSpace />
            </div>
            
            <div className="flex">
                <DeleteAjobCard />
                <UpdateAjobCard />
            </div>
        </div>
    );
};

export default recruiterSpacePage;
