# 🚀 DarkMetados - Site de Vendas

## 📋 Como Personalizar Seu Site

### 1. **Links de Pagamento**
Para adicionar seus links de pagamento do Kiwify:

1. Abra o arquivo `src/App.jsx`
2. Procure pela seção `products` (linha ~32)
3. Substitua `paymentLink: "#"` pelos seus links reais:

```javascript
const products = [
  {
    // ... outras propriedades
    paymentLink: "https://pay.kiwify.com.br/seu-link-produto-1"
  },
  {
    // ... outras propriedades  
    paymentLink: "https://pay.kiwify.com.br/seu-link-produto-2"
  }
]
```

### 2. **Links das Redes Sociais**
Para adicionar seus links das redes sociais:

1. No mesmo arquivo `src/App.jsx`
2. Procure pela seção `socialLinks` (linha ~58)
3. Substitua os links:

```javascript
const socialLinks = {
  instagram: "https://instagram.com/seu-usuario",
  tiktok: "https://tiktok.com/@seu-usuario", 
  whatsapp: "https://wa.me/5511999999999"
}
```

### 3. **Personalizar Produtos**
Para editar as informações dos produtos:

1. Na seção `products`, você pode alterar:
   - `title`: Nome do produto
   - `price`: Preço atual
   - `originalPrice`: Preço original (riscado)
   - `features`: Lista de benefícios
   - `gradient`: Cores do gradiente

### 4. **Alterar Countdown Timer**
Para mudar o tempo do contador:

1. Procure por `<CountdownTimer targetHours={23} />`
2. Altere o número de horas conforme necessário

### 5. **Personalizar Depoimentos**
Para editar os depoimentos:

1. Abra `src/components/Testimonials.jsx`
2. Edite o array `testimonials` com depoimentos reais

## 🛠️ Como Executar o Site

### **Desenvolvimento Local**
```bash
cd darkmetados-vendas
pnpm run dev --host
```
O site ficará disponível em: http://localhost:5173

### **Build para Produção**
```bash
pnpm run build
```
Os arquivos finais ficarão na pasta `dist/`

## 🌐 Como Fazer Deploy

### **Opção 1: Netlify (Recomendado)**
1. Faça build do projeto: `pnpm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para o Netlify
4. Seu site estará online!

### **Opção 2: Vercel**
1. Instale o Vercel CLI: `npm i -g vercel`
2. Execute: `vercel --prod`
3. Siga as instruções

### **Opção 3: GitHub Pages**
1. Suba o código para um repositório GitHub
2. Vá em Settings > Pages
3. Configure para usar GitHub Actions
4. O site será publicado automaticamente

## 🎨 Personalização Avançada

### **Cores e Tema**
- As cores estão definidas no arquivo `src/App.css`
- O site já está otimizado para modo dark
- Você pode alterar as cores dos gradientes nas classes CSS

### **Animações**
- As animações usam Framer Motion
- Você pode ajustar velocidade e efeitos nos componentes
- Todas as animações são responsivas

### **Responsividade**
- O site é 100% responsivo
- Funciona perfeitamente em mobile, tablet e desktop
- Usa Tailwind CSS para responsividade

## 📱 Recursos Incluídos

✅ **Design Moderno**: Interface dark com gradientes e animações  
✅ **Contador Regressivo**: Cria urgência para as vendas  
✅ **Depoimentos**: Prova social com clientes satisfeitos  
✅ **FAQ**: Resolve objeções comuns dos clientes  
✅ **Seção de Bônus**: Aumenta o valor percebido  
✅ **Botões de Redes Sociais**: Instagram, TikTok e WhatsApp  
✅ **Responsivo**: Funciona em todos os dispositivos  
✅ **Otimizado para Conversão**: Gatilhos de vendas profissionais  

## 🔧 Suporte Técnico

Se precisar de ajuda para personalizar ou fazer deploy:

1. **Documentação do React**: [reactjs.org](https://reactjs.org)
2. **Documentação do Tailwind**: [tailwindcss.com](https://tailwindcss.com)
3. **Framer Motion**: [framer.com/motion](https://framer.com/motion)

## 📈 Dicas para Aumentar Conversões

1. **Teste diferentes preços** nos produtos
2. **Adicione mais depoimentos reais** de clientes
3. **Ajuste o tempo do countdown** conforme sua estratégia
4. **Use cores que contrastem** nos botões de compra
5. **Mantenha o WhatsApp sempre ativo** para suporte

---

**🎯 Seu site está pronto para vender! Boa sorte com suas vendas! 🚀**
