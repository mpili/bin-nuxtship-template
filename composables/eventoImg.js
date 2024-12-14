export function useEventoImg(evento) {
	if (evento.img) {
		return 'https://bin-dev.pockethost.io/api/files/eventi/' + evento.id + '/' + evento.img;
	} else if (evento.id_comunita) {
		return '/img/c/' + evento.id_comunita + '.jpeg';
	}
}
	