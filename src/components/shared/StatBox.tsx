interface StatBoxProps {
  value: string;
  label: string;
  accentColor?: 'purple' | 'pink' | 'blue';
}

export default function StatBox({ value, label, accentColor = 'purple' }: StatBoxProps) {
  const accentClasses = {
    purple: 'bg-gradient-to-br from-[#703BF7] to-[#A685FA]',
    pink: 'bg-gradient-to-br from-[#FF6B9D] to-[#FF8E53]',
    blue: 'bg-gradient-to-br from-[#4F8AFF] to-[#6CD9FF]',
  };

  return (
    <div className="group bg-[#1A1A1A] border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-lg ${accentClasses[accentColor]} flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">
            {value.includes('+') ? value.charAt(0) : '★'}
          </span>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {value}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {label}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
}