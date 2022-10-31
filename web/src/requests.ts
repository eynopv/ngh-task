const apiUrl = 'http://localhost:3000';

export function fetchAreas() {
  const url = buildUrl('/areas');

  return fetch(url)
    .then((res) => {
      return res.json();
    })
}

export function fetchSpectrumAreaData(areaId: number) {
  const url = buildUrl(`/spectrum/${areaId}`);

  return fetch(url)
    .then((res) => {
      return res.json();
    });
}

export function fetchSpectrumInfo(): Promise<any> {
  const url = buildUrl('/spectrum');

  return fetch(url)
    .then((res) => {
      return res.json();
    });
}

function buildUrl(endpoint: string) {
  return new URL(endpoint, apiUrl);
}
