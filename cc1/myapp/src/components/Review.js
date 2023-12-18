import React, { useState } from 'react';
import '../assets/Css/Review.css';


function Review() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSearch = () => {
    // Perform the search logic here based on the searchQuery
    // For now, let's just set dummy books for demonstration purposes
    const dummyBooks = [
      {
        // title: 'The Last true love story',
        description:"The Last True Love Story is a tender multi-generational story that's as much about the meaning of family as it is about falling in love",
        rating: 4,
        reviews: 1200,
      },
      {
        // title: 'Sample Book 2',
        description: 'Another sample book description.',
        rating: 3,
        reviews: 800,
      },
      // Add more books as needed
    ];

    setSearchedBooks(dummyBooks);
  };

  return (
    <>
      <div className="search">
        <input
          className="find"
          type="text"
          placeholder="Type the name of the book"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="mis" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

      {searchedBooks.length > 0 && (
        <div className="wrapper">
          {searchedBooks.map((book, index) => (
            <div key={index} className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="hi">
                      <h1>{book.title}</h1>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{book.description}</p>
                    <div className="ratings">
                      <p>Rating:</p>
                      {[...Array(book.rating)].map((_, starIndex) => (
                        <p key={starIndex} className="fa-sharp fa-solid fa-star"></p>
                      ))}
                    </div>
                    <p>Reviews: {book.reviews}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
  
        {/* <div className="search">
        <input className="find" type="text" placeholder="Type the name of book"/>
        <button type="submit" class="mis">SEARCH</button>
          </div> */}
         <div>
         <div class="wrapper">
  <h1>BoOk ThAt StOlEd YoUr HeArTs</h1>
  <div class="cols">
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div class="hi">
            {/* <p></p>
            <span></span> */}
            </div>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>“The Last True Love Story is a tender multi-generational story that's as much about the meaning of family as it is about falling in love".</p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 1,200</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div className="hi1">

            </div>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>"Reza is an Iranian boy . He’s terrified that someone will guess the truth he can barely acknowledge about himself."</p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            {/* <p class="fa-sharp fa-solid fa-star"></p> */}
            <p class="fa-sharp fa-solid fa-star"> 800</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div class="hi2">
            </div>
            {/* <p>Strizzes</p>
            <span>Lorem ipsum</span> */}
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>He Body in the Woods was exciting and original. Realistic in detail, from the crime, to the secret lives and insecurities of today's teens."</p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 500</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div className="hi3">

            </div>
            {/* <p>Clossyo</p>
            <span>Lorem ipsum</span> */}
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>"Claire Contreras is a New York Times Best Selling Author. Her books range from romantic suspense to contemporary romance and are currently translated into over fifteen languages".</p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 3,000</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Rendann</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Reflupper</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Acirassi</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Sohanidd</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
          </div>*/}
  </div>
</div> 
         </div>
        </>
    )
}
export default Review;