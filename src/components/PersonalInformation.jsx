const PersonalInformation = ({
  personalInformation,
  setPersonalInformation,
}) => {
  return (
    <div className="personalInformationCard">
      <h2>General Information</h2>
      <div className="fullName">
        <h2>Full Name</h2>
        <input
          type="text"
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
        <h2>Email</h2>
        <input
          type="text"
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
        <h2>Phone</h2>
        <input
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
        <h2>City</h2>
        <input
          type="text"
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
  );
};

export default PersonalInformation;
