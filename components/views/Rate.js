import html from "html-literal";

export default state => html`
  <h1>Rate Your College</h1>
  <p>My first paragraph.</p>
  <h2>Florissant Valley Community college</h2>
  <h3>School Details</h3>
  <p>
    The St. Louis Community College - Florissant Valley campus is known for
    excellence in engineering and technology, in addition to a strong general
    education curriculum.
  </p>
  <h2>Washington University</h2>
  <h3>School Details</h3>
  <p>
    Washington University is a private research university with its main campus
    in St. Louis County, and Clayton, Missouri. Founded in 1853, the university
    is named after George Washington. Washington University is ranked among the
    top universities in the United States.
  </p>
  <h2>University of Missouri-St. Louis</h2>
  <h3>School details</h3>
  <p></p>
  <h2>Webster University</h2>
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

  <h2>Harris-Stowe State University</h2>
`;
function checkRate(rates) {
  if (rates.college) {
    return `${rates.average()}`;
  } else {
    return "not submitted yet";
  }
}
