# 2.6 CASE STUDY: Merck's Transition from Excel-Based Forecasting

This case study examines how Merck, a global pharmaceutical leader, transformed its financial forecasting processes by transitioning from complex Excel-based solutions to Inforiver Analytics+ within Microsoft Power BI. Their journey illustrates the practical application of the concepts covered in previous sections and provides valuable insights for organizations facing similar challenges.

## Organization Background

Merck & Co., Inc. (known as MSD outside the United States and Canada) is one of the largest pharmaceutical companies in the world, with approximately 74,000 employees and operations in more than 140 countries. The company develops and produces medicines, vaccines, biologic therapies, and animal health products.

Key organizational facts relevant to this case study:

- **Annual Revenue**: Approximately $59 billion (2023)
- **R&D Investment**: Over $13.5 billion annually
- **Product Portfolio**: 80+ prescription products across multiple therapeutic areas
- **Global Presence**: Manufacturing facilities and research centers worldwide
- **Financial Operations**: Complex multi-currency, multi-market financial tracking and forecasting

## Initial Situation and Challenges

Prior to implementing Analytics+, Merck's financial forecasting environment was characterized by:

### Excel-Centric Reporting Ecosystem

- **Complex Workbooks**: Highly sophisticated Excel models with thousands of formulas
- **Manual Integration**: Multiple data sources requiring manual consolidation
- **Version Control Issues**: Proliferation of spreadsheet versions with inconsistent updates
- **Limited Collaboration**: Siloed analysis with sequential rather than parallel workflows
- **Time-Intensive Processes**: Financial analysts spending 60-70% of time on data preparation
- **Governance Concerns**: Limited audit trails and documentation of calculation methodologies
- **Scale Limitations**: Performance degradation with large datasets
- **Visualization Constraints**: Basic Excel charts lacking interactive capabilities

### Business Impact of Existing Approach

These technical limitations translated into several business challenges:

- **Forecast Cycle Time**: Monthly forecasting requiring 12-15 business days to complete
- **Error Susceptibility**: Manual processes introducing data quality issues
- **Analysis Depth**: Limited time for value-added analysis due to data preparation burden
- **Decision Latency**: Delayed insights impacting strategic and operational decisions
- **Regional Inconsistency**: Different approaches across geographical markets
- **Scenario Limitations**: Restricted ability to model multiple business scenarios
- **Collaboration Barriers**: Difficulty in gathering inputs from multiple stakeholders

### Attempted Solutions

Before turning to Analytics+, Merck had attempted several approaches:

- **Excel Automation**: VBA macros and Power Query to streamline processes
- **Native Power BI**: Initial implementation of standard Power BI visuals
- **Custom Development**: Proprietary web-based forecasting tools
- **Alternative BI Tools**: Evaluation of other business intelligence platforms

While each approach offered partial improvements, none delivered the comprehensive solution needed to transform the forecasting process while maintaining the analytical flexibility that business users valued in Excel.

## Decision Process and Selection Criteria

Merck's journey to selecting Analytics+ included a structured evaluation process:

### Key Requirements

The finance transformation team established these critical requirements:

1. **Excel-Like Functionality**: Familiar formulas and calculation capabilities
2. **Enterprise Scalability**: Ability to handle global data volumes
3. **Process Integration**: Seamless fit with existing Power BI investments
4. **Visual Standardization**: Consistent visualization across markets
5. **Collaborative Features**: Multi-user input and concurrent analysis
6. **Security Controls**: Robust governance and access management
7. **Performance**: Speed and responsiveness with complex calculations
8. **Analysis Flexibility**: Support for ad-hoc scenario modeling
9. **Mobile Compatibility**: Access for executives on multiple devices
10. **Implementation Timeline**: Rapid deployment and quick wins

### Evaluation Process

Merck conducted a comprehensive evaluation involving:

- **Proof of Concept**: Four-week trial with actual financial data
- **User Testing**: Hands-on evaluation by financial analysts
- **Technical Assessment**: IT evaluation of security and integration
- **Vendor Comparison**: Side-by-side comparison with alternatives
- **Total Cost Analysis**: Implementation, licensing, and maintenance projections
- **Reference Checks**: Discussions with existing Analytics+ customers

The combination of Excel-like formula capabilities, superior performance with large datasets, and seamless Power BI integration ultimately led to the selection of Inforiver Analytics+.

## Implementation Approach

Merck adopted a phased implementation strategy:

