# SmartStruct RJP V116.1.3 — IFC bidirecional

- Mantém a linha Engineering Final, sem planeamento/orçamento/editor BIM.
- Exportação IFC4 a partir do Projeto Estrutural, com vigas, pilares, sapatas, materiais e Property Sets RJP de engenharia.
- GUIDs IFC determinísticos para estabilidade entre exportações do mesmo projeto/elemento.
- Importação IFC para reaproveitar parâmetros SmartStruct presentes nos Property Sets RJP e identificar entidades estruturais suportadas.
- IFC passa a ser o formato oficial de intercâmbio SmartStruct ⇄ RJP 3D Studio.
- A importação não pretende substituir um kernel IFC completo para geometrias arbitrárias; modelos externos complexos continuam tratados como coordenação/openBIM até haver geometria suportada.

## RJP Eng Hub
A ligação futura ao Hub usa o projeto como unidade central. O intercâmbio técnico entre aplicações permanece IFC, não um formato proprietário obrigatório.
