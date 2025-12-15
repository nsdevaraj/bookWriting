# 4.4 Interactive What-If Analysis

What-if analysis is a powerful decision-making technique that allows business users to model hypothetical scenarios and immediately see their potential impacts. While traditional Power BI implements what-if parameters at the data model level requiring DAX knowledge, Analytics+ enhances these capabilities by providing better integration and visualization options for what-if scenarios.

> **Note:** The documentation indicates that advanced what-if simulations, scenario planning, and writeback capabilities are primarily available in Inforiver Matrix rather than Analytics+. As stated in the documentation: "For advanced use cases such as writeback, planning, what-if simulations, forecasting & budgeting, advanced formulae engine, formatted financial statements, paginated reports, threaded conversations, audit, data editing, scheduling, and notifications - use **Inforiver Matrix**."
>
> This chapter focuses on the what-if capabilities that are available in Analytics+ through integration with Power BI parameters and other features.

## The Business Value of What-If Analysis

Before diving into implementation details, it's important to understand why what-if analysis is critical for modern business intelligence:

- **Proactive decision-making**: Evaluate potential outcomes before committing resources
- **Risk assessment**: Identify vulnerabilities by testing extreme scenarios
- **Sensitivity testing**: Determine which variables have the greatest impact on outcomes
- **Budget planning**: Model different allocation strategies to optimize results
- **Target setting**: Work backward from desired outcomes to determine required inputs
- **Strategic planning**: Test assumptions underlying long-term business strategies

Analytics+ makes these capabilities accessible to business users without technical expertise, democratizing advanced analytical techniques across the organization.

## What-If Capabilities in Analytics+

Based on the documentation, Analytics+ provides integration with Power BI's what-if parameters and offers visualization enhancements that make scenario analysis more accessible and intuitive:

### 1. Integration with Power BI Parameters

Analytics+ can leverage Power BI's native what-if parameters to create interactive visualizations:

![Parameter Sliders](images/parameter_sliders.png)

As documented in the "Dynamic ranking with numeric parameters" section, Analytics+ can work with Power BI numeric range parameters to enable what-if analysis. The documentation states:

> "The TopN feature can work with Power BI numeric range parameters, enabling you to easily perform what-if analysis. You just need to adjust the ranking slider to apply TopN."

This integration allows users to:
- Create dynamic rankings based on parameter values
- Adjust parameters through sliders to see immediate visual feedback
- Apply parameters across multiple visualizations for coordinated analysis

### 2. Context-Aware Visualizations

Analytics+ provides context-aware visualizations that respond to parameter changes:

![Context-Aware Visualization](images/direct_editing.png)

The documentation describes how Analytics+ supports context awareness:

> "With the Inforiver Analytics+, you can implement context-aware commenting in your Power BI reports in just a few clicks. As you apply filters, the comments will change dynamically."

This context awareness extends to:
- Annotations that update based on parameter selections
- Conditional formatting that responds to parameter changes
- Visualizations that adapt to different parameter scenarios

### 3. Comparative Analysis Tools

Analytics+ offers robust comparative analysis capabilities that enhance what-if scenarios:

![Comparative Analysis](images/scenario_manager.png)

The documentation highlights how Analytics+ supports comparative analysis through:
- Side-by-side visualization of different scenarios
- Variance calculations that automatically update with parameter changes
- Color-coded highlighting of differences between scenarios
- Small multiples that show scenario results across multiple dimensions

## Implementing What-If Analysis with Analytics+

Based on the documentation, here's how to implement what-if analysis using Analytics+ with Power BI parameters:

### Creating Dynamic Rankings with Parameters

As documented in the "Dynamic ranking with numeric parameters" section, you can set up dynamic ranking in 2 simple steps:

1. **Create a Power BI Parameter**:
   - In Power BI Desktop, go to Modeling tab → What-if parameter
   - Create a numeric parameter (e.g., "RankingSlider")
   - Set minimum, maximum, and increment values
   - Choose slider as the display type

2. **Configure Analytics+ to Use the Parameter**:
   - **STEP 1:** Assign the Power BI numeric range parameter to the Tooltip categories visual parameter
   - **STEP 2:** In the TopN configuration window, select "Measure" from the "By" dropdown
   - Select the numeric range parameter name from the "Measure" dropdown

3. **Interact with the Parameter**:
   - Adjust the parameter slider to dynamically change the ranking
   - Observe how the visualization updates in real-time
   - Use the parameter to answer "what-if" questions about ranking thresholds

### Implementing Context-Aware Analysis

The documentation describes how to create context-aware visualizations that respond to parameter changes:

1. **Create a Filter-Context Measure**:
   - Let Analytics+ automatically generate the DAX script for you
   - The documentation notes: "The steps to configure filter context are the same for charts, cards and tables"

2. **Apply Context Awareness to Visualizations**:
   - Add annotations that will update based on filter context
   - Create conditional formatting rules that respond to context changes
   - Configure visualizations to adapt to different parameter scenarios

