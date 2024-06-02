import "../styles/cv.css"
const Cv = ({ personalInformation, educations, workExperiences }) => {
  const handleDate = (date) => {
    if (date === "") return "";
  
    let [year, month] = date.split("-");
    let newDate = new Date(year, month - 1);

    month = newDate.toLocaleString("en-US", { month: "long" });
    date = `${month} ${newDate.getFullYear()}`;

    return date;
  };

  return (
    <div className="cv">
      <div className="header">
        <h1 className="fullName">{personalInformation.fullName}</h1>
        <p>
          {personalInformation.email} | {personalInformation.phone} |{" "}
          {personalInformation.city}
        </p>
      </div>

      <div className="educationSection">
        <h2 className="education">Education</h2>
        <hr></hr>
        {educations.map((education) => (
          <div key={education.id} className="educationElement">
            <div className="universityDegree">
              <p style={{ fontWeight: "bold"}} className="university">{education.university}</p>
              <p style={{ fontStyle: "italic"}}>{education.degree}</p>
            </div>
            <div className="locationDate">
              <p>{education.country}</p>
              <p style={{ fontStyle: "italic"}}>
                {education.stilAttending 
                ? `${handleDate(education.startDate)} - Present` 
                : `${handleDate(education.startDate)} - ${handleDate(education.endDate)}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="workExperienceSection">
        <h2 className="Work Experience">Work Experience</h2>
        <hr></hr>
        {workExperiences.map((workExperience) => (
          <div>
            <div key={workExperience.id} className="workExperienceElement">
              <div className="positionCompany">
                <p style={{ fontWeight: "bold"}}>{workExperience.position}</p>
                <p style={{ fontStyle: "italic"}}>{workExperience.company}</p>
              </div>
              <div className="locationDate">
                <p>{workExperience.city}</p>
                <p style={{ fontStyle: "italic"}}>
                  {workExperience.currentEmployer
                  ? `${handleDate(workExperience.startDate)} - Present`
                  : `${handleDate(workExperience.startDate)} - ${handleDate(workExperience.endDate)}`}
                </p>
              </div>
            
            </div>
            <div className="description">
            <p>{workExperience.description}</p>
                    </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cv;
