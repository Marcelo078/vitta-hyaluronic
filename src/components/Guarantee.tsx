import garantia from "@/assets/garantia-30-dias.webp";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Garantia total ou<br />
              <span className="text-primary">seu dinheiro de volta!</span>
            </h2>
            
            <div className="space-y-6 text-lg">
              <p className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nós temos tanta confiança no poder do Vitta Hyaluronic que oferecemos <strong>30 dias de garantia total</strong>.</span>
              </p>

              <p className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Se você não notar melhorias na sua pele ou não ficar 100% satisfeito, devolvemos seu dinheiro!</span>
              </p>

              <p className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Simples assim. Sem perguntas, sem burocracia. <strong>100% do seu investimento de volta!</strong></span>
              </p>
            </div>

            <div className="mt-10 p-6 bg-primary/10 rounded-2xl border-2 border-primary/30">
              <p className="text-sm">
                <strong>Compra 100% segura:</strong> Seus dados estão protegidos com criptografia SSL. Aceitamos todas as formas de pagamento.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={garantia} 
              alt="Garantia de 30 dias - Seu dinheiro de volta"
              className="w-full max-w-md drop-shadow-2xl animate-pulse-slow"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
