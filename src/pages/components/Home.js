import React,{useState, useCallback, memo}from 'react';
import Movie from './Movie';
import LoadingBar from 'top-loading-bar/dist';

const Home = () => {
    const [value, setValue] = useState('');
    const [movie, setMovie] = useState([]);
    const [progress, setProgress] = useState(0);

const getMovie = async()=>{
    setProgress(10)
    try {
          let url = `https://www.omdbapi.com/?apikey=b27b396b&t=${value}`;
    let parsedData= await fetch(url);
    setProgress(30)
    let data = await parsedData.json();
    setProgress(50)
    setMovie(data);
    setProgress(75)
    ShowResult()
    setProgress(100)
    // console.log(data)  
    } catch (error) {
        console.log(error)
    }
};

const ShowResult = useCallback(()=>{

            return(     
        <Movie  src={movie.Poster} name={movie.Title} plot={movie.Plot} actors={movie.Actors} awards={movie.Awards} earning={movie.BoxOffice} country={movie.Country} director={movie.Director} genre={movie.Genre} lang={movie.Language} release={movie.Released} time={movie.Runtime} type={movie.Type} writer={movie.Writer} imdb={movie.imdbRating} res={movie.Response} val={value} />
    )
},[movie]);
  return (
<>

<LoadingBar
        color='#FFFF00'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

    <div className='mt-2 md:w-3/5 md:text-xl'>
        <div className=' flex flex-row justify-center'>
            <input className='border border-black rounded-md p-1 ' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <button className='p-2 bg-blue-900 rounded-lg text-yellow-400 mx-1 hover:bg-blue-600' onClick={getMovie}>Search</button>
        </div>
        <ShowResult/>
    </div>
    </>
  )
}

export default memo(Home);