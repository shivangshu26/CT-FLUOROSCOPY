import svgPaths from "./svg-ohit8eaekt";
import imgImageWithFallback from "figma:asset/06da73f4c211d26d74fb2d8aa8b7358ffca6fd03.png";
import imgImageWithFallback1 from "figma:asset/1301ec6e67af369a4c46d7bb99a41ab0f6c28c60.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[351.888px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[351.888px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[40px] left-0 text-[36px] text-[rgba(0,0,0,0)] text-nowrap top-[-3px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
          About CT Fluoroscopy
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Heading1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[898px]">CT Fluoroscopy is an advanced medical imaging technique that combines the real-time imaging capabilities of conventional fluoroscopy with the cross-sectional imaging power of computed tomography (CT). This technology enables physicians to visualize internal structures in near real-time, making it invaluable for interventional procedures.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[915px]">The technique was first introduced in the early 1990s and has since revolutionized minimally invasive procedures by allowing precise needle placement, biopsy guidance, and therapeutic interventions with unprecedented accuracy. Unlike conventional fluoroscopy which provides 2D projection images, CT fluoroscopy offers true cross-sectional views, reducing parallax errors and improving spatial understanding.</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[862.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[862.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Key Advantages</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[328px]">• Real-time cross-sectional imaging for precise interventional guidance</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[368px]">• Improved accuracy in needle placement and lesion targeting</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[405px]">• Better visualization of deep-seated or difficult-to-access lesions</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Reduced procedure time and improved patient outcomes</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[389px]">• Ability to visualize soft tissue structures with excellent contrast</p>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-0 top-[77.6px] w-[419.2px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 pointer-events-none rounded-[10px] size-[419.2px] top-0" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImageWithFallback} />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(89,22,139,0.2)] left-0 rounded-[10px] size-[419.2px] to-[rgba(0,0,0,0)] top-0" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute left-[443.2px] size-[419.2px] top-0" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}

function HomePage1() {
  return (
    <div className="h-[419.2px] relative shrink-0 w-[862.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[419.2px] relative w-[862.4px]">
        <List />
        <Container2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(39,39,42,0.7)] h-[564.788px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[564.788px] items-start pb-[0.8px] pl-[32.8px] pr-[0.8px] pt-[32.8px] relative w-full">
          <HomePage />
          <HomePage1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[820.788px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Card />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[884.788px] items-start left-[48px] top-[48px] w-[928px]" data-name="Section">
      <Container />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[368.25px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[368.25px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[40px] left-0 text-[36px] text-[rgba(0,0,0,0)] text-nowrap top-[-3px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
          Fundamental Principles
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Heading2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-0 top-0 w-[928px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Theoretical Foundation</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[84px] left-0 top-[31.99px] w-[928px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[927px]">CT fluoroscopy operates on the fundamental principle of rapid, sequential CT image acquisition and reconstruction. The system continuously rotates the X-ray tube and detector array around the patient while simultaneously acquiring projection data and reconstructing cross-sectional images in near real-time.</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-0 top-[147.99px] w-[928px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Core Concepts</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p29b7ec80} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M35 5V13.3333H26.6667" id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3474f180} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M13.3333 26.6667H5V35" id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Continuous Acquisition</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[347px]">The CT scanner operates in a continuous rotation mode, acquiring multiple projections per second to enable real-time visualization during interventional procedures.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start relative w-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="h-[132px] relative shrink-0 w-[402.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[132px] items-start relative w-[402.4px]">
        <Icon2 />
        <Container5 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex flex-col h-[181.6px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-0 w-[452px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M20 33.3333V36.6667" id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M20 3.33333V6.66667" id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M28.3333 33.3333V36.6667" id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M28.3333 3.33333V6.66667" id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 20H6.66667" id="Vector_5" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 28.3333H6.66667" id="Vector_6" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 11.6667H6.66667" id="Vector_7" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M33.3333 20H36.6667" id="Vector_8" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M33.3333 28.3333H36.6667" id="Vector_9" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M33.3333 11.6667H36.6667" id="Vector_10" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M11.6667 33.3333V36.6667" id="Vector_11" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M11.6667 3.33333V6.66667" id="Vector_12" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3d2c8c70} id="Vector_13" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2a686870} id="Vector_14" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Quick Reconstruction</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[345px]">Advanced reconstruction algorithms process projection data in milliseconds, creating updated images that appear nearly instantaneous to the operator.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start relative w-full">
        <Heading7 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function HomePage3() {
  return (
    <div className="h-[132px] relative shrink-0 w-[402.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[132px] items-start relative w-[402.4px]">
        <Icon3 />
        <Container6 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex flex-col h-[181.6px] items-start left-[476px] pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-0 w-[452px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3f2787f0} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Dose Modulation</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[324px]">Modern systems employ sophisticated dose reduction techniques including automatic exposure control, iterative reconstruction, and pulsed fluoroscopy modes.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start relative w-full">
        <Heading8 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function HomePage4() {
  return (
    <div className="h-[132px] relative shrink-0 w-[402.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[132px] items-start relative w-[402.4px]">
        <Icon4 />
        <Container7 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex flex-col h-[181.6px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[205.6px] w-[452px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p11b65280} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p16939e00} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2866d700} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pb79b700} id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Spatial Resolution</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[345px]">High-resolution detectors and advanced image processing provide exceptional spatial resolution, enabling precise visualization of small anatomical structures.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[132px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start relative w-full">
        <Heading9 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function HomePage5() {
  return (
    <div className="h-[132px] relative shrink-0 w-[402.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[132px] items-start relative w-[402.4px]">
        <Icon5 />
        <Container8 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex flex-col h-[181.6px] items-start left-[476px] pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[205.6px] w-[452px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[387.2px] left-0 top-[203.97px] w-[928px]" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[591.175px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph2 />
      <Heading6 />
      <Container9 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[663.175px] items-start left-[48px] top-[996.79px] w-[928px]" data-name="Section">
      <Container4 />
      <Container10 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[449.763px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[449.763px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[40px] left-0 text-[36px] text-[rgba(0,0,0,0)] text-nowrap top-[-3px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>{`Design & Working of Device`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Heading10 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-0 top-0 w-[928px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">System Architecture</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[56px] left-0 top-[31.99px] w-[928px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[921px]">A CT fluoroscopy system consists of several integrated components working in concert to provide real-time imaging capabilities. The system architecture is designed to minimize latency between data acquisition and image display.</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 pointer-events-none rounded-[10px] size-[896px] top-0" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImageWithFallback1} />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-gradient-to-t from-[rgba(89,22,139,0.1)] left-0 rounded-[10px] size-[896px] to-[rgba(0,0,0,0)] top-0" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute left-[16px] size-[896px] top-[119.99px]" data-name="Container">
      <ImageWithFallback1 />
      <Container12 />
    </div>
  );
}

function HomePage6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Key Components</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.2px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        X-ray Source
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[827px]">High-power rotating anode X-ray tube capable of sustained operation during continuous imaging. Modern tubes can handle heat loads exceeding 8 MHU (Mega Heat Units).</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph8 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.2px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Detector Array
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[842px]">Multi-row solid-state detectors with fast readout times. Current systems feature 64 to 320 detector rows providing wide anatomical coverage.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph9 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.2px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Slip-Ring Technology
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Enables continuous rotation of the gantry without cable wrap-up, essential for prolonged fluoroscopic imaging sessions.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph10 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.2px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Image Reconstruction Computer
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[863px]">Powerful processors using parallel computing architecture to reconstruct images in near real-time, typically within 100-200 milliseconds.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Paragraph11 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.2px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Display System
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">High-resolution monitors with minimal display latency, often featuring touch-screen interfaces for interactive control.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Paragraph12 />
    </div>
  );
}

function HomePage7() {
  return (
    <div className="h-[376px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[376px] items-start relative w-[878.4px]">
        <Container14 />
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.7)] box-border content-stretch flex flex-col gap-[40px] h-[493.6px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[1047.99px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <HomePage6 />
      <HomePage7 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-0 top-[1573.59px] w-[928px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Working Principle</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[112px] left-0 top-[1605.58px] w-[928px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[913px]">During CT fluoroscopy operation, the gantry rotates continuously at maximum speed (typically 0.3-0.5 seconds per rotation). The X-ray tube operates in either continuous or pulsed mode, emitting X-rays that pass through the patient and are detected by the detector array. The projection data is immediately transferred to the reconstruction computer.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[84px] left-0 top-[1717.58px] w-[928px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[876px]">Using optimized reconstruction algorithms (often filtered back-projection for speed), the system creates cross-sectional images that are displayed with minimal delay. The operator can view these images in real-time while manipulating instruments, providing immediate feedback on tool position and tissue changes.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[1801.58px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph7 />
      <Container13 />
      <Card5 />
      <Heading16 />
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1865.58px] items-start left-[48px] top-[1723.96px] w-[928px]" data-name="Section">
      <Container11 />
      <Container19 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[40px] relative shrink-0 w-[385.613px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[385.613px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[40px] left-0 text-[36px] text-[rgba(0,0,0,0)] text-nowrap top-[-3px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
          Types of CT Fluoroscopy
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Heading17 />
    </div>
  );
}

function HomePage8() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-[rgba(0,0,0,0)]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(94, 233, 181) 0%, rgb(0, 211, 242) 50%, rgb(81, 162, 255) 100%)" }}>
          Continuous CT Fluoroscopy
        </p>
      </div>
    </div>
  );
}

function HomePage9() {
  return (
    <div className="h-[72px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[867px]">In this mode, the CT scanner operates with continuous X-ray exposure and image reconstruction. This provides the smoothest real-time visualization but delivers the highest radiation dose to both patient and operator. Primarily used when precise, continuous monitoring is essential.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-0 rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[190.213px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">High temporal resolution</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[198.21px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[110.438px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Higher dose</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[316.65px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[154px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Real-time feedback</p>
    </div>
  );
}

function HomePage10() {
  return (
    <div className="h-[39.2px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.2px] relative w-[878.4px]">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.7)] box-border content-stretch flex flex-col gap-[36px] h-[268.788px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-0 w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage8 />
      <HomePage9 />
      <HomePage10 />
    </div>
  );
}

function HomePage11() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-[rgba(0,0,0,0)]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(94, 233, 181) 0%, rgb(0, 211, 242) 50%, rgb(81, 162, 255) 100%)" }}>
          Quick-Check (Intermittent) Mode
        </p>
      </div>
    </div>
  );
}

function HomePage12() {
  return (
    <div className="h-[72px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[849px]">This mode acquires images at intervals (e.g., every 0.5-2 seconds) rather than continuously. The operator activates image acquisition via a foot pedal or hand switch. This significantly reduces radiation exposure while still providing frequent updates on needle position and anatomical changes.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-0 rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[122.238px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Reduced dose</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[130.24px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[162.925px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Intermittent imaging</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[301.16px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[125.412px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Most common</p>
    </div>
  );
}

function HomePage13() {
  return (
    <div className="h-[39.2px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.2px] relative w-[878.4px]">
        <Text3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.7)] box-border content-stretch flex flex-col gap-[36px] h-[268.788px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[292.79px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage11 />
      <HomePage12 />
      <HomePage13 />
    </div>
  );
}

function HomePage14() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-[rgba(0,0,0,0)]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(94, 233, 181) 0%, rgb(0, 211, 242) 50%, rgb(81, 162, 255) 100%)" }}>
          CT Fluorography (Single-Shot)
        </p>
      </div>
    </div>
  );
}

function HomePage15() {
  return (
    <div className="h-[72px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[867px]">A hybrid approach where individual CT images are acquired on demand, similar to conventional radiographic fluorography. This provides the lowest radiation dose but requires the operator to pause between instrument movements to acquire verification images.</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-0 rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[111.662px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Lowest dose</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[119.66px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[164.4px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">On-demand imaging</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[39.2px] left-[292.06px] rounded-[2.68435e+07px] to-[rgba(43,127,255,0.2)] top-0 via-50% via-[rgba(173,70,255,0.2)] w-[150.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(194,122,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[17.6px] text-[#e9d4ff] text-[14px] text-nowrap top-[8.4px] whitespace-pre">Simple procedures</p>
    </div>
  );
}

function HomePage16() {
  return (
    <div className="h-[39.2px] relative shrink-0 w-[878.4px]" data-name="HomePage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.2px] relative w-[878.4px]">
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.7)] box-border content-stretch flex flex-col gap-[36px] h-[268.788px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[585.58px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HomePage14 />
      <HomePage15 />
      <HomePage16 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[854.362px] relative shrink-0 w-full" data-name="Container">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[918.362px] items-start left-[48px] top-[3653.54px] w-[928px]" data-name="Section">
      <Container20 />
      <Container21 />
    </div>
  );
}

function HomePage17() {
  return (
    <div className="h-[4683.9px] relative shrink-0 w-full" data-name="HomePage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[4747.9px] items-start left-0 pb-0 pl-0 pr-[71.2px] pt-[64px] top-0 w-[1095.2px]" data-name="App">
      <HomePage17 />
    </div>
  );
}

function App1() {
  return <div className="absolute bg-[rgba(0,0,0,0.05)] h-[689.6px] left-0 opacity-0 top-0 w-[1095.2px]" data-name="App" />;
}

function HomePage18() {
  return <div className="absolute h-[625.6px] left-0 opacity-0 top-[64px] w-[1095.2px]" data-name="HomePage" />;
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">On This Page</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,137,4,0.3)] h-[40px] relative rounded-[4px] shrink-0 to-[rgba(43,127,255,0.3)] via-50% via-[rgba(173,70,255,0.3)] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0px_0px_0px_1.6px] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[13.6px] text-[16px] text-nowrap text-white top-[5.8px] whitespace-pre">About</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">Principles</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">{`Design & Working`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">Types</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[172px] items-start relative shrink-0 w-full" data-name="Navigation">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function LeftSidebar() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="LeftSidebar">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[260px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading18 />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-zinc-900 h-[625.6px] left-[-256px] top-[64px] w-[255.2px]" data-name="Primitive.div">
      <div className="content-stretch flex flex-col h-[625.6px] items-start overflow-clip relative rounded-[inherit] w-[255.2px]">
        <LeftSidebar />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[28px] left-[44px] top-[2px] w-[162.6px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">CT FLUOROSCOPY</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2525780} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38ab8100} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-gradient-to-r blur-lg filter from-[#00d3f2] left-0 opacity-20 rounded-[2.68435e+07px] size-[32px] to-[#2b7fff] top-0 via-50% via-[#ad46ff]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="Container">
      <Icon8 />
      <Icon9 />
      <Container22 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[206.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[206.6px]">
        <Text9 />
        <Container23 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[108.588px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[108.588px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Generations</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[87.888px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[87.888px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Products</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[110.763px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[110.763px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Applications</p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[331.238px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[331.238px]">
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Navigation1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.95)] box-border content-stretch flex flex-col h-[68.8px] items-start left-0 pb-[0.8px] pt-[16px] px-[59.6px] top-0 w-[1095.2px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container24 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_16.67%_79.17%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
            <path d="M1 1H14.3333" id="Vector" stroke="var(--stroke-0, #FFB86A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
            <path d="M1 1H14.3333" id="Vector" stroke="var(--stroke-0, #FFB86A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_16.67%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
            <path d="M1 1H14.3333" id="Vector" stroke="var(--stroke-0, #FFB86A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SidebarToggle() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.9)] box-border content-stretch flex flex-col items-start left-[24px] pb-[0.8px] pt-[10.8px] px-[10.8px] rounded-[10px] size-[41.6px] top-[20px]" data-name="SidebarToggle">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon10 />
    </div>
  );
}

export default function CtFluoroscopyWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="CT Fluoroscopy Website">
      <App />
      <App1 />
      <HomePage18 />
      <PrimitiveDiv />
      <Header />
      <SidebarToggle />
    </div>
  );
}