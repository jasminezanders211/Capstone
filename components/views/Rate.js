import html from "html-literal";

export default () => html`
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  <button id="myBtn">Rate</button>
  <div class="grid-container">
    <div class="grid-item grid-item-1">this can be better</div>
    <div class="grid-item grid-item-2">this can be better</div>
    <div class="grid-item grid-item-3">this can be better</div>
  </div>
  <script>
    document.getElementById("myBtn").addEventListener("click", function() {
      alert("Hello World!");
    });
  </script>
`;
