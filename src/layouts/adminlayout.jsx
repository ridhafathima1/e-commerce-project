import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 px-6 py-4 text-white">
        <h1 className="text-xl font-bold">
          GLOZA Admin
        </h1>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout;