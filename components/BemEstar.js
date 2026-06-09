function BemEstar() {
    const [horas, setHoras] = React.useState('');
    const [humor, setHumor] = React.useState('feliz');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Em um sistema real, salvaria no banco de dados via API (Node.js/SQLite)
        alert(`Registro salvo com sucesso!\nHoras: ${horas}h\nHumor: ${humor}`);
        setHoras('');
        setHumor('feliz');
    };

    return (
        <div className="space-y-6" data-name="bem-estar" data-file="components/BemEstar.js">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Registro Diário</h2>
                <p className="text-gray-500">Registre seu uso de telas e como você se sentiu hoje.</p>
            </div>

            <div className="card max-w-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    {/* Horas Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Horas de tela (estimativa)</label>
                        <input 
                            type="number" 
                            min="0"
                            step="0.5"
                            required
                            value={horas}
                            onChange={(e) => setHoras(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 focus:ring-teal-500 focus:border-teal-500 outline-none max-w-xs"
                            placeholder="Ex: 5"
                        />
                    </div>

                    {/* Humor Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Como foi o seu humor?</label>
                        <div className="flex gap-4">
                            {[
                                { id: 'feliz', icon: 'icon-circle-check', color: 'text-green-500', label: 'Feliz' },
                                { id: 'normal', icon: 'icon-circle-minus', color: 'text-yellow-500', label: 'Normal' },
                                { id: 'cansado', icon: 'icon-circle-x', color: 'text-red-500', label: 'Cansado' }
                            ].map(h => (
                                <div 
                                    key={h.id}
                                    onClick={() => setHumor(h.id)}
                                    className={`flex flex-col items-center gap-2 p-4 border rounded-xl cursor-pointer transition-all ${humor === h.id ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-gray-200 hover:border-teal-300'}`}
                                >
                                    <div className={`${h.icon} text-4xl ${h.color}`}></div>
                                    <span className="text-sm font-medium text-gray-700">{h.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full">Salvar Registro</button>
                </form>
            </div>
        </div>
    );
}