---
description: Invoca al subagent landing-security-auditor (gate read-only).
argument-hint: <diff a auditar o pregunta de seguridad>
allowed-tools: Agent
---

Usa el subagent `landing-security-auditor` para revisar lo siguiente:

$ARGUMENTS

El landing-security-auditor es read-only. Lee diffs o archivos, identifica riesgos (XSS, secrets leakage, CSP, GraphQL introspection, WP integration), y emite verdict PASS/BLOCK con cita archivo:línea. **Nunca escribe código.** La aprobación final del merge es del humano.
