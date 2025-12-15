# 3.2 The Analytics+ Chart Type Gallery

Inforiver Analytics+ offers an extensive library of over 100 chart types, providing business users with the right visualization tool for virtually any analytical scenario. This comprehensive gallery goes far beyond the limited selection available in native Power BI, enabling more precise, effective visual communication. In this section, we'll explore the diverse chart types available in Analytics+, organized by analytical purpose and usage patterns.

The Analytics+ visualization framework is designed with a "quick charts" approach that allows users to create sophisticated visualizations in just a few clicks. Each chart type comes with specific configurations and parameters that can be easily customized to meet various analytical needs. The framework supports a wide range of data visualization scenarios, from basic comparisons to complex multi-dimensional analysis.

## Comparison Charts

Comparison visualizations help users analyze similarities and differences between values across categories or time periods.

### Bar and Column Charts

The foundation of comparison visualization, these charts include:

- **Overlapped Column/Bar Chart**: For basic category comparison

![Overlapped](images/OverlappeColumn.png)

- **Clustered Column/Bar Chart**: For comparing multiple measures across categories

![Clustered](images/ClusteredColumn.png)
  
- **Stacked Column/Bar Chart**: For showing both individual and total values

![Stacked](images/StackedColumn.png)
  
- **100% Stacked Column/Bar Chart**: For comparing percentage contributions

![100%StackedColumn](images/HundredPercentStackedColumn.png)

- **Column +Column Chart**: For hierarchical category comparison

![Column+Column](images/Column+Column.png)
  
- **Win Loss Chart**: For depicting categories that are performing well against those that are under-performing

![WinLossColumn](images/WinLossColumn.png)
  
- **Side by Side Bar Chart**: For showing two measures side-by-side in horizontal orientation

![SidebySideBar](images/SidebySideBar.png)
  
- **Stacked Measure Chart**: For showing the contribution of each measure to the total

![StackedMeasure](images/StackedMeasure.png)

Column charts are particularly effective for time-based comparisons, while horizontal bar charts excel at comparing values across numerous categories or those with long descriptive labels.

#### Implementation Details

Analytics+ provides several specialized implementations of bar and column charts:

1. **Overlapped Column**: Allows multiple measures to be plotted with partial transparency to show overlapping values, ideal for comparing actual values against targets or previous periods.

2. **Cluster Column**: Plots multiple measures side by side for quick comparisons, with automatic measure configuration handled internally by Inforiver.

3. **IBCS Integrated Variance Column**: Implements IBCS standards for financial reporting, plotting actual/previous year/plan/forecast measures with relative variance indicators.

#### Customization Options

Bar and column charts in Analytics+ offer extensive customization capabilities:

- **Border Settings**: Define custom width and color for bar borders
- **Transparency Control**: Adjust the transparency of bars with options to match border color to bar color
- **Fill Patterns**: Choose between solid, outlined, and hatched patterns to distinguish between different types of data (e.g., actual vs. forecast)
- **On-object Interactions**: Click directly on bars to change measures, colors, or data label visibility
- **Measure Series Configuration**: Change chart types for specific measures, assign measures to different y-axes, or show/hide measures



### Variance Charts

Specialized for actual vs. target/plan/prior period comparisons:

- **Integrated Variance Column**: Showing actual and plan with variance

![Integrated Variance Column](images/IntegratedVarianceColumnChart.png)

- **Variance Line**: Displaying cumulative variance over time

![Variance Line](images/VarianceLine.png)

- **Variance Area**: Area chart displaying cumulative variance over time

![Variance Area](images/VarianceArea.png)

- **Waterfall Variance Chart**: Visualizing how variances contribute to final results

![Variance Waterfall](images/VarianceWaterfall.png)

- **Bullet Chart**: Comparing actual performance against targets and ranges

![Bullet chart](images/IBCSBulletBar.png)

These variance-focused charts are particularly valuable for financial reporting, performance monitoring, and planning/forecasting scenarios.



### Ranking Charts

Charts specifically designed to highlight rank order:

- **Range Bar Chart**: Vertical bars ordered by value

