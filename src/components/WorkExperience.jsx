import { v4 as uuid4 } from "uuid";

const WorkExperience = ({ workExperiences, setWorkExperience }) => {
  // Look through the workExperiences list for the id specified and delete it.
  
  const handleDeleteWorkExperience = (id) => {
    setWorkExperience((workExperiencesList) =>
      workExperiencesList.filter((workExperience) => workExperience.id !== id)
    );
  };
  /* const handleInputChange = (id, field, value) => {
    setWorkExperienceInfo((prevworkExperienceInfo) =>
      prevworkExperienceInfo.map((info) =>
        info.id === id ? { ...info, [field]: value } : info
      )
    );
  }; */
  const handleAddWorkExperience = () => {
    setWorkExperience((workExperienceList) => [
      ...workExperienceList,
      {
        id: uuid4,
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        description: ""
      },
    ]);
  };
  return (
    <div className="workExperienceCard">
      {workExperiences.map(
        (workExperience, index) => {
          <div key={workExperience.id} className="workExperience">
            <h1 className="workExperience"> Work Experience {index + 1}</h1>
            <div className="position">
              <h2>Position</h2>
              <input
                type="text"
                placeholder="Enter position"
                id="positionInput"
                value={workExperience.position}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    position: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="company">
              <h2>Company</h2>
              <input
                type="text"
                placeholder="Enter company"
                required
                value={workExperience.company}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    company: e.target.value,
                  })
                }
              />
            </div>
            <div className="city">
              <h2>City</h2>
              <input
                type="text"
                placeholder="Enter city"
                required
                value={workExperience.city}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="startDate">
              <h2>StartDate</h2>
              <input
                type="month"
                placeholder="Enter start date"
                required
                value={workExperience.startDate}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    startDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="endDate">
              <h2>End Date</h2>
              <input
                type="month"
                placeholder="Enter end date"
                id="endDateInput"
                value={workExperience.endDate}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    endDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="currentEmployer">
              <h2>Current Employer</h2>
              <input
                type="checkbox"
                id="currentEmployerInput"
                checked={workExperience.currentEmployer}
                onChange={(e) => {
                  if (e.target.checked) {
                    setWorkExperience({ ...workExperience, endDate: "" });
                  }
                  setWorkExperience({
                    ...workExperience,
                    currentEmployer: e.target.checked,
                  });
                }}
                required
              />
            </div>
            <div className="description">
              <h2>Description</h2>
              <input
                type="text"
                placeholder="Enter description"
                id="descriptionInput"
                value={workExperience.description}
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>;
        },
        //Add a delete button
        <button className="deleteworkExperience" onClick={() => handleDeleteWorkExperience(id)}>
          Delete
        </button>
      )}
      ;
      <button className="addworkExperience" onClick={() => handleAddWorkExperience}>
        Add
      </button>
    </div>
  );
};

export default WorkExperience;
