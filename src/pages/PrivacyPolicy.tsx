import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 tracking-tight">Política de Privacidade</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>Última atualização: 06 de Abril de 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Coleta de Informações</h2>
              <p>
                Coletamos informações que você nos fornece diretamente ao entrar em contato com nossos consultores ou ao utilizar nossos serviços. Isso pode incluir seu nome, endereço de e-mail, número de telefone e dados financeiros necessários para o funcionamento da plataforma.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer, manter e melhorar nossos serviços;</li>
                <li>Processar transações e enviar informações relacionadas;</li>
                <li>Enviar avisos técnicos, atualizações e mensagens de suporte;</li>
                <li>Responder aos seus comentários e perguntas.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança rigorosas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados financeiros são tratados com o mais alto nível de confidencialidade.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, comercializamos ou alugamos suas informações de identificação pessoal para terceiros. Podemos compartilhar informações genéricas agregadas não vinculadas a qualquer informação de identificação pessoal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para isso, basta entrar em contato com nossa equipe de suporte através dos canais oficiais.
              </p>
            </section>

            <section className="space-y-4 pt-8 border-t border-gray-100">
              <p>
                Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: suporte@nexusgestao.com.br
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
