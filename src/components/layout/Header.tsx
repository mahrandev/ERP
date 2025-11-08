import { Bell, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          <Menu />
        </button>
        <div className="relative">
          <Search className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="بحث..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Bell />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Amr Mahran</p>
            <p className="text-sm text-gray-500">مدير النظام</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
