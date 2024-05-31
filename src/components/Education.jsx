import { v4 as uuid4 } from "uuid";

const Education = ({ educations, setEducation }) => {
  // Look through the educations list for the id specified and delete it.
  const handleDeleteEducation = (id) => {
    setEducation((educationsList) =>
      educationsList.filter((education) => education.id !== id)
    );
  };
  /* const handleInputChange = (id, field, value) => {
    setEducationInfo((prevEducationInfo) =>
      prevEducationInfo.map((info) =>
        info.id === id ? { ...info, [field]: value } : info
      )
    );
  }; */
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
      },
    ]);
  };
  return (
    <div className="educationCard">
      {educations.map(
        (education, index) => {
          <div key={education.id} className="education">
            <h1 className="Education">Education {index + 1}</h1>
            <div className="university">
              <h2>University</h2>
              <input
                type="text"
                placeholder="Enter university"
                id="universityInput"
                value={education.university}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    university: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="degree">
              <h2>Degree</h2>
              <input
                type="text"
                placeholder="Enter degree"
                required
                value={education.degree}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    degree: e.target.value,
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
                value={education.city}
                onChange={(e) =>
                  setEducation({
                    ...education,
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
                value={education.startDate}
                onChange={(e) =>
                  setEducation({
                    ...education,
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
                value={education.endDate}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    endDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="stillAttending">
              <h2>Current Employer</h2>
              <input
                type="checkbox"
                id="stillAttendingInput"
                checked={education.stillAttending}
                onChange={(e) => {
                  if (e.target.checked) {
                    setEducation({ ...education, endDate: "" });
                  }
                  setEducation({
                    ...education,
                    stillAttending: e.target.checked,
                  });
                }}
                required
              />
            </div>
          </div>;
        },
        //Add a delete button
        <button className="deleteEducation" onClick={() => handleDeleteEducation(id)}>
          Delete
        </button>
      )}
      ;
      <button className="addEducation" onClick={() => handleAddEducation}>
        Add
      </button>
    </div>
  );
};

export default Education;
