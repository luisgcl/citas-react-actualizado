import React from "react";

const Paciente = () => {
  return (
    <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className=" font-normal normal-case">Zackarias</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className=" font-normal normal-case">Luis</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className=" font-normal normal-case">correo@correo.com</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className=" font-normal normal-case">06/12/1984</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          sapiente eius repudiandae, minus cumque maiores sunt suscipit
          molestias, et error labore quos corporis nihil ratione ex pariatur
          impedit placeat ipsam?
        </span>
      </p>
    </div>
  );
};

export default Paciente;
