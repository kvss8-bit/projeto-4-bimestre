function Dashboard() {
    const chartRef = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new ChartJS(ctx, {
                type: 'bar',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Horas de Tela',
                        data: [6.5, 5.2, 7.8, 4.5, 6.0, 8.2, 5.0],
                        backgroundColor: '#0d9488',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }
        
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="space-y-6" data-name="dashboard" data-file="components/Dashboard.js">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Visão Geral</h2>
                <p className="text-gray-500">Resumo do seu tempo de tela e progresso diário.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-slate-500 font-medium">Tempo Hoje</h3>
                            <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                <div className="icon-clock text-xl"></div>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-800">4h 30m</div>
                        <div className="text-sm text-emerald-600 mt-3 flex items-center gap-1 font-medium bg-emerald-50 w-fit px-2 py-1 rounded-md">
                            <div className="icon-arrow-down text-sm"></div>
                            <span>12% menor que ontem</span>
                        </div>
                    </div>
                </div>
                
                <div className="card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-slate-500 font-medium">Média Semanal</h3>
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <div className="icon-calendar text-xl"></div>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-800">5h 45m</div>
                        <div className="text-sm text-rose-600 mt-3 flex items-center gap-1 font-medium bg-rose-50 w-fit px-2 py-1 rounded-md">
                            <div className="icon-arrow-up text-sm"></div>
                            <span>5% maior que semana passada</span>
                        </div>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-slate-900 to-slate-800 border-none !text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-slate-300 font-medium">Meta Diária</h3>
                            <div className="p-2 bg-white/10 rounded-lg text-teal-400">
                                <div className="icon-square-check text-xl"></div>
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white">5h 00m</p>
                        <div className="w-full bg-slate-700/50 rounded-full h-2 mt-4 overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <p className="text-sm text-slate-300 mt-3 font-medium">90% da meta atingida</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="font-semibold text-gray-800 mb-6">Uso da Semana</h3>
                <div className="h-64">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
}