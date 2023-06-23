const input = document.querySelector("#input");

// instantion
const dict = new Dictionary();

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const invalue = input.value;
  if (invalue === "") alert("enter any word");
  else
    dict.getOut(invalue).then(function (data) {
      const interface = new UI();
      interface.showUi(data);
    });
});

class UI {
  showUi(data) {
    const datas = data[0];
    const word = datas.phonetics[1].text;
    const cleanedWord = word.replace(/\//g, "");
    // console.log(datas.phonetics[1].text);
    document.querySelector(
      ".output"
    ).innerHTML = ` <div class="card card-body mt-5">
        <div class="row">
          <div class="col">
            <h1>${datas.word}</h1>
            <h5>${datas.meanings[0].definitions[0].definition}</h5>
           
          </div>
          <div class="col">
            <h1>${cleanedWord}</h1>
          </div>
        </div>
      </div>`;
  }
}
