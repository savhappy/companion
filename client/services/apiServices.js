const methods = {
  //returns true or false
  userRegister: async (newUser) => {
    const result = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    return result.json();
  },
  addEC: async (id, ec) => {
    const result = await fetch(
      `http://localhost:3000/emergencyContacts/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(ec),
      },
    );
    return result.json();
  },
};

module.exports = methods;
