const { RESTDataSource } = require('apollo-datasource-rest');

class RandomUserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.randomuser.me/";
  }

  async getRandomUser() {
    const results = await this.get("");
    return results.results;
  }
}

module.exports = RandomUserAPI;