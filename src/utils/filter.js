export function applyFilterLogic(places, activeFilters) {
  let result = [...places];

  if (activeFilters.time) {
    const t = activeFilters.time;
    if (t.includes('День')) result = result.filter(p => p.time === 'day');
    else if (t.includes('Ночь')) result = result.filter(p => p.time === 'night');
    else if (t.includes('24/7')) result = result.filter(p => p.time === '24/7');
  }

  if (activeFilters.type) {
    const t = activeFilters.type;
    if (t.includes('Еда')) result = result.filter(p => p.type === 'food');
    else if (t.includes('Развлечения')) result = result.filter(p => p.type === 'entertainment');
    else if (t.includes('Природа')) result = result.filter(p => p.type === 'nature' || p.type === 'sport');
    else if (t.includes('Шопинг')) result = result.filter(p => p.type === 'shopping');
    else if (t.includes('Культура')) result = result.filter(p => p.type === 'culture');
  }

  if (activeFilters.people) {
    const n = activeFilters.people;
    if (!n.includes('+') && !n.includes('Компания')) {
      const num = parseInt(n);
      result = result.filter(p => p.people.includes(num));
    } else {
      result = result.filter(p => p.people.includes(5));
    }
  }

  return result;
}