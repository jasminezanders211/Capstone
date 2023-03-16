import html from "html-literal";
import confetti from "../../assets/images/confetti.jpg";
export default () => html`
  <div class="bioContainer">
    <h1>Hello!</h1>
    <img id="blow" src=${confetti} />
    <p>
      College Rate is a college rating site that gathers information about<br />
      different colleges in the St. Louis area and puts them in a list
      ranking<br />
      them from education, environment and activities.<br />
    </p>
  </div>
`;
