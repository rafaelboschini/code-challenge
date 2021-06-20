import Moment from 'react-moment';

const EpochToDate = (epoch) => {
  if (epoch < 10000000000)
    epoch *= 1000; //convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)

  epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone        
  return new Date(epoch);
}

const FormatTime = (datetime) => {
  return (<><Moment date={datetime} unit="day" format="HH" durationFromNow/> hours ago</>);
}

export { EpochToDate, FormatTime }