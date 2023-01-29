export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  * [Symbol.iterator]() {
    for (const key of [...this.members]) {
      yield key;
    }
  }
}
