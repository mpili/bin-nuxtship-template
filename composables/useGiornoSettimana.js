export function useGiornoSettimana(data) {
	const giorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
	if (!data) {
		return '';
	}
	const d = new Date(data);
	return giorni[d.getDay()];
  }
