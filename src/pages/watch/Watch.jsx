import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRMuvim0xyB7B15T_puSnU9UJcZmVzop35Vfg" className="video" autoPlay progress controls></video>
      
    </div>
  )
}

export default Watch
