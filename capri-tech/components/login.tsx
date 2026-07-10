"use client";
import { useState } from "react";
export default function LoginModal() {
  const [abrir, setAbrir] = useState(false);
  const [modo, setModo] = useState("login");
  return (
    <>
      <button
        onClick={() => setAbrir(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
      >
        Ingresar
      </button>
      {abrir && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80 relative shadow-xl">
            <button
              onClick={() => setAbrir(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-5 text-blue-500">
              {modo === "login"
                ? "Iniciar Sesión"
                : "Recuperar Contraseña"}
            </h2>
            {modo === "login" ? (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="w-full border p-2 rounded mb-3"
                />
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full border p-2 rounded mb-2"
                />
                <p
                  onClick={() => setModo("recuperar")}
                  className="text-blue-500 text-sm cursor-pointer hover:underline mb-4"
                >
                  ¿Olvidaste tu contraseña?
                </p>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                >
                  Entrar
                </button>
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="w-full border p-2 rounded mb-4"
                />
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                  Recuperar
                </button>
                <p
                  onClick={() => setModo("login")}
                  className="text-blue-500 text-sm text-center mt-4 cursor-pointer hover:underline">
                  Volver al inicio de sesión
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}