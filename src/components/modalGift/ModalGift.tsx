import React, { useState } from "react";

const ModalGift = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <>
          <div className="w-full h-screen bg-transparent fixed top-0 flex justify-center items-center z-50">
            <div className="bg-clean rounded-xl w-[80%] h-[80%] lg:w-[50%] text-fresh p-5 flex flex-col shadow-2xl">
              <button
                className="items-end self-end text-midnight pb-5 text-xs"
                onClick={() => setIsOpen(false)}
              >
                Cerrar X
              </button>
              <p className="text-xl">
                Estos son algunos de los juguetes favoritos de Farith.
              </p>
              <ol
                style={{
                  listStyle: "number",
                  textAlign: "left",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <li className="text-vermillion font-mono mt-3">
                  Astronautas y cosas del espacio
                </li>
                <li className="font-mono mt-3">Dinosaurios</li>
                <li className="text-vermillion font-mono mt-3">Hot-Wheels</li>
                <li className="font-mono mt-3">Little People</li>
              </ol>
              <p className="mt-5">
                Lo más importante es tu asistencia. <br />
                <br />
                <b>
                  <label className="text-sunshine text-3xl">¡No faltes!</label>
                </b>
              </p>
            </div>
          </div>
        </>
      )}

      <section className="pt-20">
        <p className="text-3xl">¿Necesitas algunas ideas para regalo?</p>
        <button
          className="bg-sunshine px-8 py-5 rounded-xl mt-8 text-midnight hover:scale-125 shadow-2xl"
          onClick={() => setIsOpen(true)}
        >
          Caja de Ideas 💝
        </button>
      </section>
    </>
  );
};

export default ModalGift;
