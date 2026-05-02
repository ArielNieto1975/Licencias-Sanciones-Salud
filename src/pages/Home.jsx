import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Licencia Anual", path: "/Lar" },
    {
      title: "Justificación de Inasistencia",
      path: "/JustidicacionInasitencia",
    },
    { title: "Licencia Sanitaria", path: "/LicenciaSanitaria" },
    { title: "Licencia por Examen", path: "/LicenciaExamen" },
    { title: "Licencia por Maternidad", path: "/Maternidad" },
    { title: "Licencia por Nacimiento", path: "/Nacimiento" },
    { title: "Licencia por Adopción", path: "/Adopcion" },
    { title: "Licencia por Matrimonio", path: "/Matrimonio" },
    { title: "Licencia por Fallecimiento Familiar", path: "/Fallecimiento" },
    {
      title: "Licencia por violencia familiar, de género o contra la mujer",
      path: "/PorViolencia",
    },
    {
      title: "Justificación de inasistencia por por donación de sangre",
      path: "/DonacionSangre",
    },
    { title: "Paro de Transporte", path: "/ParoTransporte" },
    { title: "Franco Compensatorio", path: "/Franco" },
    {
      title: "Licencias por Accidente o Enfermedad Profesional",
      path: "/Accidente",
    },
    {
      title: "Licencias por Razones de Salud",
      path: "/RazonesSalud",
    },
    { title: "Licencias por Expediente", path: "/Expediente" },
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

export default Home;
