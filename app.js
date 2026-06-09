class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Recarregar Página</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');

  const renderContent = () => {
      switch(currentView) {
          case 'dashboard': return <Dashboard />;
          case 'bemestar': return <BemEstar />;
          case 'historico': return <Historico />;
          default: 
            return (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <div className="icon-tools text-4xl mb-4"></div>
                    <p>Módulo de {currentView} em desenvolvimento.</p>
                </div>
            );
      }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] flex" data-name="app" data-file="app.js">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        
        <main className="flex-1 ml-64 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-600">
                        <span className="font-medium">Olá, Usuário</span>
                        <p className="text-sm text-gray-500">Bem-vindo de volta ao seu controle de bem-estar digital.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700">
                            <div className="icon-user text-xl"></div>
                        </div>
                    </div>
                </header>

                {renderContent()}
            </div>
        </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);