import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

export default function EProjects() {

  const renderProjectsEven = () => {
    const evenProjects = eprojects.filter((project, index) => index % 2 === 0)
    return evenProjects.map((project, index) => <ProjectCard key={index} project={project}/>)
  }

  const renderProjectsOdd = () => {
    const oddProjects = eprojects.filter((project, index) => index % 2 !== 0)
    return oddProjects.map((project, index) => <ProjectCard key={index} project={project}/>)
  }

  return (
    <section className="project-main-cards">
      <div className="project-column">
        {renderProjectsEven()}
      </div>
      <div className="project-column">
        {renderProjectsOdd()}
      </div>
    </section>
  )
}

const ProjectCard = (props) => {

  const { title, location, client, paragraphs} = props.project
  const [open, setOpen] = useState(false)

  const defaultStyle = {
    transition: `transform 300ms, opacity 100ms ease`,
    opacity: 1
  };
  
  const transitionStyles = {
    entering: { transform: 'translateY(-30%)', opacity: 0 }, 
    entered: { transform: 'translateY(0)', opacity: 1},
    exiting: { transform: 'translateY(-30%)', opacity: 0},
    exited: { transform: 'translateY(-30%)', opacity: 0}
  };
  
  const renderParagraphs = () => {
    return paragraphs.map(paragraph => <p>{paragraph}</p>)
  }

  return (
    <article className="project-card">
      <div className="project-title environmental" onClick={() => setOpen(!open)}>
        <div>
          <h2>{title}</h2>
          <h3>{location}</h3>
          <h3>Client: <strong>{client}</strong></h3>
        </div>
        <svg className={open ? "arrow-down":"arrow-right"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
      </div>
      <Transition
        in={open}
        timeout={{
          appear: 100,   
          enter: 200,
          exit: 300
        }}
        appear
        unmountOnExit
      >
        {state => (
          <div className="project-text"
            style={{...defaultStyle, ...transitionStyles[state]}}>
            {renderParagraphs()}
          </div>
        )}
      </Transition>
    </article>
  )
}

const eprojects = [
  {title: "Long Term Product Recovery System", location: "Pearl Harbor Naval Shipyard & Intermediate Maintenance Facility, Hawaii, 2009 - 2011", client: "NAVFAC Pacific", paragraphs: ["HIES conducted the ongoing removal and monitoring of subsurface fuel hydrocarbons from sumps and wells from many different site locations within Pearl Harbor Naval Base. The overall purpose of the performance monitoring program is to gather data to evaluate the effectiveness of the product recovery system. This is accomplished by National Pollutant Discharge Elimination System (NPDES) monitoring, monitoring free-phase hydrocarbon product migration and recovery, and annual waste product profiling.", "Duties included weekly inspection and documentation of results utilizing belt skimmer systems to collect free-phase product. Results are detailed and documented in weekly, monthly, and yearly monitoring reports, analyzed, and used as a decision making tool for future action. The tasks included the maintenance, repair, and replacement of all monitoring and extraction equipment including extraction wells components, telemetry, electrical circuitry / power sources, AST, OWS units, and grounds. HIES documents and analyzed the remediation systems performance and engineered future solutions."]}, 
  {title: "JRMC Machine Guarding and Design", location: "US Ship Repair Facility and JRMC in Yokosuka & Sasebo, 2008 - 2010", client: "NAVFAC FE", paragraphs: ["HIES designed and implemented new safety designs and identified future environmental and safety hazards in US Ship Repair Facility and JRMC in Yokosuka and Sasebo. The task included implementing new designs under OSHA General Industry and Construction Standards, and reporting under the Hazard Abatement Project Data Sheet. The contract also included machine personnel hands-on and classroom training for safety and operations under OSHA, ANSI, ASSE, and NFPA.", "GIS Surveys of surrounding areas to identify environmental and safety hazards was performed and used as a data for final analysis. HIES Mechanical and Structural engineers updated and maintained all CAD drawings, As-builts, and plans for this project under OSHA safety standards. SOW included designing and implementing safety guards for old machining equipment and analyzing equipment for disposal or retrofitting."]}, 
  {title: "Confirmation Sampling, Site Investigation & Interim Removal Action", location: "Wheeler Army Air Field, Hawaii", client: "U.S. Army Corps of Engineers", paragraphs: ["HIES conducted confirmation soil sampling and a geophysical survey as part of a Preliminary Site Investigation at the Archery Range Site located within Wheeler Army Airfield, Hawaii. The objective of the Preliminary Site Investigation was to determine if any chemical constituents were released from the drums found at the site, and if any magnetic anomalies were present that could represent additional drums in the area.", "A total of 29 surface drums and 29 subsurface metal objects were located and mapped.In addition to the drums other metallic objects including expended ammunition and cartridge casings, engines and vehicle parts, as well as concrete, asphalt and transite piping were observed and mapped. HIES collected a total of 24 soil samples, and laboratory analytical results indicate that the site had been impacted by TPH, SVOCs, and lead above DOH SALs. Pesticides, including DDD, DDE, and DDT and VOCs, were also detected, but were detected at concentrations below DOH SALs.", "Based on the Preliminary Site Investigation, HIES performed an Additional Site Investigation and Interim Removal Action. HIES delineated the vertical and horizontal extent of contamination and removed the drums and debris located in the Preliminary Site Investigation. By the end of the removal action, approximately 200 drums, 10 tons of asbestos pipe, 20 tons of debris, 62 tons of non-RCRA petroleum impacted soil and 18 tons of RCRA lead impacted soil were removed from the site and disposed of properly."]}, 
  {title: "Removal / Disposal of Asbestos Containing Materials and other Miscellaneous Repairs", location: "Theatre Building, COMNAVMAR", client: "OICC, Guam", paragraphs: ["HIES was contracted to abate friable acoustic ceiling material in the Navy’s movie theater in Guam. In addition, asbestos floor tiles and other ACM were also abated concurrently and replaced with non-ACM products. HIES personnel from the Japan Branch and Hawaii Corporate Headquarters participated in this over 6 month long project, starting from the remedial design, environmental oversight, and impact analysis. This complex abatement project was completed on-time and the customer was extremely satisfied in the performance shown by the HIES team."]}, 
  {title: "Fire Management Plan", location: "War in the Pacific National Historical Park", client: "National Park Service", paragraphs: ["HIES performed an Environmental Assessment (EA) of fire management alternatives at the War in the Pacific National Historical Park (WAPA). The EA addressed the frequent wildland fires at the Park and proposed alternative actions that could be implemented by the Park to reduce the impact of the fires to both terrestrial and marine resources of the Park.", "The EA included a fire management plan to facilitate sound decision making by WAPA management. HIES proudly prepared an EA for this site, as it “commemorates the bravery and sacrifice of those participating in the Pacific Theater of World War II and to conserve and interpret outstanding natural, scenic, and historic values and objects on the island of Guam for the benefit and enjoyment of present and future generations” (§6 of Public Law 95-348, August 1978)."]}, 
  {title: "Demolish Gas Station & Close UST", location: "Kia’I Kai Hale Exchange Service Station, Hawaii", client: "U.S.C.G. Civil Engineering Unit", paragraphs: ["HIES performed the demolition of three buildings and removed two USTs and associated piping for the U.S. Coast Guard. Three unused building structures and foundations, asphalt pavement, and underground utilities (water, sewer, mechanical, and electrical) located within the footprint of the site plan were demolished. All asbestos abatement work was conducted prior to demolition activities.", "Air monitoring for leadand project monitoring for asbestos were performed. HIES removed and permanently closed one 8,000 and one 15,000 gallon capacity double-wall fiberglass UST and its associated piping. The tanks were excavated, removed and cleaned, and disposed of.", "The associated waste was also disposed of at a permitted facility. HIES documented the closure, collected soil samples, and performed the closure assessment. The excavated material was stockpiled and sampled. Xylenes and Toluene were detected, but at concentration below DOH action levels. Following closure activities the site was restored to normal conditions. A cesspool was discovered while excavating and was permanently closed."]}, 
  {title: "Dewatering", location: "Sand Island Waste Water Treatment Plant , Honolulu, Hawaii", client: "Hawaiian Dredging Construction Company", paragraphs: ["HIES prepared a dewatering plan for Hawaiian Dredging Construction Company (HDCC); which consisted of a new Odor Control System (OCS) and Gravity Thickener (GT) modifications. The geotechnical engineer established a monitoring system to allow the contractor to identify any settlement of site soils or site structures during dewatering periods.", "Two monitoring wells were installed that were monitored weekly to determine groundwater levels during dewatering. Using the instrument created by the engineer, monitoring of the concentration of fines in the discharges of the pumps were also monitored weekly. HIES also prepared and filed the NPDES permits required for the project."]}, 
  {title: "Solid Waste Removal", location: "Aliamanu Military Reservation, Aeia, Hawaii", client: "U.S. Army Corps of Engineers, Honolulu", paragraphs: ["HIES removed and disposed various solid waste located in a wooded hillside. The solid waste consisted of scrap metal, construction debris, household trash, and other rubbish. The task included preparing planning documents such as the Site Health and Safety Plan and the Work Plan, excavation of the upper berm to reduce overburden on the hill side for safety, surface and subsurface sampling after removal of solid waste to determine next course of action, and a final report to describe field activities and analytical results."]}, 
  {title: "Emergency Spill Response", location: "Former Lau Farms, Inc., Aiea, Hawaii", client: "Kamehameha Schools / Bernice Pauahi Bishop Estates", paragraphs: ["HIES conducted a spill response at the former Lau Farms, Inc., 98‑114 Kamehameha Highway, Aiea, Hawaii. The objective of the project was to respond to a diesel fuel spill at the Site that occurred while Lau Farms personnel attempted to move an old 55-gallon open-head drum. A small hole at the end of the drum was noticed and Lau Farm personnel witnessed diesel fuel leaking from it. The drum was secured so no further product would be released onto the site. HIES personnel observed the drum on its side and confirmed it to contain diesel fuel. It was also noticed that the spill contained various mixes of fertilizers.", "An emergency spill response team was assembled, which included personnel from Pacific Commercial Services, LLC [PCS], to immediately clean up the spilled diesel fuel and fertilizer mixture. It was estimated that approximately 10 to 15 gallons had spilled. The damaged drum was overpacked in an 85-gallon, DOT-approved open-head drum for transport and disposal.", "Cat litter was used to absorb the diesel fuel and fertilizer mixture from the stained asphalt driveway and shoveled with plastic shovels into two 55-gallon, DOT-approved open-head drums. A solution containing Simple Green was applied to the area of the spill to further clean the asphalt surface and more cat litter was applied to absorb any residual liquid. The absorbent material was shoveled into the remaining drum."]}, 
  {title: "Phase II Environmental Site Assessment", location: "Kaneohe, Hawaii", client: "King Windward Nissan", paragraphs: ["HIES conducted a Phase II Site Assessment (ESA) of the properties located in Kaneohe, Hawaii. Previously, a Phase I ESA was performed by HIES of the property in 2002. The ESA was completed to determine if conditions exist at or on the property that might result in real or potential hazards, or in environmental liabilities as dictated by federal, state, and local statutes and regulations.", "The ESA included site reconnaissance, review of historical records, and personal interviews to investigate any possible gross surface contamination, polychlorinated biphenyl [PCB] containing items, underground storage tank [UST] systems, hazardous materials, and hazardous wastes. The ESA concluded that further investigation of the property was prudent, specifically in the areas of former USTs and hydraulic hoists. The Phase II ESA included drilling twelve borings, excavating two trenches, collecting soil samples from the borings and trenches, installing four groundwater monitoring wells, and sampling groundwater from the wells."]}, 
  {title: "Lead Remediation, Erosion Design, and Reconstruction of Range A & B", location: "Puuloa Rifle Range, MCBH", client: "NAVFAC Hawaii", paragraphs: ["The Puuloa Rifle range berms are some of the tallest and largest rifle berms in the Pacific region and stand 22 feet high and 650 feet in length.", "HIES responsibilities included design, de-leading, hazardous material testing (Environmental Assessment), and erosion / slope control implementation of Range A and B located in the Puuloa Training facility at Ewa Beach, HI. HIES designed and subsequently implemented an erosion control plan using civil, structural, GIS, and Geophysical engineers for berms A and B to control soil, slope, and water erosion on the berms.", "The erosion design was implemented due to the possibility that a 15’ tall 550’ long concrete wall located on top of the earthern 22’ tall berm would collapse due the undermining of the berm caused by natural erosion and bullet impact. The erosion control berm design used geogrids for benching and slope retention thus using no metals or materials that would cause bullet deflection. This was a unique solution and may be the first of its kind.", "The rifle range used M-9, M-16, and up to a 7.62 caliber where upon impact, most of the rounds would fragment into pieces. To clean the fragmented lead and whole bullets including shells, penetrators, and shots, HIES utilized a four-screen, trommel, and soil washing system from specialized mobile equipment. This mobile system is cost-effective and efficient due to its ease of transport & size, enabling the company to minimize the range facilities closure time and exposure. Soils and materials placed back on the berms would reduce future maintenance costs by 50%.", "If UXO / Live rounds are not detected during physical exams, the dirt is passed through a heavy steel compartment of screens protecting labor personnel against discharge and allowing for easier detection. This new method greatly reduces maintenance cost of traditional earthern berms and will also save the clients from investing in costly bullet trap alternatives.", "Soil, water, compaction, and air monitoring testing was conducted at different phases of the project to test hazmat levels at all firing lines for future remediation projects. These tests were conducted to measure lead and contamination levels that may effect the health of shooters."]}, 
  {title: "Lead Remediation, Erosion Design, and Reconstruction of Range C, D, E, F", location: "Old Pistol Berm Iroquois Pt, Puuloa Training Facility MCBH", client: "NAVFAC Hawaii", paragraphs: ["The project scope included design, de-leading, hazardous material testing (Environmental Assessment), and erosion control implementation of Range C through F, and hazardous soil remediation for the Old Pistol Berm located in the Puuloa Training facility at Ewa Beach, HI. HIES provided all design documents, as well as as-builts for this project, and worked in coordination with OSHA and the EPA.", "HIES utilized civil, structural, GIS, and Geophysical engineers for berms C through F to control soil, slope, and water erosion on the berms. The erosion design was implemented due to the possibility that erosion would cause the primary and secondary berms to leach into the ocean and the possibility of collapse due the undermining of the berm caused by natural erosion and bullet impact.", "The de-leading process used a wet dry soil separation method from a mobile equipment where HIES physically performed lead, UXO, and metals remediation. This mobile system is cost effective due to its ease of transport and size thus enabling the company to minimize the range facilities closure time and exposure.", "The rifle range uses .45 Caliber, .38 caliber, Shotguns, M-16, and up to a 7.62 caliber where upon impact, some of the rounds fragment to pieces. To clean the fragmented lead and whole bullets including shells, penetrators, and shots, HIES utilized a four screen / hopper, trommel, and soil washing system where even 1/4 inch lead fragments are isolated from berm rocks of equal size through a segragation method.", "If UXO / Live rounds are not detected during physical exams, the dirt is passed through a heavy steel compartment of screens protecting labor personnel against discharge and allowing for easier detection. This new method greatly reduces maintenance cost of traditional earthern berms and also save the clients from investing in costly bullet trap alternatives. Calculated mixtures of fill replaced original materials and is anticipated to reduce future maintenance costs by 50%.", "Soil, water, compaction, and air monitoring testing were conducted at different phases of the project to test hazmat levels at all firing lines for training safety purposes. These tests were conducted to measure lead and contamination levels that may affect the health of shooters."]},
  {title: "Notice of Intent for Discharges of Stormwater Associated with Industrial Activities", location: "Angel’s Towing and Used Parts, Waianae, Hawaii", client: "Angel’s Towing", paragraphs: ["HIES was contracted to prepare the NOI form and Storm Water Pollution Control Plan, in order for the client to obtain a NPDES permit. HIES personnel visited the facility to gain an understanding of the basic operations conducted at the facility, the nature and general pattern of storm water runoff, and the methods in place for the storage, transport, and use of petroleum products and hazardous materials.", " This information was used to prepare the NOI form and write the Storm Water Pollution Control Plan. Two storm water samples were collected at the facility during a storm event. An aliquot of the samples was analyzed in the field for temperature, dissolved oxygen, turbidity, pH, and specific conductance. In addition, the flow rate (in gal/day) was estimated. The samples were then analyzed by an accredited laboratory."]}, 
  {title: "Improve Family Housing", location: "Kadena Air Force Base, Okinawa, Japan, 2005 - 2011", client: "USAF", paragraphs: ["The scope of work includes upgrades to meet current standards including A&E design and implementation for general interior upgrades, improvements to HVAC, plumbing and electrical systems, exterior electrical power upgrade, water utilities analysis, additional signage, landscaping, outside storage and parking spaces. The modernization of these residential units provides a safe, comfortable and appealing living environment comparable to the off-base civilian community. The design focuses on a modern living room, bedroom and bath configurations, as well as a laundry room and ample interior and exterior storage. Phases 3, 4, 5 and 6 have received Excellent and Above Average Performance Evaluations from the U.S. Air Force (AFCEE).", "On behalf of Rim Architects, HIES conducted a hazardous materials survey of one hundred 162+Ph7 housing units located in on and near Kadena AFB in Okinawa, Japan. The 162+Ph7 units correspond with four Phases of the Improve Family Housing project that HIES has been subcontracted to be a part of. HIES provided certified asbestos and lead inspectors to conduct the survey and report preparation. The survey described by this report was conducted from 2003 to present. This survey was performed in order to obtain information related to hazardous materials in the various units planned for renovation prior to the upcoming renovation of the buildings. The work was conducted in general accordance with applicable United States EPA guidelines and the JEGS.", "The 162+Ph7 units inspected were divided into distinct unit types based on the floor plan type and neighborhood. Different units were sampled during different phases. Bulk samples of identifiable suspect building materials were collected from homogeneous areas within the buildings. Samples from each homogenous area were analyzed for asbestos content utilizing PLM in accordance with EPA Method 600R-93/116. The detection limit of the PLM method for asbestos identification is 1% by volume.", "A total of 129 building material samples were reported to be ACM (containing greater than 1% asbestos) following the initial PLM laboratory analysis. Several samples with asbestos percentages greater than 1% but less than 6% were reanalyzed using the point counting method. All of the samples retested using the point counting method were still found to contain more than 1% asbestos and therefore are still classified as ACM. All of confirmed positive ACM identified in the buildings sampled were in good condition at the time of the survey. HIES Project Designers. as a key member of the Design Team, used the information from the LBP and Asbestos inspections to prepare the specifications and government cost estimates. HIES Civil engineers updates and maintains all CAD drawings, As-builts, and plans for this project."]}
]
