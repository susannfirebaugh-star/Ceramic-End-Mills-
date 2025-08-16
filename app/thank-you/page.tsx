import Script from "next/script"
import { CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Gracias | Cotización Enviada",
  description:
    "Gracias por su consulta. Nuestro equipo técnico se pondrá en contacto con usted en 24 horas con su cotización personalizada y datos de corte.",
}

export default function ThankYouPage() {
  const colors = {
    primary: "#0F3460",
    dark: "#1A1A2E",
    accent: "#FF9800",
    light: "#F5F5F7",
  }

  return (
    <>
      <Script
        id="conversion-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-625061154/_1i9CITkj4QbEKLahqoC'});`,
        }}
      />

      <main
        className="min-h-[70vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${colors.primary}, ${colors.dark})` }}
      >
        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-400" aria-hidden />
              <h1 className="text-2xl md:text-3xl font-extrabold">¡Gracias! Su solicitud ha sido enviada.</h1>
            </div>
            <p className="text-white/80">
              Nuestro equipo técnico se pondrá en contacto con usted en 24 horas con una cotización personalizada, datos
              de corte recomendados y próximos pasos.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="text-sm text-white/70">
                Referencia: El evento de conversión de envío de formulario de cotización ha sido registrado.
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold shadow-lg"
                  style={{ backgroundColor: colors.accent, color: "white" }}
                >
                  Volver al Inicio
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <a
                  href="mailto:Linda@czqttools.com"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold border border-white/30 text-white/90 hover:bg-white/10"
                >
                  Contactar Soporte
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-sm text-white/70">
              Consejo: Para asistencia más rápida, incluya su material, dureza (HRC), diámetro de herramienta y cantidad
              en su email.
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
