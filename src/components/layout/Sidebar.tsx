import {
  LayoutDashboard,
  Users,
  Car,
  Calendar,
  Settings,
  LogOut,
  FileText,
  Truck,
  User,
  Building,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const navItems = [
  { icon: LayoutDashboard, label: "لوحة القيادة", path: "/" },
  { icon: Users, label: "الموظفين", path: "/employees" },
  { icon: Building, label: "الموردين", path: "/suppliers" },
  { icon: User, label: "العملاء", path: "/customers" },
  { icon: Car, label: "الرحلات", path: "/trips" },
  { icon: Calendar, label: "ادارة المستندات", path: "/documents" },
  { icon: FileText, label: "ادارة الموارد البشرية", path: "/financials" },
  { icon: Truck, label: " التسويات المالية", path: "/settlements" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        نظام ERP
      </h2>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
                  isActive ? "bg-gray-200 text-gray-700" : ""
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="mx-4 font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div>
          <NavLink
            to="/settings"
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
          >
            <Settings className="w-5 h-5" />
            <span className="mx-4 font-medium">الإعدادات</span>
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
          >
            <LogOut className="w-5 h-5" />
            <span className="mx-4 font-medium">تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
