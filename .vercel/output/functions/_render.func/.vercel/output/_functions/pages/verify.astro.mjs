import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_W4HOiPcB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h1>Verifica tu certificado</h1> <p>Ingresa el código de verificación que se encuentra en tu certificado.</p> <form> <label for="code">Código de verificación</label> <input type="text" id="code" name="code"> <button type="submit">Verificar</button> </form> </div>`;
}, "D:/EPG-UNAP/certificados-app/src/pages/verify/index.astro", void 0);

const $$file = "D:/EPG-UNAP/certificados-app/src/pages/verify/index.astro";
const $$url = "/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