3. **Test Context Awareness**:
   - Change parameter values to see how annotations and formatting update
   - Apply filters to observe how the visualization responds to context changes
   - Use slicers to dynamically alter the visualization context

### Using Comparative Analysis for Scenarios

Analytics+ provides robust comparative analysis capabilities that can be used for scenario comparison:

1. **Create Base View**: Set up your initial visualization with default parameter values

2. **Create Comparison Views**:
   - Use small multiples to show different parameter scenarios side by side
   - Apply variance calculations to highlight differences between scenarios
   - Use conditional formatting to emphasize significant differences

3. **Analyze Results**:
   - Compare outcomes across different parameter settings
   - Identify optimal parameter values for specific business objectives
   - Document insights from the comparative analysis

## Real-World Example: Dynamic Ranking Analysis

Based on the documentation, here's a practical example of using Analytics+ for what-if analysis with dynamic ranking:

![Dynamic Ranking Analysis](images/marketing_whatif.png)

In this example:

1. **Starting Point**: A visualization showing sales performance across different product categories

2. **Parameter Setup**:
   - Create a Power BI numeric range parameter called "RankingSlider"
   - Set the minimum value to 1 and maximum value to 20
   - Configure the parameter to display as a slider

3. **Analytics+ Configuration**:
   - Assign the "RankingSlider" parameter to the Tooltip categories visual parameter
   - In the TopN configuration window, select "Measure" from the "By" dropdown
   - Select "RankingSlider" from the Measure dropdown

4. **Analysis Capabilities**:
   By adjusting the ranking slider, the business user can:
   - Dynamically focus on the top N performing products
   - Identify performance thresholds for inclusion in top performers
   - Analyze how the composition of top performers changes with different thresholds
   - Test "what-if" scenarios about ranking criteria

## Advanced Visualization Techniques for What-If Analysis

Based on the documentation, Analytics+ provides several advanced visualization techniques that enhance what-if analysis:

### Context-Aware Conditional Formatting

The documentation describes how context-aware conditional formatting can enhance what-if analysis:

1. **Create conditional formatting rules** that respond to parameter changes

2. **Apply variable conditional formatting** to non-data elements like titles and axis labels

3. **Use the "Use as variable" toggle** to enable reusing the same conditional formatting rules across different elements

4. **Apply formatting through the color picker's CF Rules tab** to create sophisticated visual feedback

### Small Multiple Visualizations

The documentation highlights how small multiples can be used for comparative analysis:

1. **Split measures into separate panels** to compare different scenarios side by side

2. **Enable synchronized scrolling** between panels for easier comparison

3. **Apply consistent formatting** across panels to maintain visual coherence

4. **Use the "Split" button in the toolbar** to quickly create small multiple views

### Hierarchical Data Exploration

The documentation shows how hierarchical data exploration can enhance what-if analysis:

1. **Expand and collapse hierarchies** to focus on specific levels of detail

2. **Use drill-down and roll-up** to navigate through hierarchical data

3. **Apply the "Ragged hierarchy" toggle** to handle unbalanced hierarchies

4. **Configure zoom levels** to control the level of detail shown in time-based visualizations

## Best Practices for Effective What-If Analysis

To maximize the value of what-if capabilities:

1. **Start with clear questions** that the analysis should answer

2. **Use realistic parameter ranges** based on historical data or expert input

3. **Limit the number of parameters** to avoid overwhelming complexity (3-5 is ideal)

4. **Document assumptions** underlying each scenario for future reference

5. **Include both optimistic and pessimistic scenarios** to understand the range of possibilities

6. **Focus on actionable insights** rather than theoretical explorations

7. **Validate results** against historical data when possible

8. **Update models regularly** as new data becomes available

## Integration with Broader Analytics+ Features

Based on the documentation, what-if analysis becomes even more powerful when combined with other Analytics+ capabilities:

- **Conditional formatting** to highlight when scenarios breach important thresholds, as demonstrated in the "Conditional formatting" documentation

- **Small multiples** to show scenario results across multiple dimensions simultaneously, as shown in the "Splitting and grouping" documentation

- **Annotations** to add context and capture insights about different scenarios, as described in the "Adding notes" section

- **Context awareness** to ensure visualizations respond appropriately to parameter changes, as detailed in the "Context awareness" documentation

- **Export capabilities** to share insights with stakeholders, allowing for offline analysis of different scenarios

## Conclusion

While the documentation indicates that advanced what-if simulations and scenario planning are primarily available in Inforiver Matrix rather than Analytics+, the integration with Power BI parameters and the visualization enhancements in Analytics+ still provide valuable what-if analysis capabilities.

By leveraging Power BI parameters and Analytics+ visualization features, business users can create interactive, context-aware dashboards that support scenario analysis and data-driven decision making. The dynamic ranking capabilities, context-aware visualizations, and comparative analysis tools in Analytics+ enhance Power BI's native what-if parameters, making them more accessible and visually impactful.

For more advanced what-if simulations, forecasting, and scenario planning with writeback capabilities, users would need to consider Inforiver Matrix as indicated in the documentation.