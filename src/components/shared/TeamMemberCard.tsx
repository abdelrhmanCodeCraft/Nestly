import Image from 'next/image';
import { Twitter, Send } from 'lucide-react'; 
import { TeamMember } from '../../constants/data';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="p-4 rounded-xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-[1.02] relative group">
      <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
        <Image
          src={member.imageSrc}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        
        <a 
          href={member.twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-4 left-4 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition flex items-center justify-center"
        >
          <Twitter size={20} />
        </a>
      </div>

      <div className="text-center mt-2">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-400">{member.title}</p>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-3">
        <button className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition flex justify-center items-center">
          Say Hello 👋
        </button>
        <button className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition flex items-center justify-center">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;