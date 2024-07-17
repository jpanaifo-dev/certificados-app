import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_W4HOiPcB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const exportPdf = async (certificate) => {
  console.log("Descargando certificado", certificate);
  const doc = new jsPDF();
  const imageUrl = "/images/certificado";
  try {
    const imageResponse = await fetch(imageUrl);
    const imageBlob = await imageResponse.blob();
    const reader = new FileReader();
    reader.onload = function() {
      const base64Image = reader.result;
      doc.addImage(base64Image, "JPEG", 15, 40, 180, 180);
      doc.text(
        `Nombres y Apellidos: ${certificate["nombres y apellidos"]}`,
        15,
        230
      );
      doc.text(`Curso: ${certificate.curso}`, 15, 240);
      doc.text(`Grupo: ${certificate.grupo}`, 15, 250);
      doc.save("certificado.pdf");
    };
    reader.readAsDataURL(imageBlob);
  } catch (error) {
    console.error("Error al descargar la imagen:", error);
  }
};

function generateAvatar(name) {
  const [firstName, lastName] = name.split(" ");
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}
const Table = (props) => {
  useState(false);
  useState(null);
  const { certificates } = props;
  const handleDownload = async (certificate) => {
    await exportPdf(certificate);
  };
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          children: "Nombres y Apellidos"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          children: "Curso"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          children: "Grupo"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          children: "Descargar"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { className: "bg-white divide-y divide-gray-200", children: [
      certificates?.map((certificate) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 h-10 w-10", children: /* @__PURE__ */ jsx("span", { className: "h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full", children: generateAvatar(certificate["nombres y apellidos"]) }) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: certificate["nombres y apellidos"] })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-900 uppercase", children: certificate.curso }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-900", children: certificate.grupo }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleDownload(certificate),
            className: "text-indigo-600 hover:text-indigo-900",
            children: "Descargar"
          }
        ) })
      ] }, certificate.id)),
      certificates.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
        "td",
        {
          className: "px-6 py-4 whitespace-nowrap",
          colSpan: 4,
          children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-900 text-center p-6", children: "No se encontraron certificados" })
        }
      ) })
    ] })
  ] }) });
};

const ButtonClear = (props) => {
  const { onClick, type } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: type || "button",
      id: "search-button",
      onClick,
      className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-colors duration-300",
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-trash",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }
              ),
              /* @__PURE__ */ jsx("path", { d: "M4 7l16 0" }),
              /* @__PURE__ */ jsx("path", { d: "M10 11l0 6" }),
              /* @__PURE__ */ jsx("path", { d: "M14 11l0 6" }),
              /* @__PURE__ */ jsx("path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }),
              /* @__PURE__ */ jsx("path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" })
            ]
          }
        ),
        "Limpiar"
      ]
    }
  );
};

const ButtonSearch = (props) => {
  const { onClick, type } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: type || "button",
      id: "search-button",
      onClick,
      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-colors duration-300",
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-search",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }
              ),
              /* @__PURE__ */ jsx("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
              /* @__PURE__ */ jsx("path", { d: "M21 21l-6 -6" })
            ]
          }
        ),
        "Buscar"
      ]
    }
  );
};

function findCertificates(dni, data) {
  return data.filter(
    (certificate) => certificate.documento === dni
  );
}
const ConsultSection = () => {
  const [textSearch, setTextSearch] = useState("");
  const [certificates, setCertificates] = useState(null);
  async function onLoad() {
    const certificatesData = await fetch("/data.json");
    const data = await certificatesData.json();
    const certificates2 = findCertificates(textSearch, data);
    setCertificates(certificates2);
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "w-full lg:max-w-6xl bg-white lg:p-6 flex flex-col gap-5", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-medium text-2xl", children: "Ingrese la información solicitada para descargar su certificado." }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "search-form",
        className: "",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Nombre" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "dni",
                id: "dni",
                value: textSearch,
                onChange: (e) => setTextSearch(e.target.value),
                className: "border border-gray-300 rounded-md w-full p-2",
                placeholder: "Ingrese tu número de DNI",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              ButtonSearch,
              {
                type: "button",
                onClick: () => {
                  onLoad();
                }
              }
            ),
            textSearch !== "" && /* @__PURE__ */ jsx(
              ButtonClear,
              {
                type: "button",
                onClick: () => {
                  setTextSearch("");
                  setCertificates(null);
                }
              }
            )
          ] })
        ] })
      }
    ),
    textSearch !== "" && certificates ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-medium text-2xl", children: "Certificados disponibles" }) }),
      /* @__PURE__ */ jsx(Table, { certificates })
    ] }) : null
  ] }) });
};

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/EPG-UNAP/certificados-app/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutCommon;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link rel="icon" href="/favicon.svg" type="image/x-icon"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name=""${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml"><link rel="sitemap" type="application/xml"><meta name="author" content="Escuela de Postgrado de la UNAP | Oficina de Soporte Técnico"><meta name="copyright" content="MIT">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-baground"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/EPG-UNAP/certificados-app/src/layouts/LayoutCommon.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="search-button" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
Buscar
</button>`;
}, "D:/EPG-UNAP/certificados-app/src/components/ButtonSearch.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full top-0 z-50 h-16 bg-white dark:bg-gray-800 shadow-md"> <main class="container flex items-center py-2 justify-between"> <a href="
  /"> <img src="/logos/unap-logo.svg" alt="" width="90"> </a> <div> ${renderComponent($$result, "ButtonDark", $$ButtonDark, {})} </div> </main> </nav>`;
}, "D:/EPG-UNAP/certificados-app/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$TableCertificates = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TableCertificates;
  const { certificates } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descargar</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${certificates.map((certificate) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <div class="flex items-center"> <div class="flex-shrink-0 h-10 w-10"> <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits" alt=""> </div> <div class="text-sm font-medium text-gray-900"> ${certificate.nombres} ${certificate.apellidos} </div> </div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm text-gray-900">${certificate.curso}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <span class="text-sm text-gray-900">${certificate.fecha}</span> </td> <td class="px-6 py-4 whitespace-nowrap"> <a href="#" target="_blank" class="text-indigo-600 hover:text-indigo-900">
Descargar
</a> </td> </tr>`)} </tbody> </table>`;
}, "D:/EPG-UNAP/certificados-app/src/components/TableCertificates.astro", void 0);

