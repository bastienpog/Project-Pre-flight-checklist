import { Plus, Filter, SortDesc } from 'lucide-react';


const Nav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-customBlue border-t flex justify-between items-center px-12 py-3 xl:hidden">
      <button className="flex flex-col items-center text-white">
        <Filter size={24} />
        <span className="text-sm mt-1">Filter</span>
      </button>
      
      <button>
        <div className="bg-white p-4 rounded-full flex flex-row items-center">
          <Plus size={32} className="text-customBlue"/>
          <span className='ml-2 text-lg font-semibold text-customBlue'>NEW</span>
        </div>
      </button>
      
      <button className="flex flex-col items-center text-white">
        <SortDesc size={24} />
        <span className="text-sm mt-1">Sort</span>
      </button>
    </div>
  );
};

export default Nav