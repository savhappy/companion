const methods = {
  //returns true or false
  userRegister: async (newUser) => {
    console.log(newUser);
    const result = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    return result.json();
  },
};

module.exports = methods;
