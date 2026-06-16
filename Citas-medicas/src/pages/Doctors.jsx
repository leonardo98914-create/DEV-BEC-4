function Doctors() {
  const doctors = [
    "Dr. García",
    "Dra. López",
    "Dr. Martínez"
  ];

  return (
    <div>
      <h1>👨‍⚕️ Doctores</h1>

      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            {doctor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Doctors;