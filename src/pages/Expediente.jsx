import React from "react";

const Expediente = () => (
  <div className="page-view">
    <section>
      <h2>Licencias que se tramitan por Expediente</h2>
      <p>
        La gestión de este tipo de licencias inicia con la presentación de una
        multinota (e-trámite) ante la unidad de RRHH, donde el/la agente
        solicita la licencia.{" "}
      </p>
      <p>
        A partir de esta multinota, el área de RRHH confecciona el expediente y
        le da el curso correspondiente. Además debe plasmar la solicitud
        mediante autogestión en la plataforma Empleado Digital
      </p>
      <p>
        Se deberá consultar en el área de RR. HH, cómo es el procedimiento que
        se debe seguir, los requisitos a cumplir y la documentación a presentar
        en cada caso.
      </p>
      <h3>Licencia por razones particulares sin goce de haberes</h3>
      <p>
        El agente deberá pertenecer a la planta permanente y poseer una
        antigüedad de seis (6) meses.
      </p>
      <p>
        Puede otorgarse por hasta un término de dos (2) años corridos, siempre y
        cuando las posibilidades del servicio lo permitan.{" "}
      </p>
      <p>
        Agotado el término de dos (2) años continuos o discontinuos, el agente
        no podrá hacer nuevo uso de este beneficio, hasta transcurrido un lapso
        de diez (10) años.
      </p>
      <p>
        Cuando el agente tuviera menos de dos (2) años de antigüedad, el máximo
        de licencia a otorgarse, será igual al de su antigüedad.
      </p>
      <h3>Licencia por Evento Deportivo</h3>
      <p>
        Se extiendie desde la fecha del evento o de la iniciación de la
        selección, hasta el día siguiente a su finalización.
      </p>
      <p>
        Con Goce de haberes: 30 o 60 días segun corresponda, cuando el agente
        tenga una antigÜedad mayor a 6 meses
      </p>
      <p>
        Sin Goce de haberes: Cuando no cumple con la antigüedad mínima de 6
        meses
      </p>
      <h3>Licencia por cargos electivos o de representación política</h3>
      <p>
        Licencia sin goce de haberes, por el tiempo que dure el mandato o
        desempeño de la representación política.
      </p>
      <p>
        Reintegro a su cargo una vez finalizada la misma y que no exceda de
        quince (15) días hábiles desde la fecha de su cese.
      </p>
      <h3>Licencia por integración del grupo familiar</h3>
      <p>
        Licencia No remunerada. Cuando las posibilidades de la Administración lo
        permitan. Por un término de hasta dos (2) años continuos o discontinuos.
        Agotado el término, no podrá hacer nuevo uso de este beneficio, hasta
        transcurrido un lapso de diez (10) años.
      </p>
      <p>Personal permanente con una antigüedad mínima de seis (6) meses.</p>
      <h3>Licencias por cargos de representación gremial:</h3>
      <p>Licencia remunerada. </p>
      <p>
        Agentes que hayan sido elegidos en cargos, no retribuido, de
        representación gremial, con un máximo de diez personas, por organización
        con personería gremial.
      </p>
      <h3>Licencia por Razones Gremiales</h3>
      <p>Licencia no remunerada</p>
      <p>
        Todo/a agente, planta permanente (minimo 6 meses de antigüedad), que
        fuera designado/a para funciones sindicales, siempre y cuando lo
        solicite la organización sindical competente con personería gremial, y
        por el término que dure su período.
      </p>
      <p> No exceda la cantidad de tres (3) agentes por repartición.</p>

      <br />
      {/* <p className="centrado">
        Fuente{" "}
        <a
          href="http://web2.cba.gov.ar/web/leyes.nsf/85a69a561f9ea43d03257234006a8594/33af73604c70a1f0032580ca00593150/$FILE/1295-16%20ANEXO%20UNICO.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Decreto 1295/16 (Reglamentario de Ley 10318)
        </a>
      </p> */}
      <button onClick={() => window.history.back()}>Volver</button>
    </section>
  </div>
);

export default Expediente;
