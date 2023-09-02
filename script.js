const jokeHolder = document.querySelector("#joke_holder");
const btn = document.querySelector(".btn");
btn.addEventListener("click", generateJoke);
generateJoke();

//using then
// function generateJoke() {
//   const url = "https://icanhazdadjoke.com/";
//   const headers = { Accept: "application/json" };

//   fetch(url, { headers: headers })
//     .then((res) => res.json())
//     .then((data) => (jokeHolder.innerHTML = data.joke));
// }

//using async
async function generateJoke() {
  const url = "https://icanhazdadjoke.com/";
  const headers = { Accept: "application/json" };
  const res = await fetch(url, { headers: headers });
  const data = await res.json();
  jokeHolder.innerHTML = data.joke;
}
