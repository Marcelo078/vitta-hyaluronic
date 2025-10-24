import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Vitta Hyaluronic - Colágeno + Ácido Hialurônico",
      "description": "Suplemento alimentar de colágeno hidrolisado com ácido hialurônico, vitaminas e minerais. Promove rejuvenescimento da pele, hidratação profunda e firmeza. Disponível nos sabores Frutas Vermelhas e Laranja.",
      "brand": {
        "@type": "Brand",
        "name": "Vitta Hyaluronic"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "127.00",
        "highPrice": "347.00",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Vitta Hyaluronic"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2847"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Pricing />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Com apenas <span className="text-primary">1 scoop ao dia</span>,<br />
            conquiste uma pele mais jovem!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">30 Dias</h3>
              <p className="text-muted-foreground">Primeiros sinais de melhora na hidratação e textura da pele</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">60 Dias</h3>
              <p className="text-muted-foreground">Redução visível de linhas finas e melhora na firmeza</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">90 Dias</h3>
              <p className="text-muted-foreground">Pele visivelmente mais jovem, radiante e saudável</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Veja alguns <span className="text-primary">resultados reais</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Milhares de mulheres já transformaram suas peles com Vitta Hyaluronic
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
              <div className="text-6xl mb-4">👩</div>
              <p className="text-muted-foreground italic mb-4">
                "Em 60 dias minha pele ficou muito mais firme e hidratada. As linhas ao redor dos olhos diminuíram bastante!"
              </p>
              <p className="font-semibold text-foreground">— Maria, 42 anos</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
              <div className="text-6xl mb-4">👩</div>
              <p className="text-muted-foreground italic mb-4">
                "Comecei a tomar por indicação da minha dermatologista e estou impressionada! Minha pele está radiante."
              </p>
              <p className="font-semibold text-foreground">— Juliana, 38 anos</p>
            </div>
          </div>
        </div>
      </section>

      <Guarantee />
      <FAQ />

      <section className="py-16 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha a melhor momento para<br />tomar seu Hyaluronic
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="text-xl font-bold mb-2">MANHÃ</h3>
              <p className="text-white/90 text-sm">Para começar o dia com energia e nutrição</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-5xl mb-4">☀️</div>
              <h3 className="text-xl font-bold mb-2">TARDE</h3>
              <p className="text-white/90 text-sm">No meio do dia para manter-se hidratado</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">NOITE</h3>
              <p className="text-white/90 text-sm">Antes de dormir para regeneração noturna</p>
            </div>
          </div>

          <p className="text-xl mb-8">
            O importante é manter a consistência! Escolha o horário que melhor se adapta à sua rotina.
          </p>

          <a href="#kits" className="inline-block">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
              ESCOLHER MEU KIT AGORA
            </button>
          </a>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Vitta Hyaluronic</h3>
            <p className="text-background/70">
              O colágeno mais amado do Brasil
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-background/70">
            <a href="#kits" className="hover:text-primary transition-colors">Produtos</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p className="mb-4">
              ⚠️ <strong>Aviso importante:</strong> Este produto não substitui uma alimentação equilibrada e seu consumo deve ser orientado por nutricionista ou médico. Mantenha fora do alcance de crianças.
            </p>
            <p>
              © {new Date().getFullYear()} Vitta Hyaluronic. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
