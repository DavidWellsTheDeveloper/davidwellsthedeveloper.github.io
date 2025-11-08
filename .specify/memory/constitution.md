<!--
Sync Impact Report:
Version change: initial → 1.0.0
Added principles:
- I. Authentic Representation - No invented skills or false claims
- II. Clean Design - Minimalist, sleek aesthetic with clear hierarchy
- III. User-Centric Experience - Intuitive navigation and fast loading
- IV. Content-First - Well-organized, readable content structure
- V. Deployment Ready - Automated builds and deployment via Makefile
Added sections:
- Content Standards - Quality and accuracy requirements
- Technical Standards - Performance and compatibility requirements
Templates requiring updates:
- .specify/templates/plan-template.md ✅ compatible
- .specify/templates/spec-template.md ✅ compatible
- .specify/templates/tasks-template.md ✅ compatible
Follow-up TODOs: None
-->

# David Wells Digital Resume Constitution

## Core Principles

### I. Authentic Representation
All skills, experience, and achievements MUST be factually accurate. No skills may be added to the resume without explicit confirmation from Dave. When suggesting new skills or technologies, always ask for verification before including them. This principle is NON-NEGOTIABLE and ensures professional integrity.

### II. Clean Design 
The website MUST maintain a minimalist, sleek aesthetic with clear visual hierarchy. Design choices should emphasize readability and elegance over complexity. Use whitespace effectively, maintain consistent typography, and ensure the design enhances rather than distracts from the content.

### III. User-Centric Experience
The site MUST provide intuitive navigation and fast loading times. Users should be able to quickly find relevant information through logical organization and clear section divisions. Mobile responsiveness is mandatory, and the interface should work seamlessly across all devices.

### IV. Content-First Structure
Content MUST be well-organized with intelligent section divisions including: work history with attractive timeline component, about me page with photo and personal information, technical skills organized by category, and clear presentation of career passions. When reorganizing existing resume content, preserve accuracy while improving presentation.

### V. Deployment Ready
The project MUST include automated deployment scripts triggered by a Makefile. Build processes should be reliable, repeatable, and well-documented. The deployment pipeline should support easy updates and maintenance of the live site.

## Content Standards

Content accuracy is paramount. All work history, skills, and personal information must be verified before publication. When processing Dave's Google document resume, reorganize for better presentation but maintain factual accuracy. Skills sections should be categorized intelligently (e.g., programming languages, frameworks, tools, soft skills) but never expanded beyond Dave's actual capabilities.

## Technical Standards

The static website must load quickly (target: <3 seconds initial load), work across modern browsers, and be fully responsive. The codebase should be maintainable and well-documented. Performance optimization is required, including image compression, CSS/JS minification, and efficient asset loading.

## Governance

This constitution supersedes all development decisions. Before adding any technical skills or professional claims, explicit approval must be obtained from Dave. Design decisions should align with the minimalist aesthetic principle. All features must enhance rather than complicate the user experience.

Version control and deployment practices must follow the established Makefile-driven approach. Changes to content or design should be reviewable and reversible.

**Version**: 1.0.0 | **Ratified**: 2025-10-05 | **Last Amended**: 2025-10-05