<div align="center">
  <h1>UniMove</h1>
  <h3>Uma aplicação web responsiva desenvolvida com <a href="https://nextjs.org/">NextJS</a>, integrando-se ao Firebase. Um sistema para gerenciar grupo e rotas de vans escolares.</p>
<br/>

<div align="center">
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como usar</a> •
  <a href="#decisões-técnicas">Decisões Técnicas</a> •
  <a href="#desafios">Desafios</a>
</div>

<br/>

<div>
  <h3>Demo Frontend: <a href="https://unimove-5bjx8u6sz-jvitorsantos-projects.vercel.app/">https://unimove-5bjx8u6sz-jvitorsantos-projects.vercel.app/</a></h3>
</div>

<div>
  <h2 id="tecnologias">Tecnologias:</h2>
  <h3>Linguagens e Ferramentas:</h3>
  <ul>
    <li>NextJS</li>
    <li>TypeScript</li>
  </ul>

  <h3>Frontend:</h3>
  <ul>
    <li>TailwindCSS</li>
    <li>ShadCN</li>
  </ul>

  <h3>Backend / Banco de Dados:</h3>
  <ul>
    <li>Firebase</li>
  </ul>

  <h3>Padronização de Código:</h3>
  <ul>
    <li>ESLint</li>
    <li>Prettier</li>
  </ul>
</div>

<div>
  <h2 id="como-usar">Como usar:</h2>
  <h3>Requisitos:</h3>
  <p>
    Antes de iniciar, certifique-se de ter instalado em sua máquina as seguintes ferramentas:
  </p>

  <ul>
    <li>Git</li>
    <li>Node (Versão mínima 18)</li>
    <li>NPM</li>
  </ul>

  <h3>Clone o projeto e acesse a pasta:</h3>

  ```bash
  $ git clone git@github.com:jvitor-santos/unimove.git && cd unimove
  ```

  <h3>Siga os passos abaixo para executar a aplicação localmente:</h3>

  ```bash
  # Certifique-se de que todas as variáveis de ambiente possuem as chaves das APIs ativas.

  $ npm i

  $ npm run dev
  ```

</div>

<div>
  <h2 id="decisões-técnicas">Decisões Técnicas:</h2>
  <h3>NextJS:</h3>
  <p>O Next.js foi escolhido devido ao suporte para renderização do lado do servidor (SSR), o que melhora o desempenho da aplicação, especialmente em dispositivos com conexões de internet mais lentas. Além disso, o framework oferece recursos como pré-renderização estática e lazy loading, que otimizam o tempo de carregamento das páginas. A estrutura modular e a capacidade de configurar middlewares tornam o Next.js ideal para o desenvolvimento escalável e moderno do projeto.</p>

  <h3>TailwindCSS:</h3>
  <p>O Tailwind CSS foi selecionado por ser uma ferramenta utilitária que acelera o desenvolvimento de interfaces, proporcionando uma maior produtividade e manutenção simplificada do código. Sua capacidade de configuração permite atender as necessidades específicas do projeto, enquanto sua integração com componentes de UI e plugins facilita a criação de interfaces coesas e responsivas. Além disso, o Tailwind contribui para a consistência visual do projeto e reduz o tamanho do CSS final.</p>

  <h3>ShadCN</h3>
  <p>O shadcn é utilizado como biblioteca de componentes para criar uma interface moderna e acessível. Ele aproveita o Radix UI para garantir a acessibilidade dos componentes, enquanto a integração com o Tailwind CSS proporciona flexibilidade e agilidade na estilização. A modularidade e a documentação clara tornam o shadcn uma escolha eficaz para desenvolver componentes reutilizáveis e manter o código limpo.</p>

  <h3>Firebase:</h3>
  <p>O Firebase foi incorporado ao projeto por sua capacidade de atuar como um backend completo, eliminando a necessidade de gerenciar infraestrutura adicional. Recursos como autenticação, banco de dados em tempo real (Firestore) e hospedagem com SSL automático aceleram o desenvolvimento e garantem a segurança da aplicação. O Firebase também fornece escalabilidade automática e integrações nativas com outros serviços do Google, tornando-o adequado para aplicações que exigem alta disponibilidade e crescimento rápido.</p>
</div>

<div>
  <h2 id="desafios">Desafios:</h2>
  <p>Utilização de OOP com JavaScript e TypeScript
Implementar conceitos de orientação a objetos (OOP) em JavaScript e TypeScript apresenta desafios devido à natureza baseada em protótipos do JavaScript. Embora o TypeScript ofereça ferramentas como interfaces e tipagem estática, a complexidade aumenta em sistemas mais robustos, onde é necessário equilibrar herança, encapsulamento e modularidade. Para evitar acoplamento forte e herança excessiva, o projeto se beneficia de boas práticas como injeção de dependências, programação baseada em interfaces e princípios SOLID, garantindo um código escalável e sustentável.</p>
</div>
