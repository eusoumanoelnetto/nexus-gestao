import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsOfService = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 tracking-tight">Termos de Serviço</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>Última atualização: 06 de Abril de 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o Nexus Gestão, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Descrição do Serviço</h2>
              <p>
                O Nexus Gestão é uma plataforma de gestão financeira pessoal e empresarial. Fornecemos ferramentas para rastreamento de receitas, despesas e visualização de dados financeiros através de dashboards intuitivos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. Contas de Usuário</h2>
              <p>
                Para utilizar certas funcionalidades do serviço, você deve entrar em contato com um consultor para a criação da sua conta. Você é responsável por manter a confidencialidade das suas informações de login e por todas as atividades que ocorram sob sua conta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Pagamentos e Assinaturas</h2>
              <p>
                Oferecemos planos de assinatura pagos. Ao assinar um plano, você concorda em pagar as taxas aplicáveis. As assinaturas podem ser canceladas a qualquer momento através do nosso suporte, sem taxas de cancelamento adicionais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Uso Aceitável</h2>
              <p>
                Você concorda em não utilizar o serviço para qualquer finalidade ilegal ou proibida por estes termos. Você não deve tentar obter acesso não autorizado a qualquer parte do serviço ou sistemas relacionados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Limitação de Responsabilidade</h2>
              <p>
                O Nexus Gestão não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar o serviço.
              </p>
            </section>

            <section className="space-y-4 pt-8 border-t border-gray-100">
              <p>
                Para qualquer dúvida sobre estes Termos de Serviço, entre em contato conosco através do e-mail: suporte@nexusgestao.com.br
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
