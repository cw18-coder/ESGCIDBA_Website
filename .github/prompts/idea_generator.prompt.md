# Idea Generator Prompt - DBA Thesis Research Topics

## Purpose
Conduct deep research and generate compelling, theoretically-grounded research topics for a DBA (Doctor of Business Administration) thesis. This prompt guides the agent to synthesize research ideas that are:
- **Contextually relevant** to the researcher's professional background and work environment
- **Theoretically rigorous** with strong grounding in established frameworks
- **Methodologically sound** with quantitative empirical designs
- **Practically impactful** contributing to both theory and business practice
- **Feasible** given access to product usage data and organizational resources

## Input Parameters

When invoking this prompt:
- **Session Number**: The counter for the brainstorming session (e.g., 1, 2, 3...)
- **Session Date**: The date of the brainstorming session (format: DD Month YYYY, e.g., "12 October 2025")
- **Optional Focus Area**: Specific theme, theory, or methodology to explore (if researcher has particular interest)

## Required Context File

**MUST READ BEFORE GENERATING IDEAS**: `context/idea_generation.context.md`

This file contains critical information about:
- **Professional Background**: Current role, responsibilities, and expertise
- **Work Environment**: Product, team, organization, and industry context
- **Research Motivation**: Why pursuing DBA and what drives the research interest
- **Available Resources**: Access to data, participants, and organizational support
- **Methodological Preferences**: Quantitative/qualitative, experimental/observational, etc.
- **Constraints and Opportunities**: Time, scope, ethical considerations

**Do NOT proceed without reading and understanding this context file**. All research ideas must be tailored to this specific researcher's situation.

## Research Idea Generation Process

### Step 1: Context Analysis

Read and synthesize the context file to understand:

1. **Professional Identity**:
   - What is the researcher's current role and responsibilities?
   - What domain expertise do they possess?
   - What organizational context are they embedded in?

2. **Resource Assessment**:
   - What product/user data is available?
   - What organizational partnerships are possible?
   - What scale of research is feasible (sample size, duration)?

3. **Research Inclinations**:
   - Quantitative vs. qualitative preferences
   - Experimental vs. observational designs
   - Individual vs. organizational level of analysis
   - Theory-testing vs. theory-building orientation

4. **Impact Priorities**:
   - Academic contribution goals
   - Practical business impact objectives
   - Personal career development alignment

### Step 2: Literature Landscape Mapping

Conduct comprehensive research across multiple domains:

**Core Literature Sources**:
1. **Top-tier journals** (last 5 years, emphasis on 2023-2025):
   - Management: Academy of Management Journal, Strategic Management Journal, Organization Science
   - IS/Technology: MIS Quarterly, Information Systems Research, Journal of Management Information Systems
   - Psychology: Journal of Applied Psychology, Organizational Behavior and Human Decision Processes
   - Interdisciplinary: Nature, Science, PNAS (for AI/technology studies)

2. **Theoretical frameworks** relevant to the research context:
   - Technology Acceptance Model (TAM) and extensions
   - Diffusion of Innovation Theory
   - Self-Determination Theory
   - Social Cognitive Theory
   - Task-Technology Fit
   - Resource-Based View
   - Dynamic Capabilities
   - Human-AI Teaming frameworks
   - Transactive Memory Systems
   - Collective Intelligence Theory

3. **Emerging research streams**:
   - Generative AI adoption and impact
   - Human-AI collaboration
   - AI ethics and responsible AI
   - Knowledge management systems
   - Digital transformation
   - Future of work
   - Organizational learning with AI

4. **Methodological innovations**:
   - Product telemetry analysis
   - Digital trace data
   - Longitudinal designs
   - Field experiments
   - Multi-level modeling
   - Machine learning for behavioral prediction

### Step 3: Gap Identification

Systematically identify research gaps:

**Types of Gaps to Look For**:

1. **Empirical Gaps**:
   - Phenomena studied conceptually but lacking empirical evidence
   - Contexts not yet investigated (e.g., enterprise vs. consumer AI)
   - Populations understudied (e.g., knowledge workers vs. general consumers)

2. **Theoretical Gaps**:
   - Theories not yet applied to new contexts (e.g., SDT in AI collaboration)
   - Contradictory findings requiring theoretical reconciliation
   - Boundary conditions of established theories undefined

