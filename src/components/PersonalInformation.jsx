const PersonalInformation = ({
  personalInformation,
  setPersonalInformation,
}) => {
  return (
    <>
      <div className="card">
        <div className="fullName">
          <label htmlFor={personalInformation.fullName}>
            {<strong>Full Name</strong>}
          </label>
          <input
            type="text"
            maxLength={20}
            placeholder="Enter full name"
            id="fullNameInput"
            value={personalInformation.fullName}
            onChange={(e) =>
              setPersonalInformation({
                ...personalInformation,
                fullName: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="email">
          <label htmlFor={personalInformation.email}>
            {<strong>Email</strong>}
          </label>
          <input
            type="text"
            maxLength={50}
            placeholder="Enter email"
            required
            value={personalInformation.email}
            onChange={(e) =>
              setPersonalInformation({
                ...personalInformation,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="phone">
          <label htmlFor={personalInformation.phone}>
            {<strong>Phone</strong>}
          </label>
          <input
            maxLength={13}
            type="text"
            placeholder="Enter phone number"
            required
            value={personalInformation.phone}
            onChange={(e) =>
              setPersonalInformation({
                ...personalInformation,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div className="city">
          <label htmlFor={personalInformation.city}>
            {<strong>City</strong>}
          </label>

          <input
            type="text"
            maxLength={15}
            placeholder="Enter city"
            required
            value={personalInformation.city}
            onChange={(e) =>
              setPersonalInformation({
                ...personalInformation,
                city: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
