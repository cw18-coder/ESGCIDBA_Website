# Three Compelling DBA Thesis Research Topics for Microsoft Copilot Notebook

**Session Date**: 12 October 2025
**Session Number**: 1

---

## Research Topic 1: The Sustained Adoption Paradox - Predicting Long-Term Engagement with Enterprise AI Knowledge Management Systems

### Research Question
**Primary**: What individual, organizational, and usage-pattern factors predict sustained versus abandoned adoption of enterprise AI knowledge management tools, and how do these factors change over the adoption lifecycle?

**Sub-questions**:
- How do AI mindset, trust, and self-efficacy evolve from initial adoption through sustained use?
- Which early usage patterns (feature exploration, query complexity, session frequency) predict long-term retention?
- What role do organizational facilitating conditions play in bridging the intention-behavior gap?

### Theoretical Framework(s)

**Primary**: **Extended Technology Acceptance Model (TAM)** with AI-specific constructs
- Core constructs: Perceived usefulness, perceived ease of use, behavioral intention, actual use behavior
- AI-specific extensions: AI mindset (growth vs. fixed; non-deskilling beliefs), trust in AI systems, perceived AI intelligence, AI anxiety, job threat perceptions
- Justification: TAM is the most validated framework in technology adoption (meta-analysis N=34,357), and recent 2024-2025 studies demonstrate that AI mindset (β=0.28) rivals perceived usefulness (β=0.34) as a predictor

**Secondary**: **Diffusion of Innovation Theory** for adopter segmentation
- Five adopter categories: innovators, early adopters, early majority, late majority, laggards
- DOI attributes: relative advantage, compatibility, complexity, trialability, observability
- Application: Understanding differential adoption trajectories across user segments

**Supporting**: **Self-Determination Theory** for psychological sustainability
- Core needs: autonomy, competence, relatedness
- Application: Examining intrinsic motivation changes during AI collaboration

### Research Gap Addressed

