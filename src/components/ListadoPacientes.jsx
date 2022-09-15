import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className=" font-black text-3xl text-center">ListadoPacientes</h2>

      <p className=" text-center text-xl mt-5 mb-10">
        Administra tus{" "}
        <span className=" font-bold text-indigo-600">pacientes y citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
