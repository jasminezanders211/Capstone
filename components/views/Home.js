import html from "html-literal";

export default state => html`
  <p>still working on this.</p>
  <div>
    <img src="hats.jpg" id="myImage" />
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