### Phase 1: Global Template Development (3 Months)

- **Core Team Formation**: Cross-functional team of finance, IT, and business representatives
- **Process Mapping**: Documentation of existing forecasting workflows
- **Data Architecture**: Design of standardized data model
- **Template Creation**: Development of global forecasting templates
- **Formula Migration**: Translation of Excel formulas to Analytics+ formulas
- **Initial Validation**: Testing with representative data samples

### Phase 2: Pilot Implementation (2 Months)

- **Market Selection**: Two representative markets (one large, one mid-sized)
- **Controlled Rollout**: Limited user group with hands-on support
- **Parallel Processing**: Running new system alongside existing process
- **Performance Testing**: Validation of system performance
- **User Feedback Collection**: Structured feedback gathering
- **Template Refinement**: Adjustments based on pilot experience

### Phase 3: Global Deployment (6 Months)

- **Regional Sequencing**: Phased rollout across geographic regions
- **Training Program**: Comprehensive training for all user types
- **Support Structure**: Establishment of support mechanisms
- **Legacy Transition**: Gradual retirement of Excel-based processes
- **Governance Implementation**: Rollout of standards and governance framework
- **Enhancement Process**: Structure for ongoing improvements

## Technical Architecture

The implemented solution featured this technical architecture:

### Data Layer

- **Source Systems**: SAP, CRM, and other enterprise systems
- **Data Warehouse**: Azure Synapse Analytics for consolidated data
- **Data Transformation**: Azure Data Factory and Power Query
- **Data Model**: Star schema with standardized dimensions
- **Refresh Schedule**: Daily automated data refreshes
- **Historical Storage**: 36 months of historical data plus forecast periods

### Analytics Layer

- **Platform**: Microsoft Power BI Premium
- **Visualization**: Inforiver Analytics+ within Power BI
- **Semantic Layer**: Power BI dataset with defined relationships
- **Calculation Engine**: Analytics+ formula engine for business calculations
- **Version Control**: Multi-version forecast scenarios
- **Writeback Mechanism**: Input capabilities for forecasting
- **Integration Points**: Finance systems, planning tools, reporting platforms

### User Experience Layer

- **Report Types**: Strategic dashboards, operational reports, input forms
- **Chart Types**: Variance charts, forecasting visualizations, trend analysis
- **Mobile Experience**: Optimized views for executive consumption
- **Export Capabilities**: PowerPoint and Excel integration
- **Notification System**: Alerts for forecast updates and deadlines
- **Collaboration Features**: Commentary and discussion threads

### Security Framework

- **Authentication**: Microsoft Entra ID (formerly Azure AD)
- **Authorization**: Row-level security based on organizational hierarchy
- **Data Protection**: Sensitivity labeling for confidential information
- **Audit Trail**: Comprehensive logging of changes
- **Access Control**: Role-based permissions for different user types
- **Compliance Features**: Regulatory reporting requirements coverage

## Key Implementation Challenges

The transformation journey encountered several significant challenges:

### Technical Challenges

- **Formula Complexity**: Migrating sophisticated Excel formulas to Analytics+
- **Performance Tuning**: Optimizing large datasets for responsive analysis
- **Integration Points**: Connecting with legacy financial systems
- **Custom Calculations**: Implementing market-specific calculation requirements
- **Data Refresh Cycles**: Balancing freshness with performance

### Organizational Challenges

- **Excel Attachment**: Overcoming user preference for familiar Excel environment
- **Process Redesign**: Rethinking processes to leverage new capabilities
- **Skill Gaps**: Addressing varying levels of data literacy
- **Change Management**: Building buy-in across global teams
- **Governance Evolution**: Updating policies for the new environment

The implementation team addressed these challenges through a combination of technical solutions, iterative development, and comprehensive change management.

## User Adoption Strategy

Merck's adoption strategy focused on:

### Training Program

- **Role-Based Training**: Tailored to different user personas
- **Blended Learning**: Combination of live sessions and on-demand content
- **Hands-On Workshops**: Practical exercises with real business scenarios
- **Quick Reference Materials**: Guides and job aids for common tasks
- **Advanced Training**: Deep dives for power users and administrators
- **Continuous Education**: Regular feature updates and refreshers

### Change Management

- **Executive Sponsorship**: Visible support from finance leadership
- **Champions Network**: Super-users in each region providing peer support
- **Success Metrics**: Clear definition and tracking of adoption metrics
- **Communication Plan**: Regular updates on rollout progress
- **Feedback Mechanisms**: Structured channels for user input
- **Recognition Program**: Acknowledging early adopters and innovators

