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

      <div className="education">
        <h2 className="education">Education</h2>
        <hr></hr>
        {educations.map((education) => {
          <div key={education.id} className="education">
            <div className="universityDegree">
              <p>{education.university}</p>
              <p>{education.degree}</p>
            </div>
            <div className="locationDate">
              <p>{education.country}</p>
              <p>
                {education.stilAttending} ? `${handleDate(education.startDate)}{" "}
                - Present` : `${handleDate(education.startDate)} - $
                {handleDate(education.endDate)}`
              </p>
            </div>
          </div>;
        })}
      </div>

      <div className="workExperience">
        <h2 className="Work Experience">Work Experience</h2>
        <hr></hr>
        {workExperiences.map((workExperience) => {
          <div key={workExperience.id} className="workExperience">
            <div className="positionCompany">
              <p>{workExperience.position}</p>
              <p>{workExperience.company}</p>
            </div>
            <div className="locationDate">
              <p>{workExperience.city}</p>
              <p>
              {workExperience.currentEmployer} ? `${handleDate(workExperience.startDate)}{" "}
                - Present` : `${handleDate(workExperience.startDate)} - $
                {handleDate(workExperience.endDate)}``
              </p>
            </div>
            <div className="description">
              <p>{workExperience.description}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
export default Cv;
