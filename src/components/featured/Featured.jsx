import './featured.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie"? "Movies": "Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">crime</option>
            <option value="fantasy">fantasy</option>
            <option value="historical">historical</option>
            <option value="horror">horror</option>
            <option value="romance">romance</option>
            <option value="sci-fi">sci-fi</option>
            <option value="thriller">thriller</option>
            <option value="western">western</option>
            <option value="animation">animation</option>
            <option value="drama">drama</option>
            <option value="documentary">documentary</option>
          </select>
        </div>
      )}
    <img src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfISGAfAg4VuEdz_mYXCY9txFDuqdwyNEsskMcM0tbJ1Dw4q3PopiAe_WTnzTL5fBiNQ8SNRBzJ5EHH5Z_30yrVzUoPpA4GrEA30.jpg?r=34d" alt="" />
    <div className="info">
      <img src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXkTAK6txM4i4lG6NsynEkR7tvic3iqH473s85IrBQOCu_a_5u_hBS2jb61Z3z0OxdjdD8ybG7EfaK9H0NB50l49RaibmDSKp6xX7xf8qgG0KOEFm4CKN5UiSJtvmfimKX4lvKktGWgkIdUOh8HXWowZrBQtjdcCLt-CS-uEIbwarj0r0tKeiA.png?r=afc" alt="" />
      <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptas temporibus doloremque deleniti nobis! Exercitationem,
         temporibus similique! Sapiente aspernatur quisquam tempora, quo in,
         dolore similique animi voluptatem minus iure ipsam at?
      </span>
      <div className="buttons">
        <button className="play">
          <PlayArrow/>
          <span>play</span>
        </button>
        <button className="more">
            <InfoOutlined/>
            <span>info</span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Featured