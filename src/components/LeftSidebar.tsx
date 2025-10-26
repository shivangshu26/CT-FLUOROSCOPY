import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface LeftSidebarProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onToggle?: (isOpen: boolean) => void;
}

export default function LeftSidebar({ sections, activeSection, onSectionClick, onToggle }: LeftSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize sidebar state
  useEffect(() => {
    setIsOpen(false);
    onToggle?.(false);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🖱️ BUTTON CLICKED!");
    console.log("📍 Target Section:", sectionId);
    
    // TEST: Show alert to confirm click is working
    console.log("🔔 Click handler is executing!");
    
    // Call the parent scroll function
    console.log("📞 About to call onSectionClick function...");
    onSectionClick(sectionId);
    console.log("✅ onSectionClick function called");
    
    // Close sidebar after scroll
    setTimeout(() => {
      setIsOpen(false);
      onToggle?.(false);
      console.log("🚪 Sidebar closed");
    }, 1500);
  };

  const toggleSidebar = () => {
    const newState = !isOpen;
    console.log(newState ? "📂 Opening sidebar" : "📁 Closing sidebar");
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed left-4 md:left-6 top-20 md:top-24 z-[60] p-2 md:p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-[rgba(194,122,255,0.9)] border-2 border-[#C27AFF]' 
            : 'bg-[rgba(39,39,42,0.9)] border border-[rgba(63,63,70,0.5)] hover:bg-[rgba(39,39,42,1)]'
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-[#FFB86A]" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsOpen(false);
            onToggle?.(false);
          }}
          style={{ background: 'transparent' }}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed left-0 top-[60px] md:top-[68px] h-[calc(100vh-60px)] md:h-[calc(100vh-68px)] bg-[rgba(24,24,27,0.98)] backdrop-blur-md border-r border-[rgba(194,122,255,0.3)] transition-all duration-300 z-50 shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ 
          width: window.innerWidth < 640 ? '280px' : '255px',
          boxShadow: isOpen ? '0 0 40px rgba(194, 122, 255, 0.2)' : 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 md:p-6 space-y-4 mt-12 md:mt-16 overflow-y-auto h-full pb-20 scrollbar-thin scrollbar-thumb-[#C27AFF] scrollbar-track-transparent">
          <h3 className="text-[#99a1af] text-xs md:text-sm uppercase tracking-wider">On This Page</h3>
          
          <div className="space-y-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSectionClick(section.id);
                }}
                className={`w-full text-left px-3 py-3 md:py-2.5 rounded-lg transition-all duration-200 text-sm md:text-base relative overflow-hidden flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-[rgba(255,137,4,0.3)] via-[rgba(173,70,255,0.3)] to-[rgba(43,127,255,0.3)] text-white border border-[#c27aff] shadow-lg shadow-[rgba(194,122,255,0.3)]'
                    : 'text-[#99a1af] hover:text-white hover:bg-[rgba(63,63,70,0.3)] hover:scale-[1.02] active:scale-95 border border-transparent'
                }`}
                style={{
                  animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 50}ms forwards` : 'none',
                  pointerEvents: 'auto',
                  cursor: 'pointer'
                }}
              >
                {/* Active indicator dot */}
                {activeSection === section.id && (
                  <span className="size-2 rounded-full bg-[#C27AFF] animate-pulse" />
                )}
                <span className={activeSection === section.id ? '' : 'ml-4'}>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
