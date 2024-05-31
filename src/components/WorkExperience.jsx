import { v4 as uuid4 } from "uuid";
import "../styles/workExperience.css"
const WorkExperience = ({ workExperiences, setWorkExperience }) => {
  
  // Look through the workExperiences list for the id specified and delete it.
  const handleDeleteWorkExperience = (id) => {
    setWorkExperience((workExperiencesList) =>
      workExperiencesList.filter((workExperience) => workExperience.id !== id)
    );
  };

  const handleInputChange = (id, field, value) => {
    setWorkExperience((workExperienceList) =>
    workExperienceList.map((workExperience) =>
        workExperience.id === id ? { ...workExperience, [field]: value } : workExperience
      )
    );
  };


  const handleAddWorkExperience = () => {
    debugger;
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
    <div className="card">
      {workExperiences.map(
        (workExperience, index) => 
        <div key={workExperience.id} className="workExperience">
            
            <div className="workExperienceTitle">
              <h2 className="workExperience"> Work Experience {index + 1}</h2>
            </div>  

            <div className="position">
            <label htmlFor={workExperience.position}>{<strong>Position</strong>}</label>
              <input
                type="text"
                placeholder="Enter position"
                id="positionInput"
                value={workExperience.position}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "position", e.target.value)
                }
                required
              />
            </div>

            <div className="company">
            <label htmlFor={workExperience.company}>{<strong>Company</strong>}</label>
              <input
                type="text"
                placeholder="Enter company"
                required
                value={workExperience.company}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "company", e.target.value)
                }
              />
            </div>
            <div className="city">
            <label htmlFor={workExperience.city}>{<strong>City</strong>}</label>
              <input
                type="text"
                placeholder="Enter city"
                required
                value={workExperience.city}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "city", e.target.value)
                }
              />
            </div>
            <div className="startDate">
            <label htmlFor={workExperience.startDate}>{<strong>Start Date</strong>}</label>
              <input
                type="month"
                placeholder="Enter start date"
                required
                value={workExperience.startDate}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "startDate", e.target.value)
                }
              />
            </div>
            <div className="endDate">
            <label htmlFor={workExperience.endDate}>{<strong>End Date</strong>}</label>
              <input
                type="month"
                placeholder="Enter end date"
                id="endDateInput"
                disabled={workExperience.currentEmployer}
                value={workExperience.endDate}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "endDate", e.target.value)
                }
                required
              />
            </div>

            <div className="currentEmployer">
            <label htmlFor="Current Employer ">{<strong>Current Employer</strong>}</label>
              <input
                type="checkbox"
                id="currentEmployerInput"
                checked={workExperience.currentEmployer}
                onChange={(e) => {
                  if (e.target.checked) {
                    handleInputChange(workExperience.id, "endDate", "")
                  }
                  handleInputChange(workExperience.id, "currentEmployer", e.target.checked)
                }}
                required
              />
            </div>

            <div className="description">
            <label htmlFor={workExperience.description}>{<strong>Description</strong>}</label>
              <textarea
                type="textArea"
                placeholder="Enter description"
                id="descriptionInput"
                value={workExperience.description}
                onChange={(e) =>
                  handleInputChange(workExperience.id, "description", e.target.value)
                }
                required
              />
            </div>
          </div>,
          
        
        //Add a delete button
        <button className="deleteworkExperience" onClick={() => handleDeleteWorkExperience(id)}>
          Delete
        </button>
      )}
      
      <button className="addworkExperience" onClick={() => handleAddWorkExperience}>
        Add
      </button>
    </div>
  );
};

export default WorkExperience;
