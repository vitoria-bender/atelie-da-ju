import plantas from "../assets/plantas.jpeg"
import React from "react";

const HeroSection = () => {
return (
    <section className="pt-32 pb-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
            <div className="text-center md:text-left md:w-2/3 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Artesanato em Crochê com Fio de Malha
                </h2>
                <p className="text-gray-600 mb-8 text-base md:text-lg">
                    Peças únicas e exclusivas feitas à mão com muito amor e dedicação.
                    Transformando fios em arte para decorar sua casa.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <button className="bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-600">
                        Ver Catálogo
                    </button>
                    <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
                        Encomendar
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src={plantas}
                    alt="Vasos de crochê com suculentas"
                    className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-lg"
                />
            </div>
        </div>
    </section>
);
};

export default HeroSection;
