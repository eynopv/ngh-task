export type Area = {
  id: number,
  name: string,
  frequencies: number[]
};

export type  SpectrumInfo = {
  id: string,
  date: string
};

export type Point = {
  x: number,
  y: number
};

export type SpectrumData = Point[];
