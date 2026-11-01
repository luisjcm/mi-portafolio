import React from 'react';
import { Settings } from 'lucide-react'; 

const HeroBlueprint: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(120, 169, 208, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(120, 169, 208, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="absolute -top-10 -right-16 md:right-[5%] opacity-10">
         <Settings 
           size={340} 
           className="text-brand-accent animate-[spin_60s_linear_infinite]" 
           strokeWidth={1} 
         />
      </div>
      
      <div className="absolute -bottom-12 -left-16 md:left-[4%] opacity-[0.08]">
         <Settings 
           size={240} 
           className="text-brand-accent animate-[spin_45s_linear_infinite_reverse]" 
           strokeWidth={1} 
         />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(33,67,101,0.14),transparent_60%),linear-gradient(180deg,rgba(10,20,34,0.48),rgba(10,20,34,0.76))]"></div>
      
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A1422]/85 to-transparent"></div>
    </div>
  );
};

export default HeroBlueprint;