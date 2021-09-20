import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { DeleteId } from "../actions/"



function SongOverView() {
    const Songs = useSelector(state => state.Songs.songs)
    const Filter = useSelector(state => state.Songs.filter)
    const sortBy = useSelector(state => state.Songs.sortBy)
    const dispatch = useDispatch()

    const FilterArray = Filter ? Filter : Songs
    const sorted = () => {
        if (sortBy === "a-z" || sortBy === "z-a") {
            return FilterArray.sort((a, b) => {
                const isReversed = (sortBy === "a-z") ? 1 : -1;
                return isReversed * a.title.localeCompare(b.title)
            })
        } else if (sortBy === "1-5" || sortBy === "5-1") {
            return FilterArray.sort((a, b) => {
                const isReversed = (sortBy === "1-5") ? 1 : -1;
                return isReversed * a.rating.localeCompare(b.rating)
            })
        }
    }
    const sortArray = sorted()
    const array = sortArray.map(song => {
        return (
            <div className="song-container" key={uuidv4()}>
                {song.title ? <h3>
                    Title: {song.title}
                </h3> : null}
                {song.artiest ? <h4>
                    Artiest: {song.artiest}
                </h4> : null}
                {song.genre ? <p>
                    Genre: {song.genre}
                </p> : null}
                {song.rating ? <p>
                    Rating: {song.rating}
                </p> : null}
                <img className="cover-image" src={song.img} alt={song.title} />
                <button onClick={(e) => dispatch(DeleteId(e.target.id))} id={song.id} >Delete</button>
            </div >
        )
    })
    return (
        <div className="songs-overview">
            {array}
        </div>
    )
    }

export default SongOverView