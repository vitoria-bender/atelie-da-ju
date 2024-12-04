const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção de Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre o Ateliê</h3>
            <p className="text-gray-400 text-sm">
              Peças únicas feitas à mão com amor e dedicação. Transformamos fios em arte para deixar sua casa ainda mais bonita.
            </p>
          </div>
  
          {/* Links úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="#produtos" className="hover:text-pink-500">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-pink-500">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-pink-500">
                  Contato
                </a>
              </li>
            </ul>
          </div>
  
          {/* Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <i className="fab fa-pinterest fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © 2024 Ateliê da Ju. Todos os direitos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  