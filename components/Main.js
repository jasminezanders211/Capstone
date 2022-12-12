import html from "html-literal";
import * as views from "./views";

export default state => {
  return html`
    ${views[state.view](state)}
  `;
};
