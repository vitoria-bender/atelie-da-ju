import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para pegar o parâmetro da URL

const DetalheProd = () => {
  const { id } = useParams();  // Pegando o id do produto da URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade

  useEffect(() => {
    // Simulação de busca do produto pelo ID (aqui você pode fazer uma chamada à API)
    const products = [
      {
        id: 1,
        name: "Kit 3 Sinos para Árvore",
        description: "Sinos decorativos perfeitos para dar charme à sua árvore de Natal.",
        price: "R$ 30,00",
        image: "./assets/kit-sinos-arvore.jpeg",
      },
      {
        id: 2,
        name: "Cesto Decorativo Natal",
        description: "Ideal para organização e decoração natalina, feito com fio de malha.",
        price: "R$ 60,00",
        image: "./assets/cesto-decorativo-natal.jpeg",
      },
      {
        id: 3,
        name: "Guirlandas para Árvore",
        description: "Pequenas guirlandas feitas à mão para decorar sua árvore de Natal.",
        price: "R$ 12,00",
        image: "./assets/guirlandas-arvore.jpeg",
      },
    ];

    // Encontrar o produto pelo ID
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  // Função para aumentar a quantidade
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Função para diminuir a quantidade
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (!product) return <div>Carregando...</div>;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="bg-white border rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Imagem do produto - tamanho menor */}
            <div className="w-1/3 mb-4 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Detalhes do produto ao lado da imagem */}
            <div className="md:ml-8 flex flex-col w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              <p className="text-gray-600 text-lg mb-4">{product.description}</p>
              <p className="text-pink-700 font-semibold text-xl mb-6">{product.price}</p>

              {/* Controle de Quantidade com botões de + e - */}
              <div className="mb-6 flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-l-lg focus:outline-none"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center bg-gray-100 border-t border-b border-gray-300 focus:outline-none"
                />
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none"
                >
                  +
                </button>
              </div>

              {/* Botão de Encomendar */}
              <button className="w-full bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-600">
                Encomendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalheProd;
