/**
 * Barra "site criado por Dunkode": a última faixa do rodapé, em toda a largura, no estilo de quadra do dunkode.com.br.
 * Fundo e cores vêm do cliente: a barra é transparente e herda o fundo e a cor do texto do <footer>,
 * para não destoar da paleta do site. As linhas, o divisor e o texto saem de `currentColor` em opacidades
 * diferentes, e por isso funcionam em rodapé claro ou escuro. A única cor própria da Dunkode é a bola de basquete.
 * Ajustes opcionais pelo CSS do site, no seletor `.bdk`: `--bdk-fundo` (padrão transparente),
 * `--bdk-texto` (padrão: a cor herdada) e `--bdk-destaque` (cor do nome no hover; padrão: a cor do texto).
 * A bola quica de leve para chamar o olhar; no hover ou foco ela "enterra". Movimento reduzido: a bola fica parada.
 * O CSS vai junto (sem depender do Tailwind). Vai como último filho do <footer>, fora do padding/contêiner.
 */

type Props = {
  /** Slug do site, vira utm_source. */
  origem: string;
  /** Texto antes do nome, em minúsculas. Traduza em site multilíngue ("website by", "site créé par"). */
  rotulo?: string;
};

const estilos = `
.bdk{--bdk-t:var(--bdk-texto,currentColor);position:relative;isolation:isolate;overflow:hidden;
  background:var(--bdk-fundo,transparent);color:var(--bdk-t);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;line-height:1}
.bdk::before{content:"";position:absolute;inset:0 0 auto;height:1px;z-index:-1;
  background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--bdk-t) 28%,transparent) 30%,
  color-mix(in srgb,var(--bdk-t) 45%,transparent) 50%,color-mix(in srgb,var(--bdk-t) 28%,transparent) 70%,transparent)}
.bdk-quadra{position:absolute;inset:0;z-index:-1;width:100%;height:100%;pointer-events:none;
  stroke:var(--bdk-t);stroke-opacity:.12;fill:none;stroke-width:1}
.bdk-link{display:flex;align-items:center;justify-content:center;gap:10px;min-height:38px;padding:0 20px;
  color:inherit;text-decoration:none;letter-spacing:.02em}
.bdk-link:focus-visible{outline:2px solid currentColor;outline-offset:-4px;border-radius:8px}
.bdk-rotulo{opacity:.72}
.bdk-cod{opacity:.6}
.bdk-nome{font-family:inherit;font-weight:700;color:var(--bdk-t);letter-spacing:.14em;text-transform:uppercase;
  transition:color .3s}
.bdk-seta{opacity:0;transform:translateX(-4px);transition:opacity .3s,transform .3s}
.bdk-link:hover .bdk-nome,.bdk-link:focus-visible .bdk-nome{color:var(--bdk-destaque,var(--bdk-t))}
.bdk-link:hover .bdk-seta,.bdk-link:focus-visible .bdk-seta{opacity:1;transform:none}
.bdk-bola{position:relative;display:inline-block;width:20px;height:20px;flex:none}
.bdk-bola svg{display:block;width:20px;height:20px;animation:bdk-quica 3.6s cubic-bezier(.3,0,.7,1) infinite;
  transform-origin:50% 100%}
.bdk-sombra{position:absolute;left:3px;right:3px;bottom:-4px;height:3px;border-radius:50%;
  background:color-mix(in srgb,var(--bdk-t) 40%,transparent);filter:blur(1.5px);
  animation:bdk-sombra 3.6s cubic-bezier(.3,0,.7,1) infinite}
.bdk-link:hover .bdk-bola svg,.bdk-link:focus-visible .bdk-bola svg{animation:bdk-enterra .7s cubic-bezier(.2,.8,.3,1) both}
.bdk-link:hover .bdk-sombra,.bdk-link:focus-visible .bdk-sombra{animation:none;opacity:.35}
@keyframes bdk-quica{
  0%,62%,100%{transform:translateY(0) scale(1)}
  66%{transform:translateY(0) scale(1.12,.86)}
  74%{transform:translateY(-9px) scale(.96,1.05) rotate(-40deg)}
  82%{transform:translateY(0) scale(1.08,.9) rotate(-80deg)}
  88%{transform:translateY(-3px) rotate(-100deg)}
  94%{transform:translateY(0) rotate(-110deg)}}
@keyframes bdk-sombra{
  0%,62%,66%,82%,94%,100%{transform:scaleX(1);opacity:.8}
  74%{transform:scaleX(.55);opacity:.3}
  88%{transform:scaleX(.85);opacity:.6}}
@keyframes bdk-enterra{
  0%{transform:translateY(0) rotate(0)}
  45%{transform:translateY(-12px) rotate(-200deg)}
  75%{transform:translateY(2px) scale(1.1,.88) rotate(-330deg)}
  100%{transform:translateY(0) rotate(-360deg)}}
@media (prefers-reduced-motion:reduce){
  .bdk-bola svg,.bdk-sombra,.bdk-link:hover .bdk-bola svg,.bdk-link:focus-visible .bdk-bola svg{animation:none}
  .bdk-seta,.bdk-nome{transition:none}}
@media (max-width:420px){.bdk-cod{display:none}}
`;

function Bola() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <defs>
        <radialGradient id="bdk-couro" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset=".55" stopColor="#6d3fe0" />
          <stop offset="1" stopColor="#4a2896" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#bdk-couro)" />
      <g fill="none" stroke="#c4b5fd" strokeWidth="1.1" strokeLinecap="round">
        <path d="M12 1v22M1 12h22" />
        <path d="M4.2 4.2c3 2.2 4.6 4.9 4.6 7.8s-1.6 5.6-4.6 7.8M19.8 4.2c-3 2.2-4.6 4.9-4.6 7.8s1.6 5.6 4.6 7.8" />
      </g>
      <circle cx="12" cy="12" r="11" fill="none" stroke="#8b5cf6" strokeWidth=".8" />
    </svg>
  );
}

export default function BarraDunkode({ origem, rotulo = "site criado por" }: Props) {
  const href = `https://dunkode.com.br/?utm_source=${encodeURIComponent(origem)}&utm_medium=rodape&utm_campaign=assinatura`;
  return (
    <div className="bdk assinatura-dunkode">
      <style href="barra-dunkode" precedence="default">
        {estilos}
      </style>
      {/* Linhas de quadra: círculo central (sem a linha do meio, que cortava o texto) e as duas linhas de três pontos nas pontas. */}
      <svg className="bdk-quadra" aria-hidden focusable="false" preserveAspectRatio="none">
        <circle cx="50%" cy="50%" r="64" vectorEffect="non-scaling-stroke" />
        <ellipse cx="0" cy="50%" rx="14%" ry="160%" />
        <ellipse cx="100%" cy="50%" rx="14%" ry="160%" />
      </svg>
      <a className="bdk-link" href={href} target="_blank" rel="noopener" aria-label={`${rotulo} Dunkode (abre em nova aba)`}>
        <span className="bdk-bola" aria-hidden>
          <Bola />
          <span className="bdk-sombra" />
        </span>
        <span className="bdk-rotulo">
          <span className="bdk-cod">{"// "}</span>
          {rotulo}
        </span>
        <span className="bdk-nome">Dunkode</span>
        <span className="bdk-seta" aria-hidden>
          {"→"}
        </span>
      </a>
    </div>
  );
}
