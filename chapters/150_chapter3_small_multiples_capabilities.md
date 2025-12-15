# 3.4 Small Multiples Capabilities

Small multiples represent one of the most powerful techniques in data visualization, enabling effective comparison across categories, regions, time periods, or scenarios. Analytics+ provides a sophisticated implementation of small multiples across virtually all chart types, unlocking comparative analysis capabilities that go far beyond standard Power BI visuals. This section explores the theory, implementation, and applications of small multiples in Analytics+.

## Small Multiples Theory and Benefits

Small multiples (also known as trellis charts, panel charts, or grid charts) apply the same visualization structure repeatedly to different subsets of data, enabling direct visual comparison.

### Core Principles

The fundamental principles behind small multiples include:

- **Consistency**: Using identical scales, axes, and visual encoding across all multiples
- **Proximity**: Placing multiples close enough for direct visual comparison
- **Comparison Focus**: Highlighting differences between data subsets
- **Cognitive Efficiency**: Leveraging the brain's pattern recognition capabilities
- **Context Preservation**: Maintaining overall context while examining details
- **Information Density**: Presenting multiple related visualizations in a limited space
- **Simultaneous Analysis**: Enabling examination of multiple dimensions together

These principles combine to create a visualization technique that Edward Tufte, the visualization pioneer, described as "the best design solution for a wide range of problems in data presentation."

### Analytical Benefits

Small multiples deliver significant analytical benefits:

- **Pattern Recognition**: Revealing patterns that might be hidden in overlaid or sequential visualizations
- **Outlier Detection**: Highlighting unusual behavior in specific categories or periods
- **Trend Comparison**: Facilitating comparison of trends across multiple dimensions
- **Distribution Analysis**: Showing how distributions vary across categories
- **Relationship Identification**: Revealing correlations between different data segments
- **Contextual Understanding**: Providing broader context for individual data points
- **Cognitive Load Reduction**: Simplifying complex multi-dimensional comparisons

By breaking complex multi-dimensional data into comparable chunks, small multiples significantly enhance users' ability to identify patterns, make comparisons, and draw insights.


## Implementation Across Chart Types

Analytics+ implements small multiples (also called trellis charts) across virtually all visualization types, with specialized functionality for each chart category. The implementation provides flexible layout options that can be accessed through the Trellis button in the toolbar or by selecting the Customize grid option from the dropdown menu.

### Bar and Column Charts

Small multiples implementation for bar/column charts includes:

- **Category Multiples**: Repeating the chart for each category value
- **Measure Multiples**: Creating a separate chart for each measure
- **Time Period Multiples**: Comparing the same measure across time periods
- **Scenario Multiples**: Comparing actual, budget, forecast side by side
- **Regional Multiples**: Analyzing the same metrics across different regions
- **Product Multiples**: Comparing performance across product lines
- **Channel Multiples**: Contrasting behavior across distribution channels

This versatile implementation enables effective comparison of categorical data across multiple dimensions without the visual clutter of grouped or stacked bars.

Analytics+ offers several layout options for chart small multiples:

- **Grid**: Displays data in a row-column grid with panels of equal size and uniform scaling

![Grid](/images/GridLayout-Charts.png)

- **Grid Auto-fit**: Maximizes data display in available canvas space without scrolling or pagination

![GridAutoFit](/images/GridAutoFitCharts.png)

- **Scaled Rows**: Scales row height according to the top-performing panel (for vertical chart orientations)

![Scaled Rows](/images/ScacledRowsCharts.png)

- **Ranked Panels**: Varies panel size based on measure magnitude (for single small multiple parameter assigned to column)

![Ranked Panels](/images/RankedPanelsCharts.png)

Interactive resizing is available in grid and grid auto-fit layouts, allowing users to drag panel sides to adjust dimensions.


### Line Charts

Small multiples for line charts provide:

- **Trend Comparison**: Comparing trends across products, regions, or segments
- **Seasonal Pattern Analysis**: Identifying consistent or varying seasonal patterns
- **Cycle Comparison**: Contrasting business cycles across categories
- **Growth Rate Visualization**: Comparing growth trajectories
- **Volatility Analysis**: Comparing stability/volatility across categories
- **Time Period Correlation**: Identifying time-shifted correlations
- **Forecast Comparison**: Comparing forecast accuracy across segments

This implementation is particularly valuable for time series analysis, revealing how temporal patterns vary across different segments of the business.

### Pie and Donut Charts

Small multiples for compositional charts enable:

