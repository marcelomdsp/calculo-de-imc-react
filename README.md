# Calculadora de IMC

Este projeto é uma aplicação web simples para calcular o Índice de Massa Corporal (IMC). A aplicação permite que os usuários insiram seu peso e altura para obter seu IMC, além de fornecer uma interpretação do resultado.

## Demonstração

Você pode acessar uma demonstração ao vivo [aqui](https://calculeseuimc-msp.vercel.app/).

## Tecnologias Utilizadas

- React
- Styled-components
- Context API
- JavaScript (ES6+)
- TypeScript

## Uso

1. Insira seu peso e altura nos campos correspondentes.
2. Clique em "Obter" para calcular seu IMC.
3. O resultado será exibido junto com uma mensagem que interpreta o valor do IMC.

## Estrutura do Projeto

```plaintext
src/
│
├── assets/                 # Imagens e recursos estáticos
├── components/             # Componentes reutilizáveis
│   ├── calculadora/        # Componente da calculadora de IMC
│   ├── footer/             # Componente do rodapé
│   ├── formulario/         # Componente do formulário de entrada
│   ├── resultado/          # Componente de exibição do resultado
│   ├── header/             # Componente do cabeçalho
│   └── texto-informativo/  # Componente de texto dinâmico
├── context/                # Provedor de contexto para gerenciamento de estado
├── styles/                 # Estilos globais e temas
├── responsividade.js       # Arquivo de configuração de media queries
└── App.js                  # Componente principal da aplicação
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou fazer um fork do projeto e enviar um pull request.

1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature ou correção de bug.
3. Faça suas alterações.
4. Envie um pull request.

```bash
git checkout -b minha-nova-feature
git commit -m 'Adiciona nova feature'
git push origin minha-nova-feature
```


Feito com 💻 por Marcelo dos Santos.
