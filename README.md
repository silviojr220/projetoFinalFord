# Visão Geral

O **Ford Site Experience** é construído com foco na experiência do usuário, proporcionando:

- **Navegação fluida:** Com rotas dinâmicas e carregamento otimizado.
- **Visual impactante:** Integração com recursos multimídia, galerias e animações.
- **Acessibilidade:** Design responsivo para desktops, tablets e smartphones.
- **Integração com APIs:** Comunicação segura e eficiente com serviços externos.

---

## Tecnologias Adotadas

- **Framework:** Next.js 13+
- **Linguagem:** JavaScript (ES6+) e TypeScript (opcional)

- **Backend :**  
  - Node.js com Express
- **Deploy:**  
  - Vercel para ambientes de produção
  - GitHub Actions para CI/CD

---

## Estrutura do Projeto

A estrutura do repositório segue boas práticas para projetos Next.js:

```bash
ford-digital-experience/
├── components/         
├── pages/              # Páginas (rotas automáticas pelo Next.js)
│   ├── coloque sua pagina aqui      
│   ├── coloque sua pagina aqui     
│   └── coloque sua pagina aqui      
├── public/             # Arquivos estáticos: imagens, fontes, etc.
├── styles/             # Folhas de estilo globais
├── utils/              # Funções e helpers (ex: conexões com API)
├── .env.local          # Variáveis de ambiente (não versionadas)
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
