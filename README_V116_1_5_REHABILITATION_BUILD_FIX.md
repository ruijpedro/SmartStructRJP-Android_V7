# SmartStruct RJP V116.1.5 — Rehabilitation Build Fix

Correções de TypeScript no módulo de Reabilitação:

- eliminada inferência `never` causada por `const bim = null`;
- criado o tipo `RehabBimElement`;
- listas de elementos BIM externos passam a ser explicitamente tipadas;
- removido `implicit any` no `map` da ficha de inspeção;
- sem alterações funcionais aos cálculos de engenharia.
