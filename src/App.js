import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Usando Routes no lugar de Switch
import Footer from "../src/components/Footer";
import HeroSection from "../src/components/HeroSection";
import Header from "../src/components/Header";
import ProdutosDestaque from "../src/components/ProdutosDestaque";  // Componente de produtos em destaque
import ProdutoDetalhes from "../src/components/DetalheProd";  // Componente de detalhes

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection />

      <Routes>
        {/* Rota principal da página de produtos em destaque */}
        <Route path="/" element={<ProdutosDestaque />} />

        {/* Rota para a página de detalhes do produto */}
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
