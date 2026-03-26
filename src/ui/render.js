function renderCards(container, list) {
  if (!list.length) {
    container.innerHTML = '<div class="empty-state">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="place-card">
      <div class="place-photo">${p.emoji}</div>
      ${p.isNew ? '<span class="new-badge">NEW</span>' : ''}
      <div class="place-name">${p.name}</div>
    </div>
  `).join('');
}

module.exports = { renderCards };