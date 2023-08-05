import React, { useState } from "react";
import BackGround from "../../assets/bg.jpeg";

const ModalGift = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <>
          <div className="w-full h-screen bg-transparent fixed top-0 flex flex-col pt-5 items-center z-50">
            <button
              className="justify-end pr-14 flex w-full text-white pb-5"
              onClick={() => setIsOpen(false)}
            >
              Cerrar X
            </button>
            <div
              style={{
                backgroundImage: `url(${BackGround})`,
              }}
              className="rounded-xl w-[80%] h-[85%] lg:w-[50%] text-black p-5 flex flex-col shadow-2xl overflow-y-scroll sm:max-h-max md:max-h-[80%] md:text-2xl"
            >
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
                <li className="mt-3">Carros</li>
                <li className="mt-3">Pistas</li>
                <li className="mt-3">Little People</li>
                <li className="mt-3">Nerf</li>
                <li className="mt-3">
                  Juguetes para juegos re rol (cocina, bombero, doctor, etc.)
                </li>
                <li className="mt-3">Instrumentos musicales</li>
                <li className="mt-3">Play-Doh / Arena Kinétics / Slime </li>
                <li className="mt-3">Ropa talla 4</li>
                <li className="mt-3">Tenis talla 16</li>
                <li className="mt-3 text-xs md:text-base text-justify">
                  NOTA: Farith juega con cualquier tipo de juguete, lo
                  mencionado anteriormente solo son ideas generales. Cualquier
                  obsequio es perfecto.
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