![Range chart](images/RangeBar.png)

- **Slope Chart**: Comparing rankings between two time periods

![Slope chart](images/SlopeGraph.png)
  
- **Lollipop Chart**: Combining bar and point for clearer ranking

![Lollipop chart](images/Lollipop.png)
  
- **Dot Plot**: Emphasizing position in a distribution

![dotplot chart](images/dotplot.png)

- **Dumbbell Chart**: Showing change between two points while maintaining rank context

![dumbbell chart](images/dumbbell.png)
  
These charts excel at communicating competitive position, market share rankings, and performance standings.

## Time Series Charts

Time-based visualizations reveal patterns, trends, and changes over time periods.

### Line Charts

The standard for time series analysis:

- **Basic Line Chart**: For showing trends over time

![Line](images/LineChart.png)

- **Clustered-Line Chart**: For comparing multiple series over time

![ClusteredLine](images/ClusteredLine.png)

- **Stepped Line Chart**: For visualizing discrete changes

![SteppedLine](images/SteppedLine.png)

- **Curved Line Chart**: For smoothed trend visualization

![Spline](images/Spline.png)

- **Stacked Line Chart**: For showing both individual contributions and totals over time

![Stacked Line](images/StackedLine.png)
  
- **100% Stacked Line Chart**: For visualizing changing percentage composition

![100% Stacked Line](images/HundredPercentStackedLine.png)

Line charts are the cornerstone of time-based analysis, providing clear visualization of trends, patterns, and relationships over time.

#### Area Chart Implementations

Analytics+ offers several specialized implementations of area charts:

- **Stacked Area Chart**: Shows multiple measures stacked on top of each other, allowing users to see both individual contributions and the total.

![Stacked Area](images/StackedArea.png)

- **100% Stacked Area Chart**: Normalizes the data to show percentage contributions of each measure to the total.

![100% Stacked Area](images/HundredPercentStackedArea.png)

- **Cluster Area Chart**: Highlight both differences and similarities between categories or groups.

![ClusterArea](images/ClusterArea.png)

- **Base Area Chart**: Depict the variations of a particular measure with the high-performing portions in green and the low-performing portions in red.

![Base Area](images/BaseArea.png)

#### Customization Options

Line and area charts in Analytics+ offer extensive customization capabilities:

- **Line Styles**: Adjust line thickness, style (solid, dashed, dotted), and curvature
- **Point Markers**: Show or hide data points with customizable shapes and sizes
- **Area Fill**: Control opacity, gradient, and pattern for area fills
- **Interactive Tooltips**: Customize the information displayed on hover
- **Axis Configuration**: Extensive control over axis scales, labels, and gridlines
- **Highlighting**: Emphasize specific time periods or data points

## Part-to-Whole Charts

These visualizations help users understand composition and how individual components contribute to a whole.

### Standard Composition Charts

Classic approaches to showing composition:

- **Pie Chart**: For simple part-to-whole relationships

![Pie](images/Pie.png)

- **Donut Chart**: For part-to-whole with space for central metrics

![Donut](images/Donut.png)

- **Exploded Pie/Donut**: For emphasizing specific segments

![Pie explosion](images/PieExplosion.png)

- **Waterfall Chart**: For building up/breaking down a total

![Waterfall Chart](images/BreakdownWaterfall.png)

- **Mekko Chart (Marimekko)**: For showing composition with two variables

![Marimekko Chart](images/Marimekko.png)

While simple pie charts are often criticized in data visualization literature, Analytics+ implements best practices (limited segments, clear labeling) to ensure they are used appropriately.



### Hierarchical Composition

Visualizations for multi-level compositional data:

- **Treemap**: For hierarchical part-to-whole relationships

![Treemap](images/Treemap.png)

- **Sunburst Chart**: For visualizing hierarchical data as concentric rings

![sunburst](images/sunburst.png)

These charts are particularly valuable for visualizing hierarchical structures like organizational data, product categories, or budget allocations.

#### Treemap Charts

Treemaps in Analytics+ provide a space-efficient way to display hierarchical data using nested rectangles. Key features include:

