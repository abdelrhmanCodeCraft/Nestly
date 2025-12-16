import { teamMembers } from '../../constants/data';
import TeamMemberCard from '../shared/TeamMemberCard';

const NestlyTeam: React.FC = () => {
  return (
    <section className=" py-20  sm:px-6 lg:px-8">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Meet the Nestly Team
          </h2>
          <p className="max-w-3xl  text-gray-400 text-lg">
            At Nestly, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NestlyTeam;