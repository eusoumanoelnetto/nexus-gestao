import { CheckCircle2 } from "lucide-react";

export const ProofBenefits = () => {
  const benefits = [
    "Menos tempo organizando, mais tempo vivendo",
    "Tudo sincronizado em tempo real",
    "Visual limpo e sem distrações"
  ];

  return (
    <section id="beneficios" className="py-24 bg-white text-gray-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-gray-900">
              A paz de espírito que você procurava.
            </h2>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-xl font-medium text-gray-700">{b}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <div>
                  <p className="font-bold text-gray-900">Nexus Gestão</p>
                  <p className="text-sm text-gray-500">App de Finanças</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Finalmente um aplicativo que não parece uma planilha do Excel dos anos 90. Simples, bonito e faz exatamente o que promete."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