3. **Methodological Gaps**:
   - Cross-sectional studies needing longitudinal validation
   - Survey-based research lacking behavioral data
   - Individual-level studies needing team/organizational analysis
   - Lab experiments requiring field validation

4. **Practical Gaps**:
   - High practical importance but low research attention
   - Managerial challenges lacking evidence-based guidance
   - Technology adoption/implementation problems

5. **Temporal Gaps**:
   - Long-term effects unknown (most studies examine immediate impacts)
   - Adoption trajectories not mapped
   - Skill transfer and sustainability unexplored

**Gap Documentation Requirements**:
- Cite specific studies revealing the gap
- Quantify the gap where possible (e.g., "92% of studies examine adoption intention; only 8% study sustained use")
- Explain why filling this gap matters (theoretical and practical significance)

### Step 4: Research Topic Development

For each research topic, develop a comprehensive proposal including:

#### A. Research Question Formation

**Primary Research Question**:
- Clear, specific, and answerable
- Aligned with researcher's context and resources
- Addresses identified gap
- Appropriate scope for doctoral thesis

**Sub-questions** (2-4):
- Break down primary question into investigable components
- Each sub-question should be independently answerable
- Collectively, sub-questions address primary question comprehensively

**Quality Criteria**:
- ✅ Specific: Not too broad or vague
- ✅ Researchable: Can be answered with available methods and data
- ✅ Original: Addresses genuine gap, not redundant
- ✅ Significant: Matters to both theory and practice
- ✅ Ethical: Can be pursued without harm

#### B. Theoretical Framework Selection

**Primary Theory/Framework**:
- Established theoretical foundation (not obscure or untested)
- Directly relevant to research question
- Clearly defined constructs and relationships
- Proven empirical validity in prior research

**Supporting Theories** (if applicable):
- Secondary frameworks that complement primary theory
- Integration logic: explain how theories work together
- Avoid theoretical "name-dropping"—only include if genuinely used

**Framework Justification**:
- Why this theory is most appropriate
- Cite key meta-analyses or validation studies
- Reference recent applications (2023-2025 preferred)
- Explain what constructs will be measured

**Example Structure**:
```
**Primary**: Technology Acceptance Model (TAM) with AI-specific extensions
- Core constructs: Perceived usefulness, ease of use, intention, actual use
- AI extensions: AI mindset, trust, perceived intelligence
- Justification: Most validated framework (meta-analysis N=34,357); recent AI studies show AI mindset rivals usefulness as predictor (β=0.28 vs. β=0.34)

**Secondary**: Diffusion of Innovation Theory for adopter segmentation
- Application: Understanding differential adoption trajectories
- Integration: DOI explains between-person variance in TAM relationships
```

#### C. Research Gap Documentation

**Critical Gaps Section** (3-6 specific gaps):

For each gap:
1. **State the gap clearly**: What is missing from current literature?
2. **Cite evidence**: Reference specific studies or meta-analyses revealing the gap
3. **Quantify when possible**: Give percentages, sample sizes, effect sizes
4. **Explain significance**: Why does this gap matter?

**"Why Important" Paragraph**:
- Broader implications of filling this gap
- Connects to real-world challenges or opportunities
- Links theory and practice
- Demonstrates DBA-level significance (not just academic curiosity)

#### D. Quantitative Methodology Design

Design a rigorous, feasible quantitative study:

**Research Design Options**:
- Longitudinal survey + product usage tracking
- Field experiment with randomized conditions
- Multi-level (individual, team, organization) observational study
- Quasi-experimental design with matched controls
- Time-series analysis with interventions
- Survival analysis for retention/abandonment

**Design Specification Requirements**:

1. **Sample Description**:
   - Population: Who are the participants?
   - Sampling strategy: How will they be recruited?
   - Sample size: Adequate for proposed analyses
   - Inclusion/exclusion criteria
   - Power analysis justification

2. **Data Collection**:
   - **Survey instruments**: Validated scales (cite sources, report reliability)
   - **Product usage data**: Specific behavioral metrics
   - **Performance data**: Objective outcome measures
   - **Timing**: When will data be collected (T0, T1, T2...)?
   - **Duration**: Total study length