const $$ButtonDark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-sb7z2fc7> <button id="themeToggle" class="text-black dark:text-white p-2 rounded-md" data-astro-cid-sb7z2fc7> <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" data-astro-cid-sb7z2fc7> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-sb7z2fc7></path> </svg> <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun hidden" data-astro-cid-sb7z2fc7> <circle cx="12" cy="12" r="4" data-astro-cid-sb7z2fc7></circle> <path d="M12 2v2" data-astro-cid-sb7z2fc7></path> <path d="M12 20v2" data-astro-cid-sb7z2fc7></path> <path d="m4.93 4.93 1.41 1.41" data-astro-cid-sb7z2fc7></path> <path d="m17.66 17.66 1.41 1.41" data-astro-cid-sb7z2fc7></path> <path d="M2 12h2" data-astro-cid-sb7z2fc7></path> <path d="M20 12h2" data-astro-cid-sb7z2fc7></path> <path d="m6.34 17.66-1.41 1.41" data-astro-cid-sb7z2fc7></path> <path d="m19.07 4.93-1.41 1.41" data-astro-cid-sb7z2fc7></path> </svg> </button> </main>  `;
}, "D:/EPG-UNAP/certificados-app/src/components/astro/ButtonDark.astro", void 0);

const $$LayoutBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderComponent($$result, "NavBar", $$NavBar, {})} <section class="relative h-72 lg:h-96"> <img src="/images/banner.webp" alt="banner" class="object-cover w-full h-full"> <div class="absolute bg-black/40 z-30 top-0 bottom-0 right-0 left-0 flex flex-col justify-center"> <section class="flex flex-col gap-2 items-center justify-center bg-blue-950/60 p-6 w-full container rounded-xl backdrop-blur-sm h-48"> <h1 class="text-white text-xl sm:text-2xl lg:text-4xl font-bold">
Universidad Nacional de la Amazonía Peruana
</h1> <h3 class="text-gray-300 text-xl">
Facultad de Ingeniería de Sistemas e Informática
</h3> </section> </div> </section> <section class="bg-amber-500 h-4"></section> <section class="flex flex-col items-center container h-screen"> ${renderSlot($$result, $$slots["default"])} </section> <footer> <section class="bg-blue-950 text-white p-4"> <div class="container mx-auto"> <p class="text-center">
©
${(/* @__PURE__ */ new Date()).getFullYear()}
Todos los derechos reservados
</p> </div> </section> </footer> </main>`;
}, "D:/EPG-UNAP/certificados-app/src/layouts/LayoutBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <!-- <script>\n  const form = document.getElementById('search-form')\n  import data from '@/utils/json/data.json'\n\n  function findCertificate(dni: string) {\n    return data.certificados.find((certificado) => certificado.dni === dni)\n  }\n\n  function handleSubmit(event: Event) {\n    event.preventDefault()\n    const formData = new FormData(event.target as HTMLFormElement)\n    const name = formData.get('dni')\n\n    const certificate = findCertificate(name as string)\n    console.log(certificate)\n    return certificate\n  }\n\n  form?.addEventListener('submit', handleSubmit)\n<\/script> -->"])), renderComponent($$result, "LayoutCommon", $$LayoutCommon, { "title": "Obt\xE9n tu certificado", "description": "Obt\xE9n tu certificado de aprobaci\xF3n de los cursos de la Escuela de Postgrado de la UNAP." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutBanner", $$LayoutBanner, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="section max-w-7xl flex flex-col gap-2"> <h1 class="text-4xl text-center dark:text-white">¡ Bienvenidos ! Descarga tu certificado de asistente</h1> <p class="text-gray-500 dark:text-gray-200 text-center">
A través del siguiente modulo usted podrá realizar la descarga de su
        certificado en calidad de participante. De los diferentes cursos de la
        facultad de ingeniería de sistemas e informática de la universidad
        nacional de la Amazonia Peruana el día 06 de Julio del 2024 con una
        duración de 12 horas académicas.
</p> </section>  ${renderComponent($$result3, "ConsultSection", ConsultSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/core", "client:component-export": "ConsultSection" })} ` })} ` }));
}, "D:/EPG-UNAP/certificados-app/src/pages/index.astro", void 0);

const $$file = "D:/EPG-UNAP/certificados-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
