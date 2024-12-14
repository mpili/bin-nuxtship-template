export function useGiornoSettimana(data) {
	const giorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
	const d = new Date(data);
	return giorni[d.getDay()];
  }