- **Composition Comparison**: Contrasting part-to-whole relationships
- **Segment Evolution**: Showing how composition changes over time
- **Market Structure Analysis**: Comparing market share across regions
- **Portfolio Distribution**: Comparing investment allocation across portfolios
- **Cost Structure Comparison**: Contrasting expense breakdowns across units
- **Revenue Mix Analysis**: Comparing revenue sources across segments
- **Resource Allocation Comparison**: Contrasting how resources are distributed

While individual pie charts may sometimes be criticized, small multiples of pie/donut charts can effectively reveal compositional differences across categories.

### Tables and Matrices

Small multiples for tabular visualizations provide:

- **Metric Grid**: Displaying the same metrics across different dimensions
- **Period Comparison**: Showing the same table for different time periods
- **Scenario Analysis**: Comparing actual, budget, and forecast tables
- **Regional Performance**: Contrasting performance tables by region
- **Customer Segment Analysis**: Comparing metrics across customer segments
- **Product Line Comparison**: Contrasting performance across product lines
- **Channel Analysis**: Comparing metrics across distribution channels

This implementation transforms tables from mere data presentation to powerful comparative analysis tools.

Analytics+ provides specialized layouts for table small multiples:

- **Grid**: Standard row-column grid with equal-sized panels

![Grid](/images/GridLayoutTables.png)

- **Scaled Table**: Panel size determined by the number of rows and columns in each table

![Scaled Table](/images/ScaledTable.png)

- **Single Row**: All small multiple tables arranged side-by-side in one row

![Single Row](/images/SingleRow.png)

- **Single Column**: All small multiple tables stacked vertically in one column

![Single Column](/images/SingleColumn.png)

### Cards and KPIs

Small multiples for cards and KPIs enable:

- **Metric Comparison**: Comparing key metrics across categories
- **Performance Indicators**: Contrasting KPIs across business segments
- **Trend Visualization**: Showing trend indicators across categories
- **Target Achievement**: Comparing performance against targets
- **Variance Analysis**: Highlighting variances across segments
- **Composite Metrics**: Comparing multi-part metrics across dimensions
- **Status Indicators**: Contrasting status across categories

Analytics+ offers specialized layouts for card small multiples:

- **Grid**: Standard row-column grid with equal-sized panels
- **Compact Grid**: Renders cards in stamp-sized panels, ideal for dashboard integration
- **Single Row**: All cards arranged in one row
- **Single Column**: Chart and metrics displayed side-by-side, with KPI metrics positionable to left or right

### Scatter and Bubble Charts

Small multiples for relationship charts enable:

- **Correlation Comparison**: Showing how relationships vary across categories
- **Segment Clustering**: Revealing different clustering patterns by segment
- **Outlier Distribution**: Comparing outlier patterns across categories
- **Performance Quadrant Comparison**: Contrasting quadrant distribution
- **Trend Relationship Analysis**: Showing how relationships evolve over time
- **Distribution Comparison**: Comparing data distributions across segments
- **Density Comparison**: Contrasting data density patterns

This implementation is particularly valuable for comparing relationships across different business dimensions.

### Specialized Business Charts

Small multiples can be applied to specialized chart types:

- **Variance Comparison**: Comparing variance patterns across regions
- **Waterfall Comparison**: Contrasting build-up analysis across categories
- **Financial Statement Comparison**: Comparing financial statements by division
- **KPI Grid Comparison**: Contrasting KPI performance across segments
- **Risk Matrix Comparison**: Comparing risk profiles across business units
- **Process Flow Comparison**: Contrasting process efficiency across locations
- **Funnel Comparison**: Comparing conversion funnels across segments

This versatility ensures that even specialized business visualizations can leverage the power of comparative analysis.

## Advanced Small Multiple Techniques

Analytics+ extends the small multiples concept with advanced techniques that enhance analytical capabilities.

### Hierarchical Small Multiples

Analytics+ supports hierarchical small multiples:

- **Nested Dimensions**: Creating multiples based on multiple dimensional levels
- **Drill-Down Capability**: Enabling exploration from summary to detail
- **Parent-Child Comparison**: Contrasting parent categories with constituent children
- **Hierarchical Sorting**: Sorting multiples based on hierarchy position
- **Level-Based Scaling**: Applying different scales by hierarchy level
- **Aggregate Comparison**: Comparing aggregates alongside constituent parts
- **Cross-Level Analysis**: Analyzing patterns across hierarchy levels

This hierarchical implementation enables deeper exploration of organizational structures, product hierarchies, and other nested data.

### Comparative Reference Elements

Analytics+ enhances small multiples with reference elements:

