import { v4 as uuid4 } from "uuid";
import "../styles/education.css";
const Education = ({ educations, setEducation }) => {
  // Look through the educations list for the id specified and delete it.
  const handleDeleteEducation = (id) => {
    setEducation((educationsList) =>
      educationsList.filter((education) => education.id !== id)
    );
  };
  const handleInputChange = (id, field, value) => {
    setEducation((educationList) =>
      educationList.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
    
  };
  const handleAddEducation = () => {
    setEducation((educationList) => [
      ...educationList,
      {
        id: uuid4,
        university: "",
        degree: "",
        country: "",
        startDate: "",
        endDate: "",
        stillAttending: false,
      },
    ]);
  };
  return (
    <>
    
    <div className="card">
      {educations.map((education, index) => (
        <div key={education.id} className="educationCard">
          <div className="educationTitle">
            <h3 className="education">Education {index + 1}</h3>
          </div>

          <div className="university">
            <label htmlFor={education.university}>
              {<strong>University</strong>}
            </label>
            <input
              type="text"
              placeholder="Enter university"
              id="universityInput"
              value={education.university || ""}
              onChange={(e) =>
                handleInputChange(education.id, "university", e.target.value)
                
              }
            />
          </div>

          <div className="degree">
            <label htmlFor={education.degree}>{<strong>Degree</strong>}</label>
            <input
              type="text"
              placeholder="Enter degree"
              required
              value={education.degree}
              onChange={(e) =>
                handleInputChange(education.id, "degree", e.target.value)
              }
            />
          </div>
          <div className="country">
            <label htmlFor={education.Country}>
              {<strong>Country</strong>}
            </label>
            <input
              type="text"
              placeholder="Enter country"
              required
              value={education.country}
              onChange={(e) =>
                handleInputChange(education.id, "country", e.target.value)
              }
            />
          </div>
          <div className="startDate">
            <label htmlFor={education.startDate}>
              {<strong>Start Date</strong>}
            </label>
            <input
              type="month"
              placeholder="Enter start date"
              required
              value={education.startDate}
              onChange={(e) =>
                handleInputChange(education.id, "startDate", e.target.value)
              }
            />
          </div>
          <div className="endDate">
            <label htmlFor={education.endDate}>
              {<strong>End Date</strong>}
            </label>
            <input
              type="month"
              placeholder="Enter end date"
              id="endDateInput"
              disabled={education.stillAttending}
              value={education.endDate}
              onChange={(e) =>
                handleInputChange(education.id, "endDate", e.target.value)
              }
              required
            />
          </div>
          <div className="stillAttending">
            <label htmlFor="Still Attending">
              {<strong>Still Attending</strong>}
            </label>{" "}
            <input
              type="checkbox"
              id="stillAttendingInput"
              checked={education.stillAttending}
              onChange={(e) => {
                
                if (e.target.checked) {
                  handleInputChange(education.id, "endDate", "");
                }
                handleInputChange(
                  education.id,
                  "stillAttending",
                  e.target.checked
                );
              }}
              required
            />
          </div>

          <button
            className="deleteButton"
            onClick={() => handleDeleteEducation(education.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="addButton" onClick={() => handleAddEducation()}>
        Add
      </button>
    </div>
    </>
  );
};

export default Education;
