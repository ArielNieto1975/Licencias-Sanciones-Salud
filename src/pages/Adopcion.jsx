import React from "react";

const Adopcion = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Adopción</h2>
      <p>
        Se otorga a la/el agente que hubiera obtenido por resolución judicial la
        adopción o guarda con fines de adopción de un niño/a, de hasta siete (7)
        años de edad.
      </p>
      <p>
        Corresponde una licencia de 100 días corridos a partir de la fecha de la
        resolución judicial (que debe presentarse autenticada) y de ocho (8)
        días para la pareja conviviente.
      </p>
      <p>
        Si la adopción fuera múltiple o de un/a niño/a con discapacidad o
        enfermedad grave, el plazo se extiende a 200 y 14 días, respectivamente.
      </p>
      <br />
      <p className="centrado">
        Fuente Art.50{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/0/B4E0D6549A13821503257BE1006695BB?OpenDocument&Highlight=0,7233"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y Art. 92{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/0/0DCA596E4811BAE2032589C900521F5C?OpenDocument&Highlight=0,7625"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7625
        </a>{" "}
        y sus Decretos reglamentarios
      </p>
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default Adopcion;
