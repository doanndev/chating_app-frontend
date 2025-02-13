const Sidebar = ({
  isOpen,
}: {
  isOpen: boolean;
}) => {
  return (
    <div
      className={`mt-20 fixed inset-y-0 left-0 w-64 bg-blue-500 transform transition-transform ease-in-out duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4"></div>
      <ul className="py-4 px-2">
        <li className="text-white hover:bg-blue-700 py-2 px-4 cursor-pointer">
          Users
        </li>
        <li className="text-white hover:bg-blue-700 py-2 px-4 cursor-pointer">
          Messenger
        </li>
        <li className="text-white hover:bg-blue-700 py-2 px-4 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
