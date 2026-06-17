# Implementation Plan: Media Kit Page

## Overview

Build a static Media Kit / Portfolio page at `/portfolio` that presents platform statistics, audience demographics, brand collaborations, content examples, and a contact CTA. The page reuses the existing design system (glass-card, pastel gradients, dark mode) and is composed of React Server Components consuming a shared placeholder data file. The NavBar is simplified to only route-level links.

## Tasks

- [x] 1. Create shared data file with typed placeholder constants
  - [x] 1.1 Create `lib/media-kit-data.ts` with all TypeScript interfaces (`PlatformStat`, `DemographicAge`, `DemographicGender`, `DemographicLocation`, `BrandCollab`, `ContentExample`, `ContactInfo`)
    - Export typed placeholder data arrays and objects matching the design document's data structure
    - Include code comments indicating content is placeholder and intended for later customization
    - _Requirements: 10.1, 10.2, 10.3_

- [x] 2. Update NavBar to simplified route-only links
  - [x] 2.1 Modify `components/NavBar.tsx` to replace the `navLinks` array with only "Home" (`/`) and "Portfolio" (`/portfolio`) entries
    - Remove the anchor-based section links (About, Instagram, TikTok)
    - Keep all existing NavBar functionality (mobile menu, theme toggle, styling)
    - _Requirements: 1.2_

- [x] 3. Implement section components
  - [x] 3.1 Create `components/media-kit/MediaKitHero.tsx`
    - Display a headline, professional tagline, and placeholder profile image
    - Use the existing whimsical pastel gradient background (`bg-gradient-hero`) and decorative elements (sparkles/stars)
    - Support dark mode via Tailwind `dark:` variants
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 3.2 Create `components/media-kit/PlatformStats.tsx`
    - Render a responsive grid of glass-card stat cards for Twitch, Instagram, and TikTok
    - Each card shows platform name, followers, engagement rate, and average views
    - Stack vertically on mobile, multi-column on desktop
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 9.2, 9.3_

  - [x] 3.3 Create `components/media-kit/AudienceDemographics.tsx`
    - Display age range breakdown, gender distribution, top geographic locations, and audience interests
    - Use visual indicators (progress bars with percentage labels) for demographic data
    - Support responsive stacking and dark mode
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 8.3, 8.4_

  - [x] 3.4 Create `components/media-kit/BrandCollaborations.tsx`
    - Render at least 4 brand logo/name cards in a responsive grid layout
    - Use glass-card or pastel card styling for each brand item
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 3.5 Create `components/media-kit/ContentExamples.tsx`
    - Display at least 3 content cards with placeholder thumbnail, title, platform label, and view count
    - Responsive grid: single column on mobile, multi-column on desktop
    - Use whimsical-card or glass-card styling
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 3.6 Create `components/media-kit/ContactCTA.tsx`
    - Display placeholder email address, social media profile links, and a prominent CTA button
    - Visually distinct as the final section of the page
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 4. Checkpoint
  - Ensure all components compile without errors and render correctly in isolation. Ask the user if questions arise.

- [x] 5. Compose the portfolio page route
  - [x] 5.1 Create `app/portfolio/page.tsx` as a React Server Component
    - Import and render NavBar, all section components in order (MediaKitHero → PlatformStats → AudienceDemographics → BrandCollaborations → ContentExamples → ContactCTA), and a footer consistent with the homepage
    - Ensure proper semantic HTML structure (`<main>`, `<footer>`, heading hierarchy)
    - _Requirements: 1.1, 1.3, 1.4, 9.1_

- [x] 6. Ensure responsive design and visual consistency
  - [x] 6.1 Verify all sections use Fredoka for headings, Nunito for body text, and the pastel color palette (pink, lavender, mint)
    - Add sparkle-divider decorative elements between sections consistent with the homepage
    - Confirm the page works from 320px to desktop widths with appropriate spacing
    - _Requirements: 8.1, 8.2, 8.5, 9.1, 9.2, 9.3_

- [x] 7. Checkpoint
  - Ensure the full page renders at `/portfolio` with no build errors. Verify NavBar links work, dark mode toggles correctly, and layout is responsive. Ask the user if questions arise.

- [ ]* 8. Write unit and integration tests
  - [ ]* 8.1 Write unit tests for NavBar verifying only "Home" and "Portfolio" links are rendered
    - _Requirements: 1.2_
  - [ ]* 8.2 Write unit tests for each section component verifying expected placeholder content renders
    - Test correct number of items (3 platform stats, 4+ brands, 3+ content cards)
    - Test heading text and section structure
    - _Requirements: 3.1, 4.1, 5.1, 6.1, 7.1_
  - [ ]* 8.3 Write an integration test rendering the full `/portfolio` page and verifying all sections are present
    - _Requirements: 1.1, 1.3, 1.4_
  - [ ]* 8.4 Write accessibility tests verifying heading hierarchy, alt text on images, and semantic landmark regions
    - _Requirements: 8.1, 9.1_

- [x] 9. Final checkpoint
  - Ensure all tests pass, verify build completes successfully, and ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- No property-based tests are included — the design has no Correctness Properties section (static presentational page)
- All components are React Server Components (no "use client" directive needed for section components)
- The NavBar retains "use client" since it manages mobile menu state
