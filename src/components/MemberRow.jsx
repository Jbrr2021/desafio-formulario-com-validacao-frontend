// MemberRow.js
import React from 'react';

const MemberRow = ({ member, deleteMember, setMemberToEdit }) => (
    <tr>
        <td>{member.nome}</td>
        <td>{member.email}</td>
        <td>{member.telefone}</td>
        <td>{member.cargo}</td>
        <td>
            <button onClick={() => setMemberToEdit(member)} className="btn btn-info">Editar</button>
            <button onClick={() => deleteMember(member.id)} className="btn btn-danger">Excluir</button>
        </td>
    </tr>
);

export default MemberRow;
