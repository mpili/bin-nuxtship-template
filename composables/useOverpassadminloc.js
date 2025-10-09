export function useOverpassadminloc(id, admin_level) {
	const idArea = useOverpassarea(id);
	const area = 'area(id:'+idArea+')->.searchArea;';
	const eell = 'relation["boundary"="administrative"]["admin_level"="' + admin_level + '"](area.searchArea)';
	return area + eell;
}
