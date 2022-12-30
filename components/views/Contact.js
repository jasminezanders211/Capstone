import html from "html-literal";

export default () => html`
  <h1>Contact Me</h1>
  <div id="contactContainer">
    <form action="https://formspree.io/f/mbjbbnbp" method="POST">
      <input
        name="name"
        placeholder="Please enter your email"
        class="contactFormInput"
        type="email"
      />
      <input
        name="name2"
        placeholder="Please enter your name"
        class="contactFormInput"
        type="text"
      />
      <textarea name="name3" placeholder="Leave a comment"></textarea>
      <button id="myBtn">submit</button>
    </form>
  </div>
`;
