# Requirements Document

## Introduction

A Linktree-style links page for the saithsfuff.com website, accessible at the `/links` route. The page provides visitors with a centralized directory of all of Faith's social media profiles, partner/sponsor links with promotional codes, and brief descriptions for each link. The page uses the existing whimsical pastel design system with dark mode support, decorative star elements, and the shared NavBar component.

## Glossary

- **Links_Page**: The new page accessible via the `/links` route, displaying a categorized list of clickable link cards
- **NavBar**: The existing sticky navigation component shared across all pages
- **Link_Card**: A clickable card element representing a single external link with a label and optional description
- **Social_Media_Section**: The area of the Links_Page displaying social media profile links
- **Partners_Section**: The area of the Links_Page displaying partner and sponsor links with promotional descriptions
- **Hero_Section**: The introductory area at the top of the Links_Page with a heading and brief tagline

## Requirements

### Requirement 1: Page Route and Navigation

**User Story:** As a visitor, I want to access all of Faith's links from a dedicated page, so that I can easily find and follow her across platforms.

#### Acceptance Criteria

1. THE Links_Page SHALL be accessible at the `/links` URL path using Next.js App Router
2. THE Links_Page SHALL render the existing NavBar component at the top of the page
3. THE NavBar SHALL include a "Links" navigation item pointing to `/links`, visible in both the desktop navigation and the mobile menu
4. THE Links_Page SHALL render a footer with the same text content and styling classes as the homepage footer
5. THE Links_Page SHALL include page metadata with a title following the format "[Page Name] | saithsfuff" and a description of no more than 160 characters summarizing the page purpose

### Requirement 2: Hero Introduction

**User Story:** As a visitor, I want to see a brief introduction at the top of the links page, so that I understand what the page offers.

#### Acceptance Criteria

1. THE Hero_Section SHALL display an h1 heading that includes the term "links" to identify the page as a links directory
2. THE Hero_Section SHALL display a tagline of no more than 150 characters positioned below the heading, describing the purpose of the page as a collection of the creator's important links
3. THE Hero_Section SHALL use the existing whimsical pastel gradient background consistent with other pages
4. THE Hero_Section SHALL render decorative star elements using the existing DecorativeStars component

### Requirement 3: Social Media Links

**User Story:** As a visitor, I want to see all of Faith's social media profiles in one place, so that I can follow her on my preferred platform.

#### Acceptance Criteria

1. THE Social_Media_Section SHALL display a section heading containing the text "Social Media" or equivalent identifiable text
2. THE Social_Media_Section SHALL display Link_Card elements for each of the following platforms in this order: Instagram, TikTok, Twitch, Twitter, BlueSky, YouTube, Threads, Clips TikTok, and Discord
3. WHEN a Link_Card is for Instagram, THE Link_Card SHALL link to https://instagram.com/saithsfuff
4. WHEN a Link_Card is for TikTok, THE Link_Card SHALL link to https://www.tiktok.com/@saithsfuff
5. WHEN a Link_Card is for Twitch, THE Link_Card SHALL link to https://twitch.tv/saithsfuff
6. WHEN a Link_Card is for Twitter, THE Link_Card SHALL link to https://twitter.com/saithsfuff
7. WHEN a Link_Card is for BlueSky, THE Link_Card SHALL link to https://bsky.app/profile/saithsfuff.bsky.social
8. WHEN a Link_Card is for YouTube, THE Link_Card SHALL link to https://www.youtube.com/saithsfuff
9. WHEN a Link_Card is for Threads, THE Link_Card SHALL link to https://www.threads.net/@saithsfuff
10. WHEN a Link_Card is for Clips TikTok, THE Link_Card SHALL link to https://www.tiktok.com/@ttv.saithsfuff
11. WHEN a Link_Card is for Discord, THE Link_Card SHALL link to https://discord.gg/fuff and display the description "Invite your friends!"
12. WHEN a visitor clicks a Link_Card, THE Link_Card SHALL open the URL in a new browser tab

### Requirement 4: Partner and Sponsor Links

**User Story:** As a visitor, I want to see Faith's partner and sponsor links with discount codes, so that I can take advantage of promotions while supporting her.

#### Acceptance Criteria

