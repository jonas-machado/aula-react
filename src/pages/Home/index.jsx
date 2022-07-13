import { useState, useEffect } from 'react'
import './styles.css'

import { Card } from '../../componentes/Card'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudent] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudent(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    fetch('https://api.github.com/users/jonas-machado').then(response => response.json()).then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Checagem</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} />
        </div>
      </header>
      <input placeholder='Digite seu nome' id='name' type="text" onChange={e => setStudentName(e.target.value)} />
      <button type='button' onClick={handleAddStudent}>Gerar</button>
      {
        students.map(student =>
          <Card key={student.time} name={student.name} time={student.time} />)

      }
    </div>

  )
}


