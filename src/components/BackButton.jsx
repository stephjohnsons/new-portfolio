import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const BackButton = () => (
  <div className="h-10 flex flex-row justify-center align-items-center">
    <button className='flex flex-row border mt-1 my-auto px-4 py-1 rounded-3xl border-1 border-gray-900 hover:bg-gray-900 hover:text-white transition-all'>
      <WestOutlinedIcon />
      <h5 className="ms-2">Back</h5>
    </button>
  </div>
);

export default BackButton;
