# Requirements Document

## Introduction

This feature adds a Twitch stream viewer/embed section to the saithsfuff.com homepage. The section displays the live Twitch stream (or an offline state) for the "saithsfuff" channel, positioned above the Instagram feed section. The component follows the existing whimsical, pastel design system and section patterns used throughout the site.

## Glossary

- **Twitch_Embed**: The Twitch interactive embedded player loaded via the Twitch Embed API, which displays a live stream or offline state for a given channel
- **Twitch_Section**: The homepage section component that contains the Twitch_Embed, section heading, and link to the Twitch channel
- **Home_Page**: The main landing page of saithsfuff.com that displays the About, Instagram, and TikTok sections
- **Viewer**: A person visiting the saithsfuff.com Home_Page in a web browser

## Requirements

### Requirement 1: Display Twitch Section on Home Page

**User Story:** As a viewer, I want to see an embedded Twitch stream on the homepage, so that I can watch saithsfuff's live content without leaving the site.

#### Acceptance Criteria

1. THE Home_Page SHALL render the Twitch_Section between the About_Section and the Instagram_Feed
2. THE Twitch_Section SHALL display a heading with the text "Watch on Twitch" using the same font family, size scale (text-2xl at mobile, text-3xl at sm, text-4xl at lg), weight, and center alignment as the Instagram_Feed and TikTok_Feed section headings
3. THE Twitch_Section SHALL include a link to the saithsfuff Twitch channel page (https://www.twitch.tv/saithsfuff) that opens in a new browser tab with rel="noopener noreferrer" for security
4. THE Twitch_Section SHALL display an embedded Twitch player for the "saithsfuff" channel with a 16:9 aspect ratio container that scales to the width of its parent section
5. IF the embedded Twitch player fails to load, THEN THE Twitch_Section SHALL display a fallback message indicating the stream content is temporarily unavailable

### Requirement 2: Embed Twitch Player

**User Story:** As a viewer, I want an interactive Twitch player embedded on the page, so that I can watch the stream and interact with chat directly.

#### Acceptance Criteria

1. THE Twitch_Section SHALL embed the Twitch player for the "saithsfuff" channel using the Twitch Embed API
2. THE Twitch_Embed SHALL use the site's current domain as the parent parameter to satisfy Twitch's embed security requirements
3. THE Twitch_Embed SHALL maintain a 16:9 aspect ratio and fill the width of its container
4. THE Twitch_Embed SHALL load lazily so that it does not block initial page rendering
5. THE Twitch_Embed SHALL include Twitch chat alongside the video player so viewers can interact with the stream

### Requirement 3: Responsive Layout

**User Story:** As a viewer, I want the Twitch section to look good on all screen sizes, so that I can watch on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Twitch_Section SHALL use the section-container class providing horizontal auto-margins, a maximum width of 1152px, and responsive horizontal padding (16px at mobile, 24px at sm, 32px at lg)
2. THE Twitch_Embed SHALL fill 100% of the available container width and maintain a 16:9 aspect ratio at all viewport widths from 320px to 1440px
3. THE Twitch_Section SHALL wrap the embed in a whimsical-card container with responsive padding (16px at mobile, 24px at sm breakpoint), matching the card wrapper used by the Instagram and TikTok sections
4. IF the Twitch embed fails to load or the network request times out after 10 seconds, THEN THE Twitch_Section SHALL display a fallback message indicating the stream is unavailable and provide a direct link to the Twitch channel

### Requirement 4: Visual Consistency

**User Story:** As a viewer, I want the Twitch section to match the pastel, whimsical aesthetic of the rest of the site, so that the page feels cohesive.

#### Acceptance Criteria

1. THE Twitch_Section SHALL use the site's font-display family for the heading text
2. THE Twitch_Section SHALL apply the gradient-text class to the heading text for visual consistency with other section headings
3. THE Twitch_Section SHALL style the channel link using the same pink-500 hover:pink-600 color pattern used by other section links on the Home_Page

### Requirement 5: Accessibility

**User Story:** As a viewer using assistive technology, I want the Twitch embed to be accessible, so that I can understand what content is displayed.

#### Acceptance Criteria

1. THE Twitch_Embed iframe SHALL include a non-empty title attribute containing the text "saithsfuff Twitch stream player"
2. THE Twitch_Section channel link SHALL include a visually hidden text span or aria-label indicating that the link opens in a new tab
3. THE Twitch_Section channel link SHALL include rel="noopener noreferrer" when opening in a new tab to prevent security vulnerabilities
4. THE Twitch_Embed iframe SHALL be reachable via keyboard tab navigation so that assistive technology users can access the player controls
