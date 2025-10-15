export function useSlugify(text) {
  if (!text) {
    return '';
  }

  // Normalizza gli accenti (es. é -> e) e converte in minuscolo
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Sostituisci gli spazi con -
    .replace(p, c => b.charAt(a.indexOf(c))) // Sostituisci i caratteri accentati
    .replace(/&/g, '-and-') // Sostituisci & con 'and'
    .replace(/[^\w\-]+/g, '') // Rimuovi tutti i caratteri non validi
    .replace(/\-\-+/g, '-') // Sostituisci trattini multipli con uno solo
    .replace(/^-+/, '') // Rimuovi trattini all'inizio
    .replace(/-+$/, '') // Rimuovi trattini alla fine
}
