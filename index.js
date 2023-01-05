import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  console.table(`${state}`);
  document.querySelector("#root").innerHTML = `

  ${Nav(store.Links)}
  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
`;
  afterRender(state);
  router.updatePageLinks();
}
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Rate") {
    //query the form, add event listener "submit", build out when event happens "i was submitted"
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log(inputList.college.value);

      // let numEnv = parseInt(requestData.environment);
      // let numEdu = parseInt(requestData.education);
      // let numAct = parseInt(requestData.activities);
      // let sum = numEnv + numEdu + numAct;
      // let avg = sum / 3;
      const requestData = {
        college: inputList.college.value,
        environment: parseInt(inputList.environment.value),
        education: parseInt(inputList.education.value),
        activities: parseInt(inputList.activities.value),
        average: function() {
          let sum = this.environment + this.education + this.activities;
          let avg = sum / 3;
          return avg;
        }
      };
      console.log(requestData);
      store.Rate.rates.push(requestData);
      router.navigate("/Rate");
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // Replace the key provided here with your own key from openweathermap
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
