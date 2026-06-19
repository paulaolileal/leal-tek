---
title: "SKILL.md: como ensinar seus agentes a usar bibliotecas que eles desconhecem"
date: 2026-02-21
excerpt: "Quando um agente não consegue usar sua biblioteca porque o modelo é anterior à sua publicação, um arquivo SKILL.md resolve. Como criar conhecimento estruturado para seus agentes."
tags: [ia, developer-experience, open-source, dotnet]
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7429907834466635778"
linkedinEmbedSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7429907834466635778?collapsed=1"
featured: false
---

Se você mantém uma biblioteca de código, cedo ou tarde vai se deparar com esse problema: o agente simplesmente não sabe como usar sua lib.

O motivo é simples — o modelo foi treinado antes da sua biblioteca existir, ou antes da versão atual ser publicada. O agente tenta, erra, tenta de novo, e eventualmente desiste ou produz código que não funciona.

A solução que encontrei: um arquivo `SKILL.md` no repositório.

O arquivo dá ao agente instruções claras sobre **quando** usar a biblioteca e **como** usá-la corretamente. Não é documentação para humanos — é contexto estruturado para que agentes consigam usar o código com precisão.

O arquivo pode ser mantido no repositório para uso manual ou integrado via Context7 para acesso automático pelos agentes. Quanto mais detalhado e com exemplos reais, melhor a qualidade do que o agente produz.

É uma mudança pequena com impacto grande na experiência de desenvolver com IA.
