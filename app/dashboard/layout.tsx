// app/dashboard/layout.tsx
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="lg:ml-64 w-full min-h-screen bg-neutral-950 text-white p-8">
        {children}
      </main>
    </div>
  );
}
