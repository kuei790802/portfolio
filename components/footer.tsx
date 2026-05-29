import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 md:py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-lg font-bold tracking-tight text-primary">
              <span className="text-brand-teal">Josh Kuei</span>
            </Link>
            <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground md:mx-0">
              Operations-driven PM / BA · 9 年通路與跨部門協調經驗，搭配 AI 協作工作流交付數位專案。
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">導覽</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">首頁</Link></li>
              <li><Link href="/cases/liangye-7eleven" className="text-sm text-muted-foreground hover:text-primary">良野 7-Eleven</Link></li>
              <li><Link href="/cases/insurance-bot" className="text-sm text-muted-foreground hover:text-primary">Insurance Bot</Link></li>
              <li><Link href="/cases/toeic-snack" className="text-sm text-muted-foreground hover:text-primary">TOEIC Snack</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">聯絡</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="mailto:kuei790802@gmail.com" className="text-sm text-muted-foreground hover:text-primary">Email</Link></li>
              <li><Link href="https://github.com/kuei790802" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Josh Kuei. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p className="text-xs text-muted-foreground">Built with Next.js & Shadcn UI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
