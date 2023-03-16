import html from "html-literal";

export default () => html`
  <div id="bigWrapper">
    <div id="contactContainer">
      <h1>Contact Me</h1>
      <div id="formContainer">
        <form action="https://formspree.io/f/mbjbbnbp" method="POST">
          <div>
            <input
              name="name"
              placeholder="Please enter your email"
              class="contactFormInput"
              type="email"
            />
          </div>
          <div>
            <input
              name="name2"
              placeholder="Please enter your name"
              class="contactFormInput"
              type="text"
            />
          </div>
          <div>
            <textarea
              class="contactFormInput"
              name="name3"
              placeholder="Leave a comment"
              rows="10"
              cols="20"
            ></textarea>
          </div>
          <button id="myBtn">submit</button>
        </form>
      </div>
    </div>
  </div>
`;
