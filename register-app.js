function RegisterApp() {
    const handleRegister = (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    };

    return (
        <div className="flex min-h-screen bg-white" data-name="register-app" data-file="register-app.js">
            {/* Left side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
                >
                    <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col justify-end p-16 text-white h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="icon-clock text-4xl"></div>
                        <h2 className="text-3xl font-bold">Bem-Estar Digital</h2>
                    </div>
                    <p className="text-xl text-teal-50 font-light max-w-lg">
                        "O primeiro passo para uma vida mais presente. Junte-se a milhares de pessoas melhorando seu relacionamento com a tecnologia."
                    </p>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Criar uma conta</h1>
                        <p className="text-slate-500 mt-2">Comece sua jornada de bem-estar digital agora mesmo.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6 mt-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                            <input type="text" required className="input-field" placeholder="Seu nome" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                            <input type="email" required className="input-field" placeholder="seu@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Senha</label>
                            <input type="password" required className="input-field" placeholder="••••••••" minLength="6" />
                        </div>
                        
                        <button type="submit" className="btn-primary mt-8 text-lg">Cadastrar Gratuitamente</button>
                    </form>

                    <p className="text-center lg:text-left mt-8 text-sm text-slate-600">
                        Já possui conta? <a href="login.html" className="text-teal-600 font-medium hover:underline">Fazer login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegisterApp />);