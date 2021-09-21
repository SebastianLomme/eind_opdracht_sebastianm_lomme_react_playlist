import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import SongCard from "./SongCard";

function SongOverView() {
    const Songs = useSelector(state => state.Songs.songs);
    const Filter = useSelector(state => state.Songs.filter);
    const sortBy = useSelector(state => state.Songs.sortBy);
    const FilterArray = Filter ? Filter : Songs;
    const sorted = () => {
        if (sortBy === "a-z title" || sortBy === "z-a title") {
            return FilterArray.sort((a, b) => {
                const isReversed = (sortBy === "a-z title") ? 1 : -1;
                return isReversed * a.title.localeCompare(b.title);
            });
        } else if (sortBy === "a-z artiest" || sortBy === "z-a artiest") {
            return FilterArray.sort((a, b) => {
                const isReversed = (sortBy === "a-z artiest") ? 1 : -1;
                return isReversed * a.artiest.localeCompare(b.artiest);
            });
        } else if (sortBy === "1-5" || sortBy === "5-1") {
            return FilterArray.sort((a, b) => {
                const isReversed = (sortBy === "1-5") ? 1 : -1;
                return isReversed * a.rating.localeCompare(b.rating);
            });
        }
    };
    const sortArray = sorted();
    const array = sortArray.map(song => {
        return (
            <SongCard song={song} key={uuidv4()} />
        );
    });
    return (
        <div className="songs-overview">
            {array}
        </div>
    );
};

export default SongOverView;