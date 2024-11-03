

function Page() {
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="container">
                <h1 id="title" class="text-center">Design Your Post </h1>
                <p id="description" class="description text-center">
                </p>
            <input type="file" multiple={true} required />
            </div>
            
          <div class="userprice">
            <label id="number-label" for="number" required>Price</label>
            <input type="number" name="price" id="number" min="0" max="99999" class="form-control" placeholder="30" required/>
          </div>

          <div class="userinput">
            <p>Item Category?</p>
            <select id="dropdown" name="role" class="form-control" required>
              <option disabled selected value>Select an option
              </option>
              <option>Clothing</option>
              <option>Technology</option>
              <option>School Supplies</option>
              <option>Miscellaneous</option>
            </select>
          </div>

          <div class="userinput">
            <p>Description?</p>
            <textarea class="input-textarea" name="comment" placeholder="2020 Apple Macbook Air; Gently used; 16gb 256 ssd. Contact #: 704-xxx-xxx" required></textarea>
          </div>
        <div class="userinput">
          <button type="submit" id="submit" class="submit-button" accesskey="s">
            Submit
          </button>
        </div>
      </form>
    </div>
    );

}


export default Page;