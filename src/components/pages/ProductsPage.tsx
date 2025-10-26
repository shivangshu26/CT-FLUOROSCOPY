import { ExternalLink, MapPin } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

export default function ProductsPage() {
  const products = [
    {
      manufacturer: "Siemens Healthineers",
      model: "SOMATOM Force",
      country: "Germany",
      features: [
        "Dual-source CT technology",
        "Real-time fluoroscopy capability",
        "Tin filter for dose reduction",
        "Advanced iterative reconstruction",
        "Up to 200 images per second"
      ],
      keySpecs: "192-slice, 0.25s rotation, Stellar detector",
      url: "https://www.siemens-healthineers.com/computed-tomography/dual-source-ct/somatom-force"
    },
    {
      manufacturer: "GE Healthcare",
      model: "Revolution CT",
      country: "United States",
      features: [
        "256-slice coverage",
        "ASiR-V iterative reconstruction",
        "CT fluoroscopy with dose modulation",
        "0.28s rotation speed",
        "Smart Prep automated bolus tracking"
      ],
      keySpecs: "256-slice, 0.28s rotation, Gemstone detector",
      url: "https://www.gehealthcare.com/products/computed-tomography/revolution-family"
    },
    {
      manufacturer: "Canon Medical Systems",
      model: "Aquilion ONE",
      country: "Japan",
      features: [
        "320-detector row configuration",
        "16cm wide-volume coverage",
        "FIRST iterative reconstruction",
        "Real3D fluoroscopy mode",
        "SUREExposure 3D dose modulation"
      ],
      keySpecs: "320-slice, 0.275s rotation, PureVisum detector",
      url: "https://global.medical.canon/products/computed-tomography/aquilion_one"
    },
    {
      manufacturer: "Philips Healthcare",
      model: "IQon Spectral CT",
      country: "Netherlands",
      features: [
        "Spectral detector technology",
        "Real-time spectral imaging",
        "iDose4 iterative reconstruction",
        "DoseRight dose management",
        "CT fluoroscopy with spectral data"
      ],
      keySpecs: "128-slice spectral, 0.27s rotation, Dual-layer detector",
      url: "https://www.philips.com/healthcare/product/HC781351/iqon-spectral-ct"
    },
    {
      manufacturer: "Siemens Healthineers",
      model: "NAEOTOM Alpha",
      country: "Germany",
      features: [
        "First photon-counting CT",
        "Ultra-high resolution imaging",
        "Quantum detector technology",
        "Advanced dose efficiency",
        "True spectral fluoroscopy"
      ],
      keySpecs: "Photon-counting, 0.25s rotation, QuantaMax detector",
      url: "https://www.siemens-healthineers.com/computed-tomography/photon-counting-ct-scanner/naeotom-alpha"
    },
    {
      manufacturer: "United Imaging Healthcare",
      model: "uCT 960+",
      country: "China",
      features: [
        "160-slice coverage",
        "Karl 3D iterative reconstruction",
        "Dynamic fluoroscopy mode",
        "0.25s rotation speed",
        "Intelligent dose control"
      ],
      keySpecs: "160-slice, 0.25s rotation, ALPHA detector",
      url: "https://www.united-imaging.com/en/products/ct/uCT_960plus"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-20 overflow-x-hidden">
      <ScrollReveal>
        <section id="overview" className="space-y-6">
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] via-[#C27AFF] to-[#51A2FF]">
            CT Fluoroscopy Products Worldwide
          </h1>
          
          <p className="text-lg text-[#d1d5dc] leading-7">
            Leading medical imaging manufacturers worldwide offer advanced CT fluoroscopy systems with cutting-edge technology. These systems represent the current state-of-the-art in interventional imaging, each with unique features and capabilities designed to enhance clinical outcomes while minimizing radiation exposure.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section id="products" className="space-y-8">
        <h2 className="text-3xl text-white">Available Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-pop-in block cursor-pointer hover:border-[#C27AFF]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#FFB86A]" />
                      <span className="text-[#FFB86A]">{product.country}</span>
                    </div>
                    <h3 className="text-2xl text-white mb-1">{product.manufacturer}</h3>
                    <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] via-[#00D3F2] to-[#51A2FF]">
                      {product.model}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#C27AFF] group-hover:scale-110 transition-transform" />
                </div>

                <div className="bg-[rgba(39,39,42,0.5)] rounded-lg p-4 border border-[rgba(63,63,70,0.5)]">
                  <p className="text-[#d1d5dc]">{product.keySpecs}</p>
                </div>

                <div>
                  <h4 className="text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-[#d1d5dc] flex items-start">
                        <span className="text-[#C27AFF] mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[rgba(82,82,92,0.3)]">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] text-sm">
                      CE Certified
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[rgba(255,105,0,0.2)] via-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(194,122,255,0.5)] text-[#e9d4ff] text-sm">
                      FDA Approved
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <section id="comparison" className="space-y-6">
        <h2 className="text-3xl text-white">Market Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl">
            <h3 className="text-xl text-white mb-4">By Region</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#d1d5dc]">North America</span>
                  <span className="text-[#FFB86A]">35%</span>
                </div>
                <div className="h-2 bg-[rgba(39,39,42,0.5)] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FFB86A] to-[#C27AFF]" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#d1d5dc]">Europe</span>
                  <span className="text-[#C27AFF]">30%</span>
                </div>
                <div className="h-2 bg-[rgba(39,39,42,0.5)] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#C27AFF] to-[#51A2FF]" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#d1d5dc]">Asia-Pacific</span>
                  <span className="text-[#51A2FF]">28%</span>
                </div>
                <div className="h-2 bg-[rgba(39,39,42,0.5)] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#51A2FF] to-[#00D3F2]" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[#d1d5dc]">Rest of World</span>
                  <span className="text-[#5EE9B5]">7%</span>
                </div>
                <div className="h-2 bg-[rgba(39,39,42,0.5)] rounded-full overflow-hidden">
                  <div className="h-full bg-[#5EE9B5]" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl">
            <h3 className="text-xl text-white mb-4">Price Range</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#d1d5dc] mb-2">Entry Level</p>
                <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5EE9B5] to-[#00D3F2]">
                  $400K - $800K
                </p>
              </div>
              <div>
                <p className="text-[#d1d5dc] mb-2">Mid Range</p>
                <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] to-[#C27AFF]">
                  $800K - $1.5M
                </p>
              </div>
              <div>
                <p className="text-[#d1d5dc] mb-2">Premium</p>
                <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#C27AFF] to-[#51A2FF]">
                  $1.5M - $3M+
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-6 border border-[rgba(82,82,92,0.6)] shadow-xl">
            <h3 className="text-xl text-white mb-4">Key Trends</h3>
            <ul className="space-y-3 text-[#d1d5dc]">
              <li className="flex items-start">
                <span className="text-[#5EE9B5] mr-2">→</span>
                <span>Photon-counting detector adoption</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00D3F2] mr-2">→</span>
                <span>AI-powered dose optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#51A2FF] mr-2">→</span>
                <span>Spectral imaging integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C27AFF] mr-2">→</span>
                <span>Cloud-based image processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB86A] mr-2">→</span>
                <span>Mobile C-arm integration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <section id="selection" className="space-y-6">
        <h2 className="text-3xl text-white">Selection Criteria</h2>
        
        <div className="bg-[rgba(39,39,42,0.7)] rounded-2xl p-8 border border-[rgba(82,82,92,0.6)] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFB86A] to-[#C27AFF] mb-4">
                Technical Considerations
              </h3>
              <ul className="space-y-3 text-[#d1d5dc]">
                <li>• Image update rate and latency</li>
                <li>• Detector configuration and coverage</li>
                <li>• Dose reduction capabilities</li>
                <li>• Reconstruction speed and algorithms</li>
                <li>• Integration with existing systems</li>
                <li>• Upgrade and expansion options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#51A2FF] to-[#5EE9B5] mb-4">
                Operational Considerations
              </h3>
              <ul className="space-y-3 text-[#d1d5dc]">
                <li>• Procedure volume and complexity</li>
                <li>• Available space and infrastructure</li>
                <li>• Staff training requirements</li>
                <li>• Service and maintenance costs</li>
                <li>• Regulatory compliance</li>
                <li>• Return on investment timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
