import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const BackButton = () => (
  <button className='flex flex-row border my-auto px-4 py-1 rounded-3xl border-1 border-gray-900 hover:bg-gray-900 hover:text-white transition-all'>
    <WestOutlinedIcon />
    <h5 className="ms-2">Back</h5>
  </button>
);

export default BackButton;
