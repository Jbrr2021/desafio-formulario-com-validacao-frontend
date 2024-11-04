// MemberList.js
import React from 'react';
import MemberRow from './MemberRow';

const MemberList = ({ members, deleteMember, setMemberToEdit }) => (
    <div className="member-list bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Lista de Membros</h3>
        {members.length ? (
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nome</th>
                        <th className="py-3 px-6 text-left">E-mail</th>
                        <th className="py-3 px-6 text-left">Telefone</th>
                        <th className="py-3 px-6 text-left">Cargo</th>
                        <th className="py-3 px-6 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {members.map(member => (
                        <MemberRow
                            key={member.id}
                            member={member}
                            deleteMember={deleteMember}
                            setMemberToEdit={setMemberToEdit}
                        />
                    ))}
                </tbody>
            </table>
        ) : (
            <p className="text-gray-600">Nenhum membro cadastrado.</p>
        )}
    </div>
);

export default MemberList;

