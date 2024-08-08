import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            usernameOrEmail: e.target.usernameOrEmail.value,
            password: e.target.password.value,
        };

        try {
            const esValido = await login(data);
            if (esValido) {
                navigate('/dashboard');
            } else {
                alert('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            alert('Hubo un problema al iniciar sesión.');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <main className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">Nombre de usuario o correo electrónico:</label>
                    <input
                        id="usernameOrEmail"
                        type="text"
                        name="usernameOrEmail"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Ingresar
                </button>
            </form>
            <div className="mt-4 text-center">
                <button
                    onClick={handleRegister}
                    className="text-blue-600 hover:text-blue-700"
                >
                    Crear una cuenta
                </button>
            </div>
        </main>
    );
}

export default Login;
