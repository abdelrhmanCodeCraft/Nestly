
import { Star, Award, Users, Handshake } from 'lucide-react';

const OurValues: React.FC = () => {
    const ValueCard: React.FC<{ title: string; description: string; Icon: React.FC<any> }> = ({ title, description, Icon }) => (
        <div className="p-4 flex items-start space-x-4">
            <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-blue-500/20 border border-purple-500/30">
                    <Icon className="text-purple-400 w-6 h-6" />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );

  return (
    <section className="text-white pb-20 lg:pb-40 md:px-8 lg:px-16">

      <div className="max-w-[1596px]  mx-auto m:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="lg:w-1/3 px-4">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Values</h2>
          </div>

          <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
            Our story is one of continuous growth and evolution. We started as a small team with big 
            dreams, determined to create a real estate platform that that transcended the ordinary.
          </p>
        </div>

        <div className="lg:w-2/3 p-6 rounded-xl shadow-2xl shadow-gray-800">         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
              <ValueCard 
                  title="Trust" 
                  description="Trust is the cornerstone of every successful real estate transaction." 
                  Icon={Star} 
              />
            </div>
            
            <div className="border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
              <ValueCard 
                  title="Excellence" 
                  description="We set the bar high for ourselves. From the properties we list to the services we provide." 
                  Icon={Award} 
              />
            </div>

            <div className="border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
              <ValueCard 
                  title="Client-Centric" 
                  description="Your dreams and needs are at the center of our universe. We listen, understand." 
                  Icon={Users} 
              />
            </div>
            
            <div className="border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
              <ValueCard 
                  title="Our Commitment" 
                  description="We are dedicated to providing you with the highest level of service, professionalism, and support." 
                  Icon={Handshake} 
              />
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OurValues;