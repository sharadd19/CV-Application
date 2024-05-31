import { useState } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

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
      id: "",
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
      id: "",
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
      currentEmployer: false,
      description: "",
    },
  ]);

  return (
    <>
      <div className="mainContainer">
        <PersonalInformation
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
        />
        {/* <Education educations={educations} setEducation={setEducation} />
        <WorkExperience
          workExperiences={workExperiences}
          setWorkExperience={setWorkExperience}
        /> */}
      </div>
      <div className="cvBuilderContainer">
        <Resume
          personalInformation={personalInformation}
          educations={educations}
          workExperiences={workExperiences}
        />
      </div>
    </>
  );
}

export default App;
