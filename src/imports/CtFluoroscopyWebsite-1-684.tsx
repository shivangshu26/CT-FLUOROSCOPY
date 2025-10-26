import svgPaths from "./svg-yuz487558t";
import imgImageWithFallback from "figma:asset/9a89a0ae167c6a7777ee4a28851a6fc479fa3679.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
          <g id="Vector_4"></g>
          <g id="Vector_5"></g>
          <g id="Vector_6"></g>
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[507.712px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[507.712px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[40px] left-0 text-[36px] text-[rgba(0,0,0,0)] text-nowrap top-[-3px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>{`Clinical Applications & Research`}</p>
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
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#d1d5dc] text-[18px] top-[-1.4px] w-[879px]">CT fluoroscopy has revolutionized interventional radiology by enabling real-time visualization during minimally invasive procedures. The technology has demonstrated significant clinical value across multiple specialties and continues to evolve with ongoing research initiatives worldwide.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[133.32px] size-[32px] top-[16.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa92f00} id="Vector_2" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p230c5e00} id="Vector_3" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ApplicationsPage() {
  return (
    <div className="absolute h-[24px] left-[16.8px] top-[80.8px] w-[265.062px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[132.94px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">2M+ Procedures</p>
    </div>
  );
}

function ApplicationsPage1() {
  return (
    <div className="absolute h-[20px] left-[16.8px] top-[132.8px] w-[265.062px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[133.07px] text-[#99a1af] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Performed Annually</p>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] h-[169.6px] left-0 rounded-[14px] top-0 w-[298.663px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon1 />
      <ApplicationsPage />
      <ApplicationsPage1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[133.32px] size-[32px] top-[16.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ApplicationsPage2() {
  return (
    <div className="absolute h-[24px] left-[16.8px] top-[80.8px] w-[265.062px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[132.07px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">95% Success Rate</p>
    </div>
  );
}

function ApplicationsPage3() {
  return (
    <div className="absolute h-[20px] left-[16.8px] top-[132.8px] w-[265.062px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[132.14px] text-[#99a1af] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Modern Systems</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] h-[169.6px] left-[314.66px] rounded-[14px] top-0 w-[298.663px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon2 />
      <ApplicationsPage2 />
      <ApplicationsPage3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[133.34px] size-[32px] top-[16.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M6 4H26" id="Vector" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p25dd4c80} id="Vector_2" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8 18.6667H24" id="Vector_3" stroke="var(--stroke-0, #FF8904)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ApplicationsPage4() {
  return (
    <div className="absolute h-[24px] left-[16.8px] top-[80.8px] w-[265.075px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[132.47px] text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">500+ Studies</p>
    </div>
  );
}

function ApplicationsPage5() {
  return (
    <div className="absolute h-[20px] left-[16.8px] top-[132.8px] w-[265.075px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[133.03px] text-[#99a1af] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Published 2020-2024</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] h-[169.6px] left-[629.33px] rounded-[14px] top-0 w-[298.675px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon3 />
      <ApplicationsPage4 />
      <ApplicationsPage5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[169.6px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[277.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[341.6px] items-start left-[48px] top-[48px] w-[928px]" data-name="Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[30px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.6px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Clinical Applications
      </p>
    </div>
  );
}

function ApplicationsPage6() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[24.8px] top-[24.8px] w-[878.4px]" data-name="ApplicationsPage">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Interventional Oncology</p>
    </div>
  );
}

function ApplicationsPage7() {
  return (
    <div className="absolute h-[48px] left-[24.8px] top-[96.79px] w-[878.4px]" data-name="ApplicationsPage">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[825px]">CT fluoroscopy is extensively used in oncology for tumor biopsies, radiofrequency ablation (RFA), cryoablation, and microwave ablation procedures. The technology enables precise targeting of lesions while avoiding critical structures.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Italic',_sans-serif] font-normal italic leading-[24px] left-[292.86px] text-[#d1d5dc] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">CT fluoroscopy during radiofrequency ablation of a liver tumor</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[102.5px] top-[0.8px] w-[429.688px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ff8904] text-[14px] text-center text-nowrap underline whitespace-pre">ResearchGate - Radiofrequency Ablation: The Percutaneous Approach</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[78.9px] text-[#6a7282] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Source:</p>
      <Link />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[146.4px] top-[431.32px] w-[585.6px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[419.325px] left-0 pointer-events-none rounded-[10px] top-0 w-[585.6px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImageWithFallback} />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-t from-[rgba(89,22,139,0.2)] h-[419.325px] left-0 rounded-[10px] to-[rgba(0,0,0,0)] top-0 w-[585.6px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[419.325px] left-[146.4px] top-0 w-[585.6px]" data-name="Container">
      <ImageWithFallback />
      <Container4 />
    </div>
  );
}

function ApplicationsPage8() {
  return (
    <div className="absolute h-[479.325px] left-[24.8px] top-[184.79px] w-[878.4px]" data-name="ApplicationsPage">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Key Procedures</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Lung tumor biopsy and ablation</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Liver tumor treatment (RFA, MWA)</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Kidney tumor ablation</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Bone metastasis treatment</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Soft tissue tumor biopsy</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[136px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-0 top-0 w-[431.2px]" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Clinical Outcomes</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 92-98% diagnostic accuracy for biopsies</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 85-95% complete ablation rates</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Less than 3% major complication rate</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 30-40% shorter procedure times vs conventional</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-[447.2px] top-0 w-[431.2px]" data-name="Container">
      <Heading5 />
      <List1 />
    </div>
  );
}

function ApplicationsPage9() {
  return (
    <div className="absolute h-[168px] left-[24.8px] top-[712.11px] w-[878.4px]" data-name="ApplicationsPage">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] h-[904.913px] left-0 rounded-[14px] top-0 w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ApplicationsPage6 />
      <ApplicationsPage7 />
      <ApplicationsPage8 />
      <ApplicationsPage9 />
    </div>
  );
}

function ApplicationsPage10() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">{`Pain Management & Spinal Interventions`}</p>
      </div>
    </div>
  );
}

function ApplicationsPage11() {
  return (
    <div className="h-[48px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[851px]">Precise needle placement under CT fluoroscopy guidance has transformed pain management procedures, particularly for spine-related interventions including nerve blocks, vertebroplasty, and kyphoplasty.</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Common Procedures</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">{`• Vertebroplasty & kyphoplasty`}</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Facet joint injections</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Nerve root blocks</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Sacroiliac joint injections</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Celiac plexus blocks</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[136px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-0 top-0 w-[431.2px]" data-name="Container">
      <Heading6 />
      <List2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Clinical Benefits</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 80-90% pain reduction rates</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 95%+ technical success</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Reduced fluoroscopy time (50-60%)</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Same-day discharge in 90% of cases</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-[447.2px] top-0 w-[431.2px]" data-name="Container">
      <Heading7 />
      <List3 />
    </div>
  );
}

function ApplicationsPage12() {
  return (
    <div className="h-[168px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[168px] relative w-[878.4px]">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] box-border content-stretch flex flex-col gap-[40px] h-[377.587px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[928.91px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ApplicationsPage10 />
      <ApplicationsPage11 />
      <ApplicationsPage12 />
    </div>
  );
}

function ApplicationsPage13() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Thoracic Interventions</p>
      </div>
    </div>
  );
}

function ApplicationsPage14() {
  return (
    <div className="h-[48px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[852px]">CT fluoroscopy provides unparalleled accuracy for lung and mediastinal procedures, enabling safe biopsy of small lesions and guidance for therapeutic interventions.</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Applications</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Lung nodule biopsy (5mm+)</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Pleural biopsy</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Mediastinal mass sampling</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Chest drain placement</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Lung ablation procedures</p>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[136px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-0 top-0 w-[431.2px]" data-name="Container">
      <Heading8 />
      <List4 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Performance Metrics</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 90-95% diagnostic yield</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Pneumothorax rate: 15-25%</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Chest tube requirement: 5-10%</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Average procedure time: 15-25 minutes</p>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem23 />
      <ListItem24 />
      <ListItem25 />
      <ListItem26 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-[447.2px] top-0 w-[431.2px]" data-name="Container">
      <Heading9 />
      <List5 />
    </div>
  );
}

function ApplicationsPage15() {
  return (
    <div className="h-[168px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[168px] relative w-[878.4px]">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] box-border content-stretch flex flex-col gap-[40px] h-[377.587px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[1330.5px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ApplicationsPage13 />
      <ApplicationsPage14 />
      <ApplicationsPage15 />
    </div>
  );
}

function ApplicationsPage16() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">{`Abdominal & Pelvic Interventions`}</p>
      </div>
    </div>
  );
}

function ApplicationsPage17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[824px]">From abscess drainage to complex biopsies, CT fluoroscopy enables safe navigation through abdominal organs while avoiding vascular structures and bowel.</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Procedures</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">{`• Liver & kidney biopsies`}</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">{`• Abscess & fluid drainage`}</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Adrenal mass biopsy</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Pelvic mass evaluation</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Nephrostomy placement</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[136px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem27 />
      <ListItem28 />
      <ListItem29 />
      <ListItem30 />
      <ListItem31 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-0 top-0 w-[431.2px]" data-name="Container">
      <Heading10 />
      <List6 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Success Rates</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 95-98% technical success</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 90-95% diagnostic accuracy</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Less than 2% major complications</p>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 85-90% primary drainage success</p>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
      <ListItem35 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-[447.2px] top-0 w-[431.2px]" data-name="Container">
      <Heading11 />
      <List7 />
    </div>
  );
}

function ApplicationsPage18() {
  return (
    <div className="h-[168px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[168px] relative w-[878.4px]">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-[rgba(29,41,61,0.5)] box-border content-stretch flex flex-col gap-[40px] h-[377.587px] items-start left-0 pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] rounded-[14px] top-[1732.09px] w-[928px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ApplicationsPage16 />
      <ApplicationsPage17 />
      <ApplicationsPage18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[2109.68px] relative shrink-0 w-full" data-name="Container">
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[2169.68px] items-start left-[48px] top-[453.6px] w-[928px]" data-name="Section">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[30px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.6px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>{`Research & Clinical Statistics`}</p>
    </div>
  );
}

function ApplicationsPage19() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Recent Research Highlights (2020-2024)</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">AI-Enhanced CT Fluoroscopy</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[843px]">Multiple studies have demonstrated that AI-powered needle tracking and path planning can reduce procedure times by 25-30% while improving first-pass accuracy to 85-90%. Deep learning algorithms for real-time dose optimization have achieved dose reductions of up to 60% without compromising diagnostic quality.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Published studies: 120+, Major journals: Radiology, JVIR, AJR</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff8904] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[136px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading13 />
          <Paragraph3 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Ultra-Low Dose Protocols</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[855px]">Research on iterative reconstruction and model-based algorithms has enabled routine use of ultra-low dose protocols (as low as 10 mA) for CT fluoroscopy procedures. Multi-center trials show effective doses reduced from 8-12 mSv to 2-4 mSv without significant impact on procedural success rates.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Studies enrolled: 5,000+ patients across 15 countries</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff8904] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[136px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading14 />
          <Paragraph5 />
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Spectral CT Fluoroscopy</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[855px]">Dual-energy and photon-counting CT fluoroscopy research demonstrates improved lesion conspicuity and needle visualization. Early studies show 15-20% improvement in detecting small lesions (less than 1cm) and better differentiation of enhancing vs non-enhancing masses.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Active clinical trials: 25+, Expected completion: 2025-2026</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff8904] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[136px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading15 />
          <Paragraph7 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Robotic-Assisted CT Fluoroscopy</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[850px]">Integration of robotic navigation systems with CT fluoroscopy has shown promising results in complex procedures. Initial studies report 95% targeting accuracy for lesions less than 10mm and 40% reduction in operator radiation exposure.</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Pilot programs: 12 major centers, Patient enrollment: 800+</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff8904] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[112px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <Heading16 />
          <Paragraph9 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function ApplicationsPage20() {
  return (
    <div className="h-[592px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[592px] items-start relative w-[878.4px]">
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[rgba(39,39,42,0.7)] h-[713.588px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(82,82,92,0.6)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[713.588px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ApplicationsPage19 />
          <ApplicationsPage20 />
        </div>
      </div>
    </div>
  );
}

function ApplicationsPage21() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Global Usage Statistics</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Procedure Volume (Annual)</p>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• North America: 800,000+ procedures</p>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Europe: 650,000+ procedures</p>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Asia-Pacific: 550,000+ procedures</p>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Rest of World: 200,000+ procedures</p>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Growth rate: 8-12% annually</p>
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[152px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem36 />
      <ListItem37 />
      <ListItem38 />
      <ListItem39 />
      <ListItem40 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[188px] items-start left-0 top-0 w-[427.2px]" data-name="Container">
      <Heading17 />
      <List8 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Market Penetration</p>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 75-80% of major hospitals equipped</p>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 40-50% of community hospitals</p>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• 85%+ of academic medical centers</p>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Fastest growing: Outpatient centers (20% CAGR)</p>
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem41 />
      <ListItem42 />
      <ListItem43 />
      <ListItem44 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[188px] items-start left-[451.2px] top-0 w-[427.2px]" data-name="Container">
      <Heading18 />
      <List9 />
    </div>
  );
}

function ApplicationsPage22() {
  return (
    <div className="h-[188px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[188px] relative w-[878.4px]">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[rgba(29,41,61,0.5)] h-[309.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[309.587px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ApplicationsPage21 />
          <ApplicationsPage22 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1107.18px] items-start left-[48px] top-[2687.28px] w-[928px]" data-name="Section">
      <Heading12 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[36px] left-0 text-[30px] text-[rgba(0,0,0,0)] text-nowrap top-[-2.6px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 184, 106) 0%, rgb(194, 122, 255) 50%, rgb(81, 162, 255) 100%)" }}>
        Future Directions
      </p>
    </div>
  );
}

function ApplicationsPage23() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Emerging Technologies</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#ff8904] h-[80px] relative rounded-[4px] shrink-0 w-[4.388px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] w-[4.388px]" />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Photon-Counting Detectors</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[814px]">Next-generation photon-counting CT promises 30-40% better spatial resolution with 50% dose reduction. Expected widespread adoption by 2026-2027 could revolutionize small lesion detection and precision interventions.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[80px] relative shrink-0 w-[858.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[858.013px]">
        <Heading20 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[80px] items-start left-0 top-0 w-[878.4px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#ff8904] h-[80px] relative rounded-[4px] shrink-0 w-[4.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] w-[4.25px]" />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">AR/VR Integration</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[855px]">Augmented reality overlay systems combining pre-procedural imaging with real-time CT fluoroscopy are in development. Pilot studies show 30% improvement in complex needle navigation and reduced learning curve for trainees.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-full">
        <Heading21 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[80px] items-start left-0 top-[96px] w-[878.4px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#ff8904] h-[80px] relative rounded-[4px] shrink-0 w-[4.287px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] w-[4.287px]" />
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Autonomous Procedure Planning</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[806px]">AI systems capable of automatic path planning, collision detection, and real-time trajectory optimization are under investigation. Early prototypes demonstrate feasibility with 90%+ acceptance rates by interventional radiologists.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[80px] relative shrink-0 w-[858.112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[858.112px]">
        <Heading22 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[80px] items-start left-0 top-[192px] w-[878.4px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#ff8904] h-[80px] relative rounded-[4px] shrink-0 w-[4.575px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] w-[4.575px]" />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#ff8904] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Multi-Modal Fusion</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-2.2px] w-[817px]">Real-time fusion of CT fluoroscopy with ultrasound, PET, or MRI data promises enhanced lesion characterization and improved targeting. Clinical trials are ongoing with expected commercial availability in 2-3 years.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[80px] relative shrink-0 w-[857.825px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[857.825px]">
        <Heading23 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[80px] items-start left-0 top-[288px] w-[878.4px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function ApplicationsPage24() {
  return (
    <div className="h-[368px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[368px] relative w-[878.4px]">
        <Container23 />
        <Container26 />
        <Container29 />
        <Container32 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[rgba(29,41,61,0.5)] h-[485.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] h-[485.587px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ApplicationsPage23 />
          <ApplicationsPage24 />
        </div>
      </div>
    </div>
  );
}

function ApplicationsPage25() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[878.4px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">Anticipated Impact</p>
      </div>
    </div>
  );
}

function ApplicationsPage26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[878.4px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">The convergence of AI, advanced detector technology, and robotic assistance is expected to:</p>
      </div>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Reduce average procedure times by 40-50% by 2030</p>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Lower radiation doses to levels comparable to conventional radiography</p>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Expand indications to previously challenging anatomical locations</p>
    </div>
  );
}

function ListItem48() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Enable remote-guided procedures in underserved areas</p>
    </div>
  );
}

function ListItem49() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Achieve near-universal success rates (99%+) for routine procedures</p>
    </div>
  );
}

function ListItem50() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#d1d5dc] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">• Decrease operator radiation exposure by 95% through automation</p>
    </div>
  );
}

function ApplicationsPage27() {
  return (
    <div className="h-[184px] relative shrink-0 w-[878.4px]" data-name="ApplicationsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[184px] items-start relative w-[878.4px]">
        <ListItem45 />
        <ListItem46 />
        <ListItem47 />
        <ListItem48 />
        <ListItem49 />
        <ListItem50 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-[rgba(29,41,61,0.5)] h-[365.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(49,65,88,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] h-[365.587px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ApplicationsPage25 />
          <ApplicationsPage26 />
          <ApplicationsPage27 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[875.175px] items-start relative shrink-0 w-full" data-name="Container">
      <Card9 />
      <Card10 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[935.175px] items-start left-[48px] top-[3858.45px] w-[928px]" data-name="Section">
      <Heading19 />
      <Container33 />
    </div>
  );
}

function ApplicationsPage28() {
  return (
    <div className="h-[4905.62px] relative shrink-0 w-full" data-name="ApplicationsPage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[4969.62px] items-start left-0 pb-0 pl-0 pr-[71.2px] pt-[64px] top-0 w-[1095.2px]" data-name="App">
      <ApplicationsPage28 />
    </div>
  );
}

function App1() {
  return <div className="absolute bg-[rgba(0,0,0,0.05)] h-[689.6px] left-0 opacity-0 top-[463.2px] w-[1095.2px]" data-name="App" />;
}

function ApplicationsPage29() {
  return <div className="absolute h-[625.6px] left-0 opacity-0 top-[527.2px] w-[1095.2px]" data-name="ApplicationsPage" />;
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#99a1af] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">On This Page</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">Overview</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,137,4,0.3)] h-[40px] relative rounded-[4px] shrink-0 to-[rgba(43,127,255,0.3)] via-50% via-[rgba(173,70,255,0.3)] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0px_0px_0px_1.6px] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(173,70,255,0.3),0px_4px_6px_-4px_rgba(173,70,255,0.3)]" />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[13.6px] text-[16px] text-nowrap text-white top-[5.8px] whitespace-pre">Clinical Applications</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">{`Research & Statistics`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[12px] text-[#99a1af] text-[16px] text-nowrap top-[5.8px] whitespace-pre">Future Directions</p>
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
          <Heading3 />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-zinc-900 h-[625.6px] left-[-256px] top-[527.2px] w-[255.2px]" data-name="Primitive.div">
      <div className="content-stretch flex flex-col h-[625.6px] items-start overflow-clip relative rounded-[inherit] w-[255.2px]">
        <LeftSidebar />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[28px] left-[44px] top-[2px] w-[162.6px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">CT FLUOROSCOPY</p>
    </div>
  );
}

function Icon4() {
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

function Icon5() {
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

function Container34() {
  return <div className="absolute bg-gradient-to-r blur-lg filter from-[#00d3f2] left-0 opacity-20 rounded-[2.68435e+07px] size-[32px] to-[#2b7fff] top-0 via-50% via-[#ad46ff]" data-name="Container" />;
}

function Container35() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="Container">
      <Icon4 />
      <Icon5 />
      <Container34 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[206.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[206.6px]">
        <Text />
        <Container35 />
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
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[8px] shrink-0 to-[#2b7fff] via-50% via-[#ad46ff] w-[110.763px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[110.763px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Applications</p>
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

function Container36() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Navigation1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.95)] box-border content-stretch flex flex-col h-[68.8px] items-start left-0 pb-[0.8px] pt-[16px] px-[59.6px] top-[463.2px] w-[1095.2px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container36 />
    </div>
  );
}

function Icon6() {
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
    <div className="absolute bg-[rgba(39,39,42,0.9)] box-border content-stretch flex flex-col items-start left-[24px] pb-[0.8px] pt-[10.8px] px-[10.8px] rounded-[10px] size-[41.6px] top-[483.2px]" data-name="SidebarToggle">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[66.61%_66.59%_10.42%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-18.14%_-18.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p3d881400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.33%_37.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p300c4400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[54.17%] top-[31.33%]" data-name="Vector">
        <div className="absolute inset-[-22.32%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
            <path d={svgPaths.p3f8b240} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-1/2 right-[31.33%] top-[54.17%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-22.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
            <path d={svgPaths.p1de8ca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#ff8904] items-start left-[1007.2px] pb-0 pt-[16px] px-[16px] rounded-[2.68435e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px] to-[#2b7fff] top-[1060.68px] via-50% via-[#ad46ff]" data-name="ScrollToTop">
      <Icon7 />
    </div>
  );
}

export default function CtFluoroscopyWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="CT Fluoroscopy Website">
      <App />
      <App1 />
      <ApplicationsPage29 />
      <PrimitiveDiv />
      <Header />
      <SidebarToggle />
      <ScrollToTop />
    </div>
  );
}