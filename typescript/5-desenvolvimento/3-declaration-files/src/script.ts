// declare global {
//   interface Usuario {
//     nome: string;
//     id: number;
//   }
// }

export interface Produto {
  nome: string;
  preco: string;
}

const livro: Produto = {
  nome: "O senhor dos Anéis",
  preco: "200",
};
