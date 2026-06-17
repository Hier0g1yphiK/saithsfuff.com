# Requirements Document

## Introduction

A dedicated Media Kit / Portfolio page for the saithsfuff streamer website, aimed at brands and potential collaborators. The page presents platform statistics, audience demographics, past brand collaborations, content examples, and contact information — all using placeholder content that can be customized later. The page matches the existing whimsical pastel aesthetic and reuses the site's NavBar, theming, and design system.

## Glossary

- **Media_Kit_Page**: The new portfolio page accessible via the `/portfolio` route, presenting brand collaboration information
- **NavBar**: The existing sticky navigation component shared across all pages
- **Stats_Section**: The area of the Media_Kit_Page displaying follower counts and engagement metrics across platforms
- **Demographics_Section**: The area displaying audience breakdown by age, gender, geography, and interests
- **Brands_Section**: The area showcasing logos and names of brands previously collaborated with
- **Content_Examples_Section**: The area displaying embedded or linked video/content examples created for brand partnerships

- **Contact_Section**: The area providing contact information and a call-to-action for brand inquiries
- **Hero_Section**: The introductory area at the top of the Media_Kit_Page with a headline, tagline, and professional photo

## Requirements

### Requirement 1: Page Route and Navigation

**User Story:** As a brand representative, I want to find the media kit page easily, so that I can evaluate saithsfuff for a potential collaboration.

#### Acceptance Criteria

1. THE Media_Kit_Page SHALL be accessible at the `/portfolio` URL path using Next.js App Router
2. THE NavBar SHALL be simplified to contain only full-page route links: "Home" (`/`) and "Portfolio" (`/portfolio`), removing all anchor-based section links (About, Instagram, TikTok)
3. THE Media_Kit_Page SHALL render the existing NavBar component at the top of the page
4. THE Media_Kit_Page SHALL render a footer consistent with the homepage footer

### Requirement 2: Hero Introduction

**User Story:** As a brand representative, I want to see a professional introduction, so that I quickly understand who saithsfuff is and what she offers.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a headline identifying the page as a media kit or portfolio
2. THE Hero_Section SHALL display a short professional tagline summarizing the creator's value proposition
3. THE Hero_Section SHALL display a placeholder profile image
4. THE Hero_Section SHALL use the existing whimsical pastel gradient background and decorative elements

### Requirement 3: Platform Statistics

**User Story:** As a brand representative, I want to see follower counts and engagement metrics, so that I can assess the creator's reach and influence.

#### Acceptance Criteria

1. THE Stats_Section SHALL display placeholder follower counts for at least three platforms (Twitch, Instagram, TikTok)
2. THE Stats_Section SHALL display placeholder engagement rate metrics for each platform
3. THE Stats_Section SHALL display placeholder average views or impressions per content piece
4. WHEN the page is viewed on a mobile device, THE Stats_Section SHALL stack platform stats vertically
5. THE Stats_Section SHALL use glass-card styling consistent with the existing design system

### Requirement 4: Audience Demographics

**User Story:** As a brand representative, I want to see audience demographic data, so that I can determine if the creator's audience matches my target market.

#### Acceptance Criteria

1. THE Demographics_Section SHALL display a placeholder age range breakdown
2. THE Demographics_Section SHALL display a placeholder gender distribution
3. THE Demographics_Section SHALL display placeholder top geographic locations
4. THE Demographics_Section SHALL display placeholder audience interest categories
5. THE Demographics_Section SHALL present demographic data using visual indicators (progress bars, percentage labels, or similar)

### Requirement 5: Past Brand Collaborations

**User Story:** As a brand representative, I want to see which brands the creator has worked with, so that I can gauge professionalism and relevance.

#### Acceptance Criteria

1. THE Brands_Section SHALL display at least four placeholder brand logos or brand name cards
2. THE Brands_Section SHALL arrange brand items in a responsive grid layout
3. THE Brands_Section SHALL use glass-card or pastel card styling for each brand item

### Requirement 6: Content Examples

**User Story:** As a brand representative, I want to see examples of branded content, so that I can evaluate the creator's production quality and style.

#### Acceptance Criteria

1. THE Content_Examples_Section SHALL display at least three placeholder content cards
2. WHEN a content card is displayed, THE Content_Examples_Section SHALL show a placeholder thumbnail, title, platform label, and view count
3. THE Content_Examples_Section SHALL arrange content cards in a responsive grid that adapts from one column on mobile to multiple columns on desktop
4. THE Content_Examples_Section SHALL use the existing whimsical-card or glass-card styling

### Requirement 7: Contact Call-to-Action

**User Story:** As a brand representative, I want a clear way to get in touch, so that I can initiate a collaboration discussion.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a placeholder email address for business inquiries
2. THE Contact_Section SHALL include a prominent call-to-action button or link
3. THE Contact_Section SHALL display placeholder links to social media profiles
4. THE Contact_Section SHALL be visually distinct as the final section of the page

### Requirement 8: Visual Consistency and Theming

**User Story:** As a site visitor, I want the media kit page to feel cohesive with the rest of the site, so that the brand identity is consistent.

#### Acceptance Criteria

1. THE Media_Kit_Page SHALL use the Fredoka font for headings and Nunito font for body text
2. THE Media_Kit_Page SHALL use the pastel color palette (pink, lavender, mint) defined in the Tailwind configuration
3. THE Media_Kit_Page SHALL support dark mode using the existing "class" strategy
4. WHILE dark mode is active, THE Media_Kit_Page SHALL render all sections with appropriate dark mode styling
5. THE Media_Kit_Page SHALL use decorative elements (sparkles, stars) consistent with the homepage

### Requirement 9: Responsive Design

**User Story:** As a brand representative viewing on any device, I want the page to be fully usable, so that I can review the media kit on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Media_Kit_Page SHALL be fully responsive from 320px viewport width to desktop widths
2. WHEN viewed on mobile, THE Media_Kit_Page SHALL stack all sections vertically with appropriate spacing
3. WHEN viewed on desktop, THE Media_Kit_Page SHALL use multi-column grid layouts where appropriate (stats, brands, content examples)

### Requirement 10: Placeholder Content

**User Story:** As a developer, I want all content to use realistic placeholder data, so that the page layout can be validated before real content is available.

#### Acceptance Criteria

1. THE Media_Kit_Page SHALL use placeholder text, numbers, and images throughout all sections
2. THE Media_Kit_Page SHALL use placeholder values that are realistic in format and scale for a mid-tier content creator
3. THE Media_Kit_Page SHALL clearly indicate through code comments or data structure that content is placeholder and intended for later customization
