import Image from 'next/image';

const OurJourney: React.FC = () => {
  return (
    <section className="text-white py-16 pb-20 lg:pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1596px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 px-4 sm:px-6 md:px-8 xl:px-20 2xl:px-24">

        <div className="lg:w-1/2">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Journey</h2>
          </div>
          
          <p className="mt-4 text-gray-400 max-w-lg leading-relaxed">
            Our story is one of continuous growth and evolution. We started as a small team with big 
            dreams, determined to create a real estate platform that transcended the ordinary. Over the 
            years, we've expanded our reach, forged valuable partnerships, and gained the trust of 
            countless clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="w-full sm:w-40 border border-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <p className="text-3xl font-bold">200+</p>
              <p className="text-sm text-gray-400 mt-1">Happy Customers</p>
            </div>

            <div className="w-full sm:w-40 border border-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-gray-400 mt-1">Properties For Clients</p>
            </div>

            <div className="w-full sm:w-40 border border-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <p className="text-3xl font-bold">16+</p>
              <p className="text-sm text-gray-400 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-4">
          <div className="relative w-full max-w-md h-60 sm:h-72 lg:h-96">
            <Image 
              src="/assets/Sub.png" 
              alt="House Model"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OurJourney;
