"use client";

import { memo } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Activity,
  Database,
  Shield,
  Zap,
  Bell,
  Settings,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { assets } from "@/assets/assets";

const menuItems = [
  {
    title: "Add Product",
    icon: LayoutDashboard,
    src: assets.add_icon.src,
    href: "/seller/addProduct",
  },
  {
    title: "Product List",
    icon: BarChart3,
    src: assets.product_list_icon.src,
    href: "/seller/productList",
  },
  {
    title: "Orders",
    icon: Users,
    src: assets.order_icon.src,
    href: "/seller/orders",
  },
];

export const SellerSidebar = memo(() => {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar collapsible="icon" className="bg-[#4fbf8b]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link prefetch={false} className="flex flex-col items-start" href="#dashboard">
                <div>
                  <img src={assets.logo.src} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs text-gray-600">Seller Panel</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link prefetch={false} href={item.href}>
                        <img src={item.src} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link prefetch={false} href="#profile">
                <User />
                <span>Admin Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
});
