import { useState } from "react";

import ExperienceContent from "@/content/cv/experience.mdx";
import EducationContent from "@/content/cv/education.mdx";
import SkillsContent from "@/content/cv/skills.mdx";

export default function Cv() {
  const sections = [
    {
      heading: "Professional Experience",
      component: <ExperienceContent />,
    },
    {
      heading: "Education",
      component: <EducationContent />,
    },
    {
      heading: "Skills",
      component: <SkillsContent />,
    },
  ];

  // State to track which section is open (null means all are collapsed)
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index); // Toggle the current section
  };

  return (
    <div className="container mx-auto px-48 pt-10">
      <div className="flex flex-col space-y-4">
        <div className="text-sm font-bold text-center mb-4">Download CV</div>
        <div>
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Heading */}
              <div
                onClick={() => toggleSection(index)}
                className="cursor-pointer flex flex-row items-center space-x-2 mb-2"
              >
                <span
                  className={`transition-transform ${
                    openSection === index ? "rotate-90" : ""
                  }`}
                >
                  &#x25B8;
                </span>
                <div className="text-xl text-sky-600 font-bold decoration-sky-500">
                  {section.heading}
                </div>
              </div>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openSection === index
                    ? "max-h-screen prose max-w-none px-2"
                    : "max-h-0 prose max-w-none px-2"
                }`}
              >
                {openSection === index && section.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
