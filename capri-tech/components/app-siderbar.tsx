"use client"

import { usePathname } from "next/navigation"
import { ChevronDown, PawPrint, Milk, Scale, Eye, Heart, Baby, Wheat, Cross, Stethoscope, Syringe, HeartPulse, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,

} from "@/components/ui/collapsible";

export function AppSidebar() {
  const pathname = usePathname()
 
  return ( 
    <Sidebar className="bg-white shadow-lg">
      <SidebarHeader className="bg-green-50 p-6 border-b border-green-200">
  <h2 className="text-base font-bold text-green-900">
    Gestión de Caprinos
  </h2>
  <p className="text-xs text-green-600 mt-1">
    Panel de administración
  </p>
</SidebarHeader>
      <SidebarContent className="bg-white px-2 py-3">
        <SidebarGroup>
          <SidebarMenu>

            <Collapsible defaultOpen={pathname.startsWith("/dashboard/livestock")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <PawPrint className="h-4 w-4" />
          Inventario</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent> 
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/livestock">Crear inventario</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/livestock/table">tabla inventario</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

          <Collapsible defaultOpen={pathname.startsWith("/dashboard/production")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
       <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Milk className="h-4 w-4" />
          Produccion</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/production">Crear Produccion</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/production/table">Tabla produccion</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
           
          <Collapsible defaultOpen={pathname.startsWith("/dashboard/weigth")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Scale className="h-4 w-4" />
          Pesaje</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/weigth">Crear pesaje</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/weigth/table">tabla pesaje</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

           <Collapsible defaultOpen={pathname.startsWith("/dashboard/famacha")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Famacha</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/famacha">Crear famacha</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/famacha/table">tabla famacha</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

           <Collapsible defaultOpen={pathname.startsWith("/dashboard/mounts")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          Montas</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/mounts">Crear monta</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/mounts/table">tabla montas</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

            <Collapsible defaultOpen={pathname.startsWith("/dashboard/births")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Baby className="h-4 w-4" />
          Nacimientos</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/births">Crear nacimiento</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/births/table">tabla nacimientos</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

             <Collapsible defaultOpen={pathname.startsWith("/dashboard/feeding")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Wheat className="h-4 w-4" />
          Alimentacion</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/feeding">Crear alimentacion</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/feeding/table">tabla alimentacion</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

            <Collapsible defaultOpen={pathname.startsWith("/dashboard/mortality")}>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Cross className="h-4 w-4" />
          Mortalidad</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/mortality">Crear mortalidad</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/mortality/table">tabla mortalidad</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
            
          <Collapsible defaultOpen={pathname.startsWith("/dashboard/vaccination") || pathname.startsWith("/dashboard/mastitis")}>
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Stethoscope className="h-4 w-4" />
          Sanidad</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
    <Collapsible defaultOpen={pathname.startsWith("/dashboard/vaccination")}>
  <SidebarMenuSubItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Syringe className="h-4 w-4" />
          Vacunación</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" asChild>
            <a href="/dashboard/vaccination">Crear vacunación</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" asChild>
            <a href="/dashboard/vaccination/table">Tabla vacunación</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuSubItem>
</Collapsible>
    <Collapsible defaultOpen={pathname.startsWith("/dashboard/mastitis")}>
  <SidebarMenuSubItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <HeartPulse className="h-4 w-4" />
          Mastitis</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" asChild>
            <a href="/dashboard/mastitis">Crear mastitis</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" asChild>
            <a href="/dashboard/mastitis/table">Tabla mastitis</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuSubItem>
</Collapsible>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

            <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800 flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Responsables</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2" >
                <a href="/dashboard/responsible">Crear responsables</a>
        </SidebarMenuSubButton>
        <SidebarMenuSubButton className="
              hover:text-green-700 rounded-lg trhover:bg-green-100 ansition-all duration-200 px-3 py-2">
                <a href="/dashboard/responsible/table">tabla responsables</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="text-center text-xs text-green-700 py-3 border-t">
      <p className="font-semibold">CapriTech</p>
      <p className="text-green-500">v1.0 · 2026</p>
      </SidebarFooter>
    </Sidebar>
  )
};