- **Cross-Multiple References**: Lines or bands spanning multiple charts
- **Global Reference Lines**: Consistent benchmarks across all multiples
- **Relative Reference Lines**: References relative to each multiple's data
- **Highlight Bands**: Emphasizing specific ranges across all multiples
- **Outlier Indicators**: Consistent outlier highlighting across charts
- **Comparative Annotations**: Annotations that provide cross-chart context
- **Statistical References**: Showing statistical measures across multiples
- **Average Panel**: Optional additional panel displaying the average of all small multiple categories

These reference elements enhance the comparative power of small multiples by providing consistent context across all charts.

### Advanced Layout Options

Analytics+ provides sophisticated layout control:

- **Display Options**: Choose between scroll or pagination when content exceeds canvas size
- **Panel Scale**: Select uniform scaling (based on entire dataset) or individual scaling (specific to each panel)
- **Auto-fit Fill Type**: Prioritize arrangement in rows, columns, or balanced square panels
- **Responsive Grid**: Dynamically adjust whitespace, resize charts, and adapt layout when canvas is resized
- **Grid Configuration**: Specify number of rows and columns when responsive grid is disabled
- **Lock Panel Size**: Fix panel dimensions with customizable height and width in pixels
- **Axis Positioning**: Control x-axis and y-axis display for each panel, top/bottom rows only, or at grid edges
- **Uniform Bar Width**: Ensure consistent bar thickness across all panels regardless of category count

These layout options ensure effective use of available space while emphasizing the most important comparisons.

### Panel Styling and Customization

Analytics+ provides extensive styling options for small multiples:

- **Title Customization**: Display category only or category with total/average value
- **Value Position**: Show values inline with category or in a separate line
- **Font Styling**: Set custom font styles and colors for categories and values
- **Panel Background**: Apply custom backgrounds to all panels, alternate rows, or alternate columns
- **Border and Shadow Effects**: Add shadows with customizable style and color
- **Border Customization**: Set border style, color, and radius for each corner
- **Panel Spacing**: Define the gap between adjacent panels in pixels
- **Variance-Based Styling**: Use variance colors for panel borders

### Highlighting and Focus

Analytics+ implements advanced highlighting across multiples:

- **Cross-Multiple Highlighting**: Highlighting the same category across all charts
- **Coordinated Selection**: Selecting elements across multiple charts
- **Focus-Context Balance**: Emphasizing selected multiples while maintaining others
- **Pattern Highlighting**: Automatically highlighting similar patterns
- **Outlier Emphasis**: Drawing attention to unusual values across multiples
- **Comparative Highlighting**: Emphasizing differences between multiples
- **Interactive Reference**: Showing interactive references across all charts

These highlighting capabilities enable users to identify and explore patterns across multiples interactively.

### Customization Options

Analytics+ provides extensive customization for small multiples:

- **Per-Multiple Styling**: Applying specific styles to individual multiples
- **Conditional Formatting**: Setting formatting rules across all multiples
- **Level-Based Templates**: Using different templates based on hierarchy level
- **Multiple-Specific Annotations**: Adding context to specific multiples
- **Sequence Highlighting**: Emphasizing progression across multiples
- **Custom Sorting**: Arranging multiples based on complex criteria
- **Filtering Control**: Selectively including or excluding multiples
- **Interactive Resizing**: Drag panel sides to resize in grid and auto-fit layouts

These customization options ensure that small multiples can be tailored to specific analytical and communication needs.

## Practical Examples and Use Cases

The small multiples capabilities in Analytics+ enable sophisticated comparative analysis across various business domains.

### Sales Analysis

Small multiples for sales analysis:

- **Regional Sales Comparison**: Comparing sales trends across regions
- **Product Performance Grid**: Contrasting product performance metrics
- **Channel Effectiveness Analysis**: Comparing sales channels side by side
- **Customer Segment Behavior**: Analyzing patterns across customer segments
- **Promotional Impact Assessment**: Comparing promotion effectiveness
- **Seasonal Pattern Comparison**: Contrasting seasonality across product lines
- **Growth Analysis**: Comparing growth rates across categories

These applications help sales teams identify performance patterns, optimization opportunities, and strategic insights.



### Financial Analysis

Small multiples for financial analysis:

- **Divisional Performance**: Comparing financial performance across divisions
- **Expense Category Analysis**: Contrasting expense patterns across departments
- **Budget vs. Actual Grid**: Comparing variance patterns across categories
- **Margin Analysis**: Contrasting margin trends across product lines
- **Cash Flow Comparison**: Comparing cash flow patterns across business units
- **Investment Performance**: Contrasting investment returns across portfolios
- **Cost Center Comparison**: Analyzing cost patterns across centers

These applications help finance teams identify cost drivers, performance outliers, and optimization opportunities.

### Marketing Analysis

Small multiples for marketing insights:

