export type Language = "en" | "es";

export interface Translations {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		home: string;
		projects: string;
		about: string;
	};
	hero: {
		available: string;
		location: string;
		experience: string;
		role: string;
		name: string;
		description: string;
		ctaProjects: string;
		ctaContact: string;
		stats: {
			deliveries: string;
			deliveriesValue: string;
			stack: string;
			stackValue: string;
			focus: string;
			focusValue: string;
		};
		contact: {
			writeMe: string;
		};
	};
	experience: {
		title: string;
		items: Array<{
			date: string;
			title: string;
			company: string;
			description: string;
		}>;
	};
	projects: {
		title: string;
		featured: string;
		caseStudy: string;
		/** ahora es un objeto */
		items: Record<
			string,
			{
				title: string;
				description: string;
			}
		>;
	};
	about: {
		title: string;
		description: string;
		priorities: { label: string; value: string };
		work: { label: string; value: string };
		hobbies: string;
	};
	languages: {
		title: string;
		items: Array<{ name: string; level: string }>;
	};
	footer: {
		copyright: string;
		about: string;
		contact: string;
	};
}

export const translations: Record<Language, Translations> = {
	en: {
		meta: {
			title: "Samuel Vargas Portfolio. Flutter & Backend Developer",
			description:
				"Meet Samuel Vargas, Flutter and backend developer with experience in Python, Flask, and Django, based in Bogotá, Colombia. Learn more about his experience and projects.",
		},
		nav: {
			home: "Home",
			projects: "Projects",
			about: "About me",
		},
		hero: {
			available: "Available for projects",
			location: "🌍 Bogotá, Colombia",
			experience: "⚡ +1 year building with Flutter",
			role: "Flutter & Backend Developer",
			name: "Hello, I'm Samuel Vargas",
			description:
				"I'm a Flutter and backend developer with experience in Python, Flask, and Django. I create sharp mobile experiences and robust APIs, focusing on products that combine performance, scalability, and modern design.",
			ctaProjects: "View featured projects",
			ctaContact: "Schedule a call",
			stats: {
				deliveries: "Deliveries",
				deliveriesValue: "4 public projects",
				stack: "Stack",
				stackValue: "Flutter · Python · Django · Flask",
				focus: "Focus",
				focusValue: "Full-stack development & UX",
			},
			contact: {
				writeMe: "Write me",
			},
		},
		experience: {
			title: "Experience",
			items: [
				{
					date: "October 2024 - March 2025",
					title: "Programming Tutor",
					company: "Tutorías con ingenio",
					description:
						"As a programming tutor at the National University of Colombia, I have supported students in developing computational skills, applying cooperative learning strategies to foster collaborative problem-solving. Additionally, I have promoted autonomous work, guiding students in building their own knowledge and strengthening their ability to tackle challenges independently.",
				},
			],
		},
		projects: {
			title: "Projects",
			featured: "Featured case",
			caseStudy: "Case Study",
			items: {
				unchaza: {
					title: "UNChaza",
					description:
						"UNChaza is a mobile application developed with Flutter to connect students with informal businesses within the university. It facilitates product and entrepreneurship searches through an intuitive interface and efficient query system. The app integrates JWT token authentication and allows product searches by name, optimizing user experience and promoting the growth of student businesses.",
				},
				studybuddy: {
					title: "StudyBuddy",
					description:
						"StudyBuddy is a mobile application developed with Flutter and Firebase to facilitate organization and collaboration among students. It implements secure authentication and cloud storage, allowing efficient management of study groups and material sharing.",
				},
				evaluacion: {
					title: "Teacher Evaluation",
					description:
						"The Teacher Evaluation System is a web platform developed with Django and MySQL to collect and manage anonymous teacher evaluations. It implements user authentication and ensures data security and confidentiality, facilitating efficient and structured feedback.",
				},
				colorpicker: {
					title: "Color Picker - A Flutter App with Arduino",
					description:
						"Color Picker is a mobile application that allows controlling an RGB LED connected to an Arduino UNO via Bluetooth connection. The app allows selecting colors from the mobile device, sending corresponding values to the Arduino, which adjusts the LED in real-time. It's ideal for learning about hardware control with serial communication and offers a simple and visual experience to change colors dynamically.",
				},
				runpath: {
					title: "RunPath",
					description:
						"RunPath is an application designed for users to share and discover jogging routes in Bogotá. The system was developed using a microservices architecture, prioritizing quality attributes such as security, performance, scalability, fault tolerance, and interoperability. Architectural patterns including Broker, Secure Channel, and Hot Spare Replication were applied. Deployed on Google Kubernetes Engine (GKE) in GCP.",
				},
			},
		},
		about: {
			title: "About me",
			description:
				"I'm a Flutter and backend developer who enjoys building complete solutions from mobile apps to robust APIs. I create scalable products using clean architecture, reusable components, and frameworks like Django and Flask.",
			priorities: {
				label: "What I prioritize",
				value: "User experience, performance, scalability, and maintainability.",
			},
			work: {
				label: "How I work",
				value: "Short iterations, clear communication, and data-driven decisions.",
			},
			hobbies:
				"When I'm not programming, I play soccer and practice languages. I like learning new things that also end up helping my projects.",
		},
		languages: {
			title: "Languages",
			items: [
				{ name: "Spanish", level: "Native" },
				{ name: "English", level: "B2" },
				{ name: "German", level: "B1" },
				{ name: "French", level: "A2" },
				{ name: "Catalan", level: "A2" },
			],
		},
		footer: {
			copyright: "Almost all rights reserved",
			about: "About me",
			contact: "Contact",
		},
	},

	/** ------------------ ESPAÑOL ------------------ */

	es: {
		meta: {
			title: "Portafolio de Samuel Vargas. Desarrollador Flutter & Backend",
			description:
				"Conoce a Samuel Vargas, desarrollador Flutter y backend con experiencia en Python, Flask y Django, ubicado en Bogotá, Colombia. Conoce más sobre su experiencia y proyectos.",
		},
		nav: {
			home: "Inicio",
			projects: "Proyectos",
			about: "Acerca de mí",
		},
		hero: {
			available: "Disponible para proyectos",
			location: "🌍 Bogotá, Colombia",
			experience: "⚡ +1 año construyendo en Flutter",
			role: "Desarrollador Flutter & Backend",
			name: "Hola, soy Samuel Vargas",
			description:
				"Soy desarrollador Flutter y backend con experiencia en Python, Flask y Django. Creo experiencias móviles nítidas y APIs robustas, enfocándome en productos que combinan rendimiento, escalabilidad y diseño moderno.",
			ctaProjects: "Ver proyectos destacados",
			ctaContact: "Agenda una llamada",
			stats: {
				deliveries: "Entregas",
				deliveriesValue: "4 proyectos públicos",
				stack: "Stack",
				stackValue: "Flutter · Python · Django · Flask",
				focus: "Foco",
				focusValue: "Desarrollo full-stack & UX",
			},
			contact: {
				writeMe: "Escríbeme",
			},
		},
		experience: {
			title: "Experiencia",
			items: [
				{
					date: "Octubre 2024 - Marzo 2025",
					title: "Tutor de programación",
					company: "Tutorías con ingenio",
					description:
						"Como tutor de programación en la Universidad Nacional de Colombia, he apoyado a estudiantes en el desarrollo de habilidades computacionales, aplicando estrategias de aprendizaje cooperativo para fomentar la resolución conjunta de problemas. Además, he promovido el trabajo autónomo, guiando a los estudiantes en la construcción de su propio conocimiento y fortaleciendo su capacidad para abordar desafíos de manera independiente.",
				},
			],
		},
		projects: {
			title: "Proyectos",
			featured: "Caso destacado",
			caseStudy: "Ver estudio del caso",
			items: {
				unchaza: {
					title: "UNChaza",
					description:
						"UNChaza es una aplicación móvil desarrollada con Flutter para conectar a estudiantes con los negocios informales dentro de la universidad. Facilita la búsqueda de productos y emprendimientos a través de una interfaz intuitiva y un sistema de consulta eficiente. La app integra autenticación con JWT tokens y permite la búsqueda de productos por nombre, optimizando la experiencia del usuario y promoviendo el crecimiento de los negocios estudiantiles.",
				},
				studybuddy: {
					title: "StudyBuddy",
					description:
						"StudyBuddy es una aplicación móvil desarrollada con Flutter y Firebase para facilitar la organización y colaboración entre estudiantes. Implementa autenticación segura y almacenamiento en la nube, permitiendo gestionar grupos de estudio y compartir materiales de forma eficiente.",
				},
				evaluacion: {
					title: "Evaluación Docente",
					description:
						"El Sistema de Evaluación Docente es una plataforma web desarrollada con Django y MySQL para recopilar y gestionar evaluaciones anónimas de profesores. Implementa autenticación de usuarios y garantiza la seguridad y confidencialidad de los datos, facilitando una retroalimentación eficiente y estructurada.",
				},
				colorpicker: {
					title: "Color Picker - A Flutter App with Arduino",
					description:
						"Color Picker es una aplicación móvil que permite controlar un LED RGB conectado a un Arduino UNO mediante una conexión Bluetooth. La app permite seleccionar colores desde el móvil, enviando los valores correspondientes al Arduino, que ajusta el LED en tiempo real. Es ideal para aprender sobre control de hardware con comunicación serial y ofrece una experiencia sencilla y visual para cambiar colores de forma dinámica.",
				},
				runpath: {
					title: "RunPath",
					description:
						"RunPath es una aplicación diseñada para que los usuarios puedan compartir y descubrir rutas de jogging en Bogotá. El sistema fue desarrollado usando una arquitectura de microservicios, priorizando atributos de calidad como seguridad, rendimiento, escalabilidad, tolerancia a fallos e interoperabilidad. Se aplicaron patrones arquitectónicos como Broker, Canal Seguro y Replicación Hot Spare. Desplegado en Google Kubernetes Engine (GKE) en GCP.",
				},
			},
		},
		about: {
			title: "Sobre mí",
			description:
				"Soy desarrollador Flutter y backend que disfruta construir soluciones completas desde aplicaciones móviles hasta APIs robustas. Creo productos escalables usando arquitectura limpia, componentes reutilizables y frameworks como Django y Flask.",
			priorities: {
				label: "Lo que priorizo",
				value: "Experiencia de usuario, rendimiento, escalabilidad y mantenibilidad.",
			},
			work: {
				label: "Cómo trabajo",
				value: "Iteraciones cortas, comunicación clara y decisiones basadas en datos.",
			},
			hobbies:
				"Cuando no estoy programando, juego fútbol y practico idiomas. Me gusta aprender cosas nuevas que también terminan ayudando a mis proyectos.",
		},
		languages: {
			title: "Idiomas",
			items: [
				{ name: "Español", level: "Nativo" },
				{ name: "Inglés", level: "B2" },
				{ name: "Alemán", level: "B1" },
				{ name: "Francés", level: "A2" },
				{ name: "Catalán", level: "A2" },
			],
		},
		footer: {
			copyright: "Casi todos los derechos reservados",
			about: "Sobre mí",
			contact: "Contacto",
		},
	},
};
