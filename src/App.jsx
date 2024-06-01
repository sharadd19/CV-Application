import { useState } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Cv from "./components/CV";
import "./App.css";
import { v4 as uuid4 } from "uuid";
import JsPDF from "jspdf";

function App() {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  // We can have more than one education so we need a list
  const [educations, setEducation] = useState([
    {
      id: uuid4(),
      university: "",
      degree: "",
      country: "",
      startDate: "",
      endDate: "",
      stillAttending: false,
    },
  ]);

  // We can have more than one work experience as well, so we need a list
  const [workExperiences, setWorkExperience] = useState([
    {
      id: uuid4(),
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
      currentEmployer: false,
      description: "",
    },
  ]);

  const [showPersonalInformation, setShowPersonalInformation] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(false);

  function togglePersonalInformation() {
    setShowPersonalInformation(!showPersonalInformation);
  }

  function toggleEducation() {
    setShowEducation(!showEducation);
  }

  function toggleWorkExperience() {
    setShowWorkExperience(!showWorkExperience);
  }

  function downloadCv() {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector(".cvContainer")).then(() => {
      report.save("report.pdf");
    });
  }

  return (
    <>
      <div className="mainTitle">
        <h1>Build your CV</h1>
      </div>
      <div className="wrapper">
        <div className="mainContainer">
          <button className="download" onClick={downloadCv}>
            Download
          </button>

          <div className="personalInformationInput">
            <div>
              <button className="toggle" onClick={togglePersonalInformation}>
                <h2>
                  Personal Details&nbsp;
                  {<span>{showPersonalInformation ? "▲" : "▼"}</span>}
                </h2>
              </button>
            </div>
            {showPersonalInformation && (
              <PersonalInformation
                personalInformation={personalInformation}
                setPersonalInformation={setPersonalInformation}
                showPersonalInformation={showPersonalInformation}
                setShowPersonalInformation={setShowPersonalInformation}
              />
            )}
          </div>

          <div className="educationInput">
            <div>
              <button className="toggle" onClick={toggleEducation}>
                <h2>Education&nbsp;{<span>{showEducation ? "▲" : "▼"}</span>}</h2>
              </button>
            </div>
            {showEducation && (
              <Education
                educations={educations}
                setEducation={setEducation}
                showEducation={showEducation}
                setShowEducation={setShowEducation}
              />
            )}
          </div>

          <div className="workExperienceInput">
            <div>
              <button className="toggle" onClick={toggleWorkExperience}>
                <h2>
                  Work Experience&nbsp;{<span>{showWorkExperience ? "▲" : "▼"}</span>}
                </h2>
              </button>
            </div>
            {showWorkExperience && (
              <WorkExperience
                workExperiences={workExperiences}
                setWorkExperience={setWorkExperience}
                showWorkExperience={showWorkExperience}
                setShowWorkExperience={setShowWorkExperience}
              />
            )}
          </div>
        </div>
        <div className="cvContainer">
          <Cv
            personalInformation={personalInformation}
            educations={educations}
            workExperiences={workExperiences}
          />
        </div>
      </div>
    </>
  );
}

export default App;
