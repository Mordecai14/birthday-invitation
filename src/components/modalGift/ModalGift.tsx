import React, { useState } from "react";
import BackGround from "../../assets/bg.jpeg";

const ModalGift = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <>
          <div className="w-full h-screen bg-transparent fixed top-0 flex justify-center items-center z-50">
            <div
              style={{
                backgroundImage: `url(${BackGround})`,
              }}
              className="rounded-xl w-[80%] h-[80%] lg:w-[50%] text-black p-5 flex flex-col shadow-2xl overflow-y-scroll max-h-max"
            >
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
                <li className="mt-3">Astronautas y cosas del espacio</li>
                <li className="mt-3">Dinosaurios</li>
                <li className="mt-3">Hot-Wheels (Coches en general)</li>
                <li className="mt-3">Little People</li>
                <li className="mt-3">Nerf</li>
                <li className="mt-3">Instrumentos musicales</li>
                <li className="mt-3">Play-Doh</li>
                <li className="mt-3">Ropa talla 4</li>
                <li className="mt-3">Tenis talla 17</li>
                <li className="mt-3 text-xs">
                  NOTA: Farith juega con cualquier tipo de juguete, lo
                  mencionado anteriormente solo son ideas generales.
                </li>
              </ol>
              <p className="mt-5">
                Lo más importante es tu asistencia. <br />
                <br />
                <b>
                  <label className="text-midnight text-3xl">¡No faltes!</label>
                </b>
              </p>
            </div>
          </div>
        </>
      )}

      <section className="pt-12 ">
        <p className="text-3xl text-midnight">
          ¿Necesitas algunas ideas para regalo?
        </p>
        <button
          className="bg-blueAqua px-8 py-5 rounded-xl mt-8 text-midnight hover:scale-125 shadow-2xl"
          onClick={() => setIsOpen(true)}
        >
          Caja de Ideas 💝
        </button>
      </section>
    </>
  );
};

export default ModalGift;
