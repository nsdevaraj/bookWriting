# Appendix F: Working with Analytics+

The Analytics+ visual has been built as a storytelling platform that enables even casual users to create engaging, dynamic dashboards and reports in a matter of minutes. Let's embark on our data visualization journey and learn how to leverage the capabilities provided by Analytics+!

## Getting Started with Analytics+

### 1. Add the visual

First, we need to add the Inforiver Analytics+ visual to the Power BI canvas. Use the links in the visual for additional information:

* **Getting started**: Watch the video to get an overview of how Analytics+ works.
* **Demo**: This link navigates to the interactive demo page where you can explore the different types of dashboards and charts that can be created with Analytics+.
* **Documentation**: Discover all the advanced reporting, visualization and customization capabilities available in Analytics+.
* **Pricing**: Analytics+ offers different pricing tiers and plans you can use to purchase.

**Image: Adding the Analytics+ visual**

### 2. Choose the mode

The Analytics+ visual ships with 5 different modes, each with a dedicated toolbar that contains customization options specific to a particular mode. You can seamlessly switch between the modes by navigating to the respective ribbon:

- **Chart mode**: A range of diverse charts including Waterfall, Marimekko, Bullet charts, and boxplots. The Analytics+ library has suitable charts for every data visualization use case.
- **Card mode**: KPI cards with embedded charts, text and image support to showcase your metrics.
- **Table mode**: A bird's eye view of your data categories and relationships with the classic Small multiples table.
- **Gantt mode**: Visualize task schedules, identify dependencies, allocate resources, and track deadlines with the Analytics+ Gantt chart.
- **Storyboard mode**: Rapidly design captivating dashboards with a single visual and a single query. Effortlessly incorporate charts, text, images, slicers, KPI cards, and tables without the need to import separate visuals for each element type.

### 3. Enable IBCS

Analytics+ is an IBCS-certified visual. Enable the **IBCS standards** toggle to create charts, KPI cards, and tables that are fully IBCS compliant.

**Image: IBCS toggle**

Since we chose the chart mode, an IBCS compliant chart is rendered.

### 4. Enable performance mode

Line and area charts with high data volume and a large number of data points can be plotted significantly faster with the performance mode option.

When you enable performance mode, you'll notice that the performance mode toggle in the toolbar is automatically enabled and a line chart is rendered by default.

### 5. Assign data

For starters, let's assign one dimension and one measure to the visual parameters. By default, the chart mode is selected and Inforiver renders a bar chart.

### 6. Customize your report

Inforiver provides the flexibility to customize every element of your report. The best part is that tailoring your visual is truly at your fingertips - you don't need to enable the toolbar and open the visual in focus mode.

* You can use the **+** icon at the bottom left of the visual to open the context menu. From here, you can apply several modifications such as changing the chart type, enabling elements like KPIs or data labels, or choosing a different layout.
* You can simply click on any element that you want to customize and use Inforiver's handy on-object interaction menus to access the wide range of options.

## Navigating the Analytics+ toolbar

Analytics+ is a one-stop shop for dashboards and storyboards, offering charts, cards, and tables in a single visual platform. A key aspect of Analytics+ is that it is highly customizable. You can tailor the report to the specific needs of the audience.

First things first - to enable the toolbar, after assigning data, hover over the top portion of the visual and click on the arrow icon.

> The toolbar will automatically be displayed if you resize the visual to fill the canvas.

The fully loaded toolbar comes with a dedicated ribbon for charts, cards, tables, Gantt charts and the storyboard.

### Toolbar components

#### Pivot data

Re-assign measures and dimensions and apply filters from the data management window.

#### Filter context

The Analytics+ visual is context aware i.e, responsive to external slicers and filters.

#### Summary table

The summary table shows a tabular view of the underlying data in a chart or card. You can add calculated rows and re-order data in the summary table, the changes are instantly reflected in your visual without having to change the dataset.

#### Storyboard

Create stunning, interactive dashboards in under a few minutes with the powerful Storyboard.

#### Performance mode

Charts with high data volume and density can be plotted significantly faster with the performance mode option. Enable the toggle from the toolbar for faster rendering. Please bear in mind that performance mode is supported for select charts.

> * TopN ranking will be turned off in performance mode.
> * Sorting will be set to native sort.
> * Scrollbar will be disabled.
> * Multi charts(different charts in each trellis panel) will be reset to uniform charts in all panels.

## Chart Toolbar

The chart ribbon is divided into 7 sections based on the functionality provided:

### 1. Visualization

**Chart type**: Switch between chart types and choose from Inforiver's vast library of diverse charts.

**Rotate:** Change the orientation (horizontal to vertical or vice versa) of the chart by clicking on the button.

### 2. Category

In small multiples mode, you can customize the trellis layout. Click on the dropdown icon to apply a layout.

If you need to apply detailed customizations, like configuring the number of rows and columns or setting a specific panel size, click the **Trellis** button to open the layout settings side pane.

### 3. Measure

**Series**: Click on this button to open the measure series configuration window. You can set the chart type for each measure and control which y-axis the measure is plotted on.

