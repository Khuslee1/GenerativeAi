import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/chat/1" className="text-black">
                    Genghis Khan
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
