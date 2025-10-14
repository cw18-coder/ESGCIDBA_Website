# Reflection Journal Entry Creator

## Purpose
This prompt creates structured reflection journal entries in `thesis_md/0_reflection_journal` following a hierarchical system with automated entry numbering and summary generation.

## Usage
```
@workspace /reflection_entry template={{template_type}} [start={{number}}] [end={{number}}] [*yolo]
```

## Parameters

### Required Parameters (User-Provided)
- `template` (required): Type of reflection entry to create
  - Valid values: `thoughts`, `weekly`, `monthly`, `quarterly`, `semi annual`, `semi-annual`, `semi_annual`, `annual`

### Optional Parameters (User-Provided)
- `start` (conditional): Starting entry number for summarization (required if template has Summary section)
- `end` (conditional): Ending entry number for summarization (required if template has Summary section)
- `*yolo` (optional): Skip plan approval and create entry immediately

### System Parameters (Agent-Generated)
These are automatically determined by the agent:
- Entry number: Retrieved from `thesis_md/0_reflection_journal/current_entry.yml`
- Current date: Formatted as long date (e.g., "14th October 2025")
- Summary content: Generated via SWOT analysis of specified entries

## Instructions for Agent

### Step 1: Validate Input
1. Check if template parameter is valid
2. Normalize template name (convert 'semi annual'/'semi-annual' to 'semi_annual')
3. If template type has Summary section (weekly, monthly, quarterly, semi_annual, annual), verify `start` and `end` parameters are provided

### Step 2: Prepare Entry Metadata
1. Read `thesis_md/0_reflection_journal/current_entry.yml` to get current entry number for the specified template type
2. Determine entry file name using pattern: `<entry_type>-<entry_number>.md`
   - Example: `thoughts-1.md`, `weekly-5.md`, `monthly-2.md`, etc.
3. Format current date in long format (e.g., "14th October 2025")
4. Determine year and month for folder structure (e.g., "2025" and "October")

### Step 3: Summary Generation Logic
**Only for entries with Summary sections: weekly, monthly, quarterly, semi_annual, annual**

1. **Determine Entry Type to Summarize:**
   - If template = `annual` → summarize `semi_annual` entries
   - If template = `semi_annual` → summarize `quarterly` entries
   - If template = `quarterly` → summarize `monthly` entries
   - If template = `monthly` → summarize `weekly` entries
   - If template = `weekly` → summarize `thoughts` entries

2. **Locate Files to Summarize:**
   - Using `start` and `end` parameters, identify files to analyze
   - Example: If quarterly entry with start=1, end=3 → analyze `monthly-1.md`, `monthly-2.md`, `monthly-3.md`
   - Search in `thesis_md/0_reflection_journal/{year}/{month}/` folders

3. **Generate SWOT Analysis Summary:**
   Create a structured SWOT analysis with actionable insights:
   
   **Format:**
   ```markdown
   ### Strengths
   - [Key strength 1 with specific evidence from entries]
   - [Key strength 2 with specific evidence from entries]
   
   ### Weaknesses
   - [Key weakness 1 with specific evidence from entries]
   - [Key weakness 2 with specific evidence from entries]
   
   ### Opportunities
   - [Actionable opportunity 1 to improve thesis quality]
   - [Actionable opportunity 2 to improve thesis quality]
   
   ### Threats
   - [Risk 1 that could impact progress or quality]
   - [Risk 2 that could impact progress or quality]
   
   **Key Actions:** [2-3 specific, time-optimized actions to take forward]
   ```
   
   **Word Count Guidelines:**
   - Weekly: ~250 words
   - Monthly: 250-500 words
   - Quarterly and above: 500-1000 words
   
   **Focus:** Provide actionable insights to improve thesis quality while optimizing for time

### Step 4: Create Plan (unless *yolo flag is set)
Present a clear plan to the user:
```
I will create a {{template_type}} reflection entry:
- Entry number: {{entry_number}}
- File location: thesis_md/0_reflection_journal/{{year}}/{{month}}/{{entry_type}}-{{entry_number}}.md
- Template: templates/journal_entries/journal_{{template_type}}_reflection.md
[If applicable:]
- Will summarize: {{summarize_type}}-{{start}}.md through {{summarize_type}}-{{end}}.md
- Summary type: SWOT analysis (~{{word_count}} words)

Reason: This follows the hierarchical reflection system and will update the entry counter in current_entry.yml.

Proceed with creation? (yes/no)
```

Wait for user approval before proceeding (unless `*yolo` flag is provided).

