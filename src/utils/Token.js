class Token {
  constructor() {
    this.key = "jwt";
  }
  get() {
    return localStorage.getItem(this.key);
  }
  save(token) {
    localStorage.setItem(this.key, token);
  }
  remove() {
    localStorage.removeItem(this.key);
  }
}

const token = new Token();

export default token;
