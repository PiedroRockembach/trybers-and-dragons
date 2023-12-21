# Trybers and Dragons

Sistema de criação de classes e combate para o universo de D&D

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre
Este é um projeto da trybe realizado por mim, no qual é feito um sistema de criação de personagens de diferentes raças e arquétipos e sistema de combate.
Projeto que tem como objetivo aplicar os conceitos de abstração, encapsulamento, herança e polimorfismo aprendidos.



## Instalação

Instruções sobre como instalar e configurar o projeto. Exemplo:

```bash
npm install
```

## Uso

A aplicação possui apenas a estrutura das classes, arquétipos e combate, não sendo possível utilizar a aplicação.
## Estrutura do Projeto
```
/src
    /Archetypes
        Archetype.ts
        index.ts
        Mage.ts
        Necromancer.ts
        Ranger.ts
        Warrior.ts
    /Battle
        Battle.ts
        index.ts
        /Fighter
        Fighter.ts
        index.ts
        SimpleFighter.ts
    /Races
        Dwarf.ts
        Elf.ts
        Halfling.ts
        index.ts
        Orc.ts
        Race.ts
    /types
        RacesType.ts
  Character.ts
  Energy.ts
  Monster.ts
  utils.ts

```

## Contribuição

Fique livre para desenvolver um sistema jogavel baseado nesta estrutura.
1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b feature/nova-feature`.
3. Faça as alterações e faça commit: `git commit -m 'Adiciona nova feature'`.
4. Envie as alterações: `git push origin feature/nova-feature`.
5. Abra uma solicitação de pull.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
