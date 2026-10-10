---
title: "Meal Assistant"
subtitle: "Two studies, one adoption story — Kroger / Cooklist"
hasImages: false
---


Source: live page text at /meal-assistant/ (was password-protected, unlocked by user).

## Subtitle
"How trust, realism, and plan-to-cart reliability shape weekly meal planning behaviors."

## Why Two Studies
One study explores motivations (diagnostic); another examines breakpoints across the complete workflow (coverage). Together they identify barriers and requirements.

## Moderated Wizard-of-Oz Interviews
**Method:** 60-minute Zoom sessions where participants interacted with a simulated assistant; a researcher controlled the "system" behind the scenes using predetermined response patterns, to test UX before full development.
**Sample:** N=5
**Goal:** Compare traditional vs. AI-assisted meal planning for speed, confidence, and trust.

### Themes from the Wizard
1. **Recipe-Centric Experience** — Recipes must remain the focal point through shopping and checkout; losing recipe visibility erodes confidence.
2. **Automation with Control** — Users value automation for heavy calculations but demand visible choices: substitutions, brand options, override points.
3. **Transparency Builds Trust** — Users need to understand why specific brands, quantities, and prices were selected and how savings were calculated.
4. **Persistent Personalization** — The system should remember dietary rules, household size, and budget across sessions rather than requesting repeated input.
5. **Continuity and Reusability** — Customized plans should be easily saved and reused; users want to build a personal digital cookbook over time.
6. **Safety and Explainability** — Users accept sharing practical constraints when purpose is clear; they want plain-language reasoning behind suggestions.
7. **Tone and Trust Signals** — A warm, collaborative tone — like a supportive cooking partner — establishes trust through transparency and control.
8. **Ads as Value, Not Noise** — Ads are acceptable only when aligned with user goals like savings; generic ads undermine trust.

### Opportunities from the Wizard
1. **Persistent Recipe Visibility** — recipe panel visible during shopping/checkout with one-to-one mapping to cart items.
2. **Ingredient Substitution & Choice** — 2–3 curated options per ingredient; in-flow swaps without leaving the assistant.
3. **Transparent Logic for Quantity & Price** — simple explanations, recipe-level cost estimates, explainable optimization modes.
4. **Save & Reuse Customized Plans** — clear CTAs for saving plans into a digital cookbook with persistent customizations.
5. **Lightweight Food Profile** — streamlined onboarding for diet, allergies, household size, budget as persistent rules.
6. **Explainable AI & Trust Signals** — plain-language reasoning for choices; control toggles for affordability vs. quality.
7. **Tone & Engagement** — position the assistant as a supportive cooking partner with distinctive brand voice.
8. **Ads as Value** — mission-aligned promotions (e.g. savings on specific ingredients) rather than generic advertisements.

### Core Jobs-to-Be-Done
1. Plan meals within real-world constraints (time, diet, household size, budget, existing pantry items).
2. Transform any recipe into a trustworthy, shoppable list with clean ingredients, correct quantities, clear product mapping.
3. Shop with control over brands, substitutions, and savings while maintaining existing shopping style.
4. Save customized versions and reuse them later as part of a personal digital cookbook.
5. Share data confidently and understand AI involvement through transparent reasoning.

[Image: unsplash photograph of fresh produce/ingredients, positioned between the qualitative findings and the quantitative study section]

## Un-Moderated Study
**Rationale:** Captures natural behavior at scale without facilitator influence — Authenticity (reduced social desirability bias), Scalability (larger/more diverse samples without scheduling constraints), Speed & Cost Efficiency (no live moderation), Contextual Insights (real-world device usage reveals authentic friction), Quant + Qual Mix (structured metrics alongside open-ended feedback).
**Implementation:** Two pilot studies refined the structure. Tasks leveraged the Jobs-to-Be-Done framework — meal planning, recipe translation, shopping with control, saving versions, personalization — in realistic scenarios.
**Challenges:** Participants may prioritize speed over depth; platforms like UserZoom, UserTesting, and UserInterviews require balancing sufficient context against authenticity. With AI systems, the adaptive/opaque nature makes it difficult to explain functionality without undermining authentic testing.

