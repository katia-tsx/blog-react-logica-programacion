import { Navbar } from "../src/components/header"
import { navbarItems } from "./constantes/navbarItems";


export default function app() {
  return (
    <main className="bg-gray[#242424] color-white mx-24 text-center ">
      <Navbar
        items={navbarItems}
        className="hover:text-orange-600"
      />

      <section className="flex flex-col justify-center items-center min-h-[70vh] mx-24 ">
        <h1 className="font-extrabold text-5xl">Klk este es un blog para que aprendamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400 ">lógica de programación</span> con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">React</span></h1>
        <p className="py-5 text-gray-500">Mire miop aquí de aquí usted va a salir sabiendo hooks, manejos de estados, testing con jest y patrones de diseño</p>
      </section>

      <section className="">

      </section>
    </main>
  );
}