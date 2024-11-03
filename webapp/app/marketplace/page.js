import "../CSS/styles.css";

function Posting(image_uri, name, price) {
  return (
    <main>
        <label><section id="postings">
            <div>
                <Image src={image_uri}/>
         </div>
        </section>{name} <label>{price}</label></label>
    </main>
  );
}


function Page() {
  return (
    <>
        <h1>Tar Heel Trade</h1>
          <hr></hr>
    <header>   
        <nav>
            <div id="sidenav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Clothes</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">School Supplies</a></li>
                    <li><a href="#">Sign Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
  <Posting image_uri="https://media.istockphoto.com/id/1189188305/photo/male-bighorn-sheep-ram-chewing-with-jaw-sideways-grinding-his-food.jpg?s=612x612&w=0&k=20&c=o7J5sPXmtekad_vyJ7A0aJ7dSTrqDMibyJ8JSliYi3s="
   name="ram painting" 
   price="$100000"/>
    </>
  );
}

export default Page;
