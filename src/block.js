class Block {
  // Private Fields
  #data;
  #getHash;

  constructor(data = []) {
    this.#getHash = () => Math.random();
    this.#data = {
      data: JSON.stringify(data),
      hash: this.#getHash(),
      timestamp: Date.now(),
    };
  }
  
  // Getters
  get data() {
    return this.#data;
  }
} 

module.exports = Block;
