---
title: "Meal Assistant"
subtitle: "Two studies, one adoption story — Kroger / Cooklist"
hasImages: true
order: 2
cardTitle: "Proof of Concept in collaboration with Cooklist, Inc."
---

# Kroger/Cooklist Meal Assistant — Two studies, one adoption story

## How trust, realism, and plan-to-cart reliability shape weekly meal planning behaviors.

![](/work/meal-assistant/001.png)

## Why two studies

One study goes deep on *why* behaviors happen (diagnostic), the other goes wide on *where* they break across the end-to-end flow (coverage). Together they triangulate adoption barriers and product requirements.

# Moderated Wizard-of-Oz interviews

Wizard-of-Oz is a prototyping method where users interact with a ‘live’ assistant, but a researcher simulates the system behind the scenes to validate the experience before engineering is complete.

**Method:** 60-min 1:1 Zoom (Wizard-of-Oz simulation)

1. **Sample: N=5**
2. **Goal:** compare baseline vs AI-assisted flow for speed, confidence, and trust

![](/work/meal-assistant/002.png) ![](/work/meal-assistant/003.png) ![](/work/meal-assistant/004.png) ![](/work/meal-assistant/005.png) ![](/work/meal-assistant/006.png)

**Moderated Wizard-of-Oz interviews (60 min, Zoom).** I ran 1:1 sessions using a structured discussion guide to keep each interview consistent while still leaving room for open-ended probing. Participants worked through a realistic weekly-meal-planning scenario, first describing how they’d normally decide what to cook, then interacting with a “live” Meal Assistant. Behind the scenes, I simulated assistant behavior in real time (Wizard-of-Oz) using prepared response patterns to test the experience before full automation. This approach let us evaluate trust, clarity, and perceived effort—especially what people needed to feel confident the plan would work for their household.

## Themes from the Wizard

### 1. Recipe-Centric Experience

- Users want the recipe to remain the anchor throughout the shopping and checkout process.
- Losing sight of the recipe once items move to the cart erodes trust and confidence.
- Every product choice should clearly map back to “what dish is this for?”

### 2. Automation with Control

- While users appreciate automation for heavy lifting (ingredient mapping, quantity math), they insist on **visible choices**:
  - Easy substitutions.
  - Multiple brand options per ingredient.
  - Clear override points for preferences.

### 3. Transparency Builds Trust

- Users need to understand:
  - Why certain brands, quantities, and prices were chosen.
  - How savings were calculated.
- Opaque logic and “black box” decisions undermine confidence.

### 4. Persistent Personalization

- Users expect the assistant to **remember dietary rules, household size, and budget** across sessions.
- Repeated prompts for the same constraints feel frustrating.
- Desire for a lightweight “food profile” that tunes results without feeling like surveillance.

### 5. Continuity and Reusability

- Customized plans and recipes should be easy to save and reuse.
- Users want to build toward a personal digital cookbook over time.
- Current experience makes recipes feel “lost” after checkout, forcing copy-paste workarounds.

### 6. Safety and Explainability

- Comfort sharing practical constraints (diet, allergies, budget) when purpose and scope are clear.
- Users explicitly ask for **plain-language reasoning** behind recommendations.
- Tension exists between wanting a continuously learning system and concerns about data retention.

### 7. Tone and Trust Signals

- Users prefer a **warm, collaborative tone**—the assistant should feel like a supportive cooking partner, not a judgmental or opaque system.
- Transparency and control are critical trust signals.

### 8. Ads as Value, Not Noise

- Ads are acceptable only if they clearly support the user’s goal (e.g., savings or healthier options in the same category).
- Generic or off-mission ads break trust.

## Opportunities from the Wizard

### 1. Persistent Recipe Visibility

- **Observation:** Users felt disoriented when the recipe disappeared after adding items to the cart.
- **Opportunity:**
  - Implement a **persistent recipe panel** during shopping and checkout.
  - Provide a clear one-to-one mapping between recipe steps and cart items to reinforce trust.

### 2. Ingredient Substitution & Choice

