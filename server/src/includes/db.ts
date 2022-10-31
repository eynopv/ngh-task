import areasData from '../../db/areas.json';
import spectrumData from '../../db/spectrum.json';

export function getSpectrumByArea(areaId: number) {
  const area = getAreaById(areaId);
  if (!area) return null;

  const [ from, to ] = area.frequencies;
  return getSpectrumBetweenFrequencies(from, to);
}

export function getAreaById(id: number) {
  return getAreas().find((area) => area.id === id);
}

export function getAreas() {
  return areasData;
}

export function getSpectrumBetweenFrequencies(from: number, to: number) {
  return getSpectrum().spectrum.filter((spectrum) => spectrum.x >= from && spectrum.x <= to);
}

export function getSpectrumInfo() {
  const data = getSpectrum();

  return {
    id: data.id,
    date: data.date
  }
}

export function getSpectrum() {
  return spectrumData;
}
