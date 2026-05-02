import React from "react";

const JustidicacionInasitencia = () => (
  <div className="page-view">
    <section>
      <h2>Justificación de Inasistencia</h2>
      <p>
        Máximo 10 días hábiles por año calendario, sin exceder de 2 días por
        mes.
      </p>
      <p>Deben ser solicitadas con una antelación de tres (3) días hábiles.</p>
      <p>Deben consignarse los motivos que la originan.</p>
      <br />
      <p className="centrado">
        Fuente Art.52{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/0/B4E0D6549A13821503257BE1006695BB?OpenDocument&Highlight=0,7233"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 7233
        </a>{" "}
        y Art. 94{" "}
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

export default JustidicacionInasitencia;
