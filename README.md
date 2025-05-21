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
│   .editorconfig
│   .gitignore
│   angular.json
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.app.json
│   tsconfig.json
│   tsconfig.spec.json
│   
├───.vscode
│       extensions.json
│       launch.json
│       tasks.json
│       
├───public
│       .gitkeep
│       favicon.ico
│       
└───src
    │   index.html
    │   main.ts
    │   styles.css
    │   
    ├───api
    │   │   api.js
    │   │   
    │   └───img
    │           assisten.png
    │           background.png
    │           broncoSport.png
    │           ford.png
    │           fordtecno.png
    │           iconUser.png
    │           maverick.jpg
    │           mustang.png
    │           novidade.png
    │           ranger.png
    │           territory.png
    │
    └───app
        │   app.component.css
        │   app.component.html
        │   app.component.spec.ts
        │   app.component.ts
        │   app.config.ts
        │   app.routes.ts
        │
        ├───components
        │   ├───carrousel
        │   │       carrousel.component.css
        │   │       carrousel.component.html
        │   │       carrousel.component.spec.ts
        │   │       carrousel.component.ts
        │   │
        │   ├───footer
        │   │       footer.component.css
        │   │       footer.component.html
        │   │       footer.component.spec.ts
        │   │       footer.component.ts
        │   │
        │   ├───forms
        │   │       forms.component.css
        │   │       forms.component.html
        │   │       forms.component.spec.ts
        │   │       forms.component.ts
        │   │
        │   ├───header
        │   │       header.component.css
        │   │       header.component.html
        │   │       header.component.spec.ts
        │   │       header.component.ts
        │   │
        │   ├───inicial
        │   │       inicial.component.css
        │   │       inicial.component.html
        │   │       inicial.component.spec.ts
        │   │       inicial.component.ts
        │   │
        │   ├───table
        │   │       table.component.css
        │   │       table.component.html
        │   │       table.component.spec.ts
        │   │       table.component.ts
        │   │
        │   └───vin
        │           vin.component.css
        │           vin.component.html
        │           vin.component.spec.ts
        │           vin.component.ts
        │
        ├───models
        │       usuario.model.ts
        │       vehiclesVin.model.ts
        │       veiculo.model.ts
        │
        ├───pages
        │   ├───contato
        │   │       contato.component.css
        │   │       contato.component.html
        │   │       contato.component.spec.ts
        │   │       contato.component.ts
        │   │
        │   ├───dashboard
        │   │       dashboard.component.css
        │   │       dashboard.component.html
        │   │       dashboard.component.spec.ts
        │   │       dashboard.component.ts
        │   │
        │   ├───home
        │   │       home.component.css
        │   │       home.component.html
        │   │       home.component.spec.ts
        │   │       home.component.ts
        │   │
        │   ├───lancamento
        │   │       lancamento.component.css
        │   │       lancamento.component.html
        │   │       lancamento.component.spec.ts
        │   │       lancamento.component.ts
        │   │
        │   └───login
        │           login.component.css
        │           login.component.html
        │           login.component.spec.ts
        │           login.component.ts
        │
        └───services
            │   auth.service.spec.ts
            │   auth.service.ts
            │   dashboard.service.spec.ts
            │   dashboard.service.ts
            │   get-car-list.service.spec.ts
            │   get-car-list.service.ts
            │   post-vin-list.service.spec.ts
            │   post-vin-list.service.ts
            │
            ├───user
            │       user-models.service.spec.ts
            │       user-models.service.ts
            │
            └───vehicles
                    vehicles-models.service.spec.ts
                    vehicles-models.service.ts