1. **Multi-level Hierarchies**: Visualize multiple levels of hierarchical data with nested rectangles.

2. **Size and Color Encoding**: Represent values through both the size of rectangles and color intensity.

3. **Interactive Drill-down**: Click on parent rectangles to drill down into child categories.

4. **Customizable Labels**: Control the display of labels at different hierarchy levels.

5. **Border Customization**: Adjust borders between rectangles to emphasize hierarchy levels.

Implementation example:
- Map dimensions to hierarchy levels (e.g., Region > Country > City)
- Assign measures to determine rectangle size (e.g., Sales)
- Use color intensity to represent a secondary measure (e.g., Profit Margin)
- Configure label display options for each level

#### Sunburst Charts

Sunburst charts in Analytics+ display hierarchical data in a radial layout with concentric rings. Key features include:

1. **Radial Hierarchy**: Inner rings represent higher levels in the hierarchy, with outer rings showing lower levels.

2. **Angular Segments**: The size of each segment represents its proportion of the parent segment.

3. **Interactive Exploration**: Click on segments to focus on specific branches of the hierarchy.

4. **Center Text**: Display summary information in the center of the chart.

5. **Customizable Ring Width**: Adjust the width of rings to emphasize different hierarchy levels.

Implementation example:
- Map dimensions to hierarchy levels (e.g., Department > Team > Employee)
- Assign measures to determine segment size (e.g., Budget Allocation)
- Configure color schemes to distinguish between different branches
- Set up interactive tooltips to display detailed information on hover

## Distribution Charts

These visualizations help users understand the spread, central tendency, and shape of data distributions.

### Statistical Distributions

Specialized charts for distribution analysis:

- **Histogram**: For showing frequency distribution

![Histogram](images/histogram.png)

- **Box Plot (Box and Whisker)**: For visualizing statistical summary

![Boxplot](images/boxplot.png)

- **Bee Swarm**: For distribution with individual point visibility

![Swarm plot](images/swarm-plot.png)

These statistical visualizations are particularly valuable for quality control, research analysis, and understanding data characteristics.

### Scatter and Bubble Charts

Visualizing relationships between variables:

- **Scatter Plot**: For showing the relationship between two variables

