import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Check if any CT Fluoroscopy related page is active
  const isCTFluoroActive = ['ctfluoroscopy', 'generations', 'products', 'applications'].includes(currentPage);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mouse enter handler with delay for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  // Mouse leave handler with delay for desktop
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150);
    }
  };

  // Toggle dropdown for mobile
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = [
    { id: 'ctfluoroscopy', label: 'About CT Fluoroscopy', icon: '📖' },
    { id: 'generations', label: 'Generations', icon: '🔄' },
    { id: 'products', label: 'Products', icon: '🏥' },
    { id: 'applications', label: 'Applications', icon: '⚕️' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(24,24,27,0.98)] backdrop-blur-md border-b border-[rgba(63,63,70,0.5)] shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-[60px] py-3 md:py-4">
        {/* Logo Button */}
        <button 
          onClick={() => handleNavigation('home')}
          className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-all duration-300 group"
        >
          <Logo className="w-9 h-9 md:w-11 md:h-11 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-lg md:text-xl lg:text-2xl text-white tracking-wide group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00D3F2] group-hover:via-[#C27AFF] group-hover:to-[#FFB86A] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif", fontWeight: 600, letterSpacing: '0.02em' }}>
            Home
          </span>
        </button>

        {/* Navigation with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 text-xs md:text-sm group ${
              isCTFluoroActive
                ? 'bg-gradient-to-r from-[rgba(255,137,4,0.3)] via-[rgba(173,70,255,0.3)] to-[rgba(43,127,255,0.3)] text-white border border-[#c27aff] shadow-lg shadow-[rgba(194,122,255,0.3)]'
                : 'text-[#d1d5dc] hover:text-white hover:bg-[rgba(63,63,70,0.3)] border border-transparent'
            }`}
          >
            <span className="hidden sm:inline">CT Fluoroscopy</span>
            <span className="sm:hidden">Menu</span>
            <ChevronDown 
              className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${
                isDropdownOpen || isMobileMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-full right-0 mt-2 w-56 md:w-64 bg-[rgba(24,24,27,0.98)] backdrop-blur-md border border-[rgba(63,63,70,0.6)] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
              isDropdownOpen || isMobileMenuOpen
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="py-2">
              {dropdownItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-3 group/item ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[rgba(255,137,4,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] text-white border-l-2 border-[#C27AFF]'
                      : 'text-[#d1d5dc] hover:bg-[rgba(63,63,70,0.4)] hover:text-white hover:border-l-2 hover:border-[#00D3F2]'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isDropdownOpen || isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                  <span className="flex-1 text-sm md:text-base">{item.label}</span>
                  <ChevronDown className={`w-3 h-3 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity ${
                    currentPage === item.id ? 'opacity-100 text-[#C27AFF]' : 'text-[#00D3F2]'
                  }`} />
                </button>
              ))}
            </div>

            {/* Decorative gradient border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C27AFF] to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D3F2] to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
