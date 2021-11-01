const pop = document.getElementById("contePop");
const detalle = document.getElementById("detalle");
const productoGrid = document.getElementById("productosGrid");
let ArrayJoyas;
export const logicaJoya = () => {
  const imas = require("../ima/joyas/*.jpg");

  // determino la sección

  const laurl = () => {
    if (location.href.split("/").slice(-1) == "rings.html") {
      return import("../datos/rings.json");
  }
    if (location.href.split("/").slice(-1) == "necklace.html") {
      return import("../datos/necklace.json");
  }
    if (location.href.split("/").slice(-1) == "pendants.html") {
      return import("../datos/pendants.json");
  }
  };
  laurl()
    .then((res) => {
      return res;
    })
    .then((joyas) => {
      //llamo funcion para generar los thumbs
      joyas.forEach((element, index) => {
        const joya = `
            <div class="producto"
            data-id="${index + 1}"
            data-genero="${element.genero}"
            data-descripcion="${element.descripcion}"
            >
            <a href="#">
            <img src="${imas[element.imagen]}" alt="${element.titulo}" />
            <span>${element.titulo}</span>
            </a>
            </div>`;
        productoGrid.innerHTML += joya;
      });
      const cadaJoya = document.querySelectorAll(".producto");
      return cadaJoya;
    })
    .then((res) => {
      res.forEach((evento) => {
        evento.querySelector("a").addEventListener("click", (e) => {
          e.preventDefault();
          pop.classList.add("mostrar");
          detalle.querySelector("h2").innerHTML = evento.innerText;
          detalle.querySelector("p").innerHTML = evento.dataset.descripcion;
          detalle.querySelector("img").src = evento.querySelector("img").src;
          detalle.querySelector(".ask a").href = `
          https://api.whatsapp.com/send?phone=525554348182&text=Hello,%20I%20am%20interested%20in%20obtaining%20more%20information%20about%20this%20jewel:%20${evento.firstElementChild.innerText}
          `
        });
      });

      const arrayJoya = Array.from(res);
      men.addEventListener("click", (e) => {
        e.preventDefault();
        //agrego la clase de activo
        activar(e);
        filtrar("hombre", arrayJoya);
      });

      woman.addEventListener("click", (e) => {
        e.preventDefault();
        //agrego la clase de activo
        activar(e);
        filtrar("mujer", arrayJoya);
      });

      all.addEventListener("click", (e) => {
        e.preventDefault();
        //agrego la clase de activo
        activar(e);
        filtrar("all", arrayJoya);
      });
    });

  const activar = (nodo) => {
    const filtro = document.querySelectorAll(".filtro a");
    filtro.forEach((liga) => {
      if (liga.classList.contains("activado")) {
        liga.classList.remove("activado");
      }
    });
    nodo.target.classList.add("activado");
  };

  pop.addEventListener("click", (e) => {
    pop.classList.remove("mostrar");
  });
};

const men = document.getElementById("men");
const woman = document.getElementById("woman");
const all = document.getElementById("all");

const filtrar = (sexo, cadaJoya) => {
  if (sexo === "all") {
    cadaJoya.forEach((joya) => {
      productoGrid.appendChild(joya);
    });
    return;
  }

  //  limpio el div
  while (productoGrid.firstChild) {
    productoGrid.removeChild(productoGrid.lastChild);
  }

  const filtrado = cadaJoya.filter((genero) => {
    return genero.dataset.genero === sexo;
  });

  filtrado.forEach((joya) => {
    productoGrid.appendChild(joya);
  });
};