**Split**: When your reports have multiple non-comparative measures, you can display each measure in a separate panel by clicking on the split button.

You can also **group measures** by clicking on the dropdown icon. For example, you can group measures like 2024 Actuals + Plan, 2023 Actuals + Plan, and 2022 Actuals + Plan into panels based on the year.

### 4. Data

* **Conditional formatting:** Highlight your data instantly using Inforiver's built-in conditional formatting options. You can also specify custom conditional formatting rules.
* **Sorting**: Apply nested sorting or custom excel-like sorting.
* **Ranking**: Rank your data by applying TopN rules. When hierarchical datasets are involved, you can apply nested ranking.
* **Filter:** After assigning visual measures and dimensions, instead of using Power BI filters, you can apply filters on your data from within the Analytics+ visual.
* **Formula:** You can create visual-level measures within the Analytics+ visual, without having to modify your data source.

> - Type the '#' key to open the suggestions window and select measures.
> - Click the maximize icon to expand the formula editor for entering large, complex formulae.
> - Calculated measures can also be created from the Pivot data window.

### 5. Display

Analytics+ enables you to customize data labels. You can regulate the number of labels displayed with options like First + Last or Min + Max. You can also customize the font size, style, offset, color, and background color.

### 6. Story

Leverage the built-in Analytics, Annotation, and Deviation features to create charts that tell compelling stories.

**Analytics**: Add trend lines, reference bands, or total/average bars to illustrate trends, correlations, or patterns in the data.

**Annotation**: Provide supplementary information about specific data points or add a report summary.

**Deviation**: Customize the deviation between individual data points with options like First to Last/ Min to Max or even create a custom deviation.

### 7. Actions

The actions section provides single-click options like:

* Display KPI metrics
* View shortcut keys and search for features
* Apply themes
* Navigate to legend settings
* Reset all configurations to default settings
* Open display settings

### 8. Exporting reports

Analytics+ has been designed to generate fully formatted, high-resolution PDF extracts.

> The PDF export option is enabled in the service only. Exports are not supported on the desktop.

### 9. Backup and restore

Analytics+ supports extensive customizations for every element. It also allows you to take a backup of the visual configuration and apply the same config to other visuals. You can import/export the visual configuration as a JSON file. The JSON file can be saved to your local system and shared with other users as well.

## Card Toolbar

The card ribbon is divided into 8 sections based on the functionality provided:

### 1. Design

* **Presets:** Analytics+ provides a range of built-in KPI presets that can be applied instantly. You can choose simple or integrated variance presets based on your data. You also have the option to import preset templates.

* **Variance**: You can customize the variance icons, titles and borders with this option. You can also choose to display neutral variances with a different icon and color.

* **Image**: Upload a background image for your metrics dashboard. You can adjust the opacity and scaling of the image.

### 2. KPI

* **KPI containers**: With Analytics+, you can create stunning KPI dashboards with insight charts, images, text and metrics. While designing your dashboard, you can easily group and re-arrange elements by creating containers.

* **Chart border and shadow**: Accentuate your KPI cards by customizing the border and shadow.

### 3. Chart

* **Sparkline**: Switch between sparkline or comparison charts. Area, Line, Column, Waterfall, Combo, Pie, Bullet charts, etc can be used in cards.

* **Elements**: Choose which chart elements to display, such as axes, data labels, and analytics. In reading mode, when you select a data point, the selection will be reflected across all the cards in the dashboard when the Sync highlight option is enabled.

  Access individual settings by clicking the icon that appears when you hover over an element name.

  You can plot reference lines, trend lines, total bars, and a variety of other analytics to enhance your charts.

* **Position:** Change the position of the chart with respect to the KPIs by selecting the position.

### 4. Format

Customize the font style, size, and color of your KPI metrics. Apply a background color to the KPI section and choose to display metrics in bold, italics, or underline. Additionally, you can set the horizontal and vertical alignment of the metrics for better presentation.

### 5. Layout

* **Trellis**: Inforiver offers several built-in layouts for cards: Grid, Compact Grid, Single row, and Single column.

### 6. Data

* **Conditional formatting:** Analytics+ can automatically apply formatting based on specific conditions. You can use the single-click options or create distinct formatting rules to highlight specific aspects of your data.

* **Sorting:** Sort your data based on measures or variances with options like ascending, descending, or Power BI native sort. You can also sort the trellis panels and apply nested sorting.

* **Ranking:** Rank your data by applying TopN rules. You can display the top performing regions or product categories with the least sales with this feature. When hierarchical datasets are involved, you can even apply nested ranking.

* **Aggregation**: With the Aggregation option, you can now apply custom aggregation to your axis categories. Notice how the KPI metrics change as you change the aggregation method.

* **Filter:** After assigning visual measures and dimensions, instead of using Power BI filters, you can apply filters on your data from within the Analytics+ visual.

