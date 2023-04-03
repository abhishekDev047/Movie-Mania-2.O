import React,{memo} from "react";

const Movie = ({src,name,plot,actors,awards,earning,country,director,genre,lang ,release,time,type ,writer,imdb,res,val}) => {
 
  if (res === "False") {
    return(
      <div className="text-center text-lg mt-5"> Sorry could not found <i>"{val}"</i> </div>
    )
  }
  if(res === "True"){
  return (
  <div className="mt-2 bg-yellow-50">
    <div className="flex flex-col items-center">
      <p className="text-2xl">{name}</p><hr />
      <p className="px-2 text-center">{plot}</p>
    </div>

    <div className="items-center flex flex-col">
      <img src={src} alt="Movie-Mania 2.O"  className="rounded-md"/>
    </div>

    <div className="px-2 flex flex-col flex-wrap text-lg">
      <p className="">Actors: <i className="text-base ml-1">{actors}</i></p>
      <p> Director:<i className="text-base ml-1">{director}</i></p>
      <p> Writers:<i className="text-base ml-1">{writer}</i></p>
      <p> Released on:<i className="text-base ml-1">{release}</i></p>
      <p> Earning:<i className="text-base ml-1">{earning}</i></p>
      <p> Awards:<i className="text-base ml-1">{awards}</i></p>
      <p> Genre:<i className="text-base ml-1">{genre}</i></p>
      <p> Languages:<i className="text-base ml-1">{lang}</i></p>
      <p> Countries:<i className="text-base ml-1">{country}</i></p>
      <p> Time:<i className="text-base ml-1">{time}</i></p>
      <p> Type:<i className="text-base ml-1">{type}</i></p>
      <p> IMDb ratings:<i className="text-base ml-1">{imdb}</i></p>
    </div>
  </div>
  );
  }
  else{
  
  }
 
};

export default memo(Movie);
