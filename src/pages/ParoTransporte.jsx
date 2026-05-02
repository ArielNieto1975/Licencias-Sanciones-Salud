import React from "react";

const ParoTransporte = () => (
  <div className="page-view">
    <section>
      <h2>Paro de Transporte</h2>
      <p>
        Permite que la inasistencia se justifique en aquellos casos en que
        exista una huelga del servicio de transporte público de pasajeros que
        impida a la/el agente arribar a su trabajo.
      </p>
      <p>
        Siempre y cuando el Agente tenga declarado su domicilio real a más de 30
        cuadras del lugar donde debe cumplir sus tareas, y además haga uso
        habitual del servicio público de transporte.
      </p>

      <p>
        Los Superiores inmediatos de cada uno de los agentes serán los
        responsables de certificar en oportunidad de cada suspensión, la
        habitualidad en el uso del servicio público de transporte de pasajeros
        por parte de sus dependientes.
      </p>
      <h3>Situaciones:</h3>
      <h4>Agentes con Domicilio declarado a mas de 30 cuadras</h4>
      <section className="TransporteGrid">
        <div>
          Suspensión programada con inicio anterior al horario de ingreso del
          agente
        </div>
        <div>Podrán solicitar la justificación de la inasistencia.</div>
        <div>
          Suspensión programada con inicio posterior al horario de ingreso del
          agente
        </div>
        <div>
          Podrán retirarse con una antelación de sesenta (60) minutos al horario
          de finalización de su jornada laboral.
        </div>
        <div>
          Suspensión registrada durante el transcurso de la jornada laboral (Si
          mediaren más de treinta (30) minutos entre su difusión y el horario de
          inicio)
        </div>
        <div>Se podrá autorizar el retiro inmediato de los agentes.</div>
        <div>Si la suspensión fuera dispuesta de manera inmediata,</div>
        <div>
          Podrán retirarse con sesenta (60) minutos de anterioridad al horario
          de finalización de su jornada laboral.
        </div>
      </section>
      <h4>Agentes con Domicilio declarado hasta de 30 cuadras</h4>
      <section className="TransporteGrid">
        <div>
          Suspensión programada con inicio anterior al horario de ingreso del
          agente
        </div>
        <div>
          Podrán solicitar la justificación de una llegada tarde de hasta
          treinta (30) minutos, pudiendo retirarse con idéntica antelación
        </div>
        <div>
          Suspensión programada con inicio posterior al horario de ingreso del
          agente
        </div>
        <div>
          Podrán retirarse con una antelación de treinta (30) minutos al horario
          de finalización de su jornada laboral.
        </div>
        <div>
          Suspensión registrada durante el transcurso de la jornada laboral (Si
          mediaren más de treinta (30) minutos entre su difusión y el horario de
          inicio)
        </div>
        <div>Se podrá autorizar el retiro inmediato de los agentes.</div>
        <div>Si la suspensión fuera dispuesta de manera inmediata,</div>
        <div>
          Podrán retirarse con treinta (30) minutos de anterioridad al horario
          de finalización de su jornada laboral.
        </div>
      </section>
      <br />
      <p className="centrado">
        Fuente{" "}
        <a
          href="https://www.cba.gov.ar/wp-content/4p96humuzp/2013/04/Resolucion-05-13-Secretaria-de-Capital-Humano-Pautas-para-Paro-de-Transporte.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resolución 05/13 (Capital Humano)
        </a>
      </p>
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default ParoTransporte;