![image](https://github.com/user-attachments/assets/9666b585-5ae2-42e3-a2f3-0d18cccac878)


- **Bubble Chart**: For relationships with a third variable encoded by size

![image](https://github.com/user-attachments/assets/636cc7f6-3e95-433b-b9e9-c8d31ae5aef0)

- **Quadrant Chart**: For categorizing data points into four segments

![image](https://github.com/user-attachments/assets/2b67d7bb-dd4f-44ca-b352-61a537c806e1)

- **Packed bubble Chart**: For comparing quantities or relationships in a visually appealing and space-efficient way.

![image](https://github.com/user-attachments/assets/060d8ea8-8363-4245-8a67-6e238940bdb1)


These charts excel at correlation analysis, outlier detection, and visualizing relationships between multiple variables.

## Specialized Business Charts

Analytics+ provides specialized visualizations designed specifically for common business analyses.

### Financial Charts

Tailored for financial analysis and reporting:

- **Waterfall Chart**: For financial statements and variance analysis

![image](https://github.com/user-attachments/assets/77858f1c-f3c3-4361-94ad-96aa8bf42a22)

- **IBCS Column/Bar**: For standardized financial reporting

![image](https://github.com/user-attachments/assets/93a87eff-6631-4f31-8765-09a29a3195e3)

- **Variance Chart**: For plan vs. actual visualization

![image](https://github.com/user-attachments/assets/e9853f56-2ce7-4fd8-af54-cef1053b1145)

These charts implement IBCS standards for financial reporting, ensuring clarity and consistency in financial communication.

#### Waterfall Charts

Waterfall charts in Analytics+ provide a clear visualization of how positive and negative values contribute to a total. Key features include:

1. **Starting and Ending Points**: Define custom labels for opening and closing balances.

2. **Color Coding**: Distinguish between positive and negative contributions with different colors.

3. **Connectors**: Show the flow between values with customizable connector lines.

4. **Subtotals**: Insert running totals at strategic points in the waterfall.

5. **IBCS Compliance**: Apply International Business Communication Standards for consistent financial reporting.

Implementation example:
- Map categories to the sequence of items in the waterfall
- Assign measures to determine the magnitude of each step
- Configure colors to distinguish between increases, decreases, and totals
- Add data labels to show precise values at each step



### Project Management Charts

Analytics+ includes specialized charts for project management and planning:

#### Gantt Charts

The Gantt chart in Analytics+ is a best-in-class implementation for visualizing project schedules, tasks, and dependencies. Key features include:

1. **Multi-level Timeline**: Capture progress at detailed levels with hierarchical task organization.

![image](https://github.com/user-attachments/assets/ffaef3dc-cb1d-4b3a-9083-64077669dec3)

3. **Task Dependencies**: Visualize project dependencies with customizable connector lines.

![image](https://github.com/user-attachments/assets/eab1b552-67b7-4e15-a6c6-23d2fea26176)

4. **Resource Allocation**: Assign and track resources across tasks and subtasks.

![image](https://github.com/user-attachments/assets/cb25a6d6-9c46-4600-a0d8-18307258c09f)

5. **Progress Tracking**: Show completion percentage for each task with progress bars.

![image](https://github.com/user-attachments/assets/c5c3dc18-dc9e-48f7-8ab4-225f5992bf60)

7. **Milestones**: Mark important project events with customizable milestone markers.

![image](https://github.com/user-attachments/assets/fb08b310-7f85-439b-9376-5a102a750e34)

9. **Reference Lines and Bands**: Highlight important dates or phases with reference elements.

![image](https://github.com/user-attachments/assets/9b8b8a5f-c3be-414c-a758-edff1e7808e0)


11. **Planned vs. Actual Comparison**: Compare planned dates against actual execution.

![image](https://github.com/user-attachments/assets/59bb38f8-9dc4-418c-a145-10aa84b3a241)


Implementation steps:
- Map tasks and subtasks to create the project hierarchy
- Assign start and end dates to define task durations
- Add progress values to show completion status
- Assign resources to tasks for resource allocation tracking
- Define dependencies between tasks with connector lines
- Add milestones to mark significant project events
- Use reference lines to highlight important dates or deadlines

The Gantt chart's extensive customization options allow for detailed project visualization, making it an essential tool for project managers and teams working in Power BI.


### Market and Customer Charts

Tailored for market and customer analysis:

- **Funnel Chart**: For conversion processes

![image](https://github.com/user-attachments/assets/3dbde1b3-010d-456b-99dc-cbac85b2a2f7)

- **Tornado Chart**: For demographic comparison

![image](https://github.com/user-attachments/assets/8893ec4a-662f-4309-8672-1a3ce39cf301)


These charts address specific needs in marketing, sales, and customer experience analysis.

## Network and Relationship Charts

Visualizations for interconnected data and relationships.

### Relationship Visualizations

Options for showing connections:

- **Sankey Diagram**: For flow visualization
  
![image](https://github.com/user-attachments/assets/651fb27c-9f02-4841-8483-336395e8192c)

These visualizations are valuable for supply chain analysis, organizational relationships, customer journey mapping, and system dependencies.

#### Sankey Diagrams

Sankey diagrams in Analytics+ provide a powerful way to visualize flows and transfers between categories. Key features include:

1. **Flow Visualization**: Show the magnitude of flows between nodes with proportionally sized links.

2. **Multi-stage Flows**: Visualize flows across multiple stages or categories.

3. **Color Coding**: Use colors to distinguish between different types of flows or categories.

4. **Interactive Exploration**: Hover over nodes and links to see detailed information.

5. **Node Positioning**: Customize node arrangement for optimal flow visualization.

Implementation example:
- Define source and target nodes for each flow
- Assign measures to determine the magnitude of each flow
- Configure colors to distinguish between different flow types
- Set up interactive tooltips to display detailed flow information

Sankey diagrams are particularly valuable for visualizing:
- Budget allocations across departments
- Customer journey flows through marketing funnels
- Energy or material flows in production processes
- Migration patterns between regions
- Traffic flows between websites or pages

The intuitive visual representation of flows makes Sankey diagrams an excellent tool for understanding complex transfer relationships in business data.

## Multi-Dimensional Visualizations

Charts designed to communicate three or more variables simultaneously.

### Multi-Variate Charts

Approaches for complex multi-variable analysis:

- **Radar/Spider Chart**: For multivariate comparison

![image](https://github.com/user-attachments/assets/76692be5-e2b6-4d78-b908-4fd99a654731)

- **Parallel Coordinates**: For visualizing multiple dimensions

![image](https://github.com/user-attachments/assets/7e15336c-7f80-405a-857e-e6250b730e9f)

- **Slope graph**: For pattern detection in multivariate data

![image](https://github.com/user-attachments/assets/0c7886f8-5fda-4c98-9317-c0dd57232904)

These advanced visualizations enable analysis of complex, multi-dimensional business data, though they require more user familiarity for effective interpretation.

#### Radar and Polar Charts

Radar and polar charts in Analytics+ provide effective ways to visualize multivariate data across multiple dimensions. Key features include:

1. **Multi-dimensional Comparison**: Compare multiple entities across multiple variables on a single chart.

2. **Area Fill**: Option to fill the area enclosed by the data points for better visual comparison.

3. **Scale Customization**: Adjust scales to be linear or logarithmic based on data characteristics.

4. **Grid Levels**: Control the number and appearance of concentric grid lines.

5. **Multiple Series**: Compare multiple entities on the same radar chart with different colors.

6. **Point Markers**: Highlight specific data points with customizable markers.

Implementation example:
- Define categories representing the dimensions to compare (e.g., quality metrics)
- Assign measures for each entity being compared (e.g., products or competitors)
- Configure the scale type and starting point
- Adjust the appearance of the chart with fill options, line styles, and point markers

Radar charts are particularly valuable for:
- Competitive analysis comparing products or companies across multiple attributes
- Performance evaluations across multiple metrics
- Skills assessment across different competency areas
- Quality analysis across multiple dimensions
- Strategic planning using balanced scorecard approaches

## Tabular Visualizations

Enhanced table formats that go beyond basic data grids.

### Advanced Tables

Sophisticated tabular visualizations:

- **Single measure bar charts**: To visualize the magnitude of single measure values

![Inline bar chart](images/InlineBar.png)
  
- **Lollipop charts**: To visualize the magnitude of single-measure values

![Inline Lollipop](images/InlineLollipop.png)

- **Waterfall charts**: To visualize the breakdown of measure values

![Inline Waterfall](images/InlineWaterfall.png)

These enhanced tables combine the precision of tabular data with visual cues that highlight patterns and exceptions.

Implementation example:
- Configure the main table with rows and columns
- Add measures for the inline chart data
- Select the inline chart type for specific columns
- Customize the appearance of the inline charts

#### Advanced Table Features

Analytics+ tables offer sophisticated capabilities beyond basic data presentation:

1. **Hierarchical Data**: Display multi-level hierarchies with expand/collapse functionality.

![image](https://github.com/user-attachments/assets/b9cb531b-e996-4109-abf2-040fc558e143)

3. **Conditional Formatting**: Apply color scales, data bars, and icon sets based on values.

![image](https://github.com/user-attachments/assets/12a9a9dc-0292-436b-a111-9633f62ad4d8)

4. **Custom Aggregations**: Define how measures are summarized at different hierarchy levels.

![image](https://github.com/user-attachments/assets/eb339df2-92bb-433a-af88-4cd528930663)

5. **Cross-Tabulation**: Create pivot-style tables with multiple dimensions and measures.

![Pivot Table](images/PivotTables.png)

7. **Interactive Sorting and Filtering**: Enable users to sort and filter data directly in the table.

![image](https://github.com/user-attachments/assets/fed308cf-bd00-4926-b8d6-563999f460df)

7. **Custom Number Formatting**: Apply sophisticated formatting rules to numeric values.

![image](https://github.com/user-attachments/assets/f01e18bb-0d2b-4c71-b8d3-be98d79160e1)

8. **Cell Merging**: Combine cells for better visual organization of related data.

![image](https://github.com/user-attachments/assets/521acea5-2bfc-488c-a991-9651d286ef41)


## Chart Selection Guidance

With over 100 chart types available, selecting the right visualization is critical. Analytics+ offers guidance through:

### Chart Recommendation Engine

An intelligent system that suggests appropriate visualizations based on:

- **Data Structure**: The format and organization of your data
- **Number of Variables**: How many data dimensions you're visualizing
- **Analytical Purpose**: What you're trying to communicate
- **Audience Considerations**: Who will consume the visualization
- **Business Domain**: Industry-specific recommended practices
- **Comparison Type**: The specific comparison you're making
- **Data Distribution**: The characteristics of your data values

This recommendation engine helps users navigate the extensive chart library to find the most effective visualization for their specific analytical needs.

### Visual Best Practices

Built-in guidance on visualization best practices:

- **Chart Type Decision Trees**: Structured guidance for chart selection
- **Purpose-Based Recommendations**: Suggestions based on analytical intent
- **Domain-Specific Templates**: Pre-configured templates for common scenarios
- **Warning Indicators**: Alerts for potentially misleading visualizations
- **Readability Enhancements**: Automatic improvements for clarity
- **Accessibility Considerations**: Guidance for accessible visualizations
- **Mobile Optimization**: Recommendations for multi-device consumption

These best practices ensure that users not only have access to a comprehensive chart library but also create visualizations that effectively communicate insights.

## Business Applications

The extensive chart library in Analytics+ enables effective visualization across various business functions:

### Finance
- Variance analysis with waterfall and bridge charts
- Financial statement visualization with IBCS standards
- Budget vs. actual comparisons with bullet and variance charts
- Cash flow visualization with specialized flow charts
- Financial KPI dashboards with indicator components

### Sales and Marketing
- Market segmentation with treemaps and bubble charts
- Sales pipeline analysis with funnel charts
- Competitive positioning with quadrant charts
- Campaign performance with multi-series line charts
- Customer journey with Sankey and flow diagrams

### Operations
- Process efficiency with statistical distribution charts
- Quality control with control charts and box plots
- Supply chain visualization with network diagrams
- Capacity utilization with gauge and bullet charts
- Operational KPIs with scorecard components

### Strategic Planning
- Scenario comparison with small multiples
- Strategic frameworks with specialized matrices
- Market evolution with marimekko charts
- Competitive landscape with radar charts
- Corporate performance with balanced scorecard visuals

The versatility of the chart library ensures that virtually any business analytical need can be addressed with an appropriate visualization type.

## Conclusion

The Analytics+ chart type gallery represents a quantum leap beyond the visualization capabilities of native Power BI. With over 100 chart types designed for specific analytical purposes, users can select exactly the right visualization for their data and communication goals. This comprehensive library, combined with intelligent selection guidance and best practice implementation, ensures that business users can create sophisticated, effective visualizations without specialized technical skills.

The extensive customization options available for each chart type allow users to fine-tune visualizations to meet specific business requirements. From basic configuration options like colors and labels to advanced features like reference lines, annotations, and interactive elements, Analytics+ provides a complete toolkit for creating professional-grade visualizations.

The "quick charts" approach makes it easy for users to create sophisticated visualizations in just a few clicks, while the detailed configuration options allow for precise control when needed. This balance of simplicity and power makes Analytics+ suitable for both casual business users and advanced analysts.

By implementing best practices in data visualization and adhering to standards like IBCS, Analytics+ ensures that visualizations are not only visually appealing but also effective at communicating insights. The chart recommendation engine helps users select the most appropriate visualization for their data and analytical purpose, reducing the learning curve associated with such a comprehensive chart library.

In the next section, we'll explore how Analytics+ implements the International Business Communication Standards (IBCS), providing a standardized approach to business visualization that enhances clarity and comparability across reports and dashboards.
