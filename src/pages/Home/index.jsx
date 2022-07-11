import { useState } from 'react'
import './styles.css'

import { Card } from '../../componentes/Card'

export function Home() {
const [studentName, setStudentName] = useState()


  return (
    <div className='container'>
      <h1>nome: {studentName}</h1>
      <input placeholder='Digite seu nome' id='name' type="text" onChange={e => setStudentName(e.target.value)} />
      <button>Gerar</button>
      <Card name='Rodrigo' time='10:55:25'/>
      <Card name='João' time='11:00:10'/>
    </div>

  )
}


