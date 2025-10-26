export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Professional hexagonal logo with initials */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        <defs>
          {/* Main gradient for logo */}
          <linearGradient id="logoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D3F2" />
            <stop offset="50%" stopColor="#C27AFF" />
            <stop offset="100%" stopColor="#FFB86A" />
          </linearGradient>
          
          {/* Shimmer gradient for animation */}
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Glow filter */}
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Hexagonal background shape */}
        <path
          d="M 50 5 L 85 25 L 85 65 L 50 85 L 15 65 L 15 25 Z"
          fill="url(#logoGradientMain)"
          opacity="0.15"
        />
        
        {/* Hexagonal border with gradient */}
        <path
          d="M 50 5 L 85 25 L 85 65 L 50 85 L 15 65 L 15 25 Z"
          stroke="url(#logoGradientMain)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#logoGlow)"
        />
        
        {/* Inner geometric accent - top left */}
        <path
          d="M 30 25 L 45 17 L 45 33 Z"
          fill="#00D3F2"
          opacity="0.3"
        />
        
        {/* Inner geometric accent - bottom right */}
        <path
          d="M 70 65 L 55 73 L 55 57 Z"
          fill="#FFB86A"
          opacity="0.3"
        />
        
        {/* Initials SS in elegant font */}
        <text 
          x="50" 
          y="62" 
          fontSize="36" 
          fontWeight="700"
          fill="url(#logoGradientMain)"
          textAnchor="middle"
          fontFamily="'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
          letterSpacing="2"
        >
          SS
        </text>
        
        {/* Shimmer effect overlay */}
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="url(#shimmerGradient)"
          opacity="0.3"
        />
        
        {/* Small accent dots */}
        <circle cx="50" cy="15" r="2" fill="#C27AFF" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="75" r="2" fill="#00D3F2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </svg>
      
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d3f2] via-[#C27AFF] to-[#FFB86A] opacity-20 rounded-lg blur-lg" />
    </div>
  );
}
