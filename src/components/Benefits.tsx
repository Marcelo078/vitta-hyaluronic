export const Benefits = () => {
  const benefits = [
    {
      icon: "🧬",
      title: "11g de peptídeos",
      subtitle: "de colágeno por porção"
    },
    {
      icon: "💧",
      title: "Ácido Hialurônico",
      subtitle: "hidratação profunda"
    },
    {
      icon: "✨",
      title: "Rico em Vitaminas",
      subtitle: "B6, C, E, Zinco e Biotina"
    },
    {
      icon: "🍓",
      title: "Sabores Deliciosos",
      subtitle: "Frutas Vermelhas e Laranja"
    }
  ];

  const badges = [
    { label: "ZERO", sublabel: "AÇÚCARES", color: "from-green-500 to-green-600" },
    { label: "ZERO", sublabel: "GORDURA", color: "from-primary to-pink-600" },
    { label: "ZERO", sublabel: "GLÚTEN", color: "from-green-500 to-green-600" },
    { label: "ZERO", sublabel: "LACTOSE", color: "from-primary to-pink-600" },
    { label: "100%", sublabel: "NATURAL", color: "from-green-500 to-green-600" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Descubra porque o <span className="text-primary">Vitta Hyaluronic</span><br />
            funciona tão bem!
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br ${badge.color} text-white shadow-xl border-4 border-white`}
            >
              <span className="text-xl font-black">{badge.label}</span>
              <span className="text-xs font-bold mt-1 text-center leading-tight px-2">{badge.sublabel}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20 rounded-3xl p-10 md:p-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Recupere a juventude<br />
            <span className="text-primary">da sua pele do interior para o exterior!</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground mb-2">Pele Firme e Elástica</h4>
                <p className="text-muted-foreground">O colágeno fortalece a estrutura da pele, reduzindo linhas finas e rugas visíveis.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground mb-2">Hidratação Profunda</h4>
                <p className="text-muted-foreground">O ácido hialurônico retém até 1000x seu peso em água, mantendo a pele hidratada.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground mb-2">Brilho Natural</h4>
                <p className="text-muted-foreground">Vitaminas e minerais promovem uma pele radiante e saudável de dentro para fora.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
