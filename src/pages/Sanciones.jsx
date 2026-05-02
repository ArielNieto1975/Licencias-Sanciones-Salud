import React from "react";

import { useNavigate } from "react-router-dom";

const Sanciones = () =>
  //   (
  //   <div className="sanciones-container">
  //     <h1 className="sanciones-title">SANCIONES</h1>
  //     <p className="sanciones-text">
  //       Página dedicada a la gestión y consulta de sanciones administrativas.
  //     </p>
  //   </div>
  // );

  {
    const navigate = useNavigate();

    const menuItems = [
      { title: "Incumplimiento Horario", path: "/IncumplimientoHorario" },
      {
        title: "Inasistencias Injustificadas",
        path: "/InaistenciasInjustificadas",
      },
      { title: "Abandono de Servicio", path: "/AbandonoServicio" },
      { title: "Falta de Respeto", path: "/FaltaRespeto" },
      { title: "Abandono de Cargo", path: "/AbandonoCargo" },
    ];

    return (
      <div className="grid-container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="access-card"
            onClick={() => navigate(item.path)}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    );
  };

export default Sanciones;
