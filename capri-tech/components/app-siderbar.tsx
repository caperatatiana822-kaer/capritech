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
  
  return ( 
    <Sidebar className="bg-white border-r border-green-300 shadow-lg">
      <SidebarHeader className="bg-green-700 text-white p-5">
        <h2 className="text-lg font-bold text-center">CapriTech</h2>
        <p className="text-xs text-center text-green-100 mt-1">
    Gestión de caprinos
  </p>
      </SidebarHeader >

      <SidebarContent className="bg-white px-2 py-3">
        <SidebarGroup>
          <SidebarMenu>

            <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Inventario
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
                <a href="/dashboard/livestock">tabla inventario</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

          <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Produccion
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
                <a href="/dashboard/production">Tabla produccion</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
           
          <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Pesaje
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
                <a href="/dashboard/weigth">tabla pesaje</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

           <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Famacha
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
                <a href="/dashboard/famacha">tabla famacha</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

           <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Montas
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
                <a href="/dashboard/mounts">tabla montas</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

            <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Naciminetos
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
                <a href="/dashboard/births/pageTabla.tsx">tabla nacimientos</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible> 

             <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Alimentacion
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
                <a href="/dashboard/feeding">tabla alimentacion</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

            <Collapsible>
  <SidebarMenuItem className="mb-2">
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Mortalidad
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
                <a href="/dashboard/mortality">tabla mortalidad</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
            
          <Collapsible>
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Sanidad
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
    <Collapsible>
  <SidebarMenuSubItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Vacunación
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
            <a href="/dashboard/vaccination">Tabla vacunación</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuSubItem>
</Collapsible>
    <Collapsible>
  <SidebarMenuSubItem>
    <CollapsibleTrigger asChild>
      <button className="font-semibold text-green-800">
        Mastitis
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
            <a href="/dashboard/mastitis">Tabla mastitis</a>
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
      <button className="font-semibold text-green-800">
        Responsables
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
                <a href="/dashboard/responsible">tabla responsables</a>
        </SidebarMenuSubButton>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        Settings
      </SidebarFooter>
    </Sidebar>
  )
};