**Critical Gaps**:
1. **Post-adoption behavior gap**: 92% of studies examine adoption intention; only 8% study sustained use and intensification (literature review finding)
2. **NotebookLM-style tools gap**: Enterprise AI knowledge management tools combining multi-source data consolidation with conversational agents specifically identified as understudied (Research Methods subagent Gap #6)
3. **Longitudinal gap**: Most studies cross-sectional; limited understanding of how attitudes and usage evolve over time (identified in all four research streams)
4. **Organizational vs. individual adoption chasm**: 28% individual adoption vs. 5.4% organizational adoption creates implementation challenges (St. Louis Fed 2025)

**Why Important**: Organizations invest heavily in AI tools but face high abandonment rates. Understanding what sustains usage beyond initial novelty is critical for ROI. Current research focuses on initial adoption intentions, leaving sustained engagement mechanisms unexplored. With enterprise AI-KM market projected to grow from $3.0B (2024) to $102.1B (2034), understanding retention factors has major practical significance.

### Quantitative Methodology

**Research Design**: **Three-phase longitudinal study with survival analysis**

**Phase 1: Baseline Assessment (T0)**
- Survey instrument (N=400-600 Copilot Notebook users across multiple organizations)
- Measures: TAM constructs, AI mindset, trust, self-efficacy, job threat perceptions, organizational support, demographic controls
- Tool: Validated scales from Ibrahim et al. (2025), Popa et al. (2025), Gansser & Reich (2021)

**Phase 2: Usage Tracking (T0 → T0+12 months)**
- Product telemetry data: Daily active usage, session duration, features used, query complexity, number of sources integrated, collaboration features adoption
- Critical events: Feature exploration milestones, first collaborative use, first advanced query
- Outcome variable: Time to abandonment (or censored at 12 months for sustained users)

**Phase 3: Follow-up Assessments (T3, T6, T12)**
- Repeated measures surveys: Track changes in TAM variables, intrinsic motivation, perceived skill development
- Experience sampling: Weekly micro-surveys on immediate usage experiences

**Primary Analysis**: **Cox Proportional Hazards Survival Analysis**
- Dependent variable: Time to abandonment (days until 30-day inactivity threshold)
- Independent variables: Initial TAM scores, AI mindset, trust, self-efficacy, organizational support
- Time-varying covariates: Cumulative usage intensity, feature adoption progression
- Covariates: User role, team size, industry, prior AI experience
- Advantages: Handles censored data; examines timing not just occurrence; identifies critical retention periods

**Secondary Analyses**:
- **Structural Equation Modeling (SEM)**: Test extended TAM at each time point (T0, T6, T12) to examine construct relationships over time
- **Hierarchical Linear Modeling (HLM)**: Account for organizational nesting effects
- **Cluster Analysis**: Identify distinct user trajectory profiles using k-means or latent class analysis
- **Regression Analysis**: Predict usage intensity at T6 and T12 from baseline and early usage patterns

**Sample Size Justification**: N=400-600 provides 80% power to detect medium effects (HR=1.5) in survival analysis with 15-20 predictors, assuming 40% event rate

### Product Usage Data Leverage

**Key Metrics**:
1. **Engagement indicators**: Daily/weekly active users, session frequency, session duration, return rate after gaps
2. **Feature adoption depth**: Number of unique features used, progression from basic to advanced features, cross-source integration usage
3. **Knowledge base characteristics**: Number of sources added, diversity of source types (M365 docs, external sources), knowledge base growth rate
4. **Query patterns**: Query count, query complexity (measured by word count, question depth), topic diversity
5. **Collaboration behaviors**: Agent interaction frequency, refinement cycles, acceptance vs. rejection of AI suggestions
6. **Critical moments**: First use of advanced features, longest gaps between sessions, feature abandonment patterns

**Behavioral Operationalization**:
- **Sustained adoption**: Active use (≥1 session/week) at 6-month and 12-month marks
- **Intensification**: Increase in session frequency and feature diversity over time
- **Abandonment**: 30+ consecutive days of inactivity
- **Early-stage proficiency**: Time to first use of 5+ distinct features, time to first multi-source query

**Analytical Integration**:
- **Predictive models**: Use early usage patterns (first 30 days) to predict 6-month and 12-month retention
- **Anomaly detection**: Identify usage patterns that signal impending abandonment
- **A/B testing potential**: Compare retention rates across organizational contexts or user segments

### Contributions to Theory and Practice

**Theoretical Contributions**:
1. **Extended TAM validation**: First comprehensive test of AI-enhanced TAM with longitudinal product usage data, addressing limitation that most TAM studies use cross-sectional self-reported intention
2. **Dynamic adoption model**: Demonstrates how predictors of adoption change from initial uptake (trust, ease of use) to sustained use (usefulness, AI mindset, habit formation)
3. **AI mindset theory development**: Tests whether AI mindset is stable trait or malleable through experience; examines mindset as moderator of usage patterns
4. **Bridging intention-behavior gap**: Uses actual behavioral data to validate survey-based intention measures, addressing major criticism of TAM research

**Practical Contributions**:
1. **Early warning system**: Identifies behavioral and attitudinal predictors of abandonment, enabling proactive intervention
2. **Onboarding optimization**: Determines critical features and milestones that predict sustained adoption, informing product onboarding design
3. **Segmentation strategy**: Characterizes distinct user profiles (centaurs vs. cyborgs; power users vs. casual users) for targeted support
4. **Organizational implementation guidance**: Provides evidence-based recommendations for facilitating conditions that promote sustained enterprise adoption
5. **ROI metrics**: Connects adoption patterns to productivity outcomes, supporting business case for enterprise AI-KM investments

**Impact Potential**: With only 5.4% of firms formally adopting AI vs. 28% individual adoption, this research directly addresses the most critical challenge in enterprise AI: moving from pilot to sustained organizational deployment.

---

## Research Topic 2: The Psychological Sustainability of Human-AI Collaboration - Examining Motivation, Agency, and Skill Development in AI-Augmented Knowledge Work

### Research Question
**Primary**: How does sustained collaboration with enterprise AI knowledge management systems affect knowledge workers' intrinsic motivation, sense of agency, and skill development over time, and what design features moderate these psychological effects?

**Sub-questions**:
- Does AI-augmented knowledge work enhance or undermine intrinsic motivation longitudinally?
- How do different interaction patterns (AI-first assistance vs. user-guided collaboration) affect perceived autonomy and competence?
- Does reliance on AI for knowledge synthesis lead to skill atrophy or skill enhancement?
- What role does perceived AI intelligence play in moderating psychological outcomes?

### Theoretical Framework(s)

**Primary**: **Self-Determination Theory (SDT)**
- Three basic psychological needs: Autonomy (volition, control), Competence (efficacy, mastery), Relatedness (connection, belonging)
- Intrinsic motivation driven by satisfaction of these needs
- Application: AI collaboration may threaten autonomy and competence, undermining intrinsic motivation despite performance gains
- Justification: Recent 2025 Nature study (N=3,562) found GenAI collaboration enhanced performance but significantly decreased intrinsic motivation and increased boredom when transitioning back to solo work—a critical finding requiring deeper investigation

**Secondary**: **Human-AI Teaming (HAIT) Framework**
- Defines collaboration as dynamic, interdependent process with shared goals and complementary capabilities
- Key elements: shared mental models, mutual adaptation, role clarity, distributed cognition
- Application: Examining how collaboration modes (delegation, augmentation, partnership) affect psychological outcomes
- Recent update (Berretta et al., 2023): Emphasizes dynamic role adaptation and bidirectional influence

**Supporting**: **Task-Technology Fit (TTF) Theory**
- Performance depends on match between task characteristics, technology capabilities, and individual abilities
- Application: Different knowledge work tasks (creation vs. synthesis vs. analysis) may interact differently with AI collaboration
- Justification: Meta-analysis (Vaccaro et al., 2024) shows task type critically moderates human-AI collaboration effectiveness (creation tasks g=0.19 positive; decision tasks g=-0.27 negative)

### Research Gap Addressed

**Critical Gaps**:
1. **Psychological sustainability gap**: Most studies examine immediate performance; psychological effects over time largely unknown (identified as Gap #1 in Research Methods subagent)
2. **Skill transfer gap**: No evidence that AI collaboration benefits persist in subsequent tasks; unknown whether AI degrades or develops human capability (Dell'Acqua et al., 2023 BCG study; Gap #2)
3. **Sense of control gap**: AI collaboration reduces perceived autonomy, but design principles to maintain agency while leveraging AI remain unexplored (Gap #7)
4. **Interaction pattern gap**: 67% of studies use AI-first assistance; other collaboration modes understudied despite potentially different psychological effects (Gomez et al., 2025 taxonomy)

**Why Important**: Organizations achieving 12-40% productivity gains with AI risk undermining long-term workforce motivation and capability—a Pyrrhic victory if workers become psychologically dependent or deskilled. This is the "dark side" of AI collaboration that current enthusiasm overlooks. Understanding psychological sustainability is essential for ethical, effective AI deployment. With 41% of workers encountering AI-generated output requiring ~2 hours rework ("workslop"), the hidden costs of AI collaboration need rigorous examination.

### Quantitative Methodology

**Research Design**: **2×2×2 Mixed Factorial Longitudinal Experiment**

**Independent Variables**:
1. **Collaboration mode** (between-subjects):
   - **AI-first assistance**: AI provides synthesis, user reviews/edits (current default in most tools)
   - **User-guided collaboration**: User initiates query/task, AI provides supporting information, user maintains synthesis control
   
2. **Autonomy support** (between-subjects):
   - **High autonomy**: Transparent AI process, user controls when/how to use AI, can override/modify freely
   - **Low autonomy**: Automatic AI suggestions, limited control over AI process
   
3. **Time** (within-subjects):
   - **Baseline (T0)**: Pre-intervention assessment
   - **Immediate (T1)**: After 4 weeks of AI collaboration
   - **Sustained (T2)**: After 12 weeks of AI collaboration
   - **Transfer (T3)**: 2 weeks after AI removal (solo work)

**Participants**: N=320 knowledge workers (80 per condition)
- Recruited from organizations using Copilot Notebook
- Randomized assignment to conditions
- Inclusion criteria: Regular knowledge synthesis work, no extensive prior AI assistant experience

**Procedure**:
1. **T0 (Baseline)**: Complete validated questionnaires, perform standardized knowledge synthesis task solo
2. **Weeks 1-4**: Use assigned Copilot Notebook configuration for daily work tasks; complete weekly experience sampling
3. **T1 (Week 4)**: Complete questionnaires, perform knowledge synthesis task with AI
4. **Weeks 5-12**: Continue assigned usage; bi-weekly experience sampling
5. **T2 (Week 12)**: Complete questionnaires, perform knowledge synthesis task with AI
6. **Weeks 13-14**: Complete tasks WITHOUT AI (withdrawal phase)
7. **T3 (Week 14)**: Complete questionnaires, perform knowledge synthesis task solo

**Dependent Variables**:

*Primary Outcomes*:
- **Intrinsic Motivation**: Work Extrinsic and Intrinsic Motivation Scale (WEIMS; α=0.88)
- **Perceived Autonomy**: Work-related Basic Need Satisfaction Scale, autonomy subscale (α=0.82)
- **Perceived Competence**: Same scale, competence subscale (α=0.85)
- **Sense of Control**: Measured via adapted Spheres of Control scale (α=0.78)

*Secondary Outcomes*:
- **Task Performance**: Quality ratings (blind expert evaluation) and efficiency (time to completion) on standardized tasks
- **Skill Transfer**: Performance on T3 solo task compared to T0 baseline
- **Psychological Ownership**: Ownership of work outputs scale
- **Boredom**: Short Boredom Proneness Scale (α=0.83)
- **AI Reliance**: Self-reported and behavioral (proportion of AI suggestions accepted without modification)

*Process Variables*:
- **Perceived AI Intelligence**: Custom scale adapted from 2024 ChatGPT studies
- **AI Mindset**: Growth vs. fixed mindset regarding AI (Ibrahim et al., 2025 scale)
- **Mental Workload**: NASA-TLX administered post-task

**Product Usage Data**:
- Session frequency and duration
- AI query initiation (user vs. automatic)
- Acceptance/modification/rejection rates of AI suggestions
- Feature usage patterns
- Task completion metrics

**Primary Analysis**: **Mixed-Design Repeated Measures ANOVA**
- 2 (collaboration mode) × 2 (autonomy support) × 3 (time: T0, T1, T2) mixed factorial
- Within-subjects factor: Time
- Between-subjects factors: Collaboration mode, autonomy support
- Dependent variables: Intrinsic motivation, autonomy, competence, control
- Hypothesized interactions: Collaboration mode × time; autonomy support × time; three-way interaction

**Secondary Analyses**:
1. **Growth Curve Modeling (Hierarchical Linear Modeling)**:
   - Model individual trajectories of intrinsic motivation and perceived autonomy over time
   - Examine between-person variability in growth parameters
   - Test condition effects on slopes (rate of change)

2. **Structural Equation Modeling (SEM)**:
   - Test mediation: Collaboration mode → Perceived autonomy/competence → Intrinsic motivation
   - Test moderation: AI mindset moderating relationship between collaboration mode and psychological outcomes
   - Multi-group SEM to test model invariance across conditions

3. **Pre-Post Analysis for Skill Transfer**:
   - Paired t-tests: T3 (post-withdrawal) vs. T0 (baseline) performance
   - ANCOVA: T3 performance controlling for T0, with condition as factor
   - Hypothesis: User-guided > AI-first for skill retention

4. **Behavioral Data Integration**:
   - Correlate usage intensity with psychological outcomes
   - Test whether acceptance rates predict skill transfer
   - Identify critical usage thresholds for psychological effects

**Sample Size Justification**: N=320 (80 per condition) provides 80% power to detect medium effect sizes (f=0.25) in mixed-design ANOVA with α=0.05, accounting for 20% attrition

### Product Usage Data Leverage

**Behavioral Operationalization**:
1. **Autonomy indicators**:
   - User-initiated vs. AI-prompted interactions
   - Modification rate of AI suggestions (high modification = higher autonomy exercise)
   - Feature customization usage
   - Override frequency

2. **Engagement depth**:
   - Query refinement cycles (iterative collaboration)
   - Time spent reviewing AI outputs vs. using directly
   - Depth of user input (word count, specificity)

3. **Reliance patterns**:
   - Proportion of AI suggestions accepted without modification
   - Time to decision on AI outputs
   - Decrease in user-generated content over time

4. **Skill proxy measures**:
   - Query sophistication over time (complexity, precision)
   - Breadth of features used (exploration vs. routinization)
   - Error detection (catching AI mistakes)

**Experimental Conditions Implementation**:
- Different UI configurations in product to support experimental manipulations
- A/B testing infrastructure to deliver conditions
- Embedded experience sampling (ESM) prompts in product

### Contributions to Theory and Practice

**Theoretical Contributions**:
1. **SDT extension to AI collaboration**: First rigorous test of Self-Determination Theory in sustained human-AI collaboration context, demonstrating whether AI threatens basic psychological needs
2. **Task-technology-psychology integration**: Connects task-technology fit theory with psychological outcomes, moving beyond performance to well-being
3. **Dynamic effects modeling**: Shows how psychological effects unfold over time vs. cross-sectional snapshots
4. **Collaboration mode taxonomy validation**: Tests whether different interaction patterns (AI-first vs. user-guided) produce meaningfully different outcomes
5. **Skill transfer mechanisms**: Identifies whether AI collaboration enhances (scaffolding hypothesis) or undermines (atrophy hypothesis) human capability

**Practical Contributions**:
1. **Design principles for psychological sustainability**: Evidence-based guidelines for designing AI collaboration features that maintain worker motivation and agency
2. **Interaction pattern recommendations**: Identifies optimal collaboration modes for different task types and user needs
3. **Autonomy-supporting features**: Demonstrates specific design elements (transparency, control, user initiation) that protect psychological needs
4. **Training implications**: Informs how to onboard users to maintain skill development while leveraging AI
5. **Ethical AI deployment**: Provides framework for responsible AI introduction that considers workforce well-being, not just productivity
6. **Policy guidance**: Informs organizational policies on appropriate AI use patterns to prevent psychological harm

**Differentiation from Topic 1**: While Topic 1 examines adoption and retention (behavioral outcomes), Topic 2 investigates psychological sustainability and skill development (psychological and capability outcomes). Topic 1 is observational and correlational; Topic 2 is experimental and causal. Together they provide complementary insights—Topic 1 shows what happens naturally, Topic 2 explains why and tests interventions.

---

## Research Topic 3: Distributed Cognition in Human-AI Knowledge Teams - Examining Transactive Memory Systems and Collective Intelligence in Enterprise AI-Augmented Work

### Research Question
**Primary**: How do enterprise AI knowledge management systems alter team-level transactive memory systems, knowledge sharing behaviors, and collective intelligence, and what organizational factors moderate these effects?

**Sub-questions**:
- Does AI serve as an external memory component in team transactive memory systems, and how does this affect "who knows what" awareness?
- How do teams coordinate knowledge across human members and AI agents in multi-source knowledge synthesis tasks?
- Do teams using AI-augmented knowledge systems demonstrate higher collective intelligence than teams without AI?
- What role do team-level facilitating conditions (training, norms, leadership) play in realizing collaborative benefits?

### Theoretical Framework(s)

**Primary**: **Transactive Memory Systems (TMS) Theory**
- Definition: Specialized division of cognitive labor relating to encoding, storage, and retrieval of knowledge—collective system for "who knows what"
- Three core processes: Directory updating (knowing who knows what), information allocation (assigning encoding responsibility), retrieval coordination (accessing distributed knowledge)
- Three dimensions: Specialization, credibility, coordination
- Application: AI becomes external memory component in team TMS; changes how teams distribute cognitive labor
- Evidence base: Choi et al. (2010) MIS Quarterly study (N=743): IT support → TMS → Knowledge sharing → Knowledge application → Team performance

**Secondary**: **Collective Intelligence Theory**
- Definition: Group's general ability to perform across wide variety of tasks
- Key predictors: Average social sensitivity, equality in conversation turn-taking, proportion of females
- Application: Examining whether AI augmentation enhances or disrupts collective intelligence factors
- Recent extension: Human-AI collective intelligence as distinct construct

**Supporting**: **Absorptive Capacity (Team-Level)**
- Four dimensions: Acquisition, assimilation, transformation, exploitation of knowledge
- Application: AI tools may enhance acquisition and assimilation but require organizational capabilities for transformation and exploitation
- Recent finding: IS adoption alone doesn't generate IS-enabled absorptive capacity; requires synergies with organizational capabilities (2023 NCBI study, N=417)

**Contextual**: **Socio-Technical Systems (STS) Theory**
- Core premise: Work systems require joint optimization of social and technical subsystems
- Application: Effective AI-augmented teams need coordinated development of AI capabilities AND team processes
- Implication: Technology-only or training-only interventions insufficient

### Research Gap Addressed

**Critical Gaps**:
1. **Team-level perspective gap**: Research dominated by individual-AI dyads; team dynamics with AI largely unexplored (Berretta et al., 2023: "technology-centric bias dominates... limited attention to team-level dynamics")
2. **TMS with AI gap**: While TMS theory extended to human-technology systems, no empirical studies examine AI as TMS component in knowledge synthesis contexts
3. **Collective intelligence with AI gap**: Unknown whether AI enhances or disrupts team collective intelligence factors (social sensitivity, turn-taking equality)
4. **Multi-level integration gap**: Studies focus on single level (individual OR team OR organization); need multi-level models showing cross-level effects
5. **Complementarity realization gap**: Theoretical complementarity potential often high, but realized complementarity low (31% in studies); team-level factors explaining this gap unknown

**Why Important**: Organizations don't adopt AI for individuals—they implement it for teams and organizations. Yet research focuses almost exclusively on individual-AI interaction. This creates knowledge-practice gap: we don't understand how AI transforms team cognition, coordination, and performance. With $3.0B AI-KM market growing to $102.1B by 2034, understanding team-level implementation is crucial. Furthermore, meta-analysis shows human-AI combinations often underperform (g=-0.23), suggesting coordination challenges at team level.

### Quantitative Methodology

**Research Design**: **Multi-Level Field Study with Nested Experimental Comparison**

**Level 1 (Individual)**: Knowledge workers using Copilot Notebook
**Level 2 (Team)**: Work teams (3-7 members) collaborating on shared knowledge bases
**Level 3 (Organization)**: Organizations implementing Copilot Notebook enterprise-wide

**Design Structure**:
- **Cross-sectional comparison**: Teams with AI (Treatment) vs. Teams without AI (Control)
- **Longitudinal component**: Track teams over 6 months
- **Nested structure**: Individuals nested within teams, teams nested within organizations

**Participants**:
- **N=90 teams** (45 treatment, 45 control) from 15-20 organizations
- **N=450-540 individuals** (assuming average team size of 5-6)
- **Inclusion criteria**: Knowledge-intensive teams (consulting, research, analysis, strategy) with collaborative tasks

**Procedure**:

*Phase 1: Baseline (T0, Week 0)*:
- Individual surveys: Demographics, prior AI experience, individual-level TMS, self-efficacy
- Team surveys: Team TMS scale, team processes, psychological safety
- Team performance: Baseline collaborative knowledge synthesis task (evaluated by external raters)
- Collective intelligence task: Standardized cognitive task battery

*Phase 2: Intervention (Weeks 1-24)*:
- **Treatment teams**: Implement Copilot Notebook with shared knowledge bases; training on collaborative AI use
- **Control teams**: Continue standard knowledge management practices (may use individual tools but not shared AI-KM system)
- **Monthly pulse surveys**: Brief team process and TMS assessments
- **Product usage tracking**: For treatment teams, capture all usage metrics

*Phase 3: Midpoint Assessment (T1, Week 12)*:
- Repeat individual and team surveys
- Team performance task
- Qualitative interviews (subsample: 20 teams) on TMS and coordination changes

*Phase 4: Endpoint Assessment (T2, Week 24)*:
- Full battery of baseline measures
- Collective intelligence tasks
- Team performance tasks
- Organizational-level measures (collected from leadership)

**Dependent Variables**:

*Team-Level Primary Outcomes*:
- **Transactive Memory System**: 15-item TMS scale (Lewis, 2003; α=0.83-0.92)
  - Specialization subscale (5 items)
  - Credibility subscale (5 items)
  - Coordination subscale (5 items)
- **Team Performance**: 
  - Quality of collaborative knowledge synthesis (blind expert rating on 7-point scale: accuracy, comprehensiveness, coherence, insight)
  - Efficiency (time to completion)
  - Innovation (novelty rating by experts)
- **Collective Intelligence**: Composite score from standardized task battery (Woolley et al., 2010 protocol)
- **Knowledge Sharing Behavior**: 5-item scale from Choi et al. (2010)
- **Knowledge Application**: 4-item scale from Choi et al. (2010)

*Individual-Level Variables* (for multi-level modeling):
- **Individual TMS perceptions**: Same scale, individual referent
- **AI self-efficacy**: 8-item scale (α=0.91)
- **Trust in AI**: 7-item scale adapted from Glikson & Woolley (2020)
- **Perceived usefulness of AI for team**: Custom 4-item scale
- **Role clarity with AI**: 3-item scale

*Team Process Variables*:
- **Team psychological safety**: Edmondson 7-item scale (α=0.82)
- **Team learning behavior**: 7-item scale (Edmondson, 1999)
- **Coordination quality**: 5-item scale
- **Communication patterns**: Network density, centralization (from sociometric data)

*Organizational Variables*:
- **Management support for AI**: 4-item scale
- **Training quality**: 5-item scale
- **AI implementation maturity**: Custom scale based on Capability Maturity Model
- **Organizational learning culture**: 7-item scale

*Product Usage Data (Treatment Teams Only)*:
- **Team-level metrics**:
  - Shared knowledge base size (number of sources, documents)
  - Knowledge base diversity (source types, topics)
  - Collaborative queries (multi-person involvement)
  - Cross-referencing patterns (how team members use shared knowledge)
- **Individual-within-team metrics**:
  - Individual contribution rate to shared knowledge base
  - Individual query patterns
  - Specialization indices (topic concentration)

**Primary Analysis**: **Hierarchical Linear Modeling (HLM) / Multi-Level Modeling**

*Model 1: Team Performance Predicted by TMS*
```
Level 1 (Individual): TMS_individual = β0j + rij
Level 2 (Team): β0j = γ00 + γ01(AI_Treatment) + γ02(TMS_team) + γ03(AI × TMS) + u0j
Level 3 (Organization): γ00 = θ000 + θ001(Org_support) + v00
```

*Model 2: AI Effect on TMS Dimensions*
- Examine whether AI treatment affects TMS specialization, credibility, coordination differently
- Test organizational support as cross-level moderator

*Model 3: Mediation Model*
- AI → TMS → Knowledge Sharing → Knowledge Application → Team Performance
- Use multi-level SEM to test full mediation chain from Choi et al. (2010)

**Secondary Analyses**:

1. **Repeated Measures ANOVA**:
   - 2 (Condition: AI vs. Control) × 3 (Time: T0, T1, T2) mixed design
   - Examine trajectory of TMS development over 6 months
   - Test condition × time interactions

2. **Structural Equation Modeling (Team-Level)**:
   - Test comprehensive model: AI usage patterns → TMS dimensions → Team processes → Performance outcomes
   - Multi-group SEM: Compare model across organizations

3. **Social Network Analysis**:
   - Map "who seeks knowledge from whom" networks at T0 and T2
   - Examine whether AI changes network structure (centralization, density, clustering)
   - Hypothesis: AI may reduce reliance on human "knowledge brokers"

4. **Mediation Analysis (Baron & Kenny; Sobel tests)**:
   - Test whether TMS mediates AI → Performance relationship
   - Use bootstrapping for indirect effects (Hayes PROCESS macro)

5. **Collective Intelligence Analysis**:
   - Compare CI scores between treatment and control at T2
   - Test whether AI affects CI predictors (social sensitivity, turn-taking equality)
   - Regression: CI predicting performance, with AI as moderator

6. **Usage Pattern Analysis** (Treatment Teams Only):
   - Cluster analysis: Identify distinct team usage profiles
   - Regression: Predict performance from usage patterns
   - Threshold analysis: Minimum usage intensity for TMS effects

**Sample Size Justification**: 
- N=90 teams (45 per condition) provides 80% power for team-level effects (d=0.60) in HLM with 3 levels
- N=450+ individuals allows robust individual-level analysis with nesting corrections
- Accounts for 20% team attrition over 6 months

**Control Variables**:
- Team size, team tenure, task complexity, industry, prior team performance, average AI experience, average education level

### Product Usage Data Leverage

**Team-Level Behavioral Indicators**:

1. **Specialization Metrics**:
   - **Topic specialization**: Using NLP to identify if team members focus on distinct knowledge domains in queries
   - **Source ownership**: Primary contributor for different document types
   - **Expertise signaling**: Frequency of being mentioned/tagged by teammates

2. **Credibility Indicators**:
   - **Cross-validation patterns**: How often team members verify each other's AI-generated insights
   - **Authority gradients**: Do certain members' AI outputs get used more by others?
   - **Quality signals**: Acceptance rates of AI suggestions by team member

3. **Coordination Metrics**:
   - **Temporal coordination**: Synchronization of team members' AI usage (clustered vs. distributed)
   - **Handoff patterns**: Sequential work where one member's output becomes another's input
   - **Redundancy**: Overlapping queries (high redundancy = poor coordination)
   - **Communication**: In-product mentions, shared annotations, collaborative sessions

4. **Knowledge Base Analytics**:
   - **Contribution diversity**: Gini coefficient of contributions across team members
   - **Knowledge integration**: Links between documents added by different members
   - **Update velocity**: Frequency of knowledge base updates (active curation)
   - **Query-to-source ratio**: Do teams use existing knowledge or constantly add new sources?

5. **Emergent Roles**:
   - **Curator role**: Members who organize and tag content
   - **Query specialist**: Members who formulate complex questions for team
   - **Validator role**: Members who quality-check AI outputs
   - **Integrator role**: Members who synthesize across sources

**Analytical Integration**:
- **Behavioral TMS validation**: Correlate self-reported TMS with behavioral specialization/coordination metrics
- **Process tracing**: Examine temporal sequences in collaborative tasks
- **Critical incident analysis**: Identify moments where TMS coordination succeeded/failed
- **Network centrality**: Compare behavioral specialization networks with self-reported "who knows what" perceptions

### Contributions to Theory and Practice

**Theoretical Contributions**:

1. **TMS theory extension**: First empirical test of AI as external memory component in team TMS; demonstrates how AI changes specialized division of cognitive labor
2. **Multi-level integration**: Connects individual AI interactions to team-level TMS to organizational outcomes, filling critical gap in literature
3. **Collective intelligence reconceptualization**: Tests whether human-AI teams exhibit collective intelligence properties and whether traditional CI predictors (social sensitivity, turn-taking) operate differently with AI
4. **Socio-technical systems validation**: Demonstrates joint optimization requirement—that technology alone insufficient without team process development
5. **Absorptive capacity mechanisms**: Clarifies how AI enhances acquisition/assimilation but requires team capabilities for transformation/exploitation
6. **Complementarity realization**: Identifies team-level factors that bridge gap between complementarity potential and realized complementarity

**Practical Contributions**:

1. **Team implementation playbook**: Evidence-based guidelines for deploying AI-KM tools at team level, not just individual level
2. **Training redesign**: Shifts from individual AI training to team coordination training with AI
3. **Role design**: Identifies emergent roles in AI-augmented teams (curator, validator, integrator) for intentional role assignment
4. **Coordination mechanisms**: Specifies team processes that enable effective TMS with AI (regular calibration meetings, explicit specialization agreements)
5. **Organizational support framework**: Demonstrates which organizational factors (training, management support, learning culture) most critical for team-level success
6. **Performance metrics**: Provides validated team-level metrics for AI-augmented work (beyond individual productivity)
7. **Change management**: Informs how to help teams restructure cognitive division of labor when introducing AI

**Differentiation from Topics 1 & 2**: 
- **Topic 1** = Individual adoption trajectories (individual-level, longitudinal observational)
- **Topic 2** = Individual psychological effects (individual-level, experimental)
- **Topic 3** = Team dynamics and collective outcomes (team-level, multi-level field study)

Together, these three topics provide comprehensive coverage: Topic 1 addresses adoption and retention; Topic 2 addresses individual psychological sustainability; Topic 3 addresses team-level coordination and collective performance. All three are grounded in different established theories, use different quantitative methodologies appropriate to their research questions, and leverage product usage data in distinct ways.

---

## Summary Comparison of Three Topics

| Dimension | Topic 1: Sustained Adoption | Topic 2: Psychological Sustainability | Topic 3: Team Dynamics |
|-----------|----------------------------|--------------------------------------|------------------------|
| **Primary Theory** | Extended TAM + DOI | Self-Determination Theory + HAIT | Transactive Memory Systems + Collective Intelligence |
| **Level of Analysis** | Individual | Individual | Team + Multi-level |
| **Research Design** | Longitudinal observational | Longitudinal experiment | Multi-level field study |
| **Primary Method** | Survival analysis (Cox regression) | Repeated measures ANOVA + Growth curve modeling | Hierarchical Linear Modeling (HLM) |
| **Key DV** | Time to abandonment; Sustained use | Intrinsic motivation; Skill transfer | Team TMS; Collective intelligence; Team performance |
| **Product Data Use** | Usage patterns predicting retention | Behavioral autonomy indicators | Team coordination metrics; Knowledge base analytics |
| **Major Gap Addressed** | Post-adoption behavior | Psychological long-term effects | Team-level AI dynamics |
| **Sample Size** | N=400-600 individuals | N=320 individuals (4 conditions) | N=90 teams (~450-540 individuals) |
| **Duration** | 12 months | 14 weeks | 24 weeks (6 months) |
| **Primary Contribution** | Predicting and preventing abandonment | Designing for psychological sustainability | Enabling effective team implementation |

## Implementation Feasibility for Microsoft Context

**Access to Data**: All three topics leverage product telemetry data available to Senior Data Scientist on Copilot Notebook team

**Organizational Partnerships**: Microsoft's enterprise customer base provides recruitment pool for field studies and experiments

**Practical Impact**: Each topic directly addresses product development priorities:
- Topic 1: Retention and engagement optimization
- Topic 2: Ethical AI design and user well-being
- Topic 3: Enterprise team deployment success

**Publication Potential**: All three topics address high-priority research gaps identified in top-tier journals (Nature, MIS Quarterly, Academy of Management), offering strong publication prospects

**DBA Rigor**: Each meets DBA standards through:
- Established theoretical grounding
- Quantitative empirical design with adequate sample sizes
- Rigorous methodology (SEM, survival analysis, HLM)
- Integration of theory and practice
- Novel contributions to both academic knowledge and business practice