import html from "html-literal";
import washington from "../../assets/images/washu.svg.png";
import harris from "../../assets/images/harris.png";
import umsl from "../../assets/images/umsl.svg.png";
import webster from "../../assets/images/webster.svg.png";
import stlcc from "../../assets/images/stlcc.png";
export default state => html`
  <h1>Rate Your College</h1>
  <h2 id="rateSubHead">Choose from any local college below</h2>
  <div id="collegeContainer">
    <div class="localCollege">
      <h2 class="collegeTitle">Florissant Valley Community college</h2>

      <p>
        The St. Louis Community College - Florissant Valley campus is known for
        excellence in engineering and technology, in addition to a strong
        general education curriculum.
      </p>
      <a
        href="https://stlcc.edu/?utm_source=dicom&utm_medium=ppc&gclid=CjwKCAiA8OmdBhAgEiwAShr40yrXwx7ZYp9qIKHT54LkqPhIN2CNGlkj_3KOHU24Hwaxf9187HEihRoCZAwQAvD_BwE"
      >
        <img id="flo" class="collegeLogo" src=${stlcc}
      /></a>
    </div>

    <div class="localCollege">
      <h2 class="collegeTitle">Washington University</h2>

      <p>
        Washington University is a private research university with its main
        campus in St. Louis County, and Clayton, Missouri. Founded in 1853, the
        university is named after George Washington. Washington University is
        ranked among the top universities in the United States.
      </p>
      <a href="https://wustl.edu/">
        <img id="wash" class="collegeLogo" src=${washington}
      /></a>
    </div>

    <div class="localCollege">
      <h2 class="collegeTitle">University of Missouri-St. Louis</h2>

      <p>
        With more than 15,000 students, the University of Missouri–St. Louis is
        the St. Louis region's premier public research university. UMSL provides
        excellent learning experiences and leadership opportunities to a diverse
        student body whose influence on the region upon graduation is immense.
      </p>
      <a href="https://www.umsl.edu/">
        <img id="ummy" class="collegeLogo" src=${umsl}
      /></a>
    </div>

    <div class="localCollege">
      <h2 class="collegeTitle">Webster University</h2>

      <p>
        Established in 1915 by the Sisters of Loretto, who sought to make
        education accessible to all, Webster has an extraordinary history
        reflecting a determination to equalize higher education.
      </p>
      <a href="https://www.webster.edu/">
        <img id="webby" class="collegeLogo" src=${webster}
      /></a>
    </div>

    <div class="localCollege">
      <h2 class="collegeTitle">Harris-Stowe State University</h2>

      <p>
        Harris–Stowe State University (HSSU) is a historically black public
        university in St. Louis, Missouri. The university offers 50 majors,
        minors, and certificate programs in education, business, and arts &
        sciences. It is a member-school of the Thurgood Marshall College Fund.
        It is immediately east of the Saint Louis University campus. The school
        enrolled 1,630 students in 2019.
      </p>
      <a href="https://www.hssu.edu/">
        <img id="harry" class="collegeLogo" src=${harris}
      /></a>
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

        <table>
          <tr>
            <th>Name</th>
            <th>Current Rate</th>
          </tr>

          ${state.avgData.map(
            rate => `<tr><td>${rate.college}</td><td>${rate.average}</td></tr>`
          )}
        </table>
      </div>
    </form>
  </div>
`;
