# 2.2 Installation and Licensing Options

Deploying Inforiver Analytics+ in your organization requires understanding the available installation approaches and licensing options. This section provides a comprehensive guide to getting Analytics+ up and running in various Microsoft Power BI environments.

## Installation Methods

Inforiver Analytics+ offers several installation methods to accommodate different organizational needs and technical environments:

### AppSource Installation

The simplest and most common installation method is through Microsoft AppSource:

1. **Navigate to AppSource**: Visit the Microsoft AppSource marketplace (appsource.microsoft.com)
2. **Search for Inforiver**: Enter "Inforiver" in the search bar
3. **Select Analytics+**: Choose the Inforiver Analytics+ visual from the search results
   ![Analytics](https://github.com/user-attachments/assets/9bd53f21-8288-4f35-9267-a7bce9744f70)
5. **Get It Now**: Click the "Get it now" button to initiate the installation
6. **Authentication**: Sign in with your Microsoft account if prompted
7. **Confirm Installation**: Approve the installation in your Power BI organization
8. **Verification**: Confirm the visual appears in your Power BI Desktop visualization pane
![Verification](https://github.com/user-attachments/assets/7b8f862d-6a14-415b-a473-3e173ba9a3eb)

This method ensures you receive the official, certified version of Inforiver Analytics+ and simplifies the update process through AppSource's update mechanisms.

### Direct Import in Power BI Desktop

For organizations with specific deployment requirements, direct import in Power BI Desktop is available:

1. **Download the Visual**: Obtain the .pbiviz file from the Inforiver website or portal
2. **Open Power BI Desktop**: Launch your local Power BI Desktop application
3. **Import Custom Visual**: Click the "..." in the Visualizations pane
   
   ![Custom Visual](https://github.com/user-attachments/assets/481abd66-28c9-4757-a1d1-0639d1a6034a)
5. **Select "Import from file"**: Browse to the downloaded .pbiviz file
6. **Confirm Import**: Approve any security prompts that appear
7. **Verify Installation**: Check that the Inforiver icon appears in your visualization pane
   
   ![Installation](https://github.com/user-attachments/assets/15fc179e-1180-4b85-8079-dc98c986e8a2)

This method is useful for controlled environments where AppSource access may be restricted or for testing specific versions before organizational deployment.

### Organizational Deployment

For enterprise-wide deployment, IT administrators can distribute Inforiver Analytics+ across the organization:

1. **Admin Portal Access**: Sign in to the Power BI Admin Portal
2. **Navigate to Tenant Settings**: Find the "Tenant settings" section
3. **Locate Visual Settings**: Go to "Developer settings" or "Organizational visuals"
4. **Add Organizational Visual**: Upload the Inforiver .pbiviz file
5. **Configure Access**: Set the appropriate access permissions
6. **Deployment**: The visual becomes available to all designated users

This approach provides centralized control over which versions of Analytics+ are available within the organization and ensures consistency across users.

### Power BI Report Server Deployment

For organizations using Power BI Report Server (on-premises), a specific deployment process is required:

1. **Obtain the Visual**: Download the .pbiviz file from Inforiver
2. **Local Storage**: Place the file in the designated Report Server visuals directory
3. **Configuration Update**: Modify the Report Server configuration to allow the visual
4. **Restart Services**: Restart the Report Server services as needed
5. **Verification**: Confirm the visual is available in Report Server reports

This method accommodates organizations with regulatory requirements that necessitate on-premises BI solutions.

## Licensing Options

Inforiver offers flexible licensing options to accommodate different organizational needs and usage scenarios:

### Licensing Tiers

#### Free Tier
- Basic visualization capabilities
- Limited chart types and features
- No commercial usage restrictions
- Data point limitations
- Community support only
- Suitable for evaluation and personal use

#### Standard Tier
- Enhanced visualization library
- Standard chart types and tables
- Commercial usage permitted
- Moderate data point capacity
- Email support
- Ideal for departmental deployment

#### Professional Tier
- Complete visualization library (100+ charts)
- Advanced analytical capabilities
- Enhanced performance with larger datasets
- Priority support
- Appropriate for enterprise analytics teams

#### Enterprise Tier
- Full feature access including planning capabilities
- Maximum data point capacity (30K+)
- Enterprise-grade support with SLAs
- Dedicated account management
- Training and implementation assistance
- Designed for organization-wide deployment

### Licensing Models

Inforiver Analytics+ offers several licensing models to accommodate different organizational preferences:

#### User-Based Licensing
- Per-user subscription model
- Assigned to specific named users
- Transferable between users with administration
- Clear cost structure based on team size
- Usage tracking and optimization possibilities
- Simplified license management for smaller teams

#### Capacity-Based Licensing
- Based on Power BI Premium capacity
- Unlimited users within the capacity
- Cost tied to infrastructure rather than user count
- Simplified administration for large deployments
- Ideal for enterprise-wide implementations
- Predictable cost structure regardless of user growth

#### Mixed Licensing
- Combination of user and capacity approaches
- Core team on user licenses
- Broader audience via capacity licensing
- Optimized cost structure for varied user intensity
- Flexible scaling as organizational needs evolve
- Customized licensing programs for complex requirements

### License Administration

Managing Inforiver Analytics+ licenses involves several key processes:

#### License Acquisition
1. **Purchase**: Via Inforiver website, direct sales, or partner channel
2. **License Key**: Receipt of license key or activation code
3. **Account Creation**: Establishment of Inforiver account for management
4. **Documentation**: Storage of license agreements and keys
5. **Renewal Configuration**: Setting up automatic or manual renewal processes

#### License Activation
1. **Admin Portal**: Access the Inforiver administration portal
2. **License Section**: Navigate to the license management area
3. **Key Entry**: Input the license key or activation code
4. **Validation**: Confirm license validation success
5. **Feature Enablement**: Verify activated features are accessible

#### User Assignment
1. **User Identification**: Determine which users require licenses
2. **Admin Portal**: Access user management interface
3. **Assignment**: Allocate licenses to specific users
4. **Notification**: Inform users of their license activation
5. **Verification**: Confirm users can access premium features

#### License Monitoring
1. **Usage Tracking**: Monitor actual usage against licensed capacity
2. **Compliance Checking**: Ensure adherence to license terms
3. **Expiration Management**: Track and plan for license renewals
4. **Optimization**: Identify opportunities to optimize license allocation
5. **Reporting**: Generate license usage reports for stakeholders

## Implementation Considerations

When implementing Inforiver Analytics+, several factors should be considered:

### Technical Requirements

For optimal performance, ensure your environment meets these requirements:

- **Power BI Desktop**: Latest version recommended
- **Browser**: Chrome, Edge, or Firefox (latest versions)
- **Network**: Reliable internet connection for cloud deployments
- **Memory**: Sufficient RAM for large dataset handling
- **Screen Resolution**: Minimum 1366x768 for optimal visualization display

## Deployment Best Practices

To ensure a successful deployment of Inforiver Analytics+, follow these best practices:

### Phased Rollout Approach

1. **Pilot Phase**: Deploy to a small group of power users
2. **Feedback Collection**: Gather input from pilot users
3. **Refinement**: Adjust configurations based on feedback
4. **Expanded Pilot**: Increase to a department-level deployment
5. **Organization Rollout**: Staged expansion to the broader organization

### User Enablement

1. **Role-Based Training**: Tailor training to different user roles
2. **Resource Library**: Create an internal knowledge base
3. **Champions Network**: Identify and empower internal experts
4. **Office Hours**: Schedule regular support sessions
5. **Feedback Mechanism**: Establish channels for ongoing user input

### Technical Configuration

1. **Performance Testing**: Validate performance with representative datasets
2. **Integration Verification**: Confirm seamless operation with existing Power BI reports
3. **Template Creation**: Develop standard templates for common scenarios
4. **Backup Procedures**: Ensure visualization configurations are backed up
5. **Monitoring Setup**: Implement performance and usage monitoring

## Upgrade and Maintenance

Maintaining your Inforiver Analytics+ implementation involves several ongoing processes:

### Version Management

1. **Release Monitoring**: Stay informed about new versions
2. **Testing Protocol**: Test new versions in a non-production environment
3. **Feature Evaluation**: Assess new capabilities for organizational relevance
4. **Controlled Rollout**: Implement version updates systematically
5. **Documentation**: Maintain records of version history

### License Maintenance

1. **Renewal Tracking**: Monitor license expiration dates
2. **Usage Evaluation**: Assess if current licensing meets evolving needs
3. **Cost Optimization**: Regularly review license allocation efficiency
4. **Vendor Communication**: Maintain relationship with Inforiver support
5. **Budget Planning**: Incorporate license costs in financial planning

## Troubleshooting Common Installation Issues

When deploying Inforiver Analytics+, you may encounter these common issues:

### Visual Not Appearing in Power BI Desktop
- **Cause**: Missing prerequisites or incomplete installation
- **Solution**: Verify Power BI Desktop version, check internet connectivity, and try reinstalling the visual

### License Activation Failure
- **Cause**: Incorrect license key or network connectivity issues
- **Solution**: Verify license key accuracy, check network connectivity, and contact Inforiver support if problems persist

### Version Compatibility Issues
- **Cause**: Mismatch between Power BI and Inforiver versions
- **Solution**: Update to compatible versions of both products and check release notes for known compatibility issues

### Performance Degradation
- **Cause**: Insufficient resources or large datasets
- **Solution**: Optimize dataset size, ensure adequate system resources, and follow performance best practices

### Features Not Available
- **Cause**: Licensing tier limitations or feature not enabled
- **Solution**: Verify your license includes the required features and check feature activation in the admin portal

By understanding the installation options, licensing models, and implementation best practices for Inforiver Analytics+, you can ensure a smooth deployment that maximizes the value of your investment in this powerful visualization and analytics solution.

In the next section, we'll explore the first steps with Analytics+ and guide you through creating your initial visualizations and reports. 
