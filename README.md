# Projeto Player com POO em TypeScript

Este projeto implementa um **sistema de Player de Vídeos** utilizando os quatro pilares da Programação Orientada a Objetos (POO) em TypeScript: **Abstração, Encapsulamento, Herança e Polimorfismo**, além do uso de **Interfaces**.

## 🚀 Como executar

1. Clone o repositório ou copie os arquivos para sua máquina.  
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.  
3. Instale as dependências do TypeScript (se necessário):
   ```bash
   npm install -g typescript
4. Compile os arquivos .ts para .js:

```npx tsc```


5. Execute o projeto (após a compilação) com:

```node dist/main.js```

## 🧩 Pilares da POO Aplicados

### 🔹 Abstração
- Implementada na **classe abstrata `Video`** (`video.ts`), que define os métodos obrigatórios (`play`, `pause`, `stop`, `info`) sem detalhar a implementação.  
- Cada subclasse (`AdVideo`, `LiveStream`, `NormalVideo`) fornece sua própria lógica.  

### 🔹 Encapsulamento
- Atributos privados como `duracaoEmSegundos` (em `Video`) e `history` (em `Player`) são protegidos contra acesso direto.  
- O acesso é controlado por métodos públicos como `getHistory()` (que retorna uma cópia do histórico, não o array original).  

### 🔹 Herança
- **`AdVideo`** e **`LiveStream`** herdam de `Video`, aproveitando e estendendo suas características.  
- Isso evita repetição de código e organiza a hierarquia de classes.  

### 🔹 Polimorfismo
- No **`main.ts`**, há um array de `Video` contendo instâncias de `AdVideo`, `NormalVideo` e `LiveStream`.  
- Ao chamar `play()` ou `info()`, cada objeto responde de forma diferente conforme sua implementação.  

### 🔹 Interface
- As interfaces `Playable` e `Describable` (`video.ts`) reforçam o contrato de métodos (`play`, `pause`, `stop`, `info`) que qualquer classe que extenda `Video` deve cumprir.  
- Isso garante consistência entre diferentes tipos de vídeo.  

---

## 📺 Funcionalidades do Player

- **Loop**: ao chegar ao fim da playlist, retorna ao início.  
- **Shuffle**: embaralha a ordem de reprodução.  
- **Loop + Shuffle**: funcionam juntos, reembaralhando ao fim da lista.  
- **Histórico**: armazena o título dos vídeos reproduzidos, protegido contra modificações externas.  

---

## 🎯 Demonstração (main.ts)

1. Reproduz um anúncio (`AdVideo`).  
2. Em seguida, um vídeo normal.  
3. Depois, uma transmissão ao vivo (`LiveStream`).  
4. Mostra **next() / previous()** em modos **shuffle** e **loop**.  
5. Exibe o **histórico de reprodução** no final.


=== Demonstração Polimorfismo ===
AdVideo: Comercial 1 | Anunciante: Nike
Anúncio de Nike... Pode pular após 5s.
Normal: Tutorial TypeScript
Tocando vídeo normal: Tutorial TypeScript
LiveStream: Live Coding | Viewers: 150
Transmitindo ao vivo: Live Coding para 150 espectadores.

=== Player Teste ===
Anúncio de Nike... Pode pular após 5s.
Tocando vídeo normal: Tutorial TypeScript
Transmitindo ao vivo: Live Coding para 150 espectadores.
Shuffle ativado.
Loop ativado
Tocando vídeo normal: Tutorial TypeScript
Anúncio de Nike... Pode pular após 5s.

Histórico de reprodução: [
  'Comercial 1',
  'Tutorial TypeScript',
  'Live Coding',
  'Tutorial TypeScript',
  'Comercial 1'
]
