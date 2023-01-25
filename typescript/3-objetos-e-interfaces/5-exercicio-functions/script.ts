function arredondarParaCima(value: string): string;
function arredondarParaCima(value: number): number;
function arredondarParaCima(value: string | number): string | number {
  if (typeof value === "number") return Math.ceil(value);
  else return Math.ceil(Number(value)).toString();
}

console.log(arredondarParaCima("8.5"));
console.log(arredondarParaCima(8.5));
