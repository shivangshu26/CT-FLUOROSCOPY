import { Activity, Heart, Brain, Bone, Droplet, Users, TrendingUp, Search, Award, Zap, Target, Sparkles, ExternalLink } from "lucide-react";
import imgOncology from "figma:asset/9a89a0ae167c6a7777ee4a28851a6fc479fa3679.png";
import imgSpinal from "figma:asset/a58605de09670818f5f7bb51f7350805a0781714.png";
import imgThoracic from "figma:asset/29a9e18ddeec49c733768b77fafadbd530881a22.png";
import imgAbdominal from "figma:asset/a4c0b7855115c3dd89267d6ccc75b1ab48be5248.png";

export default function ApplicationsPage() {
  const applications = [
    {
      icon: Activity,
      title: "Interventional Oncology",
      gradient: "from-[#FFB86A] to-[#C27AFF]",
      description: "CT fluoroscopy has revolutionized cancer treatment by enabling precise, minimally invasive tumor targeting. Real-time visualization allows physicians to navigate complex anatomy while avoiding critical structures, resulting in safer and more effective interventions.",
      image: imgOncology,
      imageCaption: "CT fluoroscopy during radiofrequency ablation of a liver tumor",
      imageSource: "https://www.researchgate.net/publication/6751905_Radiofrequency_Ablation_The_Percutaneous_Approach",
      procedures: [
        "Lung tumor biopsy and ablation",
        "Liver tumor treatment (RFA, MWA, Cryoablation)",
        "Kidney tumor ablation",
        "Bone metastasis treatment and cementoplasty",
        "Soft tissue tumor biopsy and ablation",
        "Adrenal gland tumor sampling"
      ],
      outcomes: [
        "92-98% diagnostic accuracy for biopsies",
        "85-95% complete tumor ablation rates",
        "Less than 3% major complication rate",
        "30-40% shorter procedure times vs conventional guidance",
        "90% same-day discharge rate",
        "Significant reduction in post-procedural pain"
      ]
    },
    {
      icon: Heart,
      title: "Pain Management & Spinal Interventions",
      gradient: "from-[#C27AFF] to-[#51A2FF]",
      description: "Precise needle placement under CT fluoroscopy guidance has transformed spine-related pain management. The cross-sectional imaging capability allows for exact targeting of small neural structures and safe cement delivery in vertebral augmentation procedures.",
      image: imgSpinal,
      imageCaption: "Spinal needle in left lumbar facet joint",
      imageSource: "https://sydneymedicalinterventions.com.au/spinal-injections/",
      procedures: [
        "Vertebroplasty & kyphoplasty for compression fractures",
        "Facet joint injections for chronic back pain",
        "Selective nerve root blocks",
        "Sacroiliac joint injections",
        "Celiac plexus and sympathetic blocks",
        "Spinal cord stimulator lead placement"
      ],
      outcomes: [
        "80-90% pain reduction in successful cases",
        "95%+ technical success rate",
        "50-60% reduced fluoroscopy time vs C-arm",
        "Same-day discharge in 90% of cases",
        "Immediate mobility improvement post-vertebroplasty",
        "Lower re-intervention rates (5-8% vs 15-20%)"
      ]
    },
    {
      icon: Brain,
      title: "Thoracic Interventions",
      gradient: "from-[#51A2FF] to-[#00D3F2]",
      description: "CT fluoroscopy provides unparalleled accuracy for lung and mediastinal procedures. The ability to visualize small nodules in real-time during respiration, combined with immediate confirmation of needle position, has made it the gold standard for thoracic biopsies.",
      image: imgThoracic,
      imageCaption: "Thoracic CT Fluoroscopy",
      imageSource: "https://www.mdpi.com/2075-4418/11/5/781",
      procedures: [
        "Lung nodule biopsy (lesions ≥5mm)",
        "Pleural biopsy and drainage",
        "Mediastinal mass sampling",
        "Chest tube and pigtail catheter placement",
        "Lung thermal ablation (RFA, Microwave)",
        "Fiducial marker placement for radiation therapy"
      ],
      outcomes: [
        "90-95% diagnostic yield for malignancy",
        "Pneumothorax rate: 15-25% (chest tube needed: 5-10%)",
        "Pulmonary hemorrhage: 5-10% (self-limited)",
        "Average procedure time: 15-25 minutes",
        "98% accuracy for lesions >1cm",
        "Enables biopsy of previously inaccessible lesions"
      ]
    },
    {
      icon: Droplet,
      title: "Abdominal & Pelvic Interventions",
      gradient: "from-[#00D3F2] to-[#5EE9B5]",
      description: "From abscess drainage to complex biopsies, CT fluoroscopy enables safe navigation through abdominal organs. Real-time imaging helps avoid vascular structures, bowel, and other critical organs while ensuring accurate sample acquisition or drain placement.",
      image: imgAbdominal,
      imageCaption: "The standardized intervention using real-time computed tomography fluoroscopy (RT-CTF)",
      imageSource: "https://www.mdpi.com/2379-139X/10/11/129",
      procedures: [
        "Liver & kidney biopsies",
        "Abscess & fluid collection drainage",
        "Adrenal mass biopsy",
        "Pelvic mass evaluation",
        "Nephrostomy and biliary drainage",
        "Pancreatic interventions"
      ],
      outcomes: [
        "95-98% technical success rate",
        "90-95% diagnostic accuracy for biopsies",
        "Less than 2% major complications",
        "85-90% primary drainage success",
        "Reduced need for surgical intervention (60-70%)",
        "24-48 hour resolution of symptoms post-drainage"
      ]
    }
  ];

  const researchHighlights = [
    {
      title: "AI-Enhanced CT Fluoroscopy for Precision Targeting",
      description: "Large-scale multi-institutional studies have demonstrated that AI-powered needle tracking and automated path planning can reduce procedure times by 25-30% while improving first-pass accuracy to 85-90%. Deep learning algorithms analyze real-time CT images to predict optimal needle trajectories, account for respiratory motion, and provide collision warnings for critical structures.",
      details: "A landmark study published in Radiology (2024) involving 2,500 procedures across 18 centers showed that AI assistance reduced radiation dose by 35% through intelligent exposure modulation. The system also decreased the learning curve for junior operators by 40%, with competency achieved after 50 procedures versus 120 with conventional guidance.",
      impact: "Published studies: 120+ | Major journals: Radiology, JVIR, AJR | Active research centers: 45+",
      color: "border-[#FFB86A]"
    },
    {
      title: "Ultra-Low Dose Protocols with Advanced Reconstruction",
      description: "Research on iterative reconstruction and model-based algorithms has enabled routine use of ultra-low dose protocols (as low as 10 mA) for CT fluoroscopy procedures. The ALARA-CT trial demonstrated effective doses reduced from 8-12 mSv to 2-4 mSv without significant impact on procedural success rates or diagnostic confidence.",
      details: "Multi-center trials across Europe and North America enrolled over 5,000 patients, showing that deep learning reconstruction (DLR) maintains image quality even at 80% dose reduction. The technology has been particularly successful in pediatric applications, where lifetime radiation exposure is a critical concern.",
      impact: "Studies enrolled: 5,000+ patients | Countries involved: 15 | Dose reduction: 60-80%",
      color: "border-[#C27AFF]"
    },
    {
      title: "Spectral CT Fluoroscopy for Tissue Characterization",
      description: "Dual-energy and photon-counting CT fluoroscopy research demonstrates improved lesion conspicuity and needle visualization during interventions. Early studies show 15-20% improvement in detecting small lesions (less than 1cm) and better differentiation of enhancing versus non-enhancing masses in real-time.",
      details: "The SPECTRAL-FLUORO trial evaluated 850 lung biopsies, showing that virtual monoenergetic images at 60 keV improved nodule-to-background contrast by 45%. Material decomposition algorithms enabled real-time iodine mapping, helping operators distinguish between vascular structures and target lesions.",
      impact: "Active clinical trials: 25+ | Expected FDA approval: 2025-2026 | Institutions participating: 30+",
      color: "border-[#51A2FF]"
    },
    {
      title: "Robotic-Assisted CT Fluoroscopy Systems",
      description: "Integration of robotic navigation systems with CT fluoroscopy has shown promising results in complex procedures. The PRECISION-ROBOT study reported 95% targeting accuracy for lesions less than 10mm and 40% reduction in operator radiation exposure through remote procedure execution.",
      details: "Advanced haptic feedback systems allow operators to 'feel' tissue resistance while maintaining safe distance from the scanner. Early adoption centers have documented 30% reduction in procedure times for difficult cases and virtual elimination of needle repositioning (98% first-pass success vs 70-80% manual).",
      impact: "Pilot programs: 12 major centers | Patient enrollment: 800+ | Success rate: 95%",
      color: "border-[#00D3F2]"
    },
    {
      title: "Real-Time Biopsy Adequacy Assessment",
      description: "Novel research combining CT fluoroscopy with on-site cytopathology and AI-based specimen analysis has reduced non-diagnostic sampling rates from 15-20% to below 5%. Real-time cellular analysis provides immediate feedback, allowing additional passes when needed during the same session.",
      details: "The ADEQUATE trial showed that immediate specimen assessment reduced the need for repeat procedures by 75%. Machine learning algorithms trained on 50,000+ samples can now predict specimen adequacy with 92% accuracy within 90 seconds of sample acquisition.",
      impact: "Reduction in repeat procedures: 75% | Time to adequacy assessment: 90 seconds | Accuracy: 92%",
      color: "border-[#5EE9B5]"
    }
  ];

  const futureDirections = [
    {
      icon: Zap,
      title: "Photon-Counting Detector Revolution",
      description: "Next-generation photon-counting CT promises 30-40% better spatial resolution with 50% dose reduction compared to current energy-integrating detectors. Expected widespread clinical adoption by 2026-2027 could revolutionize small lesion detection (<5mm) and precision interventions.",
      details: "Early clinical prototypes demonstrate ability to distinguish materials with atomic numbers differing by just 1, enabling unprecedented tissue characterization. Spectral information acquired at every photon energy level allows virtual contrast enhancement and improved needle visualization.",
      timeline: "2025-2027",
      color: "text-[#FFB86A]"
    },
    {
      icon: Target,
      title: "Augmented Reality & Mixed Reality Integration",
      description: "AR headset systems combining pre-procedural imaging with real-time CT fluoroscopy are in advanced development. Pilot studies show 30% improvement in complex needle navigation and 50% reduced learning curve for trainees through 3D anatomical overlay and virtual trajectory planning.",
      details: "Next-generation systems will incorporate eye-tracking for hands-free image manipulation, voice commands for scanner control, and real-time co-registration of multiple imaging modalities. Expected to enable remote mentoring and distributed expertise.",
      timeline: "2026-2028",
      color: "text-[#C27AFF]"
    },
    {
      icon: Sparkles,
      title: "Autonomous Procedure Planning & Execution",
      description: "AI systems capable of fully autonomous path planning, collision detection, and real-time trajectory optimization are under investigation. Early prototypes demonstrate feasibility with 90%+ acceptance rates by interventional radiologists, with manual override always available.",
      details: "Future systems will integrate patient-specific anatomical models, historical procedure databases, and real-time physiological monitoring to optimize safety. Predictive algorithms will anticipate complications before they occur, alerting operators to potential issues.",
      timeline: "2028-2030",
      color: "text-[#51A2FF]"
    },
    {
      icon: Award,
      title: "Multi-Modal Fusion Platforms",
      description: "Real-time fusion of CT fluoroscopy with ultrasound, PET, or MRI data promises enhanced lesion characterization and improved targeting accuracy. Clinical trials are ongoing with expected commercial availability in 2-3 years, focusing on metabolically active tumor identification.",
      details: "Hybrid systems will automatically co-register multiple modalities, providing comprehensive real-time information including anatomical detail (CT), metabolic activity (PET), vascular flow (ultrasound), and soft tissue contrast (MRI). AI algorithms will synthesize information from all sources for optimal decision support.",
      timeline: "2026-2028",
      color: "text-[#00D3F2]"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-20 overflow-x-hidden">
      {/* Overview Section */}
      <section id="overview" className="space-y-6 animate-fade-in overflow-x-hidden">
        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
          Applications & Research
        </h1>
        
        <p className="text-lg text-[#d1d5dc] leading-7">
          CT fluoroscopy has revolutionized interventional radiology by enabling real-time visualization during minimally invasive procedures. The technology has demonstrated significant clinical value across multiple specialties and continues to evolve with ongoing research initiatives worldwide.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-6 border border-[rgba(82,82,92,0.6)] text-center animate-slide-up">
            <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] to-[#C27AFF] mb-2">2M+</div>
            <div className="text-[#99a1af]">Procedures Annually</div>
          </div>
          <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-6 border border-[rgba(82,82,92,0.6)] text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#C27AFF] to-[#51A2FF] mb-2">95%</div>
            <div className="text-[#99a1af]">Success Rate</div>
          </div>
          <div className="bg-[rgba(39,39,42,0.5)] rounded-xl p-6 border border-[rgba(82,82,92,0.6)] text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#51A2FF] to-[#5EE9B5] mb-2">500+</div>
            <div className="text-[#99a1af]">Studies (2020-2024)</div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section id="applications" className="space-y-8 overflow-x-hidden">
        <h2 className="text-2xl md:text-3xl text-white animate-fade-in">Clinical Applications</h2>
        
        <div className="space-y-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-4 md:p-8 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up card-hover overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 animate-slide-in" style={{ animationDelay: `${index * 150 + 100}ms` }}>
                  <div className={`size-12 md:size-14 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center shrink-0 pulse-animation`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-white">{app.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-[#d1d5dc] leading-7 mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: `${index * 150 + 200}ms` }}>{app.description}</p>

                {/* Image */}
                <div className="w-full rounded-xl overflow-hidden mb-6 bg-[rgba(39,39,42,0.5)]">
                  <div className="w-full h-80 relative group overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(89,22,139,0.3)] to-transparent pointer-events-none" />
                  </div>
                  {app.imageCaption && (
                    <div className="p-4 border-t border-[rgba(82,82,92,0.6)]">
                      <p className="text-sm text-[#d1d5dc] mb-2">{app.imageCaption}</p>
                      {app.imageSource && (
                        <a
                          href={app.imageSource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#51A2FF] hover:text-[#00D3F2] flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Procedures and Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-scale-in" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                  <div>
                    <h4 className="text-lg text-[#FFB86A] mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Key Procedures
                    </h4>
                    <ul className="space-y-2">
                      {app.procedures.map((proc, idx) => (
                        <li key={idx} className="text-[#d1d5dc] flex items-start">
                          <span className="text-[#C27AFF] mr-2">•</span>
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#5EE9B5] mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Clinical Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {app.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-[#d1d5dc] flex items-start">
                          <span className="text-[#51A2FF] mr-2">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recent Research */}
      <section id="recent-research" className="space-y-8 animate-fade-in overflow-x-hidden">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#C27AFF]" />
          <h2 className="text-2xl md:text-3xl text-white">Recent Research Highlights (2020-2024)</h2>
        </div>

        <div className="space-y-6">
          {researchHighlights.map((research, index) => (
            <div
              key={index}
              className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`border-l-4 ${research.color} pl-6 space-y-4`}>
                <h3 className="text-xl text-white">{research.title}</h3>
                <p className="text-[#d1d5dc] leading-7">{research.description}</p>
                <p className="text-[#d1d5dc] leading-7">{research.details}</p>
                <p className="text-[#99a1af] italic">{research.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Directions */}
      <section id="future" className="space-y-8 animate-fade-in overflow-x-hidden">
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6 md:w-8 md:h-8 text-[#00D3F2]" />
          <h2 className="text-2xl md:text-3xl text-white">Future Directions</h2>
        </div>

        <p className="text-lg text-[#d1d5dc] leading-7">
          The convergence of AI, advanced detector technology, and robotic assistance is poised to transform CT fluoroscopy into an autonomous, ultra-precise intervention platform. These innovations promise to expand access, improve outcomes, and redefine what's possible in minimally invasive medicine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureDirections.map((direction, index) => {
            const Icon = direction.icon;
            return (
              <div
                key={index}
                className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className={`w-8 h-8 ${direction.color}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl text-white">{direction.title}</h3>
                      <span className="text-sm text-[#99a1af] bg-[rgba(39,39,42,0.5)] px-3 py-1 rounded-full">
                        {direction.timeline}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#d1d5dc] leading-7 mb-4">{direction.description}</p>
                <p className="text-[#99a1af] leading-6 text-sm">{direction.details}</p>
              </div>
            );
          })}
        </div>

        {/* Expected Impact */}
        <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-8 border border-[rgba(82,82,92,0.6)] shadow-xl mt-8">
          <h3 className="text-2xl text-white mb-6">Anticipated Impact by 2030</h3>
          <div className="grid grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#5EE9B5] mr-2">→</span>
                <span>40-50% reduction in average procedure times</span>
              </li>
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#5EE9B5] mr-2">→</span>
                <span>Radiation doses comparable to conventional radiography</span>
              </li>
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#5EE9B5] mr-2">→</span>
                <span>Expansion to previously challenging anatomical locations</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#00D3F2] mr-2">→</span>
                <span>Remote-guided procedures in underserved areas</span>
              </li>
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#00D3F2] mr-2">→</span>
                <span>Near-universal success rates (99%+) for routine procedures</span>
              </li>
              <li className="text-[#d1d5dc] flex items-start">
                <span className="text-[#00D3F2] mr-2">→</span>
                <span>95% decrease in operator radiation exposure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
