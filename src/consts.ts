// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Yupay';
export const SITE_DESCRIPTION = 'Educación financiera para Bolivia. Aprende a ahorrar, invertir y planificar tu futuro con contenido en español adaptado a la realidad boliviana.';

/** Prefija cualquier ruta interna con la base del sitio. Uso: href={url('/blog')} */
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // quita trailing slash si existe
	return base + '/' + path.replace(/^\//, '');
}
