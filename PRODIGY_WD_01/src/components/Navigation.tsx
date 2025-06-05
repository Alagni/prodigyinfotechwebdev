
import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { 
      name: 'Services', 
      icon: Briefcase, 
      href: '#services',
      dropdown: ['Web Design', 'Development', 'Consulting', 'SEO']
    },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Logo
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-300 hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="relative">
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isScrolled ? 'bg-blue-600' : 'bg-blue-300'
                      }`}></span>
                    </span>
                    {item.dropdown && (
                      <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible transform translate-y-0' 
                        : 'opacity-0 invisible transform -translate-y-2'
                    } bg-white border border-gray-200`}>
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, index) => (
                          <a
                            key={dropdownItem}
                            href={`#${dropdownItem.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            style={{
                              animationDelay: `${index * 50}ms`
                            }}
                          >
                            {dropdownItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