- **Observation:** Participants wanted control over brands and substitutions but found current flows rigid.
- **Opportunity:**
  - Offer **2–3 curated options per ingredient** (e.g., Value / Store Brand / National Brand).
  - Enable **in-flow swaps** without leaving the assistant experience.

### 3. Transparent Logic for Quantity & Price

- **Observation:** Users tolerated opaque quantity math but didn’t fully trust it.
- **Opportunity:**
  - Surface **simple explanations** like “2 boxes to serve 6” and **recipe-level cost estimates**.
  - Add **explainable optimization modes** (e.g., “I chose these items to maximize savings”).

### 4. Save & Reuse Customized Plans

- **Observation:** Users resorted to copy-paste or external tools to keep “keeper recipes.”
- **Opportunity:**
  - Introduce a **clear CTA to save plans** into “My Recipes” or a **digital cookbook**.
  - Persist customizations (brands, sizes, substitutions) for easy reuse.

### 5. Lightweight Food Profile

- **Observation:** Repeated prompts for diet and household constraints frustrated users.
- **Opportunity:**
  - Create a **light onboarding flow** for diet, allergies, household size, and budget.
  - Use these as **always-on rules** rather than repeated prompts.

### 6. Explainable AI & Trust Signals

- **Observation:** Users explicitly asked “Why this brand? Why this quantity?”
- **Opportunity:**
  - Add **plain-language reasoning** for choices.
  - Provide **control toggles** for affordability vs. quality preferences.

### 7. Tone & Engagement

- **Observation:** Users responded positively to a warm, collaborative tone.
- **Opportunity:**
  - Position the assistant as a **supportive cooking partner**, not a rigid system.
  - Explore **brand voice differentiation** (e.g., “distinctly Kroger” personality).

### 8. Ads as Value

- **Observation:** Ads were acceptable only when tied to savings or healthier options.
- **Opportunity:**
  - Integrate **on-mission promos** (e.g., “Save $X on these ingredients”) rather than generic ads.

The research naturally led to the articulation of the **Core Jobs-to-Be-Done** because participants consistently framed their needs around outcomes rather than features. Through the Wizard-of-Oz sessions and interviews, it became clear that users weren’t simply looking for “an AI meal planner” in the abstract they were trying to solve practical, recurring problems in their daily lives. They wanted help moving from *“What should we eat?”* to *“I’m ready to cook this”* with less effort, more confidence, and without disrupting their existing shopping habits. This reasoning revealed five distinct jobs:

1. **Plan meals that fit real-world constraints** Time, diet, household size, budget, and what’s already in the kitchen.
2. **Translate any recipe into a trustworthy, shoppable list**
  - Clean ingredient list, correct quantities, and clear mapping to products.
3. **Shop with control: brands, substitutions, and savings**
  - Maintain existing shopping style while benefiting from automation.
4. **Save “my version” and reuse later**
  - Build toward a personal digital cookbook with customizations.
5. **Feel safe sharing data & see AI in the loop**
  - Personalization without feeling surveilled; transparency in reasoning.

These jobs emerged as the foundation for design principles and future experiments because they represent what users are truly “hiring” the assistant to accomplish not just what the technology can do, but what makes it worth adopting in their real-world context.

![](/work/meal-assistant/007.jpg)

# Un-Moderated Study

I opted for an unmoderated approach to **capture natural user behavior at scale without facilitator influence**. This method allows participants to interact with the prototype or concept in their own environment, on their own time, which is critical for:

- **Authenticity:** Users behave more naturally when they’re not being observed, reducing social desirability bias.
- **Scalability:** Enables testing with a larger, more diverse sample without scheduling constraints.
- **Speed & Cost Efficiency:** No need for live moderation, making it faster and more cost-effective for iterative testing.
- **Contextual Insights:** Participants use the product in real-world conditions (devices, distractions, shopping habits), revealing friction points that might not surface in a controlled setting.
- **Quant + Qual Mix:** Ideal for collecting structured metrics (e.g., task completion, time-on-task) alongside open-ended feedback.