3. **Variables**:
   - **Independent variables**: Predictors, experimental conditions
   - **Dependent variables**: Outcomes of interest
   - **Mediators**: Mechanisms explaining relationships
   - **Moderators**: Boundary conditions
   - **Control variables**: Potential confounds

4. **Analytical Strategy**:
   - **Primary analysis**: Main statistical technique (e.g., HLM, SEM, Cox regression)
   - **Justification**: Why this method is appropriate for the research question
   - **Software**: R, Stata, Mplus, SPSS, Python
   - **Secondary analyses**: Additional tests to triangulate findings
   - **Assumptions testing**: How will assumptions be checked?

**Example Methodology Section Structure**:
```
**Research Design**: Three-phase longitudinal study with survival analysis

**Phase 1: Baseline (T0)**:
- Survey (N=400-600): TAM constructs, AI mindset, demographics
- Validated scales: [cite sources with alphas]

**Phase 2: Usage Tracking (T0 → T0+12 months)**:
- Product telemetry: Daily active use, session duration, features used
- Outcome: Time to abandonment (30-day inactivity threshold)

**Phase 3: Follow-ups (T3, T6, T12)**:
- Repeated measures surveys
- Experience sampling

**Primary Analysis**: Cox Proportional Hazards Survival Analysis
- DV: Time to abandonment (censored at 12 months)
- IVs: TAM scores, AI mindset, organizational support
- Time-varying covariates: Usage intensity, feature adoption
- Advantages: Handles censored data, examines timing

**Sample Size**: N=400-600 provides 80% power for medium effects (HR=1.5) with 15-20 predictors at α=0.05
```

#### E. Product Usage Data Leverage

Specify how product telemetry will be used:

**Behavioral Metrics Categories**:

1. **Engagement Indicators**:
   - Daily/weekly/monthly active users
   - Session frequency and duration
   - Return rate after inactivity periods
   - Feature adoption breadth

2. **Usage Depth Indicators**:
   - Advanced feature usage
   - Query complexity
   - Knowledge base size and diversity
   - Integration with other tools

3. **Collaboration Indicators** (if team-level):
   - Shared knowledge bases
   - Collaborative sessions
   - Cross-member references
   - Communication patterns

4. **Outcome Proxies**:
   - Task completion metrics
   - Output quality indicators
   - Efficiency measures
   - Innovation indicators (novel uses)

5. **Critical Events**:
   - First use of key features
   - Milestones in adoption journey
   - Abandonment signals
   - Re-engagement triggers

**Operationalization Examples**:
```
**Sustained Adoption**: 
- Behavioral: ≥1 session/week at 6-month and 12-month marks
- Survey: Self-reported continued intention to use

**Intensification**:
- Behavioral: Increase in session frequency AND feature diversity over time
- Threshold: 25% increase from baseline

**Skill Development**:
- Behavioral: Query sophistication (NLP complexity analysis)
- Survey: Self-efficacy scale change
```

**Data Integration Strategy**:
- How behavioral and survey data will be linked
- Privacy and ethics considerations
- Missing data handling
- Outlier treatment

#### F. Contributions to Theory and Practice

Articulate specific, concrete contributions:

**Theoretical Contributions** (3-5):
- **Theory extension**: How does this research extend existing theory?
- **New constructs**: Any new variables or relationships proposed?
- **Boundary conditions**: What contextual factors are tested?
- **Mechanisms**: What processes or mediators are revealed?
- **Integration**: How are multiple theories synthesized?

**Quality Criteria**:
- Specific to this research (not generic statements)
- Clearly explains the conceptual advance
- Connects to broader theoretical debates
- Cites relevant theoretical papers

**Practical Contributions** (3-6):
- **Design principles**: Guidelines for technology/product design
- **Implementation strategies**: How organizations should deploy
- **Diagnostic tools**: Methods to assess readiness or progress
- **Training recommendations**: How to prepare users/teams
- **Policy guidance**: Organizational policies or practices
- **ROI insights**: Business case considerations

**Quality Criteria**:
- Actionable recommendations
- Addresses real business challenges
- Feasible to implement
- Measurable impact potential

**DBA-Specific**: Explicitly connect theory and practice—show how theoretical insights generate practical value and vice versa.

### Step 5: Multi-Topic Synthesis

