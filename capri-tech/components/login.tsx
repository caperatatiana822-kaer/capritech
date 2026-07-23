"use client";
import { useState } from "react";
export default function LoginModal() {
  const [abrir, setAbrir] = useState(false);
  const [modo, setModo] = useState("login");
  return (
    <>
      <button
        onClick={() => setAbrir(true)}
        className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md"
      >
        Ingresar
      </button>
      {abrir && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-15 rounded-xl w-100 relative shadow-xl">
            <button
              onClick={() => setAbrir(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-8 text-green-700">
              {modo === "login"
                ? "Iniciar Sesión"
                : "Recuperar Contraseña"}
            </h2>
            {modo === "login" ? (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="w-full border p-3 rounded mb-3"
                />
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full border p-3 rounded mb-3"
                />
                <p
                  onClick={() => setModo("recuperar")}
                  className="text-green-700 text-sm cursor-pointer hover:underline mb-6"
                >
                  ¿Olvidaste tu contraseña?
                </p>
                <button
                  className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded"
                >
                  Entrar
                </button>
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="w-full border p-3 rounded mb-3"
                />
                <button
                  className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded">
                  Recuperar
                </button>
                <p
                  onClick={() => setModo("login")}
                  className="text-green-700 text-sm text-center mt-4 cursor-pointer hover:underline">
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