
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
    return (
        <div>
            <header className="bg-dark text-white p-3">Admin Dashboard</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;