Generate **3-5 research topics** that collectively:

**Diversity Criteria**:
1. **Level of analysis variation**: Individual, team, organizational, or multi-level
2. **Theoretical diversity**: Different primary frameworks across topics
3. **Methodological variety**: Different research designs (experimental, observational, longitudinal, cross-sectional)
4. **Complementary focus**: Topics address different aspects of same phenomenon or different phenomena in same context
5. **Risk distribution**: Mix of ambitious high-impact topics and more conservative feasible topics

**Coherence Criteria**:
- All topics grounded in researcher's professional context
- All topics leverage available data and resources
- All topics contribute to researcher's expertise development
- Topics can reference/build on each other where appropriate

**Comparison Table**:
Create a summary table comparing topics on:
- Primary theory
- Level of analysis
- Research design
- Key DV/outcome
- Major gap addressed
- Sample size and duration
- Primary analytical method

## Output Format

Create a comprehensive Markdown file: `thesis_md/1_idea_generation/brainstorming_session{n}.md`

### Required Document Structure

```markdown
# [Compelling Overall Title for Session]

**Session Date**: [Date in format: DD Month YYYY]
**Session Number**: [n]

---

## Introduction / Context
[Brief paragraph setting up the session focus, connecting to researcher's context]

---

## Research Topic 1: [Topic Title]

### Research Question
**Primary**: [Main research question]

**Sub-questions**:
- [Sub-question 1]
- [Sub-question 2]
- [Sub-question 3]

### Theoretical Framework(s)

**Primary**: [Theory name]
- [Key constructs and relationships]
- [Justification with citations]

**Secondary**: [Theory name if applicable]
- [Application and integration]

### Research Gap Addressed

**Critical Gaps**:
1. [Gap 1 with evidence]
2. [Gap 2 with evidence]
3. [Gap 3 with evidence]

**Why Important**: [Paragraph explaining significance]

### Quantitative Methodology

**Research Design**: [Design type]

[Detailed methodology specification following structure above]

### Product Usage Data Leverage

[Specific behavioral metrics and operationalizations]

### Contributions to Theory and Practice

**Theoretical Contributions**:
1. [Contribution 1]
2. [Contribution 2]
...

**Practical Contributions**:
1. [Contribution 1]
2. [Contribution 2]
...

---

## Research Topic 2: [Topic Title]

[Same structure as Topic 1]

---

## Research Topic 3: [Topic Title]

[Same structure as Topic 1]

---

[Additional topics as appropriate]

---

## Summary Comparison of Topics

[Comprehensive comparison table]

## Implementation Feasibility

[Section discussing practical considerations for all topics in researcher's context]

## Next Steps / Recommendations

[Suggestions for which topics to pursue further, additional reading, or refinement needed]

---

**Document Metadata**:
- **Generated**: [Date]
- **Context File Version**: [If versioned]
- **Literature Review Cutoff**: [Latest papers included]
```

### Document Quality Standards

**Length**: 
- Total document: 6,000-10,000 words
- Per topic: 2,000-3,000 words
- Balance depth with readability

**Citation Standards**:
- **Recent literature**: 60%+ citations from 2022-2025
- **Seminal works**: Include foundational papers for theories
- **Format**: Author (Year) in-text; consider adding reference list
- **Specificity**: Include sample sizes, effect sizes, journal names for key studies

**Writing Quality**:
- **Academic tone**: Scholarly but readable
- **Precision**: Specific claims, not vague generalities
- **Structure**: Clear headings, logical flow
- **Synthesis**: Integrate information, don't just list
- **Critical analysis**: Evaluate literature, identify limitations

**Feasibility Check**:
- Each topic must be realistically completable as a DBA thesis
- Methods must be appropriate given available resources
- Sample sizes must be achievable
- Timeline must be reasonable (2-4 years typical for DBA)

## Research Process Guidelines

### Literature Search Strategy

**Databases**:
- Google Scholar (broad coverage, recent papers)
- Web of Science (journal quality filtering)
- PubMed (psychology and health-related)
- SSRN (working papers, latest research)
- AIS eLibrary (IS-specific)

