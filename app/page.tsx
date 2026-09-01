'use client'

import {
  ArrowUpRight,
  Check,
  Clock3,
  AtSign,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const whatsappUrl = 'https://wa.me/55[DDD][TELEFONE]?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.'

const services = [
  { icon: MoveUpRight, title: '[SERVIÇO 1]', text: '[Descrição curta do serviço oferecido pela clínica.]' },
  { icon: Sparkles, title: '[SERVIÇO 2]', text: '[Descrição curta do serviço oferecido pela clínica.]' },
  { icon: ShieldCheck, title: '[SERVIÇO 3]', text: '[Descrição curta do serviço oferecido pela clínica.]' },
  { icon: Users, title: '[SERVIÇO 4]', text: '[Descrição curta do serviço oferecido pela clínica.]' },
]

const testimonials = [
  { name: '[NOME DO PACIENTE]', text: '[Depoimento breve sobre a experiência e os resultados alcançados na clínica.]' },
  { name: '[NOME DO PACIENTE]', text: '[Depoimento breve sobre a experiência e os resultados alcançados na clínica.]' },
  { name: '[NOME DO PACIENTE]', text: '[Depoimento breve sobre a experiência e os resultados alcançados na clínica.]' },
]

function WhatsAppFloatingButton() {
  return (
    <a href="https://wa.me/[TELEFONE]" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8 fill-current"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.85c0 2.09.55 4.13 1.59 5.93L.13 24l6.36-1.67a11.83 11.83 0 0 0 5.59 1.42h.01c6.53 0 11.84-5.32 11.84-11.85 0-3.17-1.23-6.14-3.41-8.42ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.21C2.2 6.41 6.63 1.98 12.08 1.98c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.43 9.87-9.87 9.87Zm5.41-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.31.3-.51.1-.2.05-.38-.02-.53-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" /></svg>
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [['sobre', 'Sobre'], ['servicos', 'Serviços'], ['diferenciais', 'Diferenciais'], ['depoimentos', 'Depoimentos'], ['localizacao', 'Localização']]

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="font-serif text-xl font-bold tracking-tight text-primary">[NOME DA CLÍNICA]<span className="text-accent">.</span></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <Button asChild className="hidden rounded-full px-5 md:inline-flex"><a href={whatsappUrl} target="_blank" rel="noreferrer">Contato <ArrowUpRight data-icon="inline-end" /></a></Button>
          <button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border bg-background px-5 py-5 md:hidden">{navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium">{label}</a>)}<Button asChild className="w-full rounded-full"><a href={whatsappUrl}>Contato</a></Button></nav>}
      </header>

      <section id="inicio" className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-20 pt-36 lg:grid-cols-[1fr_0.92fr] lg:px-10 lg:pt-32">
        <div className="relative z-10 max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent"><span className="h-px w-8 bg-accent" />[CUIDADO QUE TRANSFORMA]</p>
          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-primary sm:text-6xl lg:text-7xl">Movimento para uma vida <span className="italic text-accent">mais leve.</span></h1>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">[Subtítulo institucional da clínica. Um cuidado próximo e especializado para você se movimentar melhor todos os dias.]</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 rounded-full px-6"><a href={whatsappUrl} target="_blank" rel="noreferrer">Contato <ArrowUpRight data-icon="inline-end" /></a></Button><a href="#servicos" className="inline-flex h-12 items-center justify-center rounded-full border border-primary/20 px-6 text-sm font-medium text-primary transition-colors hover:bg-primary/5">Conheça nossos serviços</a></div>
          <div className="mt-14 flex items-center gap-8 border-t border-border pt-6"><div><p className="font-serif text-2xl font-bold text-primary">[XX]+</p><p className="text-xs text-muted-foreground">anos de experiência</p></div><div className="h-9 w-px bg-border" /><div><p className="font-serif text-2xl font-bold text-primary">[XXX]+</p><p className="text-xs text-muted-foreground">pacientes atendidos</p></div></div>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto"><div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-accent/15 blur-2xl" /><div className="relative aspect-[0.86] overflow-hidden rounded-[2rem] bg-muted"><img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85" alt="[Descrição da imagem do ambiente de fisioterapia]" className="h-full w-full object-cover" /><div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur"><div className="rounded-full bg-accent/15 p-2 text-accent"><Sparkles /></div><div><p className="text-xs font-semibold text-primary">[DIFERENCIAL]</p><p className="text-xs text-muted-foreground">[Texto curto]</p></div></div></div></div>
      </section>

      <section id="sobre" className="bg-primary py-24 text-primary-foreground"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10"><div className="relative max-w-md"><div className="aspect-[0.9] overflow-hidden rounded-[2rem]"><img src="/images/pilates-studio.png" alt="[Descrição da foto do ambiente de pilates e fisioterapia]" className="h-full w-full object-cover" /></div><div className="absolute -bottom-6 -right-5 rounded-2xl bg-accent px-5 py-4 text-accent-foreground shadow-xl"><p className="font-serif text-3xl font-bold">[XX]+</p><p className="text-xs">[anos cuidando]</p></div></div><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">[SOBRE A CLÍNICA]</p><h2 className="font-serif text-4xl leading-tight sm:text-5xl">Cuidar do seu corpo é <span className="italic text-accent">cuidar da sua história.</span></h2><p className="mt-7 max-w-lg leading-7 text-primary-foreground/70">[Texto institucional curto contando a história, propósito e abordagem da clínica. Substitua este conteúdo pelas informações do cliente.]</p><a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">[Conheça nossa história] <ArrowUpRight data-icon="inline-end" /></a></div></div></section>

      <section id="servicos" className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">[COMO PODEMOS AJUDAR]</p><h2 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">Cuidado pensado<br /><span className="italic text-accent">para você.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">[Texto de apoio sobre os serviços e a experiência oferecida.]</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service, index) => { const Icon = service.icon; return <Card key={service.title} className="rounded-3xl border-border/70 bg-card shadow-none transition-transform hover:-translate-y-1"><CardContent className="flex min-h-56 flex-col p-6"><div className="mb-auto flex items-start justify-between"><div className="rounded-2xl bg-accent/15 p-3 text-accent"><Icon /></div><span className="font-serif text-sm text-muted-foreground">0{index + 1}</span></div><div><h3 className="text-lg font-semibold text-primary">{service.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.text}</p></div></CardContent></Card> })}</div></section>

      <section id="diferenciais" className="bg-secondary py-24"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">[POR QUE ESCOLHER A CLÍNICA]</p><h2 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">Um jeito diferente de <span className="italic text-accent">cuidar.</span></h2></div><div className="grid gap-8 sm:grid-cols-2">{[['Atendimento personalizado', 'Cada pessoa é única. Seu cuidado também deve ser.'], ['Equipamentos modernos', '[Texto curto sobre tecnologia e estrutura.]'], ['Profissionais especializados', '[Texto curto sobre equipe e especializações.]'], ['Ambiente acolhedor', '[Texto curto sobre o espaço e a experiência.]']].map(([title, text], index) => <div key={title} className="flex gap-4 border-t border-border pt-5"><div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check /></div><div><h3 className="font-semibold text-primary">[{title}]</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></div></section>

      <section id="depoimentos" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-10"><div className="mb-10 flex items-end justify-between"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">[QUEM VIVEU, RECOMENDA]</p><h2 className="font-serif text-4xl text-primary sm:text-5xl">Histórias que <span className="italic text-accent">inspiram.</span></h2></div><div className="hidden items-center gap-1 text-accent sm:flex">{[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" />)}</div></div><div className="grid gap-4 md:grid-cols-3">{testimonials.map((item, i) => <Card key={i} className="rounded-3xl border-none bg-secondary shadow-none"><CardContent className="p-7"><div className="mb-8 flex gap-1 text-accent">{[1,2,3,4,5].map(star => <Star key={star} fill="currentColor" />)}</div><p className="min-h-24 text-base leading-7 text-primary">“{item.text}”</p><p className="mt-7 text-sm font-semibold text-primary">{item.name}</p><p className="mt-1 text-xs text-muted-foreground">[Tipo de atendimento]</p></CardContent></Card>)}</div></section>

      <section id="localizacao" className="scroll-mt-24 bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.8fr] lg:px-10"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">[ONDE ESTAMOS]</p><h2 className="font-serif text-4xl leading-tight sm:text-5xl">Seu próximo passo começa <span className="italic text-accent">aqui.</span></h2><div className="mt-9 flex flex-col gap-5 text-sm text-primary-foreground/75"><p className="flex gap-3"><MapPin className="shrink-0 text-accent" />[ENDEREÇO COMPLETO], [NÚMERO] — [BAIRRO], [CIDADE/UF]</p><p className="flex gap-3"><Clock3 className="shrink-0 text-accent" />[SEGUNDA A SEXTA], [HORÁRIO DE FUNCIONAMENTO]</p></div></div><div className="flex min-h-64 items-center justify-center rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5"><div className="text-center text-primary-foreground/50"><MapPin className="mx-auto mb-3 text-accent" /><p className="text-sm">[MAPA EMBUTIDO]</p><p className="mt-1 text-xs">[Endereço para substituir]</p></div></div></div></section>

      <WhatsAppFloatingButton />

      <footer className="bg-primary px-5 pb-8 text-primary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-primary-foreground/15 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between"><a href="#inicio" className="font-serif text-lg font-bold">[NOME DA CLÍNICA]<span className="text-accent">.</span></a><div className="flex flex-wrap gap-5 text-primary-foreground/60"><a href={whatsappUrl} className="flex items-center gap-2"><Phone />[TELEFONE]</a><a href="#" className="flex items-center gap-2"><AtSign />@[INSTAGRAM]</a></div><p className="text-xs text-primary-foreground/40">© [ANO] [NOME DA CLÍNICA]. [Todos os direitos reservados.]</p></div></footer>
    </main>
  )
}
