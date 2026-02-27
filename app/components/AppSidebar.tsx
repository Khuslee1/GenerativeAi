"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

export function AppSidebar() {
  const { getFunction, titleId, article } = useAppContext();

  useEffect(() => {
    getFunction();
  }, []);

  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <h2 className="px-2 text-lg font-semibold">My App</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="gap-3">
            <SidebarGroupLabel className="text-[20px] font-semibold text-black pt-5">
              History
            </SidebarGroupLabel>
            <SidebarMenu>
              {titleId?.articles.map((ele) => (
                <SidebarMenuItem key={ele.id}>
                  <SidebarMenuButton asChild>
                    <a href={`/summary/${ele.id}`} className="text-black">
                      {ele.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
