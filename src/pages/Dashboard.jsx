import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const user = {
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com'
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Cerrar Sesión
      </button>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Bienvenido, esta es tu información</h1>
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
          <p className="text-lg font-medium text-gray-800">Nombre: {user.firstName}</p>
          <p className="text-lg font-medium text-gray-800">Apellidos: {user.lastName}</p>
          <p className="text-lg font-medium text-gray-800">Correo: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
