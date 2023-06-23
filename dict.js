class Dictionary {
  async getOut(user) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${user}`
    );

    const resData = await response.json();

    return resData;
  }
}