- **Campaign Performance**: Comparing metrics across campaigns
- **Channel Effectiveness**: Contrasting ROI across marketing channels
- **Audience Response Analysis**: Comparing response across segments
- **Media Mix Comparison**: Contrasting media effectiveness
- **Conversion Funnel Analysis**: Comparing conversion across segments
- **Brand Metric Tracking**: Contrasting brand metrics across markets
- **Content Performance Grid**: Comparing engagement across content types

These applications help marketing teams optimize channel mix, target high-performing segments, and improve campaign effectiveness.

### Operations Analysis

Small multiples for operational insights:

- **Process Efficiency Comparison**: Contrasting process metrics across locations
- **Quality Control Grid**: Comparing quality metrics across production lines
- **Inventory Analysis**: Contrasting inventory patterns across warehouses
- **Capacity Utilization**: Comparing utilization across facilities
- **Maintenance Comparison**: Contrasting maintenance patterns
- **Productivity Analysis**: Comparing productivity across teams
- **Resource Allocation**: Contrasting resource distribution across projects

These applications help operations teams identify best practices, optimization opportunities, and performance issues.

### Customer Analysis

Small multiples for customer insights:

- **Segment Behavior Comparison**: Contrasting behaviors across segments
- **Satisfaction Metrics Grid**: Comparing satisfaction across touchpoints
- **Loyalty Pattern Analysis**: Contrasting loyalty metrics across segments
- **Acquisition Channel Comparison**: Comparing channel effectiveness
- **Churn Rate Analysis**: Contrasting churn across customer types
- **Lifetime Value Comparison**: Comparing value across customer cohorts
- **Engagement Pattern Analysis**: Contrasting engagement across segments

These applications help customer teams identify high-value segments, engagement opportunities, and retention strategies.

## Business Applications and Benefits

The small multiples capabilities in Analytics+ deliver significant business benefits across the organization.

### Enhanced Comparative Analysis

Small multiples transform comparative analysis through:

- **Multi-Dimensional Comparison**: Comparing across multiple dimensions simultaneously
- **Pattern Recognition**: Identifying consistent or divergent patterns
- **Outlier Identification**: Spotting anomalies across categories
- **Trend Comparison**: Contrasting trends across business segments
- **Performance Benchmarking**: Comparing performance against peers or periods
- **Root Cause Analysis**: Identifying factors driving differences
- **Opportunity Spotting**: Revealing untapped potential across segments

This enhanced comparative capability leads to deeper insights and more informed decision-making.

### Communication Effectiveness

Small multiples improve information communication through:

- **Clear Comparisons**: Making differences and similarities immediately visible
- **Context Preservation**: Maintaining overall context while showing details
- **Focused Narrative**: Emphasizing key comparative messages
- **Pattern Explanation**: Making complex patterns easier to explain
- **Simultaneous Presentation**: Showing multiple aspects without switching views
- **Spatial Organization**: Leveraging spatial arrangement for meaning
- **Consistent Encoding**: Using the same visual language across comparisons

This communication effectiveness ensures that insights are clearly understood and acted upon.

### Decision Support

Small multiples enhance decision support through:

- **Comprehensive Overviews**: Providing complete comparative context
- **Insight Acceleration**: Faster identification of key differences
- **Decision Focus**: Emphasizing decision-relevant comparisons
- **Evidence Presentation**: Clear visual evidence for decisions
- **Alternative Comparison**: Effective comparison of scenarios
- **Trade-off Visualization**: Clearly showing advantages and disadvantages
- **Priority Identification**: Revealing where attention should be focused

These decision support benefits lead to better-informed, more confident business decisions.

## Conclusion

The small multiples capabilities in Analytics+ represent a significant advancement in comparative visualization within Power BI. By enabling consistent application of this powerful technique across virtually all chart types, Analytics+ empowers users to conduct sophisticated comparative analysis without specialized technical skills.

The combination of consistent implementation across chart types, advanced techniques like hierarchical multiples and comparative references, and practical applications across business domains ensures that users can leverage the full power of comparative visualization for deeper insights and better decisions.

Analytics+ provides an intuitive interface for creating and customizing small multiples through the Trellis button in the toolbar. The extensive layout options, styling capabilities, and interactive features make it easy for users to create effective comparative visualizations tailored to their specific analytical needs. The responsive design ensures that small multiples remain effective across different screen sizes and device types.

By implementing small multiples as a core capability across all visualization types, Analytics+ enables users to apply this powerful analytical technique consistently throughout their reports and dashboards, creating a cohesive analytical experience that enhances understanding and decision-making.

In the next section, we'll explore the pivot data interface of Analytics+, examining how it provides flexible, interactive analysis of hierarchical and multi-dimensional data.
