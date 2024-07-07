import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, MessageSquare, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <MessageSquare className="h-6 w-6" />
          <span>WhatsApp Clone</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="px-4 py-2">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>
        <ChatList />
      </div>
    </div>
  </div>
);

const NavItem = ({ item }) => (
  <NavLink
    to={item.to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        isActive ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : "hover:bg-gray-100 dark:hover:bg-gray-800"
      )
    }
  >
    {item.icon}
    {item.title}
  </NavLink>
);

const ChatList = () => (
  <div className="px-4 py-2">
    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Chats</h2>
    <div className="space-y-1">
      {[...Array(10)].map((_, i) => (
        <Button
          key={i}
          variant="ghost"
          className="w-full justify-start"
        >
          <img
            alt="User Avatar"
            className="mr-2 h-8 w-8 rounded-full"
            src="/placeholder.svg"
          />
          <div className="flex flex-col items-start">
            <span>User {i + 1}</span>
            <span className="text-xs text-gray-500">Last message...</span>
          </div>
          <span className="ml-auto text-xs text-gray-500">12:34 PM</span>
        </Button>
      ))}
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="lg:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

export default Layout;