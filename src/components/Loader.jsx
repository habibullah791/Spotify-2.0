import { loader } from '../assets'


const Loader = ({ title }) => (
  <div className='flex flex-col justify-center items-center w-full'>
    <img src={loader} alt="Loader" className='object-contain w-32 h-32' />
    <h1 className='font-popin font-normal text-[30px] text-white mt-5'>{title || 'Loading ......'}</h1>
  </div>
);

export default Loader;
