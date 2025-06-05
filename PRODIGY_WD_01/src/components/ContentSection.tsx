
import React from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  bgColor,
  textColor
}) => {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 opacity-80 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {subtitle}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed opacity-70 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {description}
        </p>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-current opacity-30 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
