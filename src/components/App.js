import React from "react";
import MovieCard from "./MovieCard";


function App() {
  const title ="Akira";
  
  const  {postersurl}  ="https://flxt.tmsimg.com/assets/p16852_p_v8_ad.jpg";
  const genresArr = [" Sci-fi, Cyberpunk, Action, Fantasy, Thriller, Adventure, Drama, Apocalyptic and post-aspocalyptic fiction, Anime"];

  return (
    <div className="App">
      {/*passing down the props from the parent component */}
      <MovieCard
       title={title} genres={genresArr} />
    </div>
  );
}

export default App;