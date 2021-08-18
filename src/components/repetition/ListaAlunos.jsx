import React from 'react'

import students from '../../data/alunos'

const ListaAlunos = (props) => {
    const studentsList = students.map((student, i) => {
        return (
            <li key={i}>
                #{ student.id } - { student.name }: { student.grade }
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                { studentsList }
            </ul>
        </div>
    )
}

export default ListaAlunos