## Results and Benefits

After 18 months of full implementation, Merck achieved significant improvements:

### Quantitative Benefits

- **Forecast Cycle Reduction**: From 12-15 days to 4-5 days per month
- **Analysis Time Increase**: Analysts now spending 70% on analysis vs. 30% on data preparation
- **Error Reduction**: 62% decrease in reported data inconsistencies
- **Scenario Expansion**: Ability to evaluate 5-7 scenarios vs. previous 2-3
- **Version Control**: 100% elimination of version confusion issues
- **Data Volume Handling**: Processing 3x the data points without performance degradation
- **Time Savings**: Approximately 2,400 analyst hours saved per month globally

### Qualitative Benefits

- **Decision Quality**: More informed business decisions with enhanced analytics
- **Standardization**: Consistent global approach to forecasting
- **Transparency**: Improved visibility into forecast assumptions and calculations
- **Collaboration**: Enhanced cross-functional and cross-regional cooperation
- **User Satisfaction**: 85% of users reporting preference for new system over Excel
- **Governance**: Stronger audit trails and calculation documentation
- **Strategic Focus**: Greater analyst focus on insights vs. data manipulation

### Key Analytics+ Capabilities Leveraged

Several specific Analytics+ capabilities proved particularly valuable:

- **Visual Formula Engine**: Allowing Excel-like calculations without DAX complexity
- **Data Point Capacity**: Handling 30K+ data points for comprehensive analysis
- **IBCS Visualizations**: Standardized financial variance charts
- **Small Multiples**: Comparative analysis across products and regions
- **Planning Integration**: Seamless forecasting and reporting in one environment
- **Export Features**: Professional outputs for executive presentations
- **Mobile Optimization**: Executive access to forecasts while traveling

## Lessons Learned and Best Practices

Merck's experience yielded several valuable insights:

### Success Factors

- **Process First, Technology Second**: Focusing on process optimization before tool implementation
- **Excel Bridge Strategy**: Maintaining Excel export capabilities during transition
- **Phased Implementation**: Incremental approach with defined success criteria
- **User Involvement**: Early and continuous user engagement in design
- **Performance Prioritization**: Emphasis on system responsiveness for user acceptance
- **Template Standardization**: Global templates with controlled local customization
- **Technical Documentation**: Comprehensive documentation of formulas and calculations
- **Executive Dashboards**: High-visibility wins with leadership reporting

### Implementation Recommendations

Based on their experience, Merck recommends:

1. **Start Small**: Begin with a well-defined use case for quick wins
2. **Parallel Running**: Maintain existing processes until new system is proven
3. **Leverage Templates**: Use pre-built Analytics+ templates as starting points
4. **Invest in Training**: Comprehensive training tailored to different user roles
5. **Monitor Performance**: Regular performance reviews as data volumes grow
6. **Establish Governance**: Clear standards for visualization and calculations
7. **Capture Feedback**: Structured process for user feedback and enhancements
8. **Measure Success**: Define and track clear success metrics
9. **Plan for Evolution**: Anticipate expanding capabilities over time

## Future Directions

Building on their success, Merck is expanding their Analytics+ implementation:

- **AI Integration**: Incorporating predictive analytics into forecasting
- **Expanded Use Cases**: Application to additional finance processes
- **Process Automation**: Further streamlining of the forecast workflow
- **Cross-Functional Expansion**: Extending to supply chain and commercial planning
- **External Sharing**: Selective forecast sharing with strategic partners
- **Advanced Analytics**: Deeper statistical analysis of forecast accuracy
- **Fabric Integration**: Leveraging Microsoft Fabric as it matures

## Conclusion

Merck's transition from Excel-based forecasting to Inforiver Analytics+ demonstrates how organizations can successfully modernize complex financial processes while preserving the analytical flexibility that business users require. By combining a thoughtful implementation approach with powerful technology, Merck achieved significant improvements in efficiency, accuracy, and analytical depth.

This case study illustrates the practical application of concepts discussed throughout this chapter, from installation and integration to interface design and Power BI workflow alignment. It also highlights the importance of considering both technical and organizational factors when implementing advanced visualization and analytics solutions.

In the next chapter, we'll explore the advanced visualization capabilities of Analytics+ in greater detail, examining the extensive chart library and standards-based approach to business communication. 