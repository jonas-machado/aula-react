import { useState } from 'react'
import './styles.css'

import { Card } from '../../componentes/Card'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudent] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudent( prevState => [...prevState, newStudent])
  }
  return (
    <div className='container'>
      <h1>Checagem</h1>
      <input placeholder='Digite seu nome' id='name' type="text" onChange={e => setStudentName(e.target.value)} />
      <button type='button' onClick={handleAddStudent}>Gerar</button>
      {
        students.map(student => 
        <Card key={student.name} name={student.name} time={student.time} />)

      }
    </div>

  )
}


