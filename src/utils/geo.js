const MUNICIPIOS_ATENDIDOS = [
  { nome: 'Altamira', lat: -3.2033, lng: -52.2064 },
  { nome: 'Brasil Novo', lat: -3.2979, lng: -52.5344 },
  { nome: 'Medicilândia', lat: -3.4464, lng: -52.8889 },
  { nome: 'Tucumã', lat: -6.7458, lng: -51.1531 },
  { nome: 'São Félix do Xingu', lat: -6.6425, lng: -51.9904 },
  { nome: 'Igarapé-Miri', lat: -1.9809, lng: -48.9597 },
];

function distanciaKm(a, b) {
  const raioTerraKm = 6371;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const deltaLat = ((b.lat - a.lat) * Math.PI) / 180;
  const deltaLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return 2 * raioTerraKm * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export function municipioDoPonto(gps) {
  if (!gps || typeof gps.lat !== 'number' || typeof gps.lng !== 'number') {
    return 'Município não informado';
  }

  const ponto = { lat: gps.lat, lng: gps.lng };
  const maisProximo = MUNICIPIOS_ATENDIDOS
    .map((municipio) => ({
      ...municipio,
      distancia: distanciaKm(ponto, municipio),
    }))
    .sort((a, b) => a.distancia - b.distancia)[0];

  return maisProximo?.nome || 'Município não informado';
}
