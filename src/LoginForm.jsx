import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-zinc-950 to-violet-950" >
      <div className="bg-zinc-950 p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6 text-center hover:text-violet-100">Faça seu Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white mb-2 pl-2">
              Usuário
            </label>
            <input {...register("username", { required: true })} id="username" type="text" placeholder="Usuário" className="w-full p-2 border border-violet-900 rounded-full"/>
            {errors.username && <p className="text-red-500 text-xs italic">O campo usuário é obrigatório.</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-2 pl-2">
              Senha
            </label>
            <input {...register("password", { required: true })} id="password" type="password" placeholder="Senha" className="w-full p-2 border border-violet-900 rounded-full"/>
            {errors.password && <p className="text-red-500 text-xs italic">O campo senha é obrigatório.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-white hover:bg-violet-500  text-black font-bold py-2 px-4 rounded-lg">
              Entrar
            </button>
            <div className="space-x-4">
              <a href="/esqueci-senha" className="text-white hover:text-violet-300 underline">Esqueci minha senha</a>
              <a href="/cadastro" className="text-white hover:text-violet-300 underline">Cadastre-se</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
