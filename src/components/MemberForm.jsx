import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required("Nome completo é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  position: yup.string().required("Cargo pretendido é obrigatório"),
  linkedin: yup.string().url("URL inválida"),
  github: yup.string().url("URL inválida"),
});

const MemberForm = ({ setMembers, members }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newMember = { ...data, id: Date.now() };
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
    reset();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Cadastro de Membro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nome completo</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Telefone</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Cargo pretendido</label>
          <select
            {...register("position")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Selecione uma opção</option>
            <option value="Desenvolvedor Frontend">Desenvolvedor Frontend</option>
            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
            <option value="Desenvolvedor Full Stack">Desenvolvedor Full Stack</option>
            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
            <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
            <option value="Engenheiro de Software">Engenheiro de Software</option>
            <option value="Arquiteto de Software">Arquiteto de Software</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Analista de Sistemas">Analista de Sistemas</option>
            <option value="DevOps Engineer">Analista Programador</option>
            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
            {/* Adicione os demais cargos */}
          </select>
          {errors.position && <p className="text-red-500">{errors.position.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="url"
            {...register("linkedin")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.linkedin && <p className="text-red-500">{errors.linkedin.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">GitHub</label>
          <input
            type="url"
            {...register("github")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.github && <p className="text-red-500">{errors.github.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default MemberForm;

