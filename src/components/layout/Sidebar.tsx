import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Sidebar() {
  const navItems = [
    { to: "/", label: "Dashboard", icon: Home },
    { to: "/orders", label: "Orders", icon: ShoppingCart, badge: 6 },
    { to: "/products", label: "Products", icon: Package },
    { to: "/customers", label: "Customers", icon: Users },
    { to: "/analytics", label: "Analytics", icon: LineChart },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </a>
        </div>
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {navItems.map(({ to, label, icon: Icon, badge }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive ? "bg-muted text-primary" : "text-muted-foreground"
                } transition-all hover:text-primary`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
              {badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {badge}
                </Badge>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
