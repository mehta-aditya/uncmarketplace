

function Page() {
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
                <h1 id="title" className="text-center">Design Your Post </h1>
                <p id="description" className="description text-center">
                </p>
            <input type="file" multiple={true} required />
            </div>
            
          <div className="userprice">
            <label id="number-label" for="number" required>Price</label>
            <input type="number" name="price" id="number" min="0" max="99999" className="form-control" placeholder="30" required/>
          </div>

          <div className="userinput">
            <p>Item Category?</p>
            <select id="dropdown" name="role" className="form-control" required>
              <option disabled selected value>Select an option
              </option>
              <option>Clothing</option>
              <option>Technology</option>
              <option>School Supplies</option>
              <option>Miscellaneous</option>
            </select>
          </div>

          <div className="userinput">
            <p>Description?</p>
            <textarea className="input-textarea" name="comment" placeholder="2020 Apple Macbook Air; Gently used; 16gb 256 ssd. Contact #: 704-xxx-xxx" required></textarea>
          </div>
        <div className="userinput">
          <button type="submit" id="submit" className="submit-button" accesskey="s">
            Submit
          </button>
        </div>
      </form>
    </div>
    );

}


export default Page;