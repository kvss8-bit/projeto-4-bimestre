function Historico() {
    // Mock data for demonstration
    const [registros, setRegistros] = React.useState([
        { id: 1, data: '01/06/2026', horas: 4.5, humor: 'feliz' },
        { id: 2, data: '31/05/2026', horas: 8.0, humor: 'cansado' },
        { id: 3, data: '30/05/2026', horas: 5.5, humor: 'normal' },
    ]);

    const handleExcluir = (id) => {
        if(window.confirm('Tem certeza que deseja excluir este registro?')) {
            setRegistros(registros.filter(r => r.id !== id));
        }
    };

    const getHumorIcon = (humor) => {
        switch(humor) {
            case 'feliz': return <div className="icon-circle-check text-green-500 text-xl" title="Feliz"></div>;
            case 'normal': return <div className="icon-circle-minus text-yellow-500 text-xl" title="Normal"></div>;
            case 'cansado': return <div className="icon-circle-x text-red-500 text-xl" title="Cansado"></div>;
            default: return null;
        }
    };

    return (
        <div className="space-y-6" data-name="historico" data-file="components/Historico.js">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Histórico de Registros</h2>
                <p className="text-gray-500">Visualize ou exclua seus apontamentos anteriores.</p>
            </div>

            <div className="card">
                {registros.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <div className="icon-folder-open text-4xl mb-3 mx-auto"></div>
                        <p>Nenhum registro encontrado.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-600 text-sm">
                                    <th className="pb-3 px-4 font-medium">Data</th>
                                    <th className="pb-3 px-4 font-medium">Horas de Tela</th>
                                    <th className="pb-3 px-4 font-medium text-center">Humor</th>
                                    <th className="pb-3 px-4 font-medium text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registros.map(reg => (
                                    <tr key={reg.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4 text-gray-800">{reg.data}</td>
                                        <td className="py-4 px-4 text-gray-800">{reg.horas}h</td>
                                        <td className="py-4 px-4 flex justify-center">{getHumorIcon(reg.humor)}</td>
                                        <td className="py-4 px-4 text-right">
                                            <button 
                                                onClick={() => handleExcluir(reg.id)}
                                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition-colors"
                                                title="Excluir"
                                            >
                                                <div className="icon-trash"></div>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}