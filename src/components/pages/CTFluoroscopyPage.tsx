import { Zap, Grid, Shield, Maximize } from "lucide-react";
import svgPaths from "../../imports/svg-ohit8eaekt";
import imgAdvantages from "figma:asset/06da73f4c211d26d74fb2d8aa8b7358ffca6fd03.png";
import imgArchitecture from "figma:asset/1301ec6e67af369a4c46d7bb99a41ab0f6c28c60.png";
import ScrollReveal from "../ScrollReveal";

export default function CTFluoroscopyPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-20 overflow-x-hidden">
      {/* About Section */}
      <ScrollReveal>
        <section id="about" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-8"></div>
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            About CT Fluoroscopy
          </h1>
        </div>

        <div className="space-y-7">
          <p className="text-lg text-[#d1d5dc] leading-7">
            CT Fluoroscopy is an advanced medical imaging technique that combines the real-time imaging capabilities of conventional fluoroscopy with the cross-sectional imaging power of computed tomography (CT). This technology enables physicians to visualize internal structures in near real-time, making it invaluable for interventional procedures.
          </p>

          <p className="text-lg text-[#d1d5dc] leading-7">
            The technique was first introduced in the early 1990s and has since revolutionized minimally invasive procedures by allowing precise needle placement, biopsy guidance, and therapeutic interventions with unprecedented accuracy. Unlike conventional fluoroscopy which provides 2D projection images, CT fluoroscopy offers true cross-sectional views, reducing parallax errors and improving spatial understanding.
          </p>

          {/* Key Advantages Card */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 md:p-8 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-xl md:text-2xl text-white mb-6 md:mb-12">Key Advantages</h2>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 space-y-3">
                <p className="text-sm md:text-base text-[#d1d5dc] leading-6">• Real-time cross-sectional imaging for precise interventional guidance</p>
                <p className="text-sm md:text-base text-[#d1d5dc] leading-6">• Improved accuracy in needle placement and lesion targeting</p>
                <p className="text-sm md:text-base text-[#d1d5dc] leading-6">• Better visualization of deep-seated or difficult-to-access lesions</p>
                <p className="text-sm md:text-base text-[#d1d5dc] leading-6">• Reduced procedure time and improved patient outcomes</p>
                <p className="text-sm md:text-base text-[#d1d5dc] leading-6">• Ability to visualize soft tissue structures with excellent contrast</p>
              </div>

              <div className="w-full lg:w-[420px] h-[280px] md:h-[350px] lg:h-[420px] relative rounded-xl overflow-hidden">
                <img src={imgAdvantages} alt="CT Fluoroscopy System" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(89,22,139,0.2)] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* Fundamental Principles Section */}
      <ScrollReveal>
        <section id="principles" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-10"></div>
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            Fundamental Principles
          </h1>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl text-white mb-4">Theoretical Foundation</h2>
            <p className="text-lg text-[#d1d5dc] leading-7">
              CT fluoroscopy operates on the fundamental principle of rapid, sequential CT image acquisition and reconstruction. The system continuously rotates the X-ray tube and detector array around the patient while simultaneously acquiring projection data and reconstructing cross-sectional images in near real-time.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl text-white mb-6">Core Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Continuous Acquisition */}
              <div className="bg-[rgba(39,39,42,0.5)] rounded-2xl p-6 border border-[rgba(63,63,70,0.5)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pop-in" style={{ animationDelay: '0ms' }}>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0">
                    <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                      <path d={svgPaths.p29b7ec80} stroke="#C27AFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d="M35 5V13.3333H26.6667" stroke="#C27AFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d={svgPaths.p3474f180} stroke="#C27AFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                      <path d="M13.3333 26.6667H5V35" stroke="#C27AFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">Continuous Acquisition</h3>
                    <p className="text-[#d1d5dc] leading-6">
                      The CT scanner operates in a continuous rotation mode, acquiring multiple projections per second to enable real-time visualization during interventional procedures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Reconstruction */}
              <div className="bg-[rgba(39,39,42,0.5)] rounded-2xl p-6 border border-[rgba(63,63,70,0.5)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pop-in" style={{ animationDelay: '100ms' }}>
                <div className="flex gap-4">
                  <Grid className="size-10 shrink-0 text-[#C27AFF]" strokeWidth={2.5} />
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">Quick Reconstruction</h3>
                    <p className="text-[#d1d5dc] leading-6">
                      Advanced reconstruction algorithms process projection data in milliseconds, creating updated images that appear nearly instantaneous to the operator.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dose Modulation */}
              <div className="bg-[rgba(39,39,42,0.5)] rounded-2xl p-6 border border-[rgba(63,63,70,0.5)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pop-in" style={{ animationDelay: '200ms' }}>
                <div className="flex gap-4">
                  <Shield className="size-10 shrink-0 text-[#C27AFF]" strokeWidth={2.5} />
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">Dose Modulation</h3>
                    <p className="text-[#d1d5dc] leading-6">
                      Modern systems employ sophisticated dose reduction techniques including automatic exposure control, iterative reconstruction, and pulsed fluoroscopy modes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spatial Resolution */}
              <div className="bg-[rgba(39,39,42,0.5)] rounded-2xl p-6 border border-[rgba(63,63,70,0.5)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pop-in" style={{ animationDelay: '300ms' }}>
                <div className="flex gap-4">
                  <Maximize className="size-10 shrink-0 text-[#C27AFF]" strokeWidth={2.5} />
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">Spatial Resolution</h3>
                    <p className="text-[#d1d5dc] leading-6">
                      High-resolution detectors and advanced image processing provide exceptional spatial resolution, enabling precise visualization of small anatomical structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* Design & Working Section */}
      <ScrollReveal>
        <section id="design" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-8"></div>
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            Design & Working of Device
          </h1>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl text-white mb-4">System Architecture</h2>
            <p className="text-lg text-[#d1d5dc] leading-7 mb-8">
              A CT fluoroscopy system consists of several integrated components working in concert to provide real-time imaging capabilities. The system architecture is designed to minimize latency between data acquisition and image display.
            </p>

            {/* Architecture Image Placeholder */}
            <div className="w-full h-[600px] md:h-[700px] relative rounded-xl overflow-hidden">
              <img src={imgArchitecture} alt="CT Fluoroscopy Architecture" className="w-full h-full object-contain bg-[rgba(39,39,42,0.5)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(89,22,139,0.1)] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Key Components Card */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl space-y-4 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-xl text-white">Key Components</h2>

            <div className="space-y-4">
              <div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] mb-2">X-ray Source</h3>
                <p className="text-[#d1d5dc] leading-6">
                  High-power rotating anode X-ray tube capable of sustained operation during continuous imaging. Modern tubes can handle heat loads exceeding 8 MHU (Mega Heat Units).
                </p>
              </div>

              <div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] mb-2">Detector Array</h3>
                <p className="text-[#d1d5dc] leading-6">
                  Multi-row solid-state detectors with fast readout times. Current systems feature 64 to 320 detector rows providing wide anatomical coverage.
                </p>
              </div>

              <div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] mb-2">Slip-Ring Technology</h3>
                <p className="text-[#d1d5dc] leading-6">
                  Enables continuous rotation of the gantry without cable wrap-up, essential for prolonged fluoroscopic imaging sessions.
                </p>
              </div>

              <div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] mb-2">Image Reconstruction Computer</h3>
                <p className="text-[#d1d5dc] leading-6">
                  Powerful processors using parallel computing architecture to reconstruct images in near real-time, typically within 100-200 milliseconds.
                </p>
              </div>

              <div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF] mb-2">Display System</h3>
                <p className="text-[#d1d5dc] leading-6">
                  High-resolution monitors with minimal display latency, often featuring touch-screen interfaces for interactive control.
                </p>
              </div>
            </div>
          </div>

          {/* Working Principle */}
          <div>
            <h2 className="text-2xl text-white mb-4">Working Principle</h2>
            <p className="text-lg text-[#d1d5dc] leading-7 mb-4">
              During CT fluoroscopy operation, the gantry rotates continuously at maximum speed (typically 0.3-0.5 seconds per rotation). The X-ray tube operates in either continuous or pulsed mode, emitting X-rays that pass through the patient and are detected by the detector array. The projection data is immediately transferred to the reconstruction computer.
            </p>
            <p className="text-lg text-[#d1d5dc] leading-7">
              Using optimized reconstruction algorithms (often filtered back-projection for speed), the system creates cross-sectional images that are displayed with minimal delay. The operator can view these images in real-time while manipulating instruments, providing immediate feedback on tool position and tissue changes.
            </p>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* Types Section */}
      <ScrollReveal>
        <section id="types" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-8"></div>
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            Types of CT Fluoroscopy
          </h1>
        </div>

        <div className="space-y-6">
          {/* Continuous CT Fluoroscopy */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl space-y-9 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-pop-in" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] via-[#00D3F2] to-[#51A2FF]">
              Continuous CT Fluoroscopy
            </h2>
            <p className="text-[#d1d5dc] leading-6">
              In this mode, the CT scanner operates with continuous X-ray exposure and image reconstruction. This provides the smoothest real-time visualization but delivers the highest radiation dose to both patient and operator. Primarily used when precise, continuous monitoring is essential.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                High temporal resolution
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Higher dose
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Real-time feedback
              </span>
            </div>
          </div>

          {/* Quick-Check Mode */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl space-y-9 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-pop-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] via-[#00D3F2] to-[#51A2FF]">
              Quick-Check (Intermittent) Mode
            </h2>
            <p className="text-[#d1d5dc] leading-6">
              This mode acquires images at intervals (e.g., every 0.5-2 seconds) rather than continuously. The operator activates image acquisition via a foot pedal or hand switch. This significantly reduces radiation exposure while still providing frequent updates on needle position and anatomical changes.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Reduced dose
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Intermittent imaging
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Most common
              </span>
            </div>
          </div>

          {/* CT Fluorography */}
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl space-y-9 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-pop-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] via-[#00D3F2] to-[#51A2FF]">
              CT Fluorography (Single-Shot)
            </h2>
            <p className="text-[#d1d5dc] leading-6">
              A hybrid approach where individual CT images are acquired on demand, similar to conventional radiographic fluorography. This provides the lowest radiation dose but requires the operator to pause between instrument movements to acquire verification images.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Lowest dose
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                On-demand imaging
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] shadow-lg">
                Simple procedures
              </span>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
