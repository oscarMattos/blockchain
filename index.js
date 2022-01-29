const Block = require("./src/block"),
  Blockchain = require("./src/blockchain");

const SilveryChain = new Blockchain();

const BLOCK_1 = new Block("Hola");
SilveryChain.block = BLOCK_1.data;

const BLOCK_2 = new Block("Mundo");
SilveryChain.block = BLOCK_2.data;

const BLOCK_3 = new Block("!");
SilveryChain.block = BLOCK_3.data;

const BLOCK_4 = new Block([
  1,
  2,
  3,
  "asdasdasdsad",
  { name: "oscar", lastname: "mattos" },
]);
SilveryChain.block = BLOCK_4.data;

console.log(SilveryChain.chain);

// console.log(SilveryChain.getBlock(2));

// console.log(SilveryChain.chain.length);