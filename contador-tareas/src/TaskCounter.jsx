import { useState, useEffect, useMemo } from "react";

function TaskCounter() {
  const [tareas, setTareas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [horas, setHoras] = useState("");

  const agregarTarea = () => {
    if (!nombre || !horas) return;

    setTareas([
      ...tareas,
      {
        nombre,
        horas: Number(horas),
      },
    ]);

    setNombre("");
    setHoras("");
  };

  useEffect(() => {
    if (tareas.length > 0) {
      console.log("Nueva tarea agregada");
    }
  }, [tareas]);

  const totalHoras = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.horas, 0);
  }, [tareas]);

  return (
    <div className="container">
      <h1>Contador de Tareas</h1>

      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Horas"
        value={horas}
        onChange={(e) => setHoras(e.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar Tarea
      </button>

      <h2>Total de horas: {totalHoras}</h2>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre} - {tarea.horas} horas
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskCounter;