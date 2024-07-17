import { c as createComponent, r as renderTemplate, b as createAstro } from '../chunks/astro/server_W4HOiPcB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- ---
import type { ICertificate } from "@/types/ICertificate";
import data from "../../../public/data.json";
import { PdfView } from "@/components/react/PdfView";

const { slug } = Astro.params;
---

<div>
  {user ? <PdfView userdata={user} /> : <h1>Usuario no encontrado</h1>}
</div> -->`;
}, "D:/EPG-UNAP/certificados-app/src/pages/[slug]/index.astro", void 0);

const $$file = "D:/EPG-UNAP/certificados-app/src/pages/[slug]/index.astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
