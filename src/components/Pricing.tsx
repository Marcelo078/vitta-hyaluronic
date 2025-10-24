import { Button } from "@/components/ui/button";
import kit1 from "@/assets/kit-1-pote.webp";
import kit2 from "@/assets/kit-2-potes.webp";
import kit3 from "@/assets/kit-3-potes.webp";
import kit4 from "@/assets/kit-4-potes.webp";
import kit6 from "@/assets/kit-6-potes.webp";

export const Pricing = () => {
  const kits = [
    {
      title: "COMPRE 6 COLÁGENOS",
      subtitle: "KIT PARA 6 MESES",
      image: kit6,
      price: "34,84",
      total: "347,00",
      installments: "12x",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=JP339842",
      badge: "MAIS VENDIDO",
      highlight: true
    },
    {
      title: "COMPRE 4 COLÁGENOS",
      subtitle: "KIT PARA 4 MESES",
      image: kit4,
      price: "24,80",
      total: "247,00",
      installments: "12x",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=KF160493",
      badge: "RECOMENDADO",
      highlight: true
    },
    {
      title: "COMPRE 3 COLÁGENOS",
      subtitle: "KIT PARA 3 MESES",
      image: kit3,
      price: "19,78",
      total: "197,00",
      installments: "12x",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=LK160499",
      highlight: false
    },
    {
      title: "COMPRE 2 COLÁGENOS",
      subtitle: "KIT PARA 2 MESES",
      image: kit2,
      price: "16,77",
      total: "167,00",
      installments: "12x",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=XG166296",
      highlight: false
    },
    {
      title: "COMPRE 1 COLÁGENO",
      subtitle: "KIT PARA 1 MÊS",
      image: kit1,
      price: "12,75",
      total: "127,00",
      installments: "12x",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=YL213986",
      highlight: false
    }
  ];

  return (
    <section id="kits" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha seu <span className="text-primary">melhor kit</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Quanto mais você compra, mais você economiza!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 border-4 ${
                kit.highlight ? 'border-primary' : 'border-transparent'
              }`}
            >
              {kit.badge && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                    ⭐ {kit.badge}
                  </span>
                </div>
              )}

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 pt-12 text-center">
                <h3 className="text-xl font-black text-foreground mb-1">{kit.title}</h3>
                <p className="text-primary font-bold text-sm">{kit.subtitle}</p>
              </div>

              <div className="p-6">
                <img 
                  src={kit.image} 
                  alt={kit.title}
                  className="w-full h-48 object-contain mb-6"
                  loading="lazy"
                />

                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-center mb-6">
                  <p className="text-white text-sm font-semibold mb-2">POR APENAS {kit.installments}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-white text-2xl font-bold">R$</span>
                    <span className="text-white text-5xl font-black">{kit.price}</span>
                  </div>
                  <p className="text-white/90 text-sm">Ou R$ {kit.total} à vista</p>
                  <p className="text-white text-xs mt-2 font-semibold">🚚 FRETE GRÁTIS PARA TODO O BRASIL</p>
                </div>

                <a href={kit.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    COMPRAR AGORA
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Garantia de 30 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
