axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
var fun1 = document.querySelector(".pp-1");
fun1.addEventListener("click", function () {
  inner.innerHTML = "";
  getComment();
});
var fun2 = document.querySelector(".pp-2");
fun2.addEventListener("click", function () {
  inner.innerHTML = "";
  getComment2();
});

let inner = document.querySelector(".banner");
async function getComment() {
  let user = await axios.get("/users?_limit=5");
  us = await user.data;
  let apie = await axios.get("/posts?_limit=5");
  api = apie.data;
  api.forEach(function (p) {
    let userr = document.querySelector(".user");
    us.filter(function (l) {
      let html = ` <div class="bg-white user py-3 px-5 mt-3 rounded-2 d-flex align-items-center row gap-3">
                 <img class="col-3 col-lg-1" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="usersimg">
                <p class="col-12 col-lg-8 text-left">${p.body}</p>
                 <button id="uder" class="ms-auto btn btn-1 col-12 col-lg-1 bg-info text-white px-4 py-2">User</button>
              <div class="col-12 d-none align-items-center text-center row g-lg-0 g-3">
            <h3 class="col-12 col-lg-3">
            <i class="fa-solid fa-user"></i>${l.name}
                   </h3>
                   <h5 class="col-12 col-lg-3">
                     <i class="fa-solid fa-envelope"></i>${l.email}
                   </h5>
                   <h5 class="col-12 col-lg-3">
                     <i class="fa-solid fa-globe"></i>${l.website}
                   </h5>
                   <h5 class="col-12 col-lg-3">
                     <i class="fa-solid fa-location-dot"></i>${l.address.city}
                   </h5>
                 </div>
                 </div>`;
      inner.innerHTML += `${html}`;
      let btn = document.getElementById("uder");
      let none = document.querySelector(".d-none");
      btn.addEventListener("click", function () {
        none.classList.remove("d-none");
        none.classList.add("d-flex");
      });
    });
  });

  
  
}
getComment();

async function getComment2() {
  let apie = await axios.get("/posts?_limit=5&_page=2");
  api = await apie.data;
  api.forEach(function (p) {
    let html = ` <div class="bg-white user py-3 px-5 mt-3 rounded-2 d-flex align-items-center row gap-3">
                 <img class="col-3 col-lg-1" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="usersimg">
                <p class="col-12 col-lg-8 text-left">${p.body}</p>
                 <button class="ms-auto btn btn-1 col-12 col-lg-1 bg-info text-white px-4 py-2">User</button>
            </div>`;
    inner.innerHTML += `${html}`;
  });
}
// async function getAbout() {
//   let userr = document.querySelector(".user");
//   let user = await axios.get("/users?_limit=5");
//   us = await user.data;
//   console.log(us);
//   us.forEach(function (p) {
//     let html2 = ``;
//     userr.innerHTML += `${html2}`;
//   });
// }
// (async function getAlbums() {
//   let apie = await fetch("https://jsonplaceholder.typicode.com/photos");
//   let api = await apie.json();

//   console.log(api);
// })();
// console.log(axios);

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// axios.defaults.headers["x-auth-token"] = "Qandaydir token";

// (async function () {
//   let res = await axios.get("/users");
//   console.log(res.data);
// })();

// (async function () {
//   let res = await axios.post("/users", {
//     title: "Test",
//     userId: 3,
//   });
//   console.log(res.data);
// })();
