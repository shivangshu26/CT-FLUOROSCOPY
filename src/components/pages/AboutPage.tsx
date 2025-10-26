import { GraduationCap, Award, Briefcase, FileText, ExternalLink, Heart, Microscope, Mail, Linkedin } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import profileImage from "figma:asset/730148c0813c540e85f5a833dae27b5ab65bbd85.png";

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-20 overflow-x-hidden">
      {/* Hero Section with Photo */}
      <ScrollReveal>
        <section id="intro" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-[rgba(194,122,255,0.3)] shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Shivangshu Srivastava"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] animate-gradient leading-tight">
                  Shivangshu Srivastava
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-[#00D3F2]">
                  Biomedical Engineer & Healthcare Innovator
                </p>
              </div>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] rounded-full" />
              
              <p className="text-base sm:text-lg text-[#d1d5dc] leading-relaxed">
                Hi! I'm a Biomedical Engineer driven by the idea of combining technology and healthcare to improve lives. 
                My passion for biomedical innovation comes from a desire to make healthcare smarter and more accessible.
              </p>

              <div className="flex items-start gap-3 text-[#FFB86A]">
                <Heart className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">Passionate about Medical Devices, Wearable Health Monitoring & Imaging Systems</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal delay={100}>
        <section id="education" className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#C27AFF]" />
            <h2 className="text-3xl md:text-4xl text-white">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* M.Tech */}
            <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(194,122,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[rgba(255,137,4,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#C27AFF] text-sm mb-3 inline-block">
                      Current
                    </div>
                    <h3 className="text-2xl text-white mb-2">M.Tech in Biomedical Engineering</h3>
                    <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] via-[#00D3F2] to-[#51A2FF]">
                      SRM University, Chennai
                    </p>
                  </div>
                </div>
                <p className="text-[#d1d5dc]">
                  Advancing my expertise in biomedical technologies, medical imaging, and healthcare innovation.
                </p>
              </div>
            </div>

            {/* B.Tech */}
            <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,184,106,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[rgba(255,184,106,0.2)] to-[rgba(255,184,106,0.1)] border border-[rgba(255,184,106,0.5)] text-[#FFB86A] text-sm mb-3 inline-block">
                      Completed
                    </div>
                    <h3 className="text-2xl text-white mb-2">B.Tech in Biomedical Engineering</h3>
                    <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] to-[#C27AFF]">
                      Parul University, Vadodara
                    </p>
                  </div>
                </div>
                <p className="text-[#d1d5dc]">
                  Foundation in biomedical engineering principles, medical devices, and healthcare technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Research & Achievement Section */}
      <ScrollReveal delay={150}>
        <section id="research" className="space-y-8">
          <div className="flex items-center gap-3">
            <Microscope className="w-8 h-8 text-[#5EE9B5]" />
            <h2 className="text-3xl md:text-4xl text-white">Research & Achievements</h2>
          </div>

          {/* BIOSORT Project */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-8 border border-[rgba(82,82,92,0.6)] shadow-xl">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-[#5EE9B5]" />
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[rgba(94,233,181,0.2)] to-[rgba(0,211,242,0.2)] border border-[rgba(94,233,181,0.5)] text-[#5EE9B5] text-sm">
                      Published Research
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-white mb-3">
                    BIOSORT: An Intelligent Automated Biomedical Waste Segregation System
                  </h3>
                  <p className="text-lg text-[#d1d5dc] leading-relaxed mb-4">
                    An innovative automated system for biomedical waste segregation that sorts waste into wet, dry, and metallic categories using advanced sensors and mechanical components.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[rgba(39,39,42,0.5)] rounded-lg p-4 border border-[rgba(63,63,70,0.5)]">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-[#5EE9B5]">•</span>
                    Key Impact
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Reduces manual handling and minimizes health risks for healthcare workers</p>
                </div>
                <div className="bg-[rgba(39,39,42,0.5)] rounded-lg p-4 border border-[rgba(63,63,70,0.5)]">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-[#00D3F2]">•</span>
                    Application
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Designed for hospital use to improve waste management and environmental safety</p>
                </div>
                <div className="bg-[rgba(39,39,42,0.5)] rounded-lg p-4 border border-[rgba(63,63,70,0.5)]">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-[#51A2FF]">•</span>
                    Benefits
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Increases operational efficiency and promotes sustainable healthcare practices</p>
                </div>
              </div>

              <a
                href="https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2025/68879/final/fin_irjmets1741518534.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[rgba(94,233,181,0.3)] to-[rgba(0,211,242,0.3)] border border-[#5EE9B5] text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(94,233,181,0.4)]"
              >
                <FileText className="w-5 h-5" />
                <span>Read Full Research Paper</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tech Expo Achievement */}
          <div className="bg-gradient-to-r from-[rgba(255,137,4,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] rounded-2xl p-6 border border-[rgba(194,122,255,0.5)] shadow-xl">
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-[#FFB86A] flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white mb-1">🏆 1st Runner-Up - Tech Expo 2025</h3>
                <p className="text-[#d1d5dc]">
                  Secured the 1st Runner-Up position at Tech Expo 2025, organized by Parul University, showcasing innovative biomedical engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal delay={200}>
        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[#51A2FF]" />
            <h2 className="text-3xl md:text-4xl text-white">Professional Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Hospital Internship */}
            <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border-l-4 border-[#C27AFF] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-white mb-1">Biomedical Engineering Intern</h3>
                    <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#C27AFF] to-[#51A2FF]">
                      Parul Sevashram Hospital, Vadodara
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(173,70,255,0.2)] to-[rgba(81,162,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#C27AFF] text-sm whitespace-nowrap">
                    Clinical Exposure
                  </span>
                </div>
                
                <p className="text-[#d1d5dc] leading-relaxed">
                  Worked in the Biomedical Department gaining hands-on exposure to the functioning and maintenance of various biomedical equipment in a real healthcare setting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[#C27AFF] mt-1">•</span>
                    <span className="text-[#d1d5dc]">Equipment maintenance and troubleshooting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#51A2FF] mt-1">•</span>
                    <span className="text-[#d1d5dc]">Clinical workflow understanding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#00D3F2] mt-1">•</span>
                    <span className="text-[#d1d5dc]">Hospital equipment management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#5EE9B5] mt-1">•</span>
                    <span className="text-[#d1d5dc]">Safety protocols and compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Internship */}
            <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border-l-4 border-[#FFB86A] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-white mb-1">Medical Device Engineering Intern</h3>
                    <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] to-[#C27AFF]">
                      Medinnova Systems Pvt. Ltd, Vadodara
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,184,106,0.2)] to-[rgba(173,70,255,0.2)] border border-[rgba(255,184,106,0.5)] text-[#FFB86A] text-sm whitespace-nowrap">
                    Industry Sector
                  </span>
                </div>
                
                <p className="text-[#d1d5dc] leading-relaxed">
                  Gained valuable insight into the world of medical device refurbishment. Learned about various medical devices through detailed discussions and presentations covering their functionalities and mechanics.
                </p>

                <div className="bg-[rgba(39,39,42,0.5)] rounded-lg p-4 border border-[rgba(63,63,70,0.5)]">
                  <h4 className="text-white mb-3">Medical Equipment Covered:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FFB86A]" />
                      <span className="text-[#d1d5dc] text-sm">Patient Monitors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C27AFF]" />
                      <span className="text-[#d1d5dc] text-sm">Anesthesia Trolley</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#51A2FF]" />
                      <span className="text-[#d1d5dc] text-sm">Heart-Lung Machine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00D3F2]" />
                      <span className="text-[#d1d5dc] text-sm">Ventilators</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5EE9B5]" />
                      <span className="text-[#d1d5dc] text-sm">Refurbishment Process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FFB86A]" />
                      <span className="text-[#d1d5dc] text-sm">Quality Standards</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#d1d5dc] text-sm italic">
                  This training provided me with a solid understanding of how these critical medical devices operate and are maintained to ensure patient safety and optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision Section */}
      <ScrollReveal delay={250}>
        <section id="vision" className="space-y-6">
          <div className="bg-gradient-to-r from-[rgba(39,39,42,0.9)] to-[rgba(39,39,42,0.7)] rounded-2xl p-8 border border-[rgba(82,82,92,0.6)] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,184,106,0.05)] via-[rgba(194,122,255,0.05)] to-[rgba(81,162,255,0.05)]" />
            <div className="relative space-y-6">
              <h2 className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
                Vision & Goals
              </h2>
              
              <p className="text-lg text-[#d1d5dc] leading-relaxed">
                Through my academic journey and projects, I aim to contribute to technologies that enhance patient care and bridge the gap between engineering and medicine. I'm particularly focused on:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[rgba(39,39,42,0.8)] rounded-xl p-5 border border-[rgba(255,184,106,0.3)] hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">💊</span>
                    Medical Devices
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Developing innovative medical devices to improve diagnosis and treatment</p>
                </div>
                
                <div className="bg-[rgba(39,39,42,0.8)] rounded-xl p-5 border border-[rgba(194,122,255,0.3)] hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">⌚</span>
                    Wearable Health Tech
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Creating accessible health monitoring systems for preventive care</p>
                </div>
                
                <div className="bg-[rgba(39,39,42,0.8)] rounded-xl p-5 border border-[rgba(81,162,255,0.3)] hover:scale-105 transition-transform duration-300">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">🔬</span>
                    Imaging Systems
                  </h4>
                  <p className="text-[#d1d5dc] text-sm">Advancing medical imaging technologies for better diagnostics</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[rgba(82,82,92,0.3)]">
                <p className="text-center text-[#d1d5dc] italic">
                  "Making healthcare smarter, more accessible, and improving lives through the power of biomedical engineering."
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={300}>
        <section id="contact" className="space-y-6">
          <div className="bg-gradient-to-br from-[rgba(39,39,42,0.9)] to-[rgba(39,39,42,0.7)] rounded-2xl p-6 md:p-8 border border-[rgba(82,82,92,0.6)] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,211,242,0.05)] via-[rgba(194,122,255,0.05)] to-[rgba(255,184,106,0.05)]" />
            
            <div className="relative space-y-6">
              <div className="text-center space-y-3">
                <h2 className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#00D3F2] via-[#C27AFF] to-[#FFB86A]">
                  Let's Connect
                </h2>
                <p className="text-[#d1d5dc] max-w-2xl mx-auto">
                  Feel free to reach out for collaborations, opportunities, or just to discuss biomedical engineering innovations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {/* Email Card */}
                <a
                  href="mailto:shivangshushrivastav291@gmail.com"
                  className="flex items-center gap-4 px-5 py-4 bg-[rgba(39,39,42,0.8)] border border-[rgba(82,82,92,0.6)] rounded-xl hover:border-[#C27AFF] hover:bg-[rgba(194,122,255,0.1)] hover:shadow-lg hover:shadow-[rgba(194,122,255,0.25)] hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[rgba(194,122,255,0.15)] group-hover:bg-[rgba(194,122,255,0.25)] transition-colors">
                    <Mail className="w-6 h-6 text-[#C27AFF] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#99a1af] mb-1 uppercase tracking-wider">Email</div>
                    <span className="text-sm text-[#d1d5dc] group-hover:text-white break-all">shivangshushrivastav291@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/shivangshu-srivastava-805164309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 bg-[rgba(39,39,42,0.8)] border border-[rgba(82,82,92,0.6)] rounded-xl hover:border-[#00D3F2] hover:bg-[rgba(0,211,242,0.1)] hover:shadow-lg hover:shadow-[rgba(0,211,242,0.25)] hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[rgba(0,211,242,0.15)] group-hover:bg-[rgba(0,211,242,0.25)] transition-colors">
                    <Linkedin className="w-6 h-6 text-[#00D3F2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#99a1af] mb-1 uppercase tracking-wider">LinkedIn</div>
                    <span className="text-sm text-[#d1d5dc] group-hover:text-white">Professional Profile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#99a1af] group-hover:text-[#00D3F2] flex-shrink-0" />
                </a>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C27AFF] to-transparent" />
                <Heart className="w-4 h-4 text-[#C27AFF] animate-pulse" />
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C27AFF] to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
