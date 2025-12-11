import { 
  Hammer, 
  Home, 
  ClipboardCheck, 
  Ruler, 
  Clock, 
  ShieldCheck, 
  Banknote, 
  Award 
} from 'lucide-react';

export const WHATSAPP_NUMBER = "541130249544";
export const INSTAGRAM_HANDLE = "@manosalaobraconstructora";
export const EMAIL_ADDRESS = "contacto@manosalaobra.com.ar";
export const LOCATION = "CABA, Buenos Aires, Argentina";

export const SERVICES = [
  {
    title: "Obras Llave en Mano",
    description: "Construcción completa de viviendas desde cero. Nos encargamos de todo: diseño, permisos, construcción y entrega final.",
    icon: Home
  },
  {
    title: "Reformas y Remodelaciones",
    description: "Transformamos tu hogar o local comercial. Ampliaciones, renovaciones de cocinas y baños, y modernización de espacios.",
    icon: Hammer
  },
  {
    title: "Dirección de Obra",
    description: "Supervisión profesional de tu proyecto. Control riguroso de tiempos, calidad de materiales y presupuesto.",
    icon: ClipboardCheck
  },
  {
    title: "Proyecto + Dirección",
    description: "Servicio integral desde el diseño hasta la entrega. Asesoramiento personalizado en cada etapa del proceso.",
    icon: Ruler
  }
];

export const FEATURES = [
  {
    title: "Experiencia Comprobada",
    description: "Años en el rubro con proyectos exitosos que avalan nuestra trayectoria.",
    icon: Award
  },
  {
    title: "Presupuesto Transparente",
    description: "Sin sorpresas ni letra chica. Costos claros desde el inicio del proyecto.",
    icon: Banknote
  },
  {
    title: "Cumplimiento de Plazos",
    description: "Respetamos los tiempos acordados para que disfrutes tu hogar cuando esperás.",
    icon: Clock
  },
  {
    title: "Garantía de Calidad",
    description: "Trabajamos con materiales de primera línea y mano de obra calificada.",
    icon: ShieldCheck
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Casa Minimalista Zona Norte",
    category: "Vivienda",
    image: "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Remodelación Cocina Integral",
    category: "Remodelación",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Oficinas Corporativas Centro",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Duplex Moderno",
    category: "Vivienda",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Renovación Baño Principal",
    category: "Remodelación",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Estructura Edificio Residencial",
    category: "Obra en Proceso",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    text: "Excelente trabajo. Cumplieron con los plazos y el presupuesto. La remodelación de mi cocina quedó espectacular.",
    role: "Cliente Particular"
  },
  {
    id: 2,
    name: "Ana Laura Martínez",
    text: "Contratamos el servicio llave en mano para nuestra casa y fue la mejor decisión. Se encargaron de todo.",
    role: "Cliente Llave en Mano"
  },
  {
    id: 3,
    name: "Estudio Arquitectura Z",
    text: "Como profesionales, recomendamos a Manos a la Obra por su seriedad y calidad de ejecución en obra.",
    role: "Socio Estratégico"
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Nos contactás y agendamos una visita sin cargo."
  },
  {
    number: "02",
    title: "Relevamiento",
    description: "Visitamos el lugar, tomamos medidas y escuchamos tus ideas."
  },
  {
    number: "03",
    title: "Presupuesto",
    description: "Te presentamos una propuesta detallada y transparente."
  },
  {
    number: "04",
    title: "Ejecución",
    description: "Arrancamos la obra con seguimiento constante y reportes."
  },
  {
    number: "05",
    title: "Entrega",
    description: "Tu proyecto terminado, limpio y listo para disfrutar."
  }
];
