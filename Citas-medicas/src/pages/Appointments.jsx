function Appointments() {
  const appointment =
    JSON.parse(
      localStorage.getItem(
        "appointment"
      )
    );

  return (
    <div>
      <h1>
        📋 Cita Registrada
      </h1>

      {appointment ? (
        <>
          <p>
            Paciente:
            {appointment.patient}
          </p>

          <p>
            Doctor:
            {appointment.doctor}
          </p>

          <p>
            Fecha:
            {appointment.date}
          </p>
        </>
      ) : (
        <p>
          No hay citas registradas.
        </p>
      )}
    </div>
  );
}

export default Appointments;