import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur Demande à Proximité</h1>
      <p className="mb-8">Trouvez un chauffeur à proximité en quelques clics !</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Connexion
        </Link>
        <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Inscription
        </Link>
      </div>
    </div>
  );
};

export default Home;