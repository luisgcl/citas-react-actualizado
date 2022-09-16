import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length === 0 ? (
        <>
          <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>

          <p className=" text-center text-xl mt-5 mb-10">
            Comienza agregando pacientes{" "}
            <span className=" font-bold text-indigo-600">
              Y apareceran en este lugar
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">ListadoPacientes</h2>

          <p className=" text-center text-xl mt-5 mb-10">
            Administra tus{" "}
            <span className=" font-bold text-indigo-600">
              pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
