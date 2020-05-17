import Link from './Link';

const Error = ({ message, tryAgain }) => (
  <div className='tac'>
    <p className='error'>{message}</p>
    <Link onClick={tryAgain}>Try again</Link>
  </div>
);

export default Error;