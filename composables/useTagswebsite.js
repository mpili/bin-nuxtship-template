const keys = ['website', 'contact:website'];

// function urlSanitizzahttps(url) {
//     if (url) return '';
//     if (url.startsWith('http://') || url.startsWith('https://')) {
//         return url;
//     }
//     return `https://${url}`;
// }

export function useTagswebsite(tags) {
    if (tags) {
        for (const key of keys) {
            if (tags[key]) {
                // return urlSanitizzahttps(tags[key]);
                return tags[key];
            }
        }
    }
    return null;
}
