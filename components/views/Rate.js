import html from "html-literal";

export default () => html`
  <h1>Rate Your College</h1>
  <p>My first paragraph.</p>
  <!-- <button id="myBtn">Rate</button> -->
  <!-- <div class="grid-container">
    <div class="grid-item grid-item-1">this can be better</div>
    <div class="grid-item grid-item-2">this can be better</div>
    <div class="grid-item grid-item-3">this can be better</div>
  </div>
  <div>
    <h2>Florissant Valley Community college</h2>
    <h2>state:</h2>
    <form>
      <textarea placeholder="Quality of education"></textarea>
      <textarea placeholder="Quality of environment"></textarea>
      <textarea placeholder="Quality of activities"></textarea>
      <button type="submit" class="rateBtn">Rate</button>
    </form>
  </div>
  <div>
    <h2>Washington University</h2>
    <h2>state:</h2>
    <form>
      <textarea placeholder="Quality of education"></textarea>
      <textarea placeholder="Quality of environment"></textarea>
      <textarea placeholder="Quality of activities"></textarea>
      <button type="submit" class="rateBtn">Rate</button>
    </form>
  </div>
  <div>
    <h2>University of Missouri-St. Louis</h2>
    <h2>state:</h2>
    <form>
      <textarea placeholder="Quality of education"></textarea>
      <textarea placeholder="Quality of environment"></textarea>
      <textarea placeholder="Quality of activities"></textarea>
      <button type="submit" class="rateBtn">Rate</button>
    </form>
  </div>
  <div>
    <h2>Webster University</h2>
    <h2>state:</h2>
    <form>
      <textarea placeholder="Quality of education"></textarea>
      <textarea placeholder="Quality of environment"></textarea>
      <textarea placeholder="Quality of activities"></textarea>
      <button type="submit" class="rateBtn">Rate</button>
    </form>
  </div>
  <div>
    <h2>Harris-Stowe State University</h2>
    <h2>state:</h2>
    <form>
      <textarea placeholder="Quality of education"></textarea>
      <textarea placeholder="Quality of environment"></textarea>
      <textarea placeholder="Quality of activities"></textarea>
      <button type="submit" class="rateBtn">Rate</button>
    </form>
  </div>
  <script></script> -->
  <h2>Florissant Valley Community college</h2>
  <div>
    <label for="environment">Environment:</label>
    <select id="environment" name="environment">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="education">Education:</label>
    <select id="education" name="education">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="activities">Activities:</label>
    <select id="activities" name="activities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="button" value="Rate" id="flovalleybtn" />
  </div>
  <h2>Washington University</h2>
  <div>
    <label for="environment">Environment:</label>
    <select id="environment" name="environment">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="education">Education:</label>
    <select id="education" name="education">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="activities">Activities:</label>
    <select id="activities" name="activities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="button" value="Rate" id="washUbtn" />
  </div>
  <h2>University of Missouri-St. Louis</h2>
  <div>
    <label for="environment">Environment:</label>
    <select id="environment" name="environment">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="education">Education:</label>
    <select id="education" name="education">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="activities">Activities:</label>
    <select id="activities" name="activities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="button" value="Rate" id="umslbtn" />
  </div>
  <h2>Webster University</h2>
  <div>
    <label for="environment">Environment:</label>
    <select id="environment" name="environment">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="education">Education:</label>
    <select id="education" name="education">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="activities">Activities:</label>
    <select id="activities" name="activities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="button" value="Rate" id="websterbtn" />
  </div>
  <h2>Harris-Stowe State University</h2>
  <div>
    <label for="environment">Environment:</label>
    <select id="environment" name="environment">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="education">Education:</label>
    <select id="education" name="education">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="activities">Activities:</label>
    <select id="activities" name="activities">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="button" value="Rate" id="harrisbtn" />
  </div>
`;
