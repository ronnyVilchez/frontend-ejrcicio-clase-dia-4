export const loginUser = async (usernameOrEmail, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });
  
      return response
    } catch (error) {
      console.log(error);
    }
  };