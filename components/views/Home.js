import html from "html-literal";
import hat from "../../assets/images/hats.jpg";
export default state => html`
  <p>What should I put.</p>
  <div>
    <img src=${hat} id="graduation" />
  </div>
  <main>
    <div>
      <h2 id="para1">College List</h2>
      <ol>
        <li>Florissant Valley Community College</li>
        <li>Washington University</li>
        <li>place holder</li>
        <li>place holder</li>
        <li>place holder</li>
      </ol>
      <h3>Another Place Holder</h3>
      <ol>
        <li>place holder</li>
        <li>place holder</li>
        <li>place holder</li>
      </ol>
    </div>
  </main>
  <h4>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h4>
`;
