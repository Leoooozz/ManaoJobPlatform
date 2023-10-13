import PostJobCard from '@/components/home/postAJobComponent';
import FindJobCard from '../components/home/findAJobComponent';

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <FindJobCard/> 
        <PostJobCard/> 
      </div>
    </div>
  );
};

export default HomePage;
