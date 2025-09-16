import { useState } from 'react'

function App() 
{
    return (
        <div className="flex justify-center">
            <div className="h-60 w-60 rounded-full bg-roxo-escuro flex flex-col justify-center items-center">
                <p className="font-Waldorf1 text-xl text-white">Waldorf</p>
                <p className="font-Waldorf2 text-lg text-white">Florescer</p>
                <p className="font-Waldorf2bold text-lg text-white">Florescer</p>
            </div>
            <div className="w-60 h-60 rounded-full bg-rosa-claro flex flex-col justify-center items-center">
                <p className="text-2xl text-black"></p>
            </div>
            <div className="w-60 h-60 rounded-full bg-rosa-medio flex flex-col justify-center items-center">
                <p className="text-2xl text-black"></p>
            </div>
            <div className="w-60 h-60 rounded-full bg-laranja flex flex-col justify-center items-center">
                <p className="text-2xl text-black"></p>
            </div>
            <div className="w-60 h-60 rounded-full bg-rosa-pastel flex flex-col justify-center items-center">
                <p className="text-2xl text-black"></p>
            </div>
        </div>
    )
}

export default App
