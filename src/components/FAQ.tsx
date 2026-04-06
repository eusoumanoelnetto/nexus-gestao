import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o Nexus Gestão?",
    answer: "O Nexus Gestão é uma plataforma intuitiva onde você pode registrar suas receitas e despesas, categorizá-las e visualizar seu saldo em tempo real através de um dashboard limpo e direto."
  },
  {
    question: "O valor de R$ 9,99 é fixo?",
    answer: "Sim! O valor da assinatura Pro é de apenas R$ 9,99 mensais, garantindo acesso a todas as funcionalidades atuais e futuras atualizações sem custos adicionais."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta e os padrões mais rigorosos de proteção para garantir que apenas você tenha acesso às suas informações financeiras."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Com certeza. Não temos contratos de fidelidade. Você pode solicitar o cancelamento da sua assinatura a qualquer momento através do nosso suporte, sem burocracia."
  },
  {
    question: "O app funciona em qualquer dispositivo?",
    answer: "Sim, o Nexus Gestão é uma aplicação web responsiva (PWA), o que significa que você pode acessá-lo perfeitamente do seu computador, tablet ou smartphone."
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Oferecemos suporte prioritário para usuários Pro. Você pode nos contatar através do e-mail de suporte ou diretamente pelo chat dentro da plataforma."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 ml-4 ${isOpen ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-xl text-gray-500">
            Tudo o que você precisa saber sobre o Nexus Gestão.
          </p>
        </div>

        <div className="bg-gray-50/50 rounded-[2rem] p-4 md:p-8 border border-gray-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
