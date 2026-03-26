import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ChevronDown } from "lucide-react";

// SOFÁ
import sofaMain from "./images/nemu.jpeg";
import sofaWide from "./images/nemu_sofa.jpeg";
import sofaDetail from "./images/sofa.jpeg";

// MICÉLIO (novos)
import micelio from "./images/micelio.jpeg";
import bancoMicelio from "./images/banco_micelio.jpeg";
import luzMicelio from "./images/luz_micelio.jpeg";
import luminariaMicelio from "./images/luminaria_micelio.jpeg";

export default function App() {

  useEffect(() => {
    const sections = ["hero", "manifesto", "micelio", "aplicacoes", "produto", "galeria", "impacto", "preco", "cta"];
    let current = 0;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        current = Math.min(current + 1, sections.length - 1);
        document.getElementById(sections[current])?.scrollIntoView({ behavior: "smooth" });
      }

      if (e.key === "ArrowUp") {
        current = Math.max(current - 1, 0);
        document.getElementById(sections[current])?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#f6f1ea] text-stone-800">

      {/* HERO */}
      <section id="hero" className="h-screen snap-start relative flex items-center justify-center text-center">
        <img src={sofaMain} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

        <motion.div className="relative z-10 px-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 flex items-center justify-center gap-2 text-sm tracking-[0.3em] uppercase text-stone-500">
            <Leaf className="w-4 h-4" /> NEMU
          </div>

          <h1 className="text-5xl md:text-7xl font-light">Grown, Not Built</h1>

          <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto">
            O primeiro sofá sustentável cultivado a partir de micélio.
          </p>

          <button
            onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-10 bg-stone-900 text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            Explorar <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <ChevronDown className="absolute bottom-10 animate-bounce text-stone-400" />
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="h-screen snap-start flex items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-light max-w-3xl">
          A indústria constrói.<br />Nós cultivamos.
        </h2>
      </section>

      {/* MICÉLIO */}
      <section id="micelio" className="h-screen snap-start flex flex-col items-center justify-center text-center px-6">

        <img src={micelio} className="w-[60%] max-w-2xl rounded-2xl mb-10" />

        <h2 className="text-4xl md:text-6xl font-light">
          A inteligência da natureza.
        </h2>

        <p className="mt-6 text-stone-600 max-w-2xl text-lg">
          O micélio é a estrutura radicular dos fungos — um sistema vivo capaz de crescer,
          conectar e formar materiais altamente resistentes a partir de resíduos naturais.
        </p>

        <p className="mt-4 text-stone-500">
          Cultivado, não fabricado.
        </p>
      </section>

      {/* APLICAÇÕES */}
      <section id="aplicacoes" className="h-screen snap-start flex flex-col items-center justify-center px-6">

        <div className="grid grid-cols-2 gap-6 max-w-5xl">
          <img src={bancoMicelio} className="rounded-2xl" />
          <img src={luzMicelio} className="rounded-2xl" />
          <img src={luminariaMicelio} className="rounded-2xl" />
          <img src={sofaDetail} className="rounded-2xl" />
        </div>

        <p className="mt-10 text-stone-600 max-w-2xl text-center">
          Já aplicado em design, arquitetura e mobiliário, o micélio substitui materiais
          como plástico, espuma e derivados de petróleo — com impacto ambiental drasticamente menor.
        </p>

      </section>

      {/* PRODUTO */}
      <section id="produto" className="h-screen snap-start flex flex-col items-center justify-center text-center px-6">
        <img src={sofaWide} className="w-[85%] max-w-5xl rounded-3xl shadow-xl" />
        <h2 className="mt-10 text-4xl md:text-6xl font-light">Modular. Adaptável. Vivo.</h2>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="h-screen snap-start flex items-center justify-center gap-6 px-10">
        <img src={sofaWide} className="w-1/3 rounded-2xl" />
        <img src={sofaMain} className="w-1/3 rounded-2xl" />
        <img src={sofaDetail} className="w-1/3 rounded-2xl" />
      </section>

      {/* IMPACTO */}
      <section id="impacto" className="h-screen snap-start flex flex-col items-center justify-center text-center px-6">

        <h2 className="text-5xl font-light">
          Até 90% menos impacto ambiental
        </h2>

        <p className="mt-6 text-stone-600 max-w-xl">
          Diferente de materiais sintéticos, o micélio cresce a partir de resíduos naturais,
          não gera desperdício e retorna ao ciclo da natureza ao final da sua vida útil.
        </p>

        <p className="mt-4 text-stone-500">
          Sem extração. Sem toxinas. Sem legado ambiental.
        </p>

      </section>

      {/* PREÇO */}
      <section id="preco" className="h-screen snap-start flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-light">A partir de €650</h2>
        <button className="mt-8 bg-black text-white px-8 py-4 rounded-full">
          Comprar agora
        </button>
      </section>

      {/* CTA */}
      <section id="cta" className="h-screen snap-start flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-light">
          O futuro do design<br />é cultivado.
        </h2>
      </section>

    </div>
  );
}