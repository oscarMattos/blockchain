class Blockchain {
  // Private Field
  #chain;
  #getLastBlockHash;
  #isValidBlock;

  constructor() {
    this.#chain = [];
    this.#getLastBlockHash = () => this.#chain[this.#chain.length - 1]["hash"];
    this.#isValidBlock = (block) =>
      typeof block === "object" &&
      block.hasOwnProperty("data") &&
      block.hasOwnProperty("hash") &&
      block.hasOwnProperty("timestamp");
  }

  // Methods
  getBlock(index) {
    return this.#chain[index];
  }

  // Getters
  get chain() {
    return this.#chain;
  }

  // Setters
  set block(block) {
    this.#isValidBlock(block)
      ? (() => {
          this.#chain.length
            ? this.#chain.push({
                ...block,
                prevHash: this.#getLastBlockHash(),
              })
            : this.#chain.push({
                ...block,
                prevHash: 0,
              });
        })()
      : (() => {
          throw {
            message: `Please check the block. It should be an object with the keys: data, hash, and timestamp. The current block was: ${JSON.stringify(
              block
            )}`,
            name: "Block Error",
          };
        })();
  }
}

module.exports = Blockchain;
