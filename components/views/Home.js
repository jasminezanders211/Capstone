import html from "html-literal";

export default state => html`
  <div class="grid-container">
    <div class="grid-item grid-item-1">zoo animals</div>
    <div class="grid-item grid-item-2">cee animals</div>
    <div class="grid-item grid-item-3">cee animals</div>
  </div>
  <p>still working on this.</p>
  <main>
    <div>
      <img src="hats.jpg" class="myImage" />
      <h2 id="para1">Place Holder</h2>
      <ol>
        <li>place holder</li>
        <li>place holder</li>
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
