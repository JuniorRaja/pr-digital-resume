/**
 * Resume/CV template created with Bootstrap 5 by @MartinTorres
 */
const resume = {
  firstName: "Karla Andreina",
  lastName: "Román Calderón",
  jobTitle: "Asistente Virtual / Analista de e-commerce",
  city: "Medellin",
  postalCode: "050023",
  country: "Colombia",
  phone: "+57 3046172245",
  email: "karlaromanc@gmail.com",
  links: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/karla-andreina-román-calderón",
    },
  ],
  education: [
    {
      school: "Universidad Alejandro de Humboldt",
      degree: "Profesional",
      graduationDate: "2013",
      description: "Licenciada en Comercio Internacional",
    },
  ],
  skills: [
    "Organizada",
    "Detallista",
    "Puntual",
    "Responsable",
    "Gestión de Clientes",
    "Analisis de productos",
    "Administracion de email",
    "Suit de Microsoft 360",
  ],
  languages: ["Ingles", "Español"],

  professionalSummary: `Licenciada en Comercio Internacional, me especializo como Asistente Virtual, con habilidades destacadas en gestión de clientes y análisis de E-commerce. Mi enfoque es potencializar marcas, brindando soporte integral a empresas de diversos tamaños. A lo largo de mi carrera, he cultivado la convicción de que la comunicación asertiva es esencial para lograr objetivos de manera efectiva.`,
  employmentHistory: [
    {
      jobTitle: "Consultor Amazon Seller",
      startDate: "Abril 2023",
      endDate: "Actualmente",
      employer: "Hey!Home",
      city: "Medellín/Colombia",
      achievements: [
        "Realicé análisis detallados de productos utilizando Jungle Scout, aumentando la identificación de oportunidades de mercado en un 25%.",
        "Establecí y gestioné cuentas en Amazon Seller, mejorando la visibilidad y las conversiones de productos en un 30%",
        "Llevé a cabo una búsqueda proactiva de proveedores confiables, mejorando la calidad y eficiencia en la cadena de suministro en un 20.",
        "Negocié eficientemente condiciones para la adquisición y envío de productos, logrando reducciones de costos y tiempos de entrega en un 15%.",
        "Lideré la ejecución exitosa del lanzamiento de nuevos productos, asegurando una introducción efectiva en el mercado con un aumento del 40% en las ventas.",
        "Desarrollé estrategias integrales para marketing y ventas, resultando en un incremento medible del 25% en ingresos y participación en el mercado.",
      ],
    },
    {
      jobTitle: "Líder de Operaciones",
      startDate: "Abril 2019",
      endDate: "Noviembre 2023",
      employer: "Soluciones Depco S.A.S",
      city: "Medellín/Colombia",
      achievements: [
        "Dirigí y coordiné actividades operativas de transporte de carga internacional, asegurando puntualidad en los servicios.",
        "Optimicé rutas y tiempos de tránsito, manteniendo comunicación proactiva con clientes y proveedores para entregas seguras y a tiempo.",
        "Implementé sistemas de seguimiento, presentando informes periódicos con recomendaciones para mayor eficiencia, reducción de costos y mejora en la calidad del servicio.",
      ],
    },
  ],
  photo: "",
};

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(", "),
});

new Vue({
  el: "#app",
  data: formatResume(resume),
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector("body").classList.remove("d-none");
}
if (customElements) {
  customElements.whenDefined("animatable-component").then(animatableLoaded);
} else animatableLoaded();
