# Gantt Chart Builder

## Purpose
This prompt generates a Mermaid Gantt chart from a markdown file containing task information and saves it in multiple formats (.mmd, .md, .png) under `assets/mermaid/`.

## Usage
```
@workspace /gantt_builder filePath={{relative_path_to_markdown_file}} [*yolo]
```

## Parameters

### Required Parameters (User-Provided)
- `filePath` (required): Relative path to the markdown file containing the Gantt chart information
  - Must follow the gantt_chart.md template format
  - Example: `thesis_md/0_reflection_journal/2025/October/thoughts-2-gantt.md`

### Optional Parameters (User-Provided)
- `*yolo` (optional): Skip plan approval and generate chart immediately

## Instructions

You are tasked with creating a Gantt chart using Mermaid syntax based on the information provided in the specified markdown file.

### Steps:

1. **Read the Source File**
   - Read the markdown file at the path: `{{filePath}}`
   - Extract the following information:
     - Chart Title
     - Unit of Time (daily, weekly, monthly)
     - Task table data (Task Number, Task, Start, End)

2. **Generate Mermaid Gantt Chart**
   - Create a Mermaid Gantt chart using the following structure:
     ```mermaid
     gantt
         title [Chart Title from file]
         dateFormat YYYY-MM-DD
         [Time unit settings based on specified unit]
         
         [Task entries from the table]
     ```
   - Configure the time unit appropriately:
     - For "daily": use `axisFormat %d-%b`
     - For "weekly": use `axisFormat %U-Week`
     - For "monthly": use `axisFormat %b-%Y`
   - Convert each task row into Mermaid syntax:
     - Format: `[Task Name] : [Start Date], [End Date]`
     - Skip any empty rows in the table
   - Handle task dependencies if noted in the task descriptions

3. **Generate File Name**
   - Create an abridged version of the Chart Title for the filename:
     - Convert to lowercase
     - Replace spaces with underscores
     - Remove special characters
     - Limit to 50 characters maximum
     - Example: "DBA Thesis Timeline 2025-2027" → "dba_thesis_timeline_2025_2027"

4. **Save in Multiple Formats**
   
   Save the Gantt chart under `assets/mermaid/` with the generated filename:
   
   a. **[filename].mmd** - Raw Mermaid code:
      ```
      gantt
          title [Chart Title]
          dateFormat YYYY-MM-DD
          ...
      ```
   
   b. **[filename].md** - Markdown with embedded Mermaid:
      ```markdown
      # [Chart Title]
      
      ```mermaid
      gantt
          title [Chart Title]
          dateFormat YYYY-MM-DD
          ...
      ```
      
      ## Task Details
      [Include a formatted table of tasks from the source]
      ```
   
   c. **[filename].png** - Visual diagram:
      - Use the Mermaid CLI or appropriate tool to render the diagram as PNG
      - Command: `mmdc -i assets/mermaid/[filename].mmd -o assets/mermaid/[filename].png`
      - If Mermaid CLI is not available, provide instructions for manual generation

5. **Validation**
   - Ensure all dates are in YYYY-MM-DD format
   - Verify that end dates are after start dates
   - Check that the Mermaid syntax is valid
   - Confirm all files were created successfully

6. **Summary Report**
   - List all generated files with their paths
   - Display the Gantt chart preview if possible
   - Note any issues or warnings encountered

## Example Usage

```
File Path: thesis_md/0_reflection_journal/2025/October/thoughts-2-gantt.md
```

## Notes
- Ensure the source file follows the gantt_chart.md template format
- Empty task rows will be skipped automatically
- If dates are not in YYYY-MM-DD format, attempt to convert them
- For PNG generation, verify that Mermaid CLI is installed (`npm install -g @mermaid-js/mermaid-cli`)

## Output Files Location
All generated files will be saved to: `assets/mermaid/`
