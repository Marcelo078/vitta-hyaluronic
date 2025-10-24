import { Button } from "@/components/ui/button";
import produtoGif from "@/assets/produto-frutas-vermelhas.gif";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-primary to-primary px-4 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              O Colágeno mais amado do Brasil!
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl mx-auto lg:mx-0">
              Transforme sua pele com <span className="font-bold">11g de peptídeos de colágeno</span> + ácido hialurônico em cada porção. Resultados visíveis em apenas 30 dias!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#kits" className="inline-block">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-0"
                >
                  👉 QUERO REJUVENESCER AGORA
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start text-white/90 text-sm pt-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="font-semibold">Frete GRÁTIS para todo Brasil</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
              <img 
                src={produtoGif} 
                alt="Vitta Hyaluronic - Colágeno + Ácido Hialurônico com sabor Frutas Vermelhas"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
