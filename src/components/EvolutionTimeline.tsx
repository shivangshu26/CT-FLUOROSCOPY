import { motion } from "motion/react";
import { Microscope, Gauge, Rocket, Brain, BarChart3, Target, Sparkles } from "lucide-react";

export default function EvolutionTimeline() {
  const generations = [
    {
      icon: Microscope,
      generation: "1st",
      period: "Early 1990s",
      title: "Basic Real-time",
      adoption: 15,
      gradient: "from-gray-700 to-gray-600",
      borderColor: "border-gray-600",
      dotColor: "#6B7280",
      size: "small"
    },
    {
      icon: Gauge,
      generation: "2nd",
      period: "Late 1990s - 2000s",
      title: "Multi-slice Era",
      adoption: 45,
      gradient: "from-gray-700 to-gray-600",
      borderColor: "border-gray-600",
      dotColor: "#6B7280",
      size: "medium"
    },
    {
      icon: Rocket,
      generation: "3rd",
      period: "Mid 2000s - 2010s",
      title: "Low-dose Advanced",
      adoption: 65,
      gradient: "from-orange-600 via-purple-600 to-purple-700",
      borderColor: "border-orange-500",
      dotColor: "#F97316",
      size: "large"
    },
    {
      icon: Brain,
      generation: "4th",
      period: "2015 - Present",
      title: "AI-powered Ultra-low Dose",
      adoption: 80,
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      dotColor: "#A855F7",
      size: "xlarge",
      isCurrent: true
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-32 h-32 md:w-36 md:h-36";
      case "medium":
        return "w-36 h-36 md:w-40 md:h-40";
      case "large":
        return "w-40 h-40 md:w-44 md:h-44";
      case "xlarge":
        return "w-44 h-44 md:w-48 md:h-48";
      default:
        return "w-36 h-36";
    }
  };

  const getIconSize = (size: string) => {
    switch (size) {
      case "small":
        return "w-10 h-10 md:w-12 md:h-12";
      case "medium":
        return "w-12 h-12 md:w-14 md:h-14";
      case "large":
        return "w-14 h-14 md:w-16 md:h-16";
      case "xlarge":
        return "w-16 h-16 md:w-20 md:h-20";
      default:
        return "w-12 h-12";
    }
  };

  return (
    <div className="w-full py-8 md:py-12">
      {/* Timeline Container */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-16 md:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-orange-500 via-purple-500 to-purple-400 opacity-40" 
          style={{ top: '80px' }}
        />

        {/* Generation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
          {generations.map((gen, index) => {
            const Icon = gen.icon;
            const totalDots = 4;
            const filledDots = Math.ceil((gen.adoption / 100) * totalDots);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center relative"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${getSizeClasses(gen.size)} rounded-3xl bg-gradient-to-br ${gen.gradient} 
                    border-2 ${gen.borderColor} backdrop-blur-sm flex flex-col items-center justify-center 
                    relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300
                    ${gen.isCurrent ? 'ring-2 ring-[#5EE9B5] ring-offset-2 ring-offset-black' : ''}`}
                >
                  {/* Green Pulse Animation for Current Generation */}
                  {gen.isCurrent && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-[#5EE9B5]"
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-[#5EE9B5]"
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                      />
                      <motion.div
                        className="absolute -top-2 -right-2 size-4 rounded-full bg-[#5EE9B5]"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`${getIconSize(gen.size)} text-white mb-2 relative z-10`} />
                  </motion.div>

                  {/* Generation Number */}
                  <span className="text-white text-xl md:text-2xl relative z-10">
                    {gen.generation}
                  </span>
                </motion.div>

                {/* Connection Dot */}
                <div 
                  className="w-3 h-3 rounded-full mt-4 mb-2 relative z-10 shadow-lg"
                  style={{ backgroundColor: gen.dotColor }}
                />

                {/* Period */}
                <div className="text-[#99a1af] text-xs md:text-sm mt-2 text-center px-2">
                  {gen.period}
                </div>

                {/* Title */}
                <div className="text-[#d1d5dc] text-xs md:text-sm mt-1 text-center px-2">
                  {gen.title}
                </div>

                {/* Adoption Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`mt-3 px-3 py-1 rounded-full text-xs md:text-sm border ${
                    gen.adoption >= 60 
                      ? 'bg-orange-500/20 border-orange-500/50 text-orange-300'
                      : 'bg-gray-600/20 border-gray-500/50 text-gray-300'
                  }`}
                >
                  {gen.adoption}% Adoption
                </motion.div>

                {/* Progress Dots */}
                <div className="flex gap-1.5 mt-2">
                  {Array.from({ length: totalDots }).map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + dotIndex * 0.1 }}
                      className={`size-2 rounded-full ${
                        dotIndex < filledDots 
                          ? dotIndex === filledDots - 1 && gen.isCurrent
                            ? 'bg-[#5EE9B5] shadow-[0_0_8px_rgba(94,233,181,0.8)]'
                            : 'bg-orange-500'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20"
      >
        {/* Size = Capability */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="size-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-3 shadow-lg"
          >
            <BarChart3 className="w-8 h-8 text-white" />
          </motion.div>
          <h4 className="text-white mb-1">Size = Capability</h4>
          <p className="text-[#99a1af] text-sm">
            Larger nodes represent higher technological advancement
          </p>
        </div>

        {/* Dots = Progress */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="size-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-3 shadow-lg"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>
          <h4 className="text-white mb-1">Dots = Progress</h4>
          <p className="text-[#99a1af] text-sm">
            Orange dots show technological maturity level
          </p>
        </div>

        {/* Glow = Innovation */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(94, 233, 181, 0.5)",
                "0 0 40px rgba(94, 233, 181, 0.8)",
                "0 0 20px rgba(94, 233, 181, 0.5)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity },
              scale: { duration: 0.3 }
            }}
            className="size-16 rounded-full bg-gradient-to-br from-orange-600 to-yellow-700 flex items-center justify-center mb-3"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          <h4 className="text-white mb-1">Glow = Innovation</h4>
          <p className="text-[#99a1af] text-sm">
            Hover to see enhanced visual effects
          </p>
        </div>
      </motion.div>
    </div>
  );
}
