import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como devo tomar o Vitta Hyaluronic?",
      answer: "Recomendamos misturar uma colher medida (10g) em 200ml de água gelada, uma vez ao dia. Pode ser consumido em qualquer horário, mas muitas pessoas preferem pela manhã para começar o dia com energia e cuidado com a pele."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "Os primeiros resultados podem ser notados a partir de 30 dias de uso contínuo. Resultados mais significativos aparecem entre 60 e 90 dias. A consistência é fundamental para obter os melhores benefícios!"
    },
    {
      question: "Vitta Hyaluronic tem contraindicações?",
      answer: "O produto é natural e seguro para a maioria das pessoas. Porém, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de usar qualquer suplemento."
    },
    {
      question: "Qual a diferença entre os sabores?",
      answer: "Oferecemos dois sabores deliciosos: Frutas Vermelhas e Laranja. Ambos possuem a mesma fórmula premium com 11g de peptídeos de colágeno e ácido hialurônico. A escolha é apenas questão de preferência pessoal!"
    },
    {
      question: "O produto é aprovado pela ANVISA?",
      answer: "Sim! Vitta Hyaluronic é um suplemento alimentar regularizado junto à ANVISA e fabricado seguindo rigorosos padrões de qualidade e segurança."
    },
    {
      question: "Posso tomar junto com outros suplementos?",
      answer: "Sim, o Vitta Hyaluronic pode ser combinado com outros suplementos. No entanto, se você já toma outros produtos com colágeno, considere a dosagem total para não exceder a recomendação diária."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Simples! Se você não ficar satisfeito com o produto dentro de 30 dias após a compra, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Basta entrar em contato com nosso suporte."
    },
    {
      question: "Quanto tempo demora para chegar?",
      answer: "O prazo de entrega varia de acordo com sua região, mas geralmente leva de 7 a 15 dias úteis. Você receberá o código de rastreamento por e-mail assim que seu pedido for despachado."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ainda está com <span className="text-primary">dúvidas?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Confira as perguntas mais frequentes sobre o Vitta Hyaluronic
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não está acostumado a<br />comprar pela internet?
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Compra 100% segura:</strong> Site protegido com certificado SSL</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span><strong>Aceitamos todos os cartões:</strong> Pague em até 12x sem juros</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Privacidade garantida:</strong> Seus dados nunca serão compartilhados</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
