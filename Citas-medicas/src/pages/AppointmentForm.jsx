import { useState } from "react";

function AppointmentForm() {
  const [patient, setPatient] =
    useState("");

  const [doctor, setDoctor] =
    useState("");

  const [date, setDate] =
    useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const appointment = {
      patient,
      doctor,
      date
    };

    localStorage.setItem(
      "appointment",
      JSON.stringify(appointment)
    );

    alert("Cita registrada");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>📅 Agendar Cita</h1>

      <input
        type="text"
        placeholder="Paciente"
        value={patient}
        onChange={e =>
          setPatient(e.target.value)
        }
      />

      <br />

      <input
        type="text"
        placeholder="Doctor"
        value={doctor}
        onChange={e =>
          setDoctor(e.target.value)
        }
      />

      <br />

      <input
        type="date"
        value={date}
        onChange={e =>
          setDate(e.target.value)
        }
      />

      <br />

      <button>
        Guardar
      </button>
    </form>
  );
}

export default AppointmentForm;