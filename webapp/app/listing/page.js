

function Page() {
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <main>
                <h1>Tar Heel Trade</h1>
                    <hr></hr>
                <header>   
                <nav>
                    <div id="sidenav">
                        <ul>
                            <li><a href="/marketplace">Home</a></li>
                            <li><a href="#">Sign Out</a></li>

                        </ul>
                    </div>
                </nav>
                </header>
                <body> 
                <div className="container">
                
                    <h2 id="title" className="text-center">Design Your Post </h2>
                    <p id="description" className="description text-center">

                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" multiple={true} required />
                </form>
                
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
                    
                </div>
            
            </body> 
            </main>       
            </form>
        </div>
    );

}


export default Page;