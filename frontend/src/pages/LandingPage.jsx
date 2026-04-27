import React from "react";
import { waLink } from "../lib/whatsapp";
import {
    ArrowRight,
    MessageCircle,
    Zap,
    Clock,
    Target,
    Flame,
    TrendingDown,
    TrendingUp,
    Check,
    X,
    AlertTriangle,
    Phone,
    Brain,
    Repeat,
    Thermometer,
    ChevronRight,
} from "lucide-react";

/* ---------------- Small primitives ---------------- */

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.38-1.67a11.87 11.87 0 0 0 5.67 1.44h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.42ZM12.06 21.3h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.85 9.85 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.87-9.87 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.83 9.87Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
);

const Tag = ({ children, color = "white" }) => (
    <span
        className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono-display text-[10px] uppercase tracking-[0.22em] ${
            color === "green"
                ? "border-[#25D366]/40 text-[#25D366]"
                : color === "red"
                  ? "border-[#FF3B30]/40 text-[#FF3B30]"
                  : "border-white/15 text-white/70"
        }`}
    >
        <span
            className={`h-1.5 w-1.5 ${
                color === "green"
                    ? "bg-[#25D366]"
                    : color === "red"
                      ? "bg-[#FF3B30]"
                      : "bg-white/60"
            }`}
        />
        {children}
    </span>
);

const SectionHeader = ({ eyebrow, title, highlight, kicker }) => (
    <div className="mb-12 max-w-3xl sm:mb-16">
        {eyebrow && <Tag>{eyebrow}</Tag>}
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-4xl lg:text-5xl text-balance">
            {title}{" "}
            {highlight && (
                <span className="text-[#25D366]">{highlight}</span>
            )}
        </h2>
        {kicker && (
            <p className="mt-5 max-w-2xl font-body text-base text-white/60 sm:text-lg">
                {kicker}
            </p>
        )}
    </div>
);

const WhatsAppButton = ({
    label,
    message,
    size = "md",
    testId,
    className = "",
}) => (
    <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        className={`btn-wa ${size === "lg" ? "px-9 py-6 text-lg" : ""} ${className}`}
    >
        <WhatsAppIcon className="h-5 w-5" />
        <span>{label}</span>
        <ArrowRight className="h-4 w-4 -mr-1" strokeWidth={3} />
    </a>
);

/* ---------------- NAV ---------------- */

const Nav = () => (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
            <a
                href="#top"
                className="flex items-center gap-2"
                data-testid="nav-logo"
            >
                <div className="grid h-7 w-7 place-items-center bg-[#25D366] font-mono-display text-sm font-bold text-[#0A0A0A]">
                    G
                </div>
                <span className="font-display text-lg font-extrabold tracking-tight">
                    GROCOR
                </span>
                <span className="hidden font-mono-display text-[10px] uppercase tracking-[0.22em] text-white/40 sm:inline">
                    /DealFlow System
                </span>
            </a>
            <WhatsAppButton
                label="Falar agora"
                testId="nav-whatsapp-cta"
                className="!px-4 !py-2.5 !text-xs"
            />
        </div>
    </header>
);

/* ---------------- 1. HERO ---------------- */

const Hero = () => (
    <section
        id="top"
        data-testid="hero-section"
        className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
        {/* Background image + overlay */}
        <div className="absolute inset-0 -z-10">
            <img
                src="https://images.pexels.com/photos/3612932/pexels-photo-3612932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/90 to-[#0A0A0A]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,211,102,0.12),transparent_55%)]" />
        </div>

        <div className="container-x">
            <Tag color="green">Consultoria Estratégica com IA · Brasil</Tag>

            <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl text-balance">
                Você não perde dinheiro na captação.
                <br className="hidden sm:block" />{" "}
                <span className="relative inline-block text-[#FF3B30]">
                    Perde na operação.
                    <span className="absolute bottom-1 left-0 h-[3px] w-full bg-[#FF3B30]/60" />
                </span>
            </h1>

            <p className="mt-8 max-w-2xl font-body text-lg text-white/70 sm:text-xl">
                Enquanto você investe em marketing, uma parte dos seus leads
                está sendo ignorada, esquecida ou perdida. Usamos IA aplicada
                ao seu negócio para recuperar essas oportunidades e
                transformar em vendas{" "}
                <span className="text-white">em até 30 dias.</span>
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                    label="Agendar Diagnóstico via WhatsApp"
                    testId="hero-whatsapp-cta"
                    size="lg"
                />
                <a
                    href="#impacto"
                    data-testid="hero-secondary-cta"
                    className="font-body text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
                >
                    Ver quanto você está perdendo →
                </a>
            </div>

            {/* Trust strip */}
            <div className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/5 sm:grid-cols-4">
                {[
                    ["30 dias", "Para os primeiros resultados"],
                    ["R$20K+", "Contratos high-ticket"],
                    ["24/7", "Resposta em segundos"],
                    ["+Conversão", "Sem precisar de mais leads"],
                ].map(([k, v]) => (
                    <div
                        key={k}
                        className="bg-[#0A0A0A] p-5 sm:p-6"
                    >
                        <div className="font-mono-display text-xl font-bold text-[#25D366] sm:text-2xl">
                            {k}
                        </div>
                        <div className="mt-1 font-body text-xs text-white/50">
                            {v}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ---------------- 2. PROBLEMA ---------------- */

const Problema = () => {
    const items = [
        {
            icon: Clock,
            title: "Leads sem resposta rápida",
            desc: "Seu lead manda mensagem às 14h02. Sua equipe responde às 17h45. Ele já comprou com o concorrente.",
        },
        {
            icon: Repeat,
            title: "Follow-up que não existe",
            desc: "Um contato virou dois. Dois viraram três. No quarto, ninguém lembrou. Venda perdida.",
        },
        {
            icon: TrendingDown,
            title: "Clientes que somem no meio do processo",
            desc: "Visitou, gostou, pediu para pensar. E nunca mais você tocou no nome dele.",
        },
        {
            icon: Flame,
            title: "Vendas que nunca acontecem",
            desc: "Não porque o lead era ruim. Porque a operação não segurou.",
        },
    ];

    return (
        <section
            id="problema"
            data-testid="problema-section"
            className="relative py-24 sm:py-32"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="02 · Perdas invisíveis"
                    title="O buraco não está no marketing."
                    highlight="Está no que vem depois dele."
                />

                <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                    {items.map(({ icon: Icon, title, desc }, i) => (
                        <div
                            key={title}
                            data-testid={`problema-card-${i}`}
                            className="group bg-[#0A0A0A] p-8 transition-colors hover:bg-[#141414] sm:p-10"
                        >
                            <Icon
                                className="h-7 w-7 text-[#FF3B30]"
                                strokeWidth={1.5}
                            />
                            <h3 className="mt-6 font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
                                {title}
                            </h3>
                            <p className="mt-3 font-body text-base text-white/60">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

                <blockquote className="mt-16 border-l-2 border-[#25D366] pl-6 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                    “Você não precisa de mais leads.
                    <br />
                    Precisa{" "}
                    <span className="text-[#25D366]">converter</span> os que
                    já tem.”
                </blockquote>
            </div>
        </section>
    );
};

/* ---------------- 3. INIMIGO COMUM ---------------- */

const Inimigo = () => {
    const enemies = [
        "Agências que só geram lead e somem depois",
        "Processos manuais em planilha e caderninho",
        "Falta de sistema — tudo depende do humor da equipe",
        "Dependência de uma ou duas pessoas pra tudo rodar",
    ];

    return (
        <section
            id="inimigo"
            data-testid="inimigo-section"
            className="relative bg-[#0F0F0F] py-24 hairline-top sm:py-32"
        >
            <div className="container-x grid items-start gap-16 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <Tag color="red">03 · Inimigo comum</Tag>
                    <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-4xl lg:text-5xl">
                        O mercado te vendeu{" "}
                        <span className="text-white/40">
                            tráfego, ferramentas e promessas.
                        </span>{" "}
                        Mas esqueceu de resolver o que realmente gera dinheiro:{" "}
                        <span className="text-[#25D366]">conversão.</span>
                    </h2>
                    <p className="mt-6 max-w-xl font-body text-lg text-white/60">
                        Você não precisa de mais uma ferramenta bonita. Você
                        precisa de algo que feche venda, não que gere relatório.
                    </p>
                </div>

                <ul className="lg:col-span-5 divide-y divide-white/10 border border-white/10">
                    {enemies.map((e, i) => (
                        <li
                            key={e}
                            data-testid={`inimigo-item-${i}`}
                            className="flex items-start gap-4 bg-[#0A0A0A] p-6"
                        >
                            <span className="mt-0.5 font-mono-display text-xs font-bold text-[#FF3B30]">
                                ×{String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-body text-base text-white/85 sm:text-lg">
                                {e}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

/* ---------------- 4. INTRODUÇÃO DA IA (MECANISMO) ---------------- */

const Mecanismo = () => {
    const steps = [
        {
            icon: Zap,
            title: "Resposta em segundos",
            desc: "Não em horas. Quem responde primeiro vende. Ponto.",
            kpi: "<60s",
            label: "tempo médio",
        },
        {
            icon: Repeat,
            title: "Follow-up que nunca esquece",
            desc: "7, 14, 30, 60 dias. A IA lembra. Seu vendedor cansa.",
            kpi: "+9x",
            label: "pontos de contato",
        },
        {
            icon: Thermometer,
            title: "Lead quente, primeiro",
            desc: "Prioriza quem tem maior chance real de fechar. Nada de ligar pra quem nunca vai comprar.",
            kpi: "Top 20%",
            label: "foco total",
        },
        {
            icon: Brain,
            title: "Reativação com timing certo",
            desc: "Aquele contato de 3 meses atrás? A IA sabe a hora exata de voltar.",
            kpi: "+R$",
            label: "base morta virando venda",
        },
    ];

    return (
        <section
            id="mecanismo"
            data-testid="mecanismo-section"
            className="relative py-24 sm:py-32"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="04 · Mecanismo"
                    title="A diferença está em usar IA não como moda."
                    highlight="Como motor de conversão."
                    kicker="Você não precisa entender tecnologia. Precisa entender o que ela faz pelo seu caixa. É isso:"
                />

                <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map(({ icon: Icon, title, desc, kpi, label }, i) => (
                        <div
                            key={title}
                            data-testid={`mecanismo-card-${i}`}
                            className="relative bg-[#0A0A0A] p-7 transition-colors hover:bg-[#141414]"
                        >
                            <span className="absolute right-6 top-6 font-mono-display text-xs text-white/30">
                                0{i + 1}
                            </span>
                            <Icon
                                className="h-6 w-6 text-[#25D366]"
                                strokeWidth={1.5}
                            />
                            <div className="mt-8 border-l border-[#25D366]/40 pl-3">
                                <div className="font-mono-display text-2xl font-bold text-white">
                                    {kpi}
                                </div>
                                <div className="mt-0.5 font-mono-display text-[10px] uppercase tracking-[0.18em] text-white/40">
                                    {label}
                                </div>
                            </div>
                            <h3 className="mt-6 font-display text-lg font-extrabold leading-tight text-white">
                                {title}
                            </h3>
                            <p className="mt-2 font-body text-sm text-white/55">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------------- 5. IMPACTO FINANCEIRO ---------------- */

const Impacto = () => {
    const rows = [
        { label: "Leads que chegam / mês", value: "120", color: "white" },
        {
            label: "Ignorados ou respondidos tarde",
            value: "~38%",
            color: "red",
        },
        { label: "Leads perdidos / mês", value: "45", color: "red" },
        { label: "Ticket médio por venda", value: "R$ 40.000", color: "white" },
        {
            label: "Taxa de conversão realista (2%)",
            value: "0,9 venda",
            color: "red",
        },
    ];

    return (
        <section
            id="impacto"
            data-testid="impacto-section"
            className="relative bg-[#0F0F0F] py-24 hairline-top sm:py-32"
        >
            <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                    <Tag color="red">05 · Impacto financeiro</Tag>
                    <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-4xl lg:text-5xl">
                        A matemática da{" "}
                        <span className="text-[#FF3B30]">perda invisível.</span>
                    </h2>
                    <p className="mt-5 font-body text-base text-white/60 sm:text-lg">
                        Exemplo conservador para um corretor ou imobiliária de
                        porte médio. Faça a conta do seu negócio depois.
                    </p>

                    <div className="mt-10 border border-[#FF3B30]/40 bg-[#FF3B30]/5 p-6 sm:p-8">
                        <div className="font-mono-display text-xs uppercase tracking-[0.22em] text-[#FF3B30]">
                            Perda estimada / mês
                        </div>
                        <div className="mt-3 font-mono-display text-5xl font-bold leading-none text-[#FF3B30] sm:text-6xl lg:text-7xl">
                            R$ 1.800.000
                        </div>
                        <div className="mt-4 font-body text-sm text-white/60">
                            Em oportunidades reais, não em fantasia. Essa conta
                            sai do seu caixa todo mês — e ninguém vê.
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="border border-white/10">
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0A0A0A] px-6 py-4">
                            <span className="font-mono-display text-[11px] uppercase tracking-[0.2em] text-white/50">
                                Simulação · mercado imobiliário
                            </span>
                            <span className="font-mono-display text-[11px] text-[#25D366]">
                                ● ao vivo
                            </span>
                        </div>
                        <ul className="divide-y divide-white/10 bg-[#0A0A0A]">
                            {rows.map((r, i) => (
                                <li
                                    key={r.label}
                                    data-testid={`impacto-row-${i}`}
                                    className="flex items-center justify-between gap-4 px-6 py-5"
                                >
                                    <span className="font-body text-sm text-white/70 sm:text-base">
                                        {r.label}
                                    </span>
                                    <span
                                        className={`font-mono-display text-lg font-bold sm:text-2xl ${
                                            r.color === "red"
                                                ? "text-[#FF3B30]"
                                                : "text-white"
                                        }`}
                                    >
                                        {r.value}
                                    </span>
                                </li>
                            ))}
                            <li className="flex items-center justify-between gap-4 bg-gradient-to-r from-[#FF3B30]/10 to-transparent px-6 py-6">
                                <span className="font-display text-base font-extrabold text-white sm:text-lg">
                                    Receita não capturada
                                </span>
                                <span className="font-mono-display text-2xl font-bold text-[#FF3B30] sm:text-3xl">
                                    R$ 1,8M / mês
                                </span>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-8 font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
                        Cada lead ignorado pode ser uma venda de{" "}
                        <span className="text-[#FF3B30]">R$20K a R$200K</span>{" "}
                        perdida.
                    </p>
                </div>
            </div>
        </section>
    );
};

/* ---------------- 6. SOLUÇÃO ---------------- */

const Solucao = () => {
    const pillars = [
        {
            icon: Zap,
            tag: "Velocidade",
            title: "IA responde na hora",
            desc: "O lead nunca espera. Nem de madrugada, nem em fim de semana, nem em feriado. Quem responde primeiro, vende.",
        },
        {
            icon: Repeat,
            tag: "Persistência",
            title: "Follow-up que não falha",
            desc: "Sequência automatizada com cadência inteligente. Se o cliente sumiu, o sistema busca. Até o não virar um sim ou um não definitivo.",
        },
        {
            icon: Target,
            tag: "Inteligência",
            title: "Prioriza quem vai fechar",
            desc: "Score de intenção em tempo real. Seu time gasta energia em lead quente. Lead frio entra em nutrição automática.",
        },
    ];

    return (
        <section
            id="solucao"
            data-testid="solucao-section"
            className="relative py-24 sm:py-32"
        >
            <div className="container-x">
                <div className="grid items-end gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Tag color="green">06 · Solução</Tag>
                        <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
                            Grocor{" "}
                            <span className="text-[#25D366]">DealFlow</span>{" "}
                            System
                        </h2>
                        <p className="mt-6 max-w-xl font-body text-lg text-white/60">
                            Um sistema estruturado que combina{" "}
                            <span className="text-white">
                                IA + automação + processo
                            </span>{" "}
                            para transformar leads em visitas e visitas em
                            vendas. Não é ferramenta. É operação pronta pra
                            rodar.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 lg:col-span-5">
                        <img
                            src="https://images.pexels.com/photos/2047909/pexels-photo-2047909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Sistema de follow-up automatizado Grocor"
                            className="h-full w-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-[#25D366]/20" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                            <span className="font-mono-display text-[10px] uppercase tracking-[0.22em] text-white/70">
                                24/7 · Sempre respondendo
                            </span>
                            <span className="flex h-2 w-2 rounded-full bg-[#25D366]" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                    {pillars.map(({ icon: Icon, tag, title, desc }, i) => (
                        <div
                            key={tag}
                            data-testid={`pilar-${i}`}
                            className="bg-[#0A0A0A] p-8 sm:p-10"
                        >
                            <div className="flex items-center justify-between">
                                <Icon
                                    className="h-7 w-7 text-[#25D366]"
                                    strokeWidth={1.5}
                                />
                                <span className="font-mono-display text-[10px] uppercase tracking-[0.22em] text-white/40">
                                    Pilar 0{i + 1}
                                </span>
                            </div>
                            <div className="mt-8 font-mono-display text-xs uppercase tracking-[0.22em] text-[#25D366]">
                                {tag}
                            </div>
                            <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white">
                                {title}
                            </h3>
                            <p className="mt-3 font-body text-sm text-white/55">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------------- 7. BENEFÍCIOS ---------------- */

const Beneficios = () => {
    const benefits = [
        "Mais respostas imediatas",
        "Mais visitas agendadas",
        "Mais propostas enviadas",
        "Mais vendas fechadas",
        "Menos desperdício de lead",
        "Mais previsibilidade no caixa",
    ];
    return (
        <section
            id="beneficios"
            data-testid="beneficios-section"
            className="relative bg-[#0F0F0F] py-24 hairline-top sm:py-32"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="07 · Benefícios"
                    title="O que muda na semana 1."
                    kicker="Não é promessa. É consequência direta de parar de perder lead."
                />
                <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((b, i) => (
                        <li
                            key={b}
                            data-testid={`beneficio-${i}`}
                            className="flex items-start gap-4 bg-[#0A0A0A] p-7 transition-colors hover:bg-[#141414]"
                        >
                            <span className="mt-1 grid h-6 w-6 place-items-center bg-[#25D366] text-[#0A0A0A]">
                                <Check className="h-4 w-4" strokeWidth={3.5} />
                            </span>
                            <span className="font-display text-lg font-extrabold leading-snug text-white">
                                {b}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

/* ---------------- 8. COMO FUNCIONA ---------------- */

const ComoFunciona = () => {
    const steps = [
        {
            n: "01",
            title: "Diagnóstico",
            desc: "Mapeamos onde o dinheiro está escapando: tempo de resposta, follow-up, funil, equipe, CRM. Em números, não em achismo.",
        },
        {
            n: "02",
            title: "Estruturação",
            desc: "Desenhamos o DealFlow sob medida pra sua operação. Scripts, cadência, IA, gatilhos, responsáveis, métricas.",
        },
        {
            n: "03",
            title: "Implementação",
            desc: "Sistema plugado, IA treinada com sua linguagem, time treinado, integração com WhatsApp, CRM e anúncios.",
        },
        {
            n: "04",
            title: "Otimização contínua",
            desc: "Todo mês: acompanhamos KPIs, corrigimos gargalos, melhoramos scripts, aumentamos conversão. Sem piloto automático cego.",
        },
    ];
    return (
        <section
            id="como-funciona"
            data-testid="como-funciona-section"
            className="relative py-24 sm:py-32"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="08 · Como funciona"
                    title="Quatro etapas."
                    highlight="Um caminho claro até a venda."
                />

                <ol className="relative border-l border-white/10 pl-0">
                    {steps.map((s, i) => (
                        <li
                            key={s.n}
                            data-testid={`etapa-${i}`}
                            className="grid grid-cols-[auto_1fr] gap-6 border-b border-white/10 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-10"
                        >
                            <div className="font-mono-display text-4xl font-bold text-[#25D366] sm:text-5xl">
                                {s.n}
                            </div>
                            <div className="max-w-2xl">
                                <h3 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                                    {s.title}
                                </h3>
                                <p className="mt-3 font-body text-base text-white/60 sm:text-lg">
                                    {s.desc}
                                </p>
                            </div>
                            <ChevronRight
                                className="hidden self-center text-white/20 sm:block"
                                size={40}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

/* ---------------- 9. PROVA LÓGICA ---------------- */

const ProvaLogica = () => (
    <section
        id="prova-logica"
        data-testid="prova-logica-section"
        className="relative py-24 sm:py-32"
    >
        <div className="container-x">
            <div className="relative overflow-hidden border border-[#25D366]/40 bg-gradient-to-br from-[#25D366]/10 via-[#0A0A0A] to-[#0A0A0A] p-10 sm:p-16">
                <TrendingUp
                    className="absolute -right-10 -top-10 h-56 w-56 text-[#25D366]/10"
                    strokeWidth={1}
                />
                <Tag color="green">09 · Prova lógica</Tag>
                <p className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                    Se o sistema gerar{" "}
                    <span className="text-[#25D366]">1 venda a mais</span>, já
                    paga o investimento inteiro.
                </p>
                <p className="mt-6 max-w-2xl font-body text-base text-white/60 sm:text-lg">
                    O resto, a partir da segunda venda, é lucro. Não é
                    promessa mirabolante — é matemática de ticket alto.
                </p>
            </div>
        </div>
    </section>
);

/* ---------------- 10. CTA INTERMEDIÁRIO ---------------- */

const CtaIntermediario = () => (
    <section
        data-testid="cta-intermediario-section"
        className="relative bg-[#0F0F0F] py-20 hairline-top hairline-bottom"
    >
        <div className="container-x flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
                <Tag color="green">10 · Próximo passo</Tag>
                <h3 className="mt-4 max-w-2xl font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                    Descubra quanto dinheiro você está perdendo{" "}
                    <span className="text-[#25D366]">hoje.</span>
                </h3>
            </div>
            <WhatsAppButton
                label="Falar no WhatsApp"
                testId="cta-intermediario-whatsapp"
                size="lg"
                message="Olá! Quero descobrir quanto estou perdendo em vendas hoje com a análise da Grocor."
            />
        </div>
    </section>
);

/* ---------------- 11. FILTRO ---------------- */

const Filtro = () => {
    const sim = [
        "Já tem volume de leads (30+ / mês)",
        "Quer aumentar conversão, não só tráfego",
        "Quer previsibilidade de receita",
        "Ticket alto (R$20K+) ou LTV relevante",
    ];
    const nao = [
        "Quem não tem demanda nem tráfego rodando",
        "Quem busca a solução mais barata",
        "Quem não mede resultado nem quer começar",
        "Quem quer bala de prata sem ajustar operação",
    ];
    return (
        <section
            id="filtro"
            data-testid="filtro-section"
            className="relative py-24 sm:py-32"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="11 · Filtro"
                    title="Isso não é pra todo mundo."
                    highlight="É pra quem leva negócio a sério."
                />

                <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
                    <div className="bg-[#0A0A0A] p-8 sm:p-10">
                        <div className="flex items-center gap-3">
                            <span className="grid h-8 w-8 place-items-center bg-[#25D366] text-[#0A0A0A]">
                                <Check className="h-5 w-5" strokeWidth={3.5} />
                            </span>
                            <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                                Para quem é
                            </h3>
                        </div>
                        <ul className="mt-8 space-y-4">
                            {sim.map((s, i) => (
                                <li
                                    key={s}
                                    data-testid={`filtro-sim-${i}`}
                                    className="flex items-start gap-3 font-body text-base text-white/80 sm:text-lg"
                                >
                                    <Check
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-[#25D366]"
                                        strokeWidth={2.5}
                                    />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#0A0A0A] p-8 sm:p-10">
                        <div className="flex items-center gap-3">
                            <span className="grid h-8 w-8 place-items-center bg-[#FF3B30] text-white">
                                <X className="h-5 w-5" strokeWidth={3.5} />
                            </span>
                            <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                                Não é
                            </h3>
                        </div>
                        <ul className="mt-8 space-y-4">
                            {nao.map((s, i) => (
                                <li
                                    key={s}
                                    data-testid={`filtro-nao-${i}`}
                                    className="flex items-start gap-3 font-body text-base text-white/55 line-through decoration-white/20 sm:text-lg"
                                >
                                    <X
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-[#FF3B30]"
                                        strokeWidth={2.5}
                                    />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------------- 12. URGÊNCIA ---------------- */

const Urgencia = () => (
    <section
        id="urgencia"
        data-testid="urgencia-section"
        className="relative overflow-hidden bg-[#070707] py-24 hairline-top sm:py-32"
    >
        <div
            className="absolute inset-0 -z-0 opacity-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 80% 20%, rgba(255,59,48,0.18), transparent 55%)",
            }}
        />
        <div className="container-x relative">
            <div className="flex items-start gap-4">
                <AlertTriangle
                    className="h-10 w-10 flex-shrink-0 text-[#FFCC00]"
                    strokeWidth={1.5}
                />
                <Tag color="red">12 · Urgência</Tag>
            </div>
            <h2 className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl text-balance">
                Enquanto você não estrutura isso,{" "}
                <span className="text-[#FFCC00]">
                    seus concorrentes estão respondendo mais rápido
                </span>{" "}
                e fechando mais.
            </h2>
            <p className="mt-8 max-w-2xl font-body text-lg text-white/60">
                Cada dia sem sistema é venda saindo da sua mão e entrando na
                deles. Não é drama. É o que já está acontecendo agora, nesse
                exato minuto.
            </p>
        </div>
    </section>
);

/* ---------------- 13. CTA FINAL ---------------- */

const CtaFinal = () => (
    <section
        id="cta-final"
        data-testid="cta-final-section"
        className="relative overflow-hidden py-28 sm:py-36"
    >
        <div className="absolute inset-0 -z-10">
            <img
                src="https://images.unsplash.com/photo-1776935359455-94263068537c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwwfHx8fDE3NzczMTA1NzF8MA&ixlib=rb-4.1.0&q=85"
                alt=""
                className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
        </div>
        <div className="container-x">
            <Tag color="green">13 · Decisão</Tag>
            <h2 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl text-balance">
                Agendar{" "}
                <span className="text-[#25D366]">Diagnóstico Estratégico.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-body text-lg text-white/70 sm:text-xl">
                Conversa direta, sem rodeio, sem venda empurrada. Em 20 minutos
                você sai com clareza de quanto está perdendo e o que fazer na
                próxima semana.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                    label="Agendar Diagnóstico Estratégico"
                    testId="cta-final-whatsapp"
                    size="lg"
                    message="Olá! Quero agendar o Diagnóstico Estratégico da Grocor para entender quanto estou perdendo em vendas hoje e como o DealFlow System pode resolver."
                />
                <span className="font-mono-display text-xs uppercase tracking-[0.22em] text-white/40">
                    Resposta em minutos · sem formulário
                </span>
            </div>
        </div>
    </section>
);

/* ---------------- FOOTER ---------------- */

const Footer = () => (
    <footer
        data-testid="footer"
        className="relative border-t border-white/10 bg-[#060606] py-12"
    >
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
                <div className="grid h-7 w-7 place-items-center bg-[#25D366] font-mono-display text-sm font-bold text-[#0A0A0A]">
                    G
                </div>
                <span className="font-display text-sm font-extrabold tracking-tight text-white">
                    GROCOR
                </span>
                <span className="font-mono-display text-[10px] uppercase tracking-[0.22em] text-white/40">
                    DealFlow System
                </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-mono-display text-[11px] uppercase tracking-[0.2em] text-white/40">
                <span>© {new Date().getFullYear()} Grocor Consultoria</span>
                <span className="hidden sm:inline">·</span>
                <span>Conversão &gt; Captação</span>
            </div>
        </div>
    </footer>
);

/* ---------------- FLOATING CTA (mobile) ---------------- */

const FloatingCTA = () => (
    <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-cta"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-[#0A0A0A] shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        aria-label="Falar no WhatsApp"
    >
        <WhatsAppIcon className="h-7 w-7" />
    </a>
);

/* ---------------- PAGE ---------------- */

export default function LandingPage() {
    return (
        <div
            className="relative min-h-screen bg-[#0A0A0A] text-white"
            data-testid="landing-page"
        >
            <Nav />
            <main>
                <Hero />
                <Problema />
                <Inimigo />
                <Mecanismo />
                <Impacto />
                <Solucao />
                <Beneficios />
                <ComoFunciona />
                <ProvaLogica />
                <CtaIntermediario />
                <Filtro />
                <Urgencia />
                <CtaFinal />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
}