* **Formula:** You can create visual-level measures within the Analytics+ visual, without having to modify your data source. Click on the formula button to open the **Calculated Measure** side pane.

  > - Type the '#' key to open the suggestions window and select measures.
  > - Click the maximize icon to maximize the formula editor. The maximized view is useful for entering large, complex formulae.
  > - Calculated measures can also be created from the Pivot data window.

### 7. Measures

* **Series**: Click on this button to open the measure series configuration window. You can set the chart type for each measure and control which y-axis the measure is plotted on.

* **Split**: When your cards have multiple non-comparative measures, you can display each measure in a separate card by clicking on the split button.

### 8. Actions

The actions section provides quick access to features like setting themes and navigating to display settings.

* **Export/Import KPI presets**: Certain organizations or lines of business may mandate a uniform template across all metrics dashboards. With Analytics+, you can create custom KPI card templates and reuse them across reports instead of building them from scratch.

## Table Toolbar

The table ribbon is divided into 8 sections based on the functionality provided:

### 1. Style

* You can customize the look and feel of the report with the options in this section. Set the font style, size, color, and background fill. Select a row, column, or cell to enable the bold, italicize, underline, background, and font color options.

* You can hide columns by selecting them and clicking on the hide icon. Enable columns from the series window.

### 2. Alignment

This section provides options to:

* Arrange your data according to the content, based on the canvas, or fit the maximum possible data in the available space.
* Increase or decrease the padding between rows.
* Change the horizontal and vertical alignment of the content within a cell.

### 3. Number

The number formatting section provides options to:

* Set the scaling factor (thousands, millions, billions, etc) at report level or measure/cell level for data with mixed granularities i.e. some of the data may have values in thousands and some values may be in millions.
* Express data such as rates as a percentage.
* Add a prefix/suffix.
* Specify the decimal precision.

### 4. Charts

With Analytics+, you can insert a row-level chart in a single click. All you need to do is, select the measure and choose the type of chart required for your data.

### 5. Category

* **Trellis**: In small multiples mode, you can customize the trellis layout. Click on the dropdown icon to apply a layout. You can add additional customizations by clicking **Customize grid**.

* **Series**: Open the series configuration window to:
  - Set a custom width for your measures
  - Hide or display measures
  - Re-order measures

* **Split**: When you have multiple measures in your report, you can display them in different tables with the split option.

### 6. Data

* **Conditional formatting:** Highlight your data instantly using Inforiver's built-in conditional formatting options. You can also specify custom conditional formatting rules.

* **Sorting**: Sort your data based on measures or variances with options like ascending, descending, or Power BI native sort. Apply nested sorting or custom Excel-like sorting.

* **Ranking**: Rank your data by applying TopN rules. When hierarchical datasets are involved, you can apply nested ranking.

* **Filter:** After assigning visual measures and dimensions, instead of using Power BI filters, you can apply filters on your data from within the Analytics+ visual.

* **Blend**: Analytics+ enables you to combine related measures into a single column using the blend option.

* **Formula:** You can create visual-level measures within the Analytics+ visual, without having to modify your data source. Click on the formula button to open the **Calculated Measure** side pane.

  > - Type the '#' key to open the suggestions window and select measures.
  > - Click the maximize icon to maximize the formula editor. The maximized view is useful for entering large, complex formulae.
  > - Calculated measures can also be created from the Pivot data window.

### 7. Story

* **Annotations**: With its annotation feature, Inforiver Analytics+ helps you capture perspectives, descriptive stories, and priorities in your reports.

* **Templates**: The Analytics+ visual is IBCS compliant, adhering to standardized IBCS design principles. The visual ships with integrated IBCS templates, you can instantly create an IBCS report with in-built variance calculations in a single click. Regular grid templates are also provided.

### 8. Actions

The actions section provides single-click options like:

* Enable synchronized scrolling
* View shortcut keys and search for features
* Apply themes
* Enable or disable KPI
* Reset all configurations to default settings
* Open display settings

**Synchronized scrolling**: Analytics+ facilitates comparative analysis with synchronized horizontal & vertical scrolling. When you scroll through one trellis panel, the other panels scroll automatically.

## Conclusion

Analytics+ is a powerful visual that brings together charts, cards, tables, Gantt charts, and storyboards in a single platform. With its extensive customization options, you can create compelling, interactive dashboards that tell your data story effectively. The visual is designed to be intuitive, with on-object interactions and context-aware features that make it easy to use even for casual users.

Some key benefits of using Analytics+ include:

1. **Unified platform**: Create diverse visualizations without switching between multiple visuals
2. **IBCS certification**: Ensure your reports follow professional business communication standards
3. **Performance optimization**: Handle large datasets with the performance mode
4. **Extensive customization**: Tailor every aspect of your visualization to meet specific requirements
5. **Formula engine**: Create visual-level calculations without modifying your data source
6. **Export capabilities**: Generate high-resolution PDF extracts for sharing and distribution
7. **Template system**: Save and reuse configurations across reports for consistency

By leveraging the capabilities of Analytics+, you can transform your Power BI reports into dynamic, insightful dashboards that drive better business decisions.

For more detailed information on specific features, refer to the official documentation or explore the interactive demos available through the visual.
