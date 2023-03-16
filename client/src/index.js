import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  console.table(`${state}`);
  document.querySelector("#root").innerHTML = `

  ${Header(state)}
  ${Nav(store.Links)}
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

      const requestData = {
        college: inputList.college.value,
        environment: parseInt(inputList.environment.value),
        education: parseInt(inputList.education.value),
        activities: parseInt(inputList.activities.value)
      };
      function avg() {
        let sum =
          requestData.environment +
          requestData.education +
          requestData.activities;
        let avg = sum / 3;
        return avg;
      }
      // adding the average to the requestData object that will be stored in state so it can be accessed easily in next step
      requestData.average = avg();

      store.Rate.rates.push(requestData);
      // iterating all submitted rate objects that are stored in state so that the average can be dynamically updated upon each submission
      // ideally this would be accessing rates that have been submitted to a database, but did not have time to implement
      const avgs = store.Rate.rates.filter(
        college => college.college === requestData.college
      );
      const newAvg =
        avgs.reduce((total, next) => total + next.average, 0) / avgs.length;

      // Switch statement is checking to see which college the submitted rate was for, the reassigning the new average to the respective college's "average" value
      switch (requestData.college) {
        case "Florissant Valley Community college":
          store.Rate.avgData[0].average = newAvg;
          break;
        case "University of Missouri-St. Louis":
          store.Rate.avgData[1].average = newAvg;
          break;
        case "Harris-Stowe State University":
          store.Rate.avgData[2].average = newAvg;
          break;
        case "Washington University":
          store.Rate.avgData[3].average = newAvg;
          break;
        case "Webster University":
          store.Rate.avgData[4].average = newAvg;
          break;
      }

      console.log(store.Rate.avgData);
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
      // Created a case for Rate and giving avgData a "baseline" to display when page loads
      case "Rate":
        store.Rate.avgData = [
          {
            college: "Florissant Valley Community college",
            average: 0
          },
          {
            college: "University of Missouri-St. Louis",
            average: 0
          },
          {
            college: "Harris-Stowe State University",
            average: 0
          },
          {
            college: "Washington University",
            average: 0
          },
          {
            college: "Webster University",
            average: 0
          }
        ];
        done();
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
