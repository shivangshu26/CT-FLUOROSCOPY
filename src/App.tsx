import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import AboutPage from "./components/pages/AboutPage";
import CTFluoroscopyPage from "./components/pages/CTFluoroscopyPage";
import GenerationsPage from "./components/pages/GenerationsPage";
import ProductsPage from "./components/pages/ProductsPage";
import ApplicationsPage from "./components/pages/ApplicationsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Define sections for each page
  const pageSections = {
    home: [
      { id: "intro", label: "Introduction" },
      { id: "education", label: "Education" },
      { id: "research", label: "Research & Achievements" },
      { id: "experience", label: "Experience" },
      { id: "vision", label: "Vision & Goals" },
      { id: "contact", label: "Contact" },
    ],
    ctfluoroscopy: [
      { id: "about", label: "About" },
      { id: "principles", label: "Principles" },
      { id: "design", label: "Design & Working" },
      { id: "types", label: "Types" },
    ],
    generations: [
      { id: "overview", label: "Overview" },
      { id: "timeline", label: "Evolution Timeline" },
      { id: "gen-1", label: "First Generation" },
      { id: "gen-2", label: "Second Generation" },
      { id: "gen-3", label: "Third Generation" },
      { id: "gen-4", label: "Fourth Generation" },
      { id: "comparison", label: "Comparison" },
    ],
    products: [
      { id: "overview", label: "Overview" },
      { id: "products", label: "Available Systems" },
      { id: "comparison", label: "Market Overview" },
      { id: "selection", label: "Selection Criteria" },
    ],
    applications: [
      { id: "overview", label: "Overview" },
      { id: "applications", label: "Clinical Applications" },
      { id: "recent-research", label: "Recent Research" },
      { id: "future", label: "Future Directions" },
    ],
  };

  const currentSections =
    pageSections[currentPage as keyof typeof pageSections] ||
    [];

  // BULLETPROOF: Scroll to section function
  const scrollToSection = (sectionId: string) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🎯 SCROLL FUNCTION CALLED");
    console.log("📍 Target Section ID:", sectionId);
    
    // Step 1: Find the element
    const element = document.getElementById(sectionId);
    
    if (!element) {
      console.error("❌ ERROR: Element not found with ID:", sectionId);
      console.log("Available section IDs on page:");
      document.querySelectorAll('[id]').forEach(el => {
        console.log(`  - ${el.id} (${el.tagName})`);
      });
      return;
    }

    console.log("✅ Element found:", element.tagName, "with ID:", sectionId);

    // Step 2: Stop the intersection observer
    setIsManualScroll(true);
    setActiveSection(sectionId);
    console.log("🔒 Intersection observer disabled");

    // Step 3: Calculate position
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const elementTop = rect.top + scrollTop;
    const headerHeight = window.innerWidth < 768 ? 80 : 96;
    const targetPosition = elementTop - headerHeight;

    console.log("📊 Scroll Calculation:");
    console.log("  - Current scroll:", scrollTop);
    console.log("  - Element top:", elementTop);
    console.log("  - Header height:", headerHeight);
    console.log("  - Target position:", targetPosition);

    // Step 4: Scroll to position
    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    });

    console.log("✅ Scroll command executed");
    console.log("⏳ Waiting for scroll to complete...");

    // Step 5: Re-enable observer after 1.5 seconds
    setTimeout(() => {
      setIsManualScroll(false);
      console.log("🔓 Intersection observer re-enabled");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    }, 1500);
  };

  // Track active section on scroll with Intersection Observer
  useEffect(() => {
    // Skip observer setup during manual scroll
    if (isManualScroll) {
      console.log("⏸️ SKIPPING OBSERVER SETUP - Manual scroll active");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: [0, 0.25, 0.5],
    };

    let debounceTimer: number;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Critical: Check if manual scroll is active
      if (isManualScroll) {
        console.log("⏸️ OBSERVER PAUSED - Manual scroll in progress");
        return;
      }

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topSection = visibleEntries[0];
        const newSectionId = topSection.target.id;

        clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(() => {
          if (!isManualScroll && newSectionId) {
            console.log("👁️ OBSERVER: Setting active section to", newSectionId);
            setActiveSection(newSectionId);
          }
        }, 200);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    let observedCount = 0;
    currentSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        observedCount++;
      }
    });

    console.log(`👁️ OBSERVER: Watching ${observedCount} sections`);

    return () => {
      clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [currentPage, currentSections, isManualScroll]);

  // Set initial active section when page changes
  useEffect(() => {
    // Reset scroll position when page changes
    window.scrollTo({ top: 0, behavior: "instant" });

    // Set first section as active after a small delay to ensure DOM is ready
    if (currentSections.length > 0) {
      setTimeout(() => {
        setActiveSection(currentSections[0].id);
      }, 100);
    }
  }, [currentPage]);

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <AboutPage />;
      case "ctfluoroscopy":
        return <CTFluoroscopyPage />;
      case "generations":
        return <GenerationsPage />;
      case "products":
        return <ProductsPage />;
      case "applications":
        return <ApplicationsPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Debug Indicator - Remove after testing */}
      <div className="fixed bottom-4 right-4 z-[999] bg-purple-600 text-white px-4 py-2 rounded-lg text-xs">
        Active: {activeSection || 'none'}
      </div>

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Left Sidebar */}
      <LeftSidebar
        sections={currentSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        onToggle={setIsSidebarOpen}
      />

      {/* Main Content - Always Centered */}
      <main
        className="pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 max-w-full w-full page-transition overflow-x-hidden will-change-filter"
        style={{
          filter: isSidebarOpen ? "blur(5px)" : "blur(0)",
          WebkitFilter: isSidebarOpen ? "blur(5px)" : "blur(0)",
          transition: "filter 0.3s ease-in-out",
          pointerEvents: isSidebarOpen ? "none" : "auto",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          {renderPage()}
        </div>
      </main>

      {/* Global Styles */}
      <style>{`
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pop In Animation */
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Slide Up Animation */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide In From Left */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Dropdown animations */
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .dropdown-animate {
          animation: dropdownFadeIn 0.3s ease-out forwards;
        }

        /* Slide In Animation */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Scale In Animation */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Pulse Animation */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        /* Glow Animation */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(194, 122, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(194, 122, 255, 0.8);
          }
        }

        /* Float Animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-pop-in {
          animation: popIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(194, 122, 255, 0.3);
        }

        /* Gradient text animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #18181b;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #C27AFF 0%, #51A2FF 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FFB86A 0%, #C27AFF 100%);
        }



        /* Page transition */
        .page-transition {
          animation: fadeIn 0.5s ease-in-out;
        }

        /* Card hover glow */
        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          box-shadow: 0 0 30px rgba(194, 122, 255, 0.4);
          transform: translateY(-2px);
        }

        /* Bounce Animation */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        /* Scroll Reveal Animation */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }

        .scroll-reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Blur transition for main content */
        .blur-transition {
          transition: filter 0.3s ease-in-out;
        }

        /* Performance optimizations */
        .will-change-filter {
          will-change: filter;
        }

        /* Smooth scrolling with GPU acceleration */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Optimize transforms */
        .translate-x-0,
        .translate-x-full,
        .-translate-x-full {
          transform: translateX(var(--tw-translate-x));
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