### Themes From the Un-Moderated Study
1. **Clarity of Instructions and Task Flow** — interface self-explanatory quality and navigation clarity.
2. **Natural Behavior and Drop-Off Points** — abandonment and workarounds reveal friction and unmet expectations.
3. **Perceived Value vs. Effort** — whether users see sufficient benefit to complete tasks without external motivation.
4. **Trust and Transparency** — users react to product logic as-is; comments center on whether decisions feel trustworthy.
5. **Personalization and Control** — expectations for controlling diet, budget, brand preferences; frustration with repeated prompts surfaces.
6. **Tone and Engagement** — the assistant's microcopy and voice tested raw; approachability matters.
7. **Technical and Contextual Friction** — device-specific issues like load times and mobile responsiveness become visible.

### Opportunities from the Un-Moderated Study
1. **Improve Self-Guided Usability** — simplify navigation, make CTAs obvious ("Add to Cart," "Save Plan").
2. **Strengthen Onboarding & Contextual Guidance** — lightweight onboarding or inline hints for critical actions.
3. **Enhance Recipe Visibility & Continuity** — persistent recipe panel, clear step-to-cart mappings.
4. **Surface Control Points for Trust** — plain-language explanations for quantity, brand choices, savings.
5. **Reduce Cognitive Load** — profile-based rules so users don't re-enter constraints repeatedly.
6. **Optimize for Mobile & Real-World Context** — mobile-friendly layouts, quick-access controls.
7. **Make Value Proposition Obvious** — highlight time savings, cost estimates, personalization benefits early.
8. **Embed "Save & Reuse" Features** — clear CTAs to save plans and build a personal digital cookbook.

## A Brief of Two Methods
The brief synthesized both research modalities into a narrative document. Wizard-of-Oz sessions revealed possibility and magic; unmoderated tests exposed real-world friction. The brief serves as a strategic compass for design and product evolution.

### Themes from the Brief
1. **Trust comes from personalization + plain-language reasoning** — confidence grows when the system remembers household rules and justifies choices.
2. **Realistic planning beats novelty** — users prefer familiar, low-effort meals and predictable rhythms; ingredient bloat damages credibility.
3. **Guided onboarding reduces friction** — form-like intake, examples, explicit next steps help users start without uncertainty.
4. **Plan-to-cart must be reliable and fast** — failures at the "make it shoppable" moment collapse trust; clear success states and progress cues matter.
5. **Flexibility & control are non-negotiable** — quick swaps, budget toggles, pantry-aware edits allow adaptation without rebuilding.
6. **People want to be remembered purposefully** — persistent memory avoids waste; scope and transparency are essential.

Additional insight: "Dialogue is work" — conversation itself creates cognitive load; interactions should clearly build toward outcomes rather than feel like endless prompting.

### Opportunities From the Brief
1. **Build Trust Through Personalization** — persistent profile rules so constraints don't require re-entry; transparent reasoning.
2. **Simplify Planning for Real Life** — elevate signals like "under 30 minutes" and "kid-friendly"; structured weekly systems and ingredient controls.
3. **Guided Onboarding & Clear Flows** — reduce friction through inline examples, form-like intake, kept continuity within the assistant.
4. **Reliability & Speed at Critical Moments** — flawless cart operations, success states, progress cues during latency.
5. **Flexibility & Control** — quick-swap UI for proteins/substitutions; surface value ranges and pantry-aware toggles.
6. **Practical Optimization** — explainable optimization modes (e.g. "These choices save $X"); surface cost estimates and rationale.

## Summary
User research for a meal planning assistant developed for Kroger through Cooklist. Combines qualitative depth (moderated Wizard-of-Oz) with quantitative breadth (unmoderated testing) to triangulate adoption barriers. Core insights: trust emerges from personalization and transparency; real-world planning matters more than novelty; the moment of converting a meal plan to purchases is critical. The brief crystallizes these findings into a strategic narrative for product development.