1. THE Partners_Section SHALL display a section heading with the text "Partners & Sponsors"
2. THE Partners_Section SHALL display a Link_Card for Throne with the description "Proud to be a Throne Partner!" linking to https://throne.com/saithsfuff/wishlist
3. THE Partners_Section SHALL display a Link_Card for Kinetic Hosting with the description "Need a server? Use code 'SAITHSFUFF' for 15% off every month at Kinetic Hosting!" linking to https://kinetichosting.net/
4. THE Partners_Section SHALL display a Link_Card for Pin-Ace with the description "Pride Pins! Use code 'SAITHSFUFF' for 15% off your entire order!" linking to https://pin-ace.com/SAITHSFUFF
5. THE Partners_Section SHALL display a Link_Card for Oodie with the description "Use code 'SAITHSFUFF15' for 15% off your oodie!" linking to https://www.theoodie.co.uk/FAITHSAITHSFUFF
6. THE Partners_Section SHALL display a Link_Card for Divoom with the description "Use code 'SAITHSFUFF' for 10% off your entire order!" linking to https://divoom.com/saithsfuff
7. THE Partners_Section SHALL display a Link_Card for Charlotte Tilbury with the description "Use code 'saithsfuffSMJ95' for 15% off your order!" linking to https://friends.charlottetilbury.com/s/saithsfuff
8. THE Partners_Section SHALL display the Link_Cards in the order: Throne, Kinetic Hosting, Pin-Ace, Oodie, Divoom, Charlotte Tilbury
9. WHEN a visitor clicks a Partner Link_Card, THE Link_Card SHALL open the URL in a new browser tab
10. THE Partners_Section SHALL display each Link_Card with the partner name visible as a heading and the description visible as supporting text

### Requirement 5: Link Card Design

**User Story:** As a visitor, I want each link to be clearly displayed as a clickable card, so that I can easily identify and click the link I want.

#### Acceptance Criteria

1. THE Link_Card SHALL display the platform or partner name as the primary label, truncated with an ellipsis if exceeding 50 characters
2. IF a Link_Card has a description, THEN THE Link_Card SHALL display the description text below the primary label, truncated with an ellipsis if exceeding 100 characters
3. THE Link_Card SHALL use glass-card or whimsical-card styling consistent with the existing design system
4. WHILE the user hovers over a Link_Card, THE Link_Card SHALL display an observable visual change (such as an elevation, opacity shift, scale transform, or background color change) distinguishing it from its default state
5. THE Link_Card SHALL be rendered as a full-width element (100% width of its section container)
6. THE Link_Card SHALL be implemented as an anchor element (`<a>`) with descriptive accessible text that identifies the link destination
7. WHEN a visitor activates a Link_Card, THE Link_Card SHALL open the target URL in a new browser tab for external links
8. WHILE a Link_Card receives keyboard focus, THE Link_Card SHALL display a visible focus indicator that meets WCAG 2.1 focus-visible requirements

### Requirement 6: Visual Consistency and Theming

**User Story:** As a visitor, I want the links page to feel cohesive with the rest of the site, so that the brand identity is consistent.

#### Acceptance Criteria

1. THE Links_Page SHALL use the Fredoka font (font-display) for headings and Nunito font (font-body) for body text
2. THE Links_Page SHALL use the pastel color palette (pink, lavender, mint) defined in the Tailwind configuration for all decorative and accent elements
3. THE Links_Page SHALL apply the site-wide background gradient (bg-gradient-whimsical) in light mode and the solid dark background (#1a0e2e) in dark mode
4. WHILE dark mode is active, THE Links_Page SHALL render headings in lavender-100 text color, body text in gray-100, and card elements using the dark variant styles defined in globals.css (dark whimsical-card and dark glass-card)
5. THE Links_Page SHALL display the DecorativeStars component as a fixed full-viewport overlay behind page content
6. THE Links_Page SHALL render a sparkle-divider element (using the sparkle-divider CSS class) between each content section, matching the placement pattern used on the portfolio page

### Requirement 7: Responsive Design

**User Story:** As a visitor on any device, I want the links page to be usable and visually appealing, so that I can access links on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Links_Page SHALL be fully responsive from 320px to 1920px viewport width without horizontal scrolling at any supported width
2. WHEN the viewport width is below 640px, THE Links_Page SHALL stack all Link_Card elements vertically with a gap of 12px between each card
3. THE Links_Page SHALL center content horizontally with a maximum width of 896px and horizontal padding of at least 16px on each side
4. WHILE the viewport width is below 640px, THE Link_Card elements SHALL render text at a minimum size of 16px and maintain a minimum tap-target height of 44px

### Requirement 8: Accessibility

**User Story:** As a visitor using assistive technology, I want the links page to be fully accessible, so that I can navigate and activate links using a screen reader or keyboard.

#### Acceptance Criteria

1. THE Links_Page SHALL use semantic HTML landmarks (main, nav, section) for page structure
2. THE Link_Card elements SHALL use anchor elements whose accessible name includes the destination name or purpose of the link, matching the visible link text
3. WHEN a Link_Card opens in a new tab, THE Link_Card SHALL include both a visual icon indicator and visually-hidden text (e.g., "(opens in new tab)") conveying that the link opens externally
4. THE Links_Page SHALL be navigable using keyboard-only interaction such that all interactive elements are reachable via the Tab key, activatable via Enter, and no element traps keyboard focus
5. THE Links_Page SHALL maintain a heading hierarchy starting with a single h1 for the page title followed by h2 elements for each section, with no skipped heading levels
6. WHEN an interactive element receives keyboard focus, THE Links_Page SHALL display a visible focus indicator with at least 3:1 contrast ratio against adjacent colors
7. THE Links_Page SHALL present interactive elements in a tab order that follows the visual top-to-bottom reading order of the page
