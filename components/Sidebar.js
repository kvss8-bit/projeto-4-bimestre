function Sidebar({ currentView, setCurrentView }) {
    const menuItems = [
        { id: 'dashboard', icon: 'icon-chart-pie', label: 'Dashboard' },
        { id: 'bemestar', icon: 'icon-square-plus', label: 'Registro Diário' },
        { id: 'historico', icon: 'icon-list', label: 'Histórico' },
    ];

    return (
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen fixed left-0 top-0 flex flex-col shadow-sm" data-name="sidebar" data-file="components/Sidebar.js">
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 text-[var(--primary-color)] mb-3">
                    <div className="icon-clock text-3xl"></div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-800">Bem-Estar<br/><span className="text-teal-600">Digital</span></h1>
                </div>
                <p className="text-xs text-slate-500">Menos tela, mais vida.</p>
            </div>
            
            <nav className="flex-1 px-4 space-y-1.5 mt-6">
                {menuItems.map(item => (
                    <div 
                        key={item.id}
                        className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                        onClick={() => setCurrentView(item.id)}
                    >
                        <div className={`${item.icon} text-xl ${currentView === item.id ? 'text-teal-600' : 'text-slate-400'}`}></div>
                        <span className="font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="p-4 m-4 bg-slate-50 rounded-xl border border-slate-100">
                <div 
                    className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                    onClick={() => window.location.href = 'login.html'}
                >
                    <div className="icon-arrow-left text-xl"></div>
                    <span className="font-medium">Sair da Conta</span>
                </div>
            </div>
        </aside>
    );
}