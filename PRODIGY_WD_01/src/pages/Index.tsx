
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';

const Index = () => {
  const sections = [
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Crafting Digital Experiences',
      description: 'We are passionate developers creating beautiful, interactive web experiences. Notice how the navigation menu transforms as you scroll, providing visual feedback and maintaining usability across different sections.',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      textColor: 'text-gray-900'
    },
    {
      id: 'services',
      title: 'Our Services',
      subtitle: 'What We Offer',
      description: 'From responsive design to interactive animations, we deliver comprehensive web solutions. The navigation menu adapts its appearance based on the background, ensuring optimal contrast and readability.',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      textColor: 'text-blue-900'
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      subtitle: 'Start Your Project',
      description: 'Ready to bring your vision to life? Contact us today and experience the difference that thoughtful design and smooth interactions can make for your digital presence.',
      bgColor: 'bg-gradient-to-br from-purple-900 to-indigo-900',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      {sections.map((section) => (
        <ContentSection
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          bgColor={section.bgColor}
          textColor={section.textColor}
        />
      ))}
    </div>
  );
};

export default Index;