**Search Terms Examples** (customize to context):
- AI adoption, generative AI, ChatGPT, enterprise AI
- Technology acceptance, TAM, user adoption, diffusion
- Human-AI collaboration, AI augmentation, human-AI teaming
- Knowledge management systems, organizational learning
- Self-determination theory, intrinsic motivation, autonomy
- Transactive memory systems, collective intelligence
- Longitudinal study, survival analysis, field experiment

**Search Strategy**:
1. Start with recent systematic reviews and meta-analyses
2. Identify seminal papers cited frequently
3. Forward citation search (who cited these papers?)
4. Backward citation search (what did they cite?)
5. Journal-specific search in top outlets

### Critical Evaluation Criteria

When evaluating literature for inclusion:

1. **Relevance**: How closely related to research context?
2. **Rigor**: Strong methodology and analysis?
3. **Recency**: Recent enough to reflect current understanding?
4. **Impact**: Published in reputable outlet? Highly cited?
5. **Applicability**: Can findings/methods inform this research?

### Synthesis Approach

**NOT**: Summarize each paper individually
**INSTEAD**: 
- Group papers by theme, gap, or finding
- Identify patterns and contradictions
- Build narrative arc from literature to research question
- Show progression of knowledge over time
- Highlight unanswered questions explicitly

### Ethical Considerations

Ensure all proposed research:
- ✅ Respects participant privacy and consent
- ✅ Uses organizational data appropriately (with permission)
- ✅ Considers potential harms (job loss fears, surveillance concerns)
- ✅ Plans for responsible dissemination of findings
- ✅ Addresses power dynamics in workplace research
- ✅ Includes diverse populations appropriately

## Iterative Refinement Process

If generating multiple brainstorming sessions over time:

**Session 1**: Broad exploration, identify 3-5 diverse topics
**Session 2**: Deep dive on 1-2 most promising topics from Session 1; add 2-3 new alternatives
**Session 3**: Refine methodology for top choice; explore variations or contingency plans
**Session n**: Respond to researcher feedback, adjust based on new context

**Cross-Session Learning**:
- Reference previous sessions where relevant
- Build on prior ideas rather than repeating
- Track evolution of thinking
- Document decision rationale (why topic chosen/rejected)

## Collaboration with Researcher

**Expect Interaction**:
- Researcher may provide feedback on generated topics
- Researcher may request focus on specific theory or method
- Researcher may share new context (e.g., organizational changes)
- Researcher may ask for variations or alternatives

**Responsive Adjustments**:
- Incorporate feedback explicitly in next session
- Acknowledge constraints or preferences researcher identifies
- Offer rationale when suggesting researcher reconsider preferences
- Balance researcher desires with methodological/theoretical rigor

## Final Checklist

Before finalizing the brainstorming session document:

- [ ] Context file (`context/idea_generation.context.md`) thoroughly reviewed
- [ ] Session date and number included at top of document
- [ ] 3-5 research topics generated with diverse perspectives
- [ ] Each topic has all required sections (question, theory, gap, method, data, contributions)
- [ ] Theoretical frameworks are established, well-cited, and justified
- [ ] Research gaps are specific, evidenced, and significant
- [ ] Methodologies are rigorous, detailed, and feasible
- [ ] Product usage data integration is specific and operationalized
- [ ] Contributions are concrete and meaningful (not generic)
- [ ] Citations are recent (60%+ from 2022-2025) and appropriate
- [ ] Comparison table summarizes topics clearly
- [ ] Feasibility discussion addresses researcher's context
- [ ] Writing is clear, precise, and scholarly
- [ ] Document is well-structured and professionally formatted
- [ ] All claims are supported with evidence or clear reasoning

## Success Indicators

A high-quality brainstorming session document will:

✅ **Inspire**: Researcher is excited about pursuing one or more topics
✅ **Inform**: Researcher understands theoretical landscape and gaps
✅ **Guide**: Researcher has clear methodology roadmap
✅ **Justify**: Reviewer (supervisor, committee) sees rigor and feasibility
✅ **Differentiate**: Topics are novel, not derivative
✅ **Integrate**: Theory and practice are seamlessly connected
✅ **Leverage**: Researcher's unique context and resources are maximized

---

**Remember**: This is a DBA thesis, not a pure PhD. The research must bridge theory and practice—making both scholarly contributions AND providing actionable insights for business. Every research topic should clearly articulate both academic novelty and practical impact.