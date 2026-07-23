import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-siderbar"
import Image from "next/image"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
        <SidebarTrigger />
        <Image
            src="/logo1.jpg.png"
            alt="Logo CapriTech"
            width={32}
            height={32}
            className="ml-4"
          />
        <h1 className="ml-4 text-xl font-bold text-green-700">CapriTech</h1>
        </header>
        <div className="p-6 bg-green-50 min-h-screen">
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
