import React, { useState } from "react";
import sinosImage from "../assets/kit-sinos-arvore.jpeg";
import cestoImage from "../assets/cesto-decorativo-natal.jpeg";
import guirlandasImage from "../assets/guirlandas-arvore.jpeg";

const ProdutosDestaque = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para o produto selecionado
  const [isDetailsVisible, setIsDetailsVisible] = useState(false); // Estado para controlar a visibilidade dos detalhes

  const products = [
    {
      id: 1,
      name: "Kit 3 Sinos para Árvore",
      description: "Sinos decorativos perfeitos para dar charme à sua árvore de Natal.",
      price: "R$ 30,00",
      image: sinosImage,
    },
    {
      id: 2,
      name: "Cesto Decorativo Natal",
      description: "Ideal para organização e decoração natalina, feito com fio de malha.",
      price: "R$ 60,00",
      image: cestoImage,
    },
    {
      id: 3,
      name: "Guirlandas para Árvore",
      description: "Pequenas guirlandas feitas à mão para decorar sua árvore de Natal.",
      price: "R$ 12,00",
      image: guirlandasImage,
    },
  ];

  // Função para exibir detalhes do produto
  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setIsDetailsVisible(true);
  };

  // Função para fechar detalhes
  const handleCloseDetails = () => {
    setIsDetailsVisible(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Produtos em Destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-pink-700 font-semibold text-lg mb-4">
                  {product.price}
                </p>

                {/* Botão para mostrar detalhes */}
                <button
                  onClick={() => handleShowDetails(product)}
                  className="w-full bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-600"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detalhes do produto */}
        {isDetailsVisible && selectedProduct && (
          <div
            id="detalhes-produto"
            className="mt-8 bg-white p-6 border rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
              {/* Botão para fechar */}
              <button
                onClick={handleCloseDetails}
                className="text-gray-600 font-semibold text-xl"
              >
                X
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:ml-8 flex flex-col justify-between">
                <p className="text-gray-600 text-lg mb-4">{selectedProduct.description}</p>
                <p className="text-pink-700 font-semibold text-xl mb-4">
                  {selectedProduct.price}
                </p>
                <button className="bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-600">
                  Encomendar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProdutosDestaque;
