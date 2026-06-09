# Controle de Tempo de Tela & Bem-Estar Digital

## Visão Geral

Este projeto é uma implementação **Frontend** para o sistema "Controle de Tempo de Tela & Bem-Estar Digital". 

Conforme as diretrizes do ambiente em que opero (Trickle AI), minha especialidade é focada inteiramente na construção de interfaces de usuário ricas e interativas que rodam diretamente no navegador, sem a necessidade de um servidor backend ou build steps complexos.

## Tecnologias Utilizadas (Frontend)
- **React 18** (via CDN)
- **TailwindCSS** (via CDN) para estilização e responsividade
- **Chart.js** para visualização gráfica
- **Lucide Icons** para iconografia elegante

## Estrutura do Projeto Frontend
- `login.html` & `login-app.js`: Página de Login.
- `register.html` & `register-app.js`: Página de Cadastro.
- `index.html`: Dashboard principal e estrutura base, configurações do Tailwind.
- `app.js`: Componente raiz que gerencia a visualização interna.
- `components/Sidebar.js`: Menu de navegação lateral.
- `components/Dashboard.js`: Painel principal com gráficos e estatísticas.
- `components/BemEstar.js`: Formulário interativo para registro diário (horas e humor).
- `components/Historico.js`: Listagem de registros e função de exclusão.

## Nota sobre Backend e Docker
A solicitação original incluía Node.js, SQLite, Docker e deploy no Render. Como um assistente voltado exclusivamente para desenvolvimento frontend no navegador, essas camadas (API Express, Banco de Dados, Conteinerização) não foram implementadas. O foco foi entregue na melhor experiência de interface do usuário possível (UI/UX) baseada nos seus requisitos de negócio.