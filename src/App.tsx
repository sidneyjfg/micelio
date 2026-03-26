import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  AlertTriangle,
  Recycle,
  Users,
  Truck,
  DollarSign,
  HeartHandshake
} from "lucide-react";
// IMAGENS
import sofaMain from "./images/nemu.jpeg";
import sofaWide from "./images/nemu_sofa.jpeg";
import sofaDetail from "./images/sofa.jpeg";

import micelio from "./images/micelio.jpeg";
import bancoMicelio from "./images/banco_micelio.jpeg";
import luzMicelio from "./images/luz_micelio.jpeg";
import luminariaMicelio from "./images/luminaria_micelio.jpeg";

export default function App() {
  const [active, setActive] = useState("hero");
  const scrollRef = useRef<HTMLDivElement>(null);

  const sections = ["hero", "problema", "quem", "diferencial", "estrutura", "social", "produto", "cta"];
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const containerHeight = container.clientHeight;

      let currentSection = sections[0];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (
            rect.top <= containerHeight * 0.5 &&
            rect.bottom >= containerHeight * 0.5
          ) {
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#f6f1ea] text-stone-800 no-scrollbar"
    >
      <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[300px] w-[2px] bg-stone-300/40 z-50">

        {sections.map((id, index) => (
          <motion.div
            key={id}
            animate={{
              opacity: active === id ? 1 : 0.25,
              scaleY: active === id ? 1.8 : 1,
              backgroundColor: active === id ? "#1c1917" : "#a8a29e"
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: `${(index / (sections.length - 1)) * 100}%`,
              transform: "translateY(-50%)"
            }}
            className="w-[2px] h-[32px] rounded-full"
          />
        ))}

      </div>

      {/* HERO */}
      <section id="hero" className="h-screen snap-start relative flex items-center justify-center text-center">
        <img src={sofaMain} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-light">Grown, Not Built</h1>
          <p className="mt-6 text-stone-600 max-w-xl mx-auto">
            O primeiro sofá cultivado a partir de micélio.
          </p>
        </motion.div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="h-screen snap-start flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AlertTriangle className="mx-auto mb-4 text-red-400" size={40} />
          <h2 className="text-4xl md:text-6xl font-light">
            Um modelo insustentável
          </h2>
          <p className="mt-6 max-w-2xl text-stone-600 mx-auto">
            A indústria mobiliária depende de materiais sintéticos,
            gerando alto impacto ambiental e desperdício.
          </p>
        </motion.div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem" className="h-screen snap-start flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Leaf className="mx-auto mb-4 text-green-600" size={40} />

          <motion.img
            src={micelio}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-[70%] max-w-2xl rounded-2xl mb-10 mx-auto"
          />

          <h2 className="text-4xl md:text-6xl font-light">
            NEMU — cultivando o futuro
          </h2>

          <p className="mt-6 max-w-2xl text-stone-600 mx-auto">
            O micélio substitui espumas, plásticos e materiais industriais,
            oferecendo uma alternativa sustentável para design e arquitetura.
          </p>
        </motion.div>
      </section>

      {/* DIFERENCIAL */}
      <section id="diferencial" className="h-screen snap-start flex flex-col items-center justify-center px-6">
        <Recycle className="mb-6 text-green-700" size={40} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          {[bancoMicelio, luzMicelio, luminariaMicelio].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl"
            />
          ))}
        </motion.div>

        <p className="mt-8 max-w-xl text-stone-600 text-center">
          Biodegradável e com até 90% menos impacto ambiental.
        </p>
      </section>

      {/* TIMELINE */}
      <section id="estrutura" className="h-screen snap-start flex items-center justify-center px-6">

        <div className="relative w-full max-w-6xl h-[80vh]">

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-0 h-full w-[2px] bg-stone-300 origin-top -translate-x-1/2"
          />

          {/* PUBLICO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute top-[15%] left-[10%] w-[70%] md:w-[30%]"
          >
            <div className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-lg">
              <h3>Público</h3>
              <p>Consumidores conscientes e empresas sustentáveis.</p>
            </div>
          </motion.div>

          {/* LOGISTICA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-[45%] right-[10%] w-[70%] md:w-[30%]"
          >
            <div className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-lg">
              <h3>Logística</h3>
              <p>Produção local e eficiente.</p>
            </div>
          </motion.div>

          {/* CUSTOS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[10%] left-[10%] w-[70%] md:w-[30%]"
          >
            <div className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-lg">
              <h3>Custos</h3>
              <p>Baixo custo + alto valor sustentável.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="h-screen snap-start flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          <HeartHandshake className="mx-auto mb-4" size={40} />
          <img src={sofaDetail} className="w-[60%] max-w-xl rounded-2xl mb-8 mx-auto" />
          <p className="max-w-2xl text-stone-600 mx-auto">
            Após o ciclo de vida, o material pode ser reaproveitado ou doado.
          </p>
        </motion.div>
      </section>

      {/* PRODUTO */}
      <section id="produto" className="h-screen snap-start flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img src={sofaWide} className="w-[90%] max-w-5xl rounded-3xl" />
          <h2 className="mt-8 text-4xl font-light">A partir de €650</h2>
        </motion.div>
      </section>

      {/* CTA */}
      <section id="cta" className="h-screen snap-start flex items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-light"
        >
          O futuro é cultivado.
        </motion.h2>
      </section>

    </div>
  );
}