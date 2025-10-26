import { Calendar, Zap, Shield, Award, TrendingUp, CheckCircle, Database } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import EvolutionTimeline from "../EvolutionTimeline";

export default function GenerationsPage() {
  const generations = [
    {
      number: 1,
      period: "Early 1990s",
      title: "First Generation",
      subtitle: "The Dawn of Real-Time CT Imaging",
      overview: "The introduction of CT fluoroscopy in the early 1990s marked a revolutionary moment in interventional radiology. Building upon conventional fluoroscopy and standard CT technology, these early systems provided the first glimpse of real-time cross-sectional imaging during procedures. Despite limitations, they demonstrated the immense potential of the technology.",
      gradient: "from-[#FFB86A] to-[#C27AFF]",
      icon: "1",
      features: [
        "Single-slice acquisition with slow rotation speeds (1-2 seconds)",
        "Image update rates of 1-2 images per second",
        "Basic real-time reconstruction algorithms",
        "Manual exposure control and limited dose modulation",
        "Continuous rotation capability via slip-ring technology",
        "Dedicated interventional consoles with foot pedal control"
      ],
      advances: [
        "First practical implementation of real-time CT imaging",
        "Proved feasibility of CT-guided interventions",
        "Established foundation for cross-sectional fluoroscopy",
        "Demonstrated superior accuracy vs conventional fluoroscopy",
        "Enabled procedures previously deemed too risky"
      ],
      applications: [
        "Lung biopsies of larger lesions (>2cm)",
        "Simple liver and kidney biopsies",
        "Basic vertebroplasty procedures",
        "Abscess drainage in straightforward cases",
        "Research and technique development"
      ],
      limitations: [
        "High radiation dose (12-20 mSv per procedure)",
        "Limited anatomical coverage (single 5-10mm slice)",
        "Slow image reconstruction (500-1000ms)",
        "Poor image quality by modern standards",
        "Significant motion artifacts"
      ]
    },
    {
      number: 2,
      period: "Late 1990s - Early 2000s",
      title: "Second Generation",
      subtitle: "Multi-Slice Technology Breakthrough",
      overview: "The advent of multi-detector CT technology brought significant improvements to CT fluoroscopy. With 4-16 detector rows, faster rotation speeds, and improved reconstruction algorithms, these systems expanded the range of feasible procedures and began to gain widespread clinical acceptance.",
      gradient: "from-[#C27AFF] to-[#51A2FF]",
      icon: "2",
      features: [
        "4-16 slice multi-detector CT configuration",
        "Improved image update rates (3-6 images/second)",
        "Faster gantry rotation speeds (0.5-0.8 seconds)",
        "Automatic exposure control (AEC) systems",
        "Improved detector efficiency and sensitivity",
        "Enhanced workstation interfaces with 3D planning"
      ],
      advances: [
        "30-50% radiation dose reduction vs first generation",
        "Wider anatomical coverage (20-40mm per rotation)",
        "Better image quality with reduced noise",
        "Faster workflow enabling more procedures per day",
        "Introduction of pulsed fluoroscopy modes"
      ],
      applications: [
        "Small lung nodule biopsies (down to 8-10mm)",
        "Complex spine interventions",
        "Tumor ablations (RFA introduction)",
        "Multi-level vertebroplasty",
        "Deep pelvic biopsies",
        "Pediatric procedures (limited)"
      ],
      limitations: [
        "Still relatively high dose (6-10 mSv typical)",
        "Image lag in challenging patients",
        "Limited utility in very obese patients",
        "Reconstruction artifacts in some cases"
      ]
    },
    {
      number: 3,
      period: "2005 - 2015",
      title: "Third Generation",
      subtitle: "High-Definition Real-Time Imaging",
      overview: "Third-generation systems represented a quantum leap in CT fluoroscopy capability. With 64-320 detector rows, advanced reconstruction algorithms, and sophisticated dose management, these scanners became the workhorse of interventional radiology departments worldwide and expanded applications significantly.",
      gradient: "from-[#51A2FF] to-[#00D3F2]",
      icon: "3",
      features: [
        "64-320 detector row configurations",
        "Near real-time image updates (8-10 images/second)",
        "Ultra-fast gantry rotation (0.27-0.35 seconds)",
        "Iterative reconstruction (iDose, ASIR, SAFIRE)",
        "Advanced automatic dose modulation (3D/4D)",
        "Dual-energy capabilities on select models",
        "Integrated navigation and fusion software"
      ],
      advances: [
        "60-70% dose reduction compared to first generation",
        "Exceptional image quality rivaling diagnostic CT",
        "Wide volume coverage (up to 16cm)",
        "Sub-second update times approximating true real-time",
        "Improved workflow with intelligent automation",
        "Better performance in challenging patient populations"
      ],
      applications: [
        "Tiny lung nodules (5-6mm) with high confidence",
        "Complex ablations (liver, kidney, bone, lung)",
        "Advanced spine procedures (SI joint fusion, TFESI)",
        "Pediatric interventions with lower doses",
        "Cardiac interventions (experimental)",
        "Simultaneous multi-level treatments",
        "Difficult biopsies (moving targets, deep lesions)"
      ],
      limitations: [
        "Cost remained high ($1.5-2.5M)",
        "Still some motion artifacts in challenging cases",
        "Limited spectral capabilities",
        "Reconstruction speed bottleneck in some systems"
      ]
    },
    {
      number: 4,
      period: "2015 - Present",
      title: "Fourth Generation",
      subtitle: "AI-Powered Precision Medicine",
      overview: "Current fourth-generation CT fluoroscopy systems leverage artificial intelligence, photon-counting detectors, and cloud computing to deliver unprecedented performance. These platforms represent the state-of-the-art, with some systems achieving dose levels and image quality once thought impossible.",
      gradient: "from-[#00D3F2] to-[#5EE9B5]",
      icon: "4",
      features: [
        "AI-powered dose optimization and image enhancement",
        "Ultra-fast reconstruction (50-100ms) with deep learning",
        "Photon-counting detectors (select premium models)",
        "True real-time imaging (15-20+ images/second)",
        "Integrated robotic navigation systems",
        "Advanced motion compensation algorithms",
        "Spectral imaging capabilities (dual-energy, multi-energy)",
        "Cloud-based processing and remote access",
        "AR/VR compatibility for procedure planning"
      ],
      advances: [
        "70-80% total dose reduction vs first generation",
        "Exceptional low-contrast resolution",
        "Virtually artifact-free images",
        "Automated needle tracking and guidance",
        "Real-time spectral material decomposition",
        "Predictive collision avoidance",
        "5G-enabled remote procedures (experimental)"
      ],
      applications: [
        "Ultra-small lesion targeting (<5mm)",
        "Real-time treatment monitoring (thermal ablation)",
        "Molecular imaging integration (PET/CT fluoro)",
        "Pediatric procedures at diagnostic dose levels",
        "Cardiac and vascular interventions",
        "Robotic-assisted complex procedures",
        "Intraoperative guidance",
        "Telemedicine and remote expert collaboration",
        "Training with AR/VR simulation"
      ],
      limitations: [
        "High initial cost ($2-3.5M+)",
        "Requires specialized training",
        "Infrastructure demands (power, cooling, space)",
        "Regulatory approval pending for some features"
      ]
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-20 overflow-x-hidden">
      {/* Overview Section */}
      <ScrollReveal>
        <section id="overview" className="space-y-6 overflow-x-hidden">
          <h1 className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            CT Fluoroscopy Generations
          </h1>
          
          <p className="text-base md:text-lg text-[#d1d5dc] leading-7">
            The evolution of CT fluoroscopy technology has progressed through four distinct generations, each bringing transformative improvements in imaging speed, radiation dose reduction, and clinical capabilities.
          </p>

          {/* Key Insights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
            <ScrollReveal delay={100}>
              <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-4 md:p-6 border border-[rgba(82,82,92,0.6)] text-center hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#FFB86A] mx-auto mb-3" />
                <div className="text-xl md:text-2xl text-white mb-2">10x Faster</div>
                <div className="text-sm md:text-base text-[#99a1af]">Image Reconstruction</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-4 md:p-6 border border-[rgba(82,82,92,0.6)] text-center hover:scale-105 transition-transform duration-300">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#DAB2FF] mx-auto mb-3" />
                <div className="text-xl md:text-2xl text-white mb-2">75% Dose Reduction</div>
                <div className="text-sm md:text-base text-[#99a1af]">From 1st to 4th Gen</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-4 md:p-6 border border-[rgba(82,82,92,0.6)] text-center hover:scale-105 transition-transform duration-300">
                <Database className="w-10 h-10 md:w-12 md:h-12 text-[#8EC5FF] mx-auto mb-3" />
                <div className="text-xl md:text-2xl text-white mb-2">98% Accuracy</div>
                <div className="text-sm md:text-base text-[#99a1af]">Modern Systems</div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Generations Detail */}
      {generations.map((gen, genIndex) => (
        <ScrollReveal key={genIndex} delay={genIndex * 100}>
          <section id={`gen-${gen.number}`} className="space-y-6">
            <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-4 md:p-8 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Generation Header with Large Number Icon */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
                <div className={`size-20 md:size-24 rounded-2xl bg-gradient-to-r ${gen.gradient} flex items-center justify-center shrink-0 shadow-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="text-4xl md:text-5xl text-white relative z-10">{gen.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs md:text-sm text-[#99a1af] mb-1">{gen.period}</div>
                  <h2 className="text-2xl md:text-3xl text-white mb-2">{gen.title}</h2>
                  <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] to-[#00D3F2]">
                    {gen.subtitle}
                  </p>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm md:text-base text-[#d1d5dc] leading-7 mb-6 md:mb-8">{gen.overview}</p>

              {/* Key Features */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#FFB86A]" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {gen.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[rgba(39,39,42,0.5)] p-3 rounded-lg border border-[rgba(63,63,70,0.3)] hover:border-[rgba(194,122,255,0.5)] transition-all">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#5EE9B5] mt-1 shrink-0" />
                      <span className="text-sm md:text-base text-[#d1d5dc]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advances */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#C27AFF]" />
                  Major Advances
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {gen.advances.map((advance, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[rgba(39,39,42,0.5)] p-3 rounded-lg border border-[rgba(63,63,70,0.3)] hover:border-[rgba(194,122,255,0.5)] transition-all">
                      <Award className="w-3 h-3 md:w-4 md:h-4 text-[#C27AFF] mt-1 shrink-0" />
                      <span className="text-sm md:text-base text-[#d1d5dc]">{advance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Applications */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#51A2FF]" />
                  Clinical Applications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {gen.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[rgba(39,39,42,0.5)] p-3 rounded-lg border border-[rgba(63,63,70,0.3)] hover:border-[rgba(81,162,255,0.5)] transition-all">
                      <span className="text-[#51A2FF] mr-1 shrink-0">→</span>
                      <span className="text-sm md:text-base text-[#d1d5dc]">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations (if any) */}
              {gen.limitations && (
                <div className="bg-[rgba(255,137,4,0.1)] rounded-xl p-4 border border-[rgba(255,137,4,0.3)]">
                  <h4 className="text-[#FFB86A] mb-3 text-sm md:text-base">Limitations</h4>
                  <ul className="space-y-2">
                    {gen.limitations.map((limit, idx) => (
                      <li key={idx} className="text-sm md:text-base text-[#d1d5dc] flex items-start">
                        <span className="text-[#FFB86A] mr-2">•</span>
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* Comparison Section */}
      <ScrollReveal>
        <section id="comparison" className="space-y-6">
          <h2 className="text-2xl md:text-3xl text-white">Generation Comparison</h2>
          
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-4 md:p-8 border border-[rgba(82,82,92,0.6)] shadow-xl overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-[rgba(82,82,92,0.6)]">
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-white">Feature</th>
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-[#FFB86A]">Gen 1</th>
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-[#C27AFF]">Gen 2</th>
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-[#51A2FF]">Gen 3</th>
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-[#00D3F2]">Gen 4</th>
                </tr>
              </thead>
              <tbody className="text-[#d1d5dc]">
                <tr className="border-b border-[rgba(82,82,92,0.3)] hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">Image Rate</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">1-2 img/s</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">3-6 img/s</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">8-10 img/s</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">15-20 img/s</td>
                </tr>
                <tr className="border-b border-[rgba(82,82,92,0.3)] hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">Detector Rows</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">Single</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">4-16</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">64-320</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">256-512+</td>
                </tr>
                <tr className="border-b border-[rgba(82,82,92,0.3)] hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">Reconstruction</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">500-1000ms</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">200-400ms</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">100-200ms</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">50-100ms</td>
                </tr>
                <tr className="border-b border-[rgba(82,82,92,0.3)] hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">Dose Reduction</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">Baseline</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">30-50%</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">60-70%</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">70-80%</td>
                </tr>
                <tr className="border-b border-[rgba(82,82,92,0.3)] hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">AI Integration</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">None</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">None</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">Limited</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">Advanced</td>
                </tr>
                <tr className="hover:bg-[rgba(82,82,92,0.2)] transition-colors">
                  <td className="py-3 md:py-4 px-2 md:px-4">Typical Cost</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">$800K-1.2M</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">$1-1.8M</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">$1.5-2.5M</td>
                  <td className="py-3 md:py-4 px-2 md:px-4">$2-3.5M+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* Technological Evolution Timeline */}
      <ScrollReveal>
        <section id="timeline" className="space-y-8 overflow-x-hidden">
          <div className="flex items-center gap-3 justify-center">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#C27AFF]" />
            <h2 className="text-2xl md:text-3xl text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
              Technological Evolution Timeline
            </h2>
          </div>

          <p className="text-base text-[#d1d5dc] leading-7 text-center max-w-3xl mx-auto">
            Trace the remarkable journey of CT Fluoroscopy technology from its inception to the cutting-edge AI-powered systems of today.
          </p>

          {/* Interactive Horizontal Timeline */}
          <EvolutionTimeline />
        </section>
      </ScrollReveal>
    </div>
  );
}
