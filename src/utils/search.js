function searchPlaces(places, query) {
  if (!query.trim()) return [];

  return places.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );
}

module.exports = { searchPlaces };