Online unmoderated testing introduces inherent challenges that researchers must navigate. Participants in these studies are often motivated by speed and compensation, which can lead to superficial engagement rather than authentic interaction with the product. To mitigate this, we ran two pilot studies to fine-tune the structure and ensure tasks were meaningful. Our approach leveraged the **Jobs-to-Be-Done framework**, crafting a series of tasks that required participants to work through the assistant’s core functions—planning meals, translating recipes, shopping with control, saving versions, and interacting with personalization features. Internally, we debated the balance between guiding participants and allowing natural exploration; too much guidance risks biasing behavior, while too little can result in incomplete data. This tension is common when using platforms like **UserZoom, UserTesting, and UserInterviews**, where the researcher must create enough context for participants to engage deeply with the tool. If users don’t encounter the feature in a realistic scenario, we lose the feedback necessary to improve it. The complexity compounds when AI is involved: its adaptive nature and opaque reasoning make it harder for participants to understand what’s happening without explanation, yet over-explaining undermines the authenticity of the test. Striking this balance—between context, guidance, and autonomy—is critical for generating actionable insights in unmoderated AI-driven studies.

## Themes From the Un-Moderated Study

### 1. Clarity of Instructions and Task Flow

- Users often reveal whether the interface is self-explanatory without guidance.
- Confusion around navigation or unclear CTAs tends to surface strongly in unmoderated settings.

### 2. Natural Behavior and Drop-Off Points

- Unmoderated studies highlight where users abandon tasks or improvise workarounds.
- These behaviors often indicate friction in the flow or unmet expectations.

### 3. Perceived Value vs. Effort

- Participants show whether they see enough benefit to complete tasks without external prompting.
- If they skip steps or ignore features, it signals low perceived value or high cognitive load.

### 4. Trust and Transparency

- Without a moderator to explain, users react to the product’s logic as-is.
- Comments often center on whether decisions (e.g., ingredient substitutions, pricing) feel trustworthy.

### 5. Personalization and Control

- Users reveal how much control they expect over constraints like diet, budget, and brand preferences.
- Frustration with repeated prompts or lack of persistent settings often surfaces here.

### 6. Tone and Engagement

- The assistant’s tone and microcopy are tested in their raw form—users either find it approachable or robotic.
- This theme often informs brand voice refinements.

### 7. Technical and Contextual Friction

- Because participants use their own devices and environments, issues like load times, scrolling, or mobile responsiveness become clear.

## Opportunities from The Un-Moderated study

### 1. Improve Self-Guided Usability

- **Why:** Unmoderated sessions expose where users struggle without facilitator help.
- **Opportunity:** Simplify navigation and make CTAs more obvious (e.g., “Add to Cart,” “Save Plan”) so tasks feel intuitive without explanation.

### 2. Strengthen Onboarding & Contextual Guidance

- **Why:** Users often miss key features when instructions aren’t embedded in the flow.
- **Opportunity:** Add lightweight onboarding or inline hints for critical actions like setting dietary rules or saving recipes.

### 3. Enhance Recipe Visibility & Continuity

- **Why:** Drop-offs often occur when users lose sight of the recipe during shopping.
- **Opportunity:** Implement a **persistent recipe panel** and clear mapping between recipe steps and cart items.

### 4. Surface Control Points for Trust

- **Why:** Without a moderator to clarify, opaque logic erodes confidence.
- **Opportunity:** Provide **plain-language explanations** for quantity calculations, brand choices, and savings optimizations.

### 5. Reduce Cognitive Load

- **Why:** Unmoderated feedback often reveals friction from repeated prompts or unclear flows.
- **Opportunity:** Introduce **profile-based rules** (diet, household size, budget) so users don’t have to re-enter constraints every time.

### 6. Optimize for Mobile & Real-World Context

- **Why:** Participants use their own devices, exposing responsiveness issues.
- **Opportunity:** Prioritize mobile-friendly layouts, scannable recipe cards, and quick-access controls for substitutions.

### 7. Make Value Proposition Obvious

- **Why:** If users abandon tasks, it signals unclear benefit.
- **Opportunity:** Highlight **time savings, cost estimates, and personalization benefits** early in the flow.

### 8. Embed “Save & Reuse” Features

- **Why:** Users often resort to copy-paste when continuity isn’t clear.
- **Opportunity:** Add a **clear CTA to save plans** and build toward a personal digital cookbook.

# A Brief of two Methods

Both the Wizard-of-Oz work and the unmoderated study were distilled into a brief that became far more than a summary—it became a narrative of meaning and direction. The brief is where raw observations transformed into clarity, where scattered signals from two very different research modalities converged into a coherent story about what truly matters to users. It captures the tension between aspiration and reality: the Wizard sessions revealed the magic of possibility, while the unmoderated tests exposed the friction of real-world autonomy. By weaving these threads together, the brief doesn’t just report findings—it crystallizes the essence of the assistant’s purpose and the principles that will guide its evolution. It stands as a compass for design and strategy, a document that elevates insights into vision, reminding us that research is not an end in itself but a bridge to building something indispensable, something that feels like a partner in people’s lives.

## Themes from the Brief

**Trust comes from personalization + plain-language reasoning** — people gain confidence when the assistant *remembers household rules* (diet, budget, dislikes) and can justify choices (brands, quantities, cost).

**Realistic planning beats novelty** — participants gravitate toward familiar, low-effort meals and predictable weekly rhythms (leftovers / set nights); “ingredient bloat” is a credibility killer.

**Guided onboarding reduces “how do I talk to this?” friction** — form-like intake, chips/examples, and explicit next actions help people start without guesswork, and they want continuity inside the assistant.

**Plan-to-cart must be reliable and fast** — failures or ambiguity at the “make it shoppable” moment collapse trust; users want clear success states, accurate ingredient mapping, and progress cues during latency.

**Flexibility & control are non-negotiable** — quick swaps, “never show,” budget/fresh toggles, and pantry-aware edits let people adapt without rebuilding the plan.

**People want to be remembered (but purposefully)** — re-entering the same constraints feels wasteful; memory should be helpful, limited in scope, and transparent.

**Dialogue is work** — the conversation itself creates cognitive load; users need the interaction to clearly “build toward something,” not feel like endless prompting.

## Opportunities From the Brief.

### 1. Build Trust Through Personalization

- **Opportunity:** Implement persistent profile rules for diet, household size, and budget so users don’t have to re-enter constraints.
- **Why:** Trust is the prerequisite for adoption; continuity signals “it knows me.”
- **Action:** Add transparent reasoning for choices (e.g., “lowest price per ounce,” “two boxes for six servings”) and privacy-aware personalization.

### 2. Simplify Planning for Real Life

- **Opportunity:** Elevate ease signals like “under 30 minutes,” “low mess,” and “kid-friendly.”
- **Why:** Users prefer familiar, low-effort meals over novelty.
- **Action:** Offer structured weekly systems (e.g., core mains + rotation, leftover nights) and controls to trim ingredient bloat.

### 3. Guided Onboarding & Clear Flows

- **Opportunity:** Reduce friction with inline examples, chips, and form-like intake before plan generation.
- **Why:** Many users hesitate because they’re unsure how to interact with the assistant.
- **Action:** Make paths explicit (“Make this shoppable”), keep continuity inside the assistant, and avoid kicking users out to separate pages.

### 4. Reliability & Speed at Critical Moments

- **Opportunity:** Ensure one-click cart operations work flawlessly and show success states.
- **Why:** The most fragile moment is turning a plan into purchases; any failure collapses trust.
- **Action:** Provide progress cues during latency, explicit success messages, and maintain ingredient fidelity.

### 5. Flexibility & Control

- **Opportunity:** Add quick-swap UI for proteins, toppings, and substitutions; surface value ranges (Value / Private Label / National).
- **Why:** Real weeks change—users need fine-grained control without rebuilding the whole plan.
- **Action:** Include toggles for budget-friendly, repeat meals, and pantry-aware adjustments.

### 6. Practical Optimization

- **Opportunity:** Make optimization modes explainable (e.g., “These choices save you $X by…”).
- **Why:** Users want tools that make everyday decisions easier, faster, and smarter—not novelty for novelty’s sake.
- **Action:** Surface cost estimates and rationale for savings or quality trade-offs.

[Video: Kroger Meal Assitant Poc](https://player.vimeo.com/video/1152263589?app_id=122963)
