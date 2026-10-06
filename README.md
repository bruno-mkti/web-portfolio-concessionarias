# Landing Page | Bruno Silva – Gestor de Tráfego para Concessionárias
HTML, CSS e JavaScript puros. Sem build, sem dependências (só a fonte Saira, via Google Fonts).

## 1. Alterar o WhatsApp
`js/script.js`, no topo, objeto `CONFIG`: campo `whatsapp` (DDI + DDD + número, só dígitos, ex.: `5534999999999`). A mensagem pré-preenchida fica em `mensagem`.
## 2. Alterar o e-mail
`js/script.js`, campo `email` do `CONFIG`.
## 3. Adicionar imagens
Coloque os arquivos em `assets/`. No HTML use `<img src="assets/arquivo.jpg" alt="descrição" loading="lazy" width="800" height="600">` (informe width/height para evitar layout shift). Para a imagem de compartilhamento, troque o `og:image` no `<head>` (hoje `assets/og-image.png`) (ideal: 1200×630) e use a URL completa do seu domínio.
## 4. Publicar
- **Netlify / Vercel:** arraste a pasta do projeto no painel (ou conecte o repositório).
- **GitHub Pages:** envie os arquivos ao repositório → Settings → Pages → branch `main`, pasta `/root`.
- **Hostinger / hospedagem tradicional:** envie o conteúdo da pasta para `public_html` via Gerenciador de Arquivos ou FTP.
## 5. Alterar textos
Tudo está em `index.html`, dividido por seções comentadas. Os dados do case GWM (investimento, orçamento, unidades) ficam na seção `<!-- CASE GWM -->`; os valores do painel do hero ficam em `<!-- Dashboard ilustrativo -->`. O painel é apenas ilustrativo: não contém resultados reais de leads ou test-drives.
## 6. Alterar cores
`css/style.css`, bloco `:root` no topo (`--red` é o vermelho de destaque, `--bg` o fundo).
## 7. Configurar domínio
Na plataforma escolhida, adicione o domínio (Domains / Custom domain) e aponte no seu registrador os registros indicados (A para o domínio raiz e CNAME para `www`). Aguarde a propagação e ative o HTTPS. Depois atualize `og:image` com a URL completa e, se quiser, crie um `sitemap.xml`.
