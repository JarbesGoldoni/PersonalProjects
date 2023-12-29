import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://azure-app-service-url/users') //remember to change this the actual URL
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.ID}>
            {user.Name} - {user.Email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
