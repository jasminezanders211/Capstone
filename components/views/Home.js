import html from "html-literal";
import basketball from "../../assets/images/sport.jpg";
import entrance from "../../assets/images/cool.jpg";
import books from "../../assets/images/reading.jpg";
import edu from "../../assets/images/study.jpg";

export default state => html`
  <div id="homediv">
    <div class="imgContainer" id="first">
      <h1>Tell us about your college</h1>
      <p class="imgDescription"></p>
      <img id="entranceImg" class="cake" src=${entrance} />
    </div>
    <div class="imgContainer" id="second">
      <h1>tell us about the environment</h1>
      <p class="imgDescription"></p>
      <img id="bookImg" class="cake" src=${books} />
    </div>
    <div class="imgContainer" id="third">
      <h1>Tell us about the athletics program</h1>
      <p class="imgDescription"></p>
      <img id="sportImg" class="cake" src=${basketball} />
    </div>
    <div class="imgContainer" id="forth">
      <h1>Tell us about the education</h1>
      <p class="imgDescription"></p>
      <img id="homeworkImg" class="cake" src=${edu} />
    </div>
  </div>

  <h4>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h4>
`;
