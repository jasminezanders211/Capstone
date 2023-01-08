import html from "html-literal";
import washington from "../../assets/images/washu.svg.png";
import harris from "../../assets/images/harris.png";
import umsl from "../../assets/images/umsl.svg.png";
import webster from "../../assets/images/webster.svg.png";
import stlcc from "../../assets/images/stlcc.png";
export default state => html`


  <h1>Rate Your College</h1>
  <h2 id="rateSubHead">Choose from any local college below</h2>
  <div class="localCollege">
    <h2>Florissant Valley Community college</h2>
    <h3>School Details</h3>
    <p>
      The St. Louis Community College - Florissant Valley campus is known for<br/>
      excellence in engineering and technology, in addition to a strong general<br/>
      education curriculum.<br/>
    </p>
    <img class="collegeLogo" src=${stlcc} />
  </div>


  <div id="flo" class="localCollege">
    <h2>Washington University</h2>
    <h3>School Details</h3>
    <p>
      Washington University is a private research university with its main<br/>
      campus in St. Louis County, and Clayton, Missouri. Founded in 1853, the<br/>
      university is named after George Washington. Washington University is<br/>
      ranked among the top universities in the United States.
    </p>
    <img id="wash" class="collegeLogo"  src=${washington} />
</div>


<div class="localCollege">
    <h2>University of Missouri-St. Louis</h2>
    <h3>School Details</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan<br/>
      quis tortor vestibulum dapibus. Curabitur blandit enim eget quam egestas,<br/>
      ac ullamcorper justo aliquam. Duis malesuada quam non mauris facilisis<br/>
      efficitur. Aliquam aliquet tincidunt purus non sollicitudin. In vitae
      pulvinar risus.
    </p>
    <img id="ummy" class="collegeLogo" src=${umsl} />
</div>


<div class="localCollege">
    <h2>Webster University</h2>
    <h3>School Details</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan<br/>
      quis tortor vestibulum dapibus. Curabitur blandit enim eget quam egestas,<br/>
      ac ullamcorper justo aliquam. Duis malesuada quam non mauris facilisis<br/>
      efficitur. Aliquam aliquet tincidunt purus non sollicitudin. In vitae<br/>
      pulvinar risus.
    </p>
    <img id="webby" class="collegeLogo" src=${webster} />
</div>


<div class="localCollege">
    <h2>Harris-Stowe State University</h2>
    <h3>School Details</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan<br/>
      quis tortor vestibulum dapibus. Curabitur blandit enim eget quam egestas,<br/>
      ac ullamcorper justo aliquam. Duis malesuada quam non mauris facilisis<br/>
      efficitur. Aliquam aliquet tincidunt purus non sollicitudin. In vitae<br/>
      pulvinar risus.
    </p>
    <img id="harry" class="collegeLogo" src=${harris} />
</div>


    <form id="rate" method="POST" action="">
      <h2>Choose the college you want to rate!</h2>
      <div>
        <label for="college">College:</label>
        <select id="college" name="college" required>
          <option value="">Select a College</option>
          <option value="Florissant Valley Community college"
            >Florissant Valley Community college</option
          >
          <option value="Washington University">Washington University</option>
          <option value="University of Missouri-St. Louis"
            >University of Missouri-St. Louis</option
          >
          <option value="Webster University">Webster University</option>
          <option value="Harris-Stowe State University"
            >Harris-Stowe State University</option
          >
        </select>
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
        <input type="submit" name="submit" value="Rate!" />
      </div>
    </form>
    ${state.rates.map(
      rate =>
        `the average of the rates you selected for ${
          rate.college
        } is: ${rate.average()}`
    )}<br />
    <div></div>
  </div>
`;
function checkRate(rates) {
  if (rates.college) {
    return `${rates.average()}`;
  } else {
    return "not submitted yet";
  }
}
