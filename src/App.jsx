import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import MemberForm from './components/MemberForm';
import MemberList from './components/MemberList';
import './global.css'

const App = () => {
    const [members, setMembers] = useState([]);
    const [memberToEdit, setMemberToEdit] = useState(null);

    useEffect(() => {
        const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
        setMembers(savedMembers);
    }, []);

    const deleteMember = (id) => {
        const updatedMembers = members.filter(member => member.id !== id);
        setMembers(updatedMembers);
        localStorage.setItem("members", JSON.stringify(updatedMembers));
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 relative">
            {/* Animação de Partículas no Fundo */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#242424" } },
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            outMode: "bounce",
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 80,
                        },
                        shape: { type: "circle" },
                        size: { random: true, value: 3 },
                    },
                    detectRetina: true,
                }}
                className="absolute top-0 left-0 w-full h-full -z-10"
            />

            {/* Formulário Centralizado */}
            <div className="relative z-10 w-full max-w-lg p-8 bg-white shadow-lg rounded-md">
                <MemberForm setMembers={setMembers} members={members} memberToEdit={memberToEdit} />
                <MemberList members={members} deleteMember={deleteMember} setMemberToEdit={setMemberToEdit} />
            </div>
        </div>
    );
};

export default App;


