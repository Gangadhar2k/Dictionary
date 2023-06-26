class Dictionary {
  async getOut(user) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${user}`
    );

    setTimeout(const resData = await response.json(),2000);

    return resData;
  }
}
