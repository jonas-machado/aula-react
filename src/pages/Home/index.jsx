import { useState } from 'react'
import './styles.css'

import { Card } from '../../componentes/Card'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudent] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: setStudentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudent([newStudent])
  }

  return (
    <div className='container'>
      <h1>Checagem</h1>
      <input placeholder='Digite seu nome' id='name' type="text" onChange={e => setStudentName(e.target.value)} />
      <button>Gerar</button>
      {
        students.map(students => <Card name={studentName.name} time={studentName.time} />)

      }
    </div>

  )
}


