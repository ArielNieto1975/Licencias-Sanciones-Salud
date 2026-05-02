import React from "react";

const Matrimonio = () => (
  <div className="page-view">
    <section>
      <h2>Licencia por Matrimonio de el/la Agente</h2>
      <p>
        Concederán quince (15) días hábiles, a partir de la fecha del matrimonio
        civil o religioso, a elección del/la agente.
      </p>
      <p>No podrá ser denegada una vez cumplidos los requisitos exigidos.</p>
      <p>
        Podrá a opción del/la agente, ser adicionada al período de licencia
        matrimonial, la que se concederá en todos los casos.
      </p>
      <p>
        El/la Agente, a su reincorporación, deberá acreditar ante la Repartición
        el acto, presentando el comprobante fehaciente.
      </p>
      <p>
        Requisito: El/la Agente deberá contar a la fecha del matrimonio, con una
        antigüedad mínima de seis (6) meses. De no contar con dicha antigüedad,
        se otorgará, a pedido del/la agente, licencia sin goce de haberes y por
        el plazo establecido.
      </p>
      <h3>
        Licencia por matrimonio civil o religioso de hijos/as, hermanos/as o
        padre/madre
      </h3>
      <p>Corresponden dos (2) días hábiles de licencia.</p>
      <p>
        Si elcasamiento se realizara a más doscientos (200) kilómetros del lugar
        donde el/la agente prestare servicios, el término de la licencia se
        duplicará.
      </p>
      <p>
        Deberá acreditarse este hecho presentando certificado expedido por el
        Registro Civil, debidamente legalizado.
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

export default Matrimonio;