### Step 5: Create Entry
1. **Create folder structure:**
   - Ensure `thesis_md/0_reflection_journal/{{year}}/` exists
   - Ensure `thesis_md/0_reflection_journal/{{year}}/{{month}}/` exists

2. **Load appropriate template:**
   - Map template type to file: `templates/journal_entries/journal_{{template_type}}_reflection.md`
   - Handle variations: 'semi annual'/'semi-annual' → 'semi_annual'

3. **Replace placeholders:**
   - `<< entry_number >>` → Current entry number from current_entry.yml
   - `<< current_date >>` → Today's date in long format
   - `<< summary >>` → Generated SWOT analysis (if applicable)
   - Fill `{{ }}` with the information from user input (e.g., start and end entry numbers)

4. **Save file:**
   - Location: `thesis_md/0_reflection_journal/{{year}}/{{month}}/{{entry_type}}-{{entry_number}}.md`

5. **Update counter:**
   - Read `current_entry.yml`
   - Increment appropriate counter (e.g., `thoughts_entry_num`, `weekly_reflection_entry_num`)
   - Save updated `current_entry.yml`

### Step 6: Confirm Completion
Provide confirmation message:
```
✓ Created {{template_type}} reflection entry #{{entry_number}}
✓ Location: thesis_md/0_reflection_journal/{{year}}/{{month}}/{{entry_type}}-{{entry_number}}.md
✓ Updated entry counter in current_entry.yml
[If applicable:] ✓ Generated SWOT summary from {{count}} {{summarize_type}} entries

Next steps:
1. Open the file and fill in the {{ }} placeholder sections
2. Review and refine the generated summary (if applicable)
3. Save your completed reflection
```

## Template Mapping Reference

| Template Type | Template File | Has Summary | Summarizes |
|--------------|---------------|-------------|------------|
| thoughts | journal_thoughts.md | No | N/A |
| weekly | journal_weekly_reflection.md | Yes | thoughts |
| monthly | journal_monthly_reflection.md | Yes | weekly |
| quarterly | journal_quarterly_reflection.md | Yes | monthly |
| semi_annual | journal_semi_annual_reflection.md | Yes | quarterly |
| annual | journal_annual_reflection.md | Yes | semi_annual |

## Counter Mapping Reference

| Template Type | Counter Field in current_entry.yml |
|--------------|-----------------------------------|
| thoughts | thoughts_entry_num |
| weekly | weekly_reflection_entry_num |
| monthly | monthly_reflection_entry_num |
| quarterly | quarterly_reflection_entry_num |
| semi_annual | semi_annual_reflection_entry_num |
| annual | annual_reflection_entry_num |

## Error Handling

1. **Invalid template type:** Inform user of valid options
2. **Missing start/end for summary entries:** Request required parameters
3. **Files not found for summarization:** List which files are missing and ask user to verify
4. **Invalid entry numbers:** Ensure start ≤ end and both are positive integers
5. **Template file not found:** Verify template exists in `templates/journal_entries/`

## Examples

### Example 1: Simple Thoughts Entry
```
@workspace /reflection_entry template=thoughts *yolo
```
Creates `thoughts-1.md` immediately without plan approval.

### Example 2: Monthly Entry with Summary
```
@workspace /reflection_entry template=monthly start=1 end=4
```
Shows plan to create `monthly-1.md` summarizing `weekly-1.md` through `weekly-4.md`, waits for approval.

### Example 3: Quarterly Entry
```
@workspace /reflection_entry template=quarterly start=1 end=3
```
Creates `quarterly-1.md` summarizing `monthly-1.md`, `monthly-2.md`, and `monthly-3.md`.

### Example 4: Annual Entry with YOLO
```
@workspace /reflection_entry template=annual start=1 end=2 *yolo
```
Immediately creates `annual-1.md` summarizing `semi_annual-1.md` and `semi_annual-2.md`.

## Quality Guidelines for Summaries

1. **Be Specific:** Reference actual themes, challenges, and achievements from the entries
2. **Be Actionable:** Every insight should lead to concrete next steps
3. **Be Balanced:** Don't just focus on problems or successes—provide holistic view
4. **Be Time-Conscious:** Prioritize high-impact, low-effort improvements
5. **Be Forward-Looking:** Connect past insights to future thesis phases
6. **Be Evidence-Based:** Ground observations in actual content from reviewed entries

## Notes

- All dates are formatted in long format: "14th October 2025"
- Entry numbering is automatically managed and sequential per entry type
- Folders are created automatically if they don't exist
- Template variations (semi-annual/semi_annual) are normalized automatically
- SWOT summaries should focus on thesis progress and research quality
- The system supports independent numbering for each reflection type
