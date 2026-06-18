# Implementation Plan: Twitch Stream Viewer

## Overview

Add a TwitchSection client component to the homepage that embeds the Twitch stream for the "saithsfuff" channel using the Twitch Embed API. The component loads the embed script lazily, handles error/timeout fallback, and follows the existing section pattern (heading → whimsical-card → embed → link).

## Tasks

- [x] 1. Create TypeScript declarations and TwitchSection component
  - [x] 1.1 Create Twitch global type declaration file
    - Create `types/twitch.d.ts` with the `Twitch.Embed` class declaration
    - Declare the constructor accepting options (width, height, channel, layout, parent, autoplay, muted, theme)
    - Declare `addEventListener`, `getPlayer`, and static event constants (`VIDEO_READY`, `VIDEO_PLAY`)
    - _Requirements: 2.1_

  - [x] 1.2 Implement TwitchSection client component
    - Create `components/home/TwitchSection.tsx` as a `"use client"` component
    - Add state for `embedStatus`: `"loading" | "ready" | "error"`
    - Render section with `section-container` class and `id="twitch"` attribute
    - Render heading with "Watch on Twitch" text, using `font-display`, `gradient-text`, responsive text sizes (text-2xl sm:text-3xl lg:text-4xl), `font-semibold`, `text-center`, and `mb-8`
    - Render `whimsical-card` wrapper with responsive padding (p-4 sm:p-6)
    - Render embed container `div#twitch-embed` with 16:9 aspect ratio styling (aspect-video or padding-bottom trick)
    - Use Next.js `Script` component with `src="https://embed.twitch.tv/embed/v1.js"` and `strategy="lazyOnload"`
    - On `onLoad`: initialize `new Twitch.Embed("twitch-embed", { channel: "saithsfuff", width: "100%", height: "100%", layout: "video-with-chat", parent: [window.location.hostname], autoplay: false, muted: true })`
    - Listen for `Twitch.Embed.VIDEO_READY` to set status to `"ready"` and clear timeout
    - On `onError`: set status to `"error"`
    - Start a 10-second timeout on mount; if expired without `"ready"`, set status to `"error"`
    - When status is `"error"`, render fallback message: "Stream unavailable right now — catch saithsfuff live on Twitch!" with a direct link to `https://www.twitch.tv/saithsfuff`
    - After embed renders, set iframe `title` attribute to `"saithsfuff Twitch stream player"` for accessibility
    - Render channel link below the card: `href="https://www.twitch.tv/saithsfuff"`, `target="_blank"`, `rel="noopener noreferrer"`, pink-500 hover:pink-600 styling, with visually hidden "(opens in new tab)" text
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 5.4_

- [x] 2. Integrate TwitchSection into the home page
  - [x] 2.1 Add TwitchSection to app/page.tsx
    - Import `TwitchSection` from `@/components/home/TwitchSection`
    - Render `<TwitchSection />` between `<AboutSection />` and `<InstagramFeed />` in the main element
    - _Requirements: 1.1_

- [x] 3. Checkpoint - Verify build and rendering
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Write unit tests for TwitchSection
  - [x] 4.1 Create TwitchSection unit test file
    - Create `__tests__/components/home/TwitchSection.test.tsx`
    - Mock `next/script` to capture props and trigger onLoad/onError callbacks
    - Test heading renders with correct text "Watch on Twitch", `gradient-text` class, and responsive size classes
    - Test section has `section-container` class
    - Test whimsical-card wrapper with responsive padding classes
    - Test embed container div exists with 16:9 aspect ratio styling
    - Test channel link has correct href, target, rel attributes, and pink-500 styling
    - Test channel link includes visually hidden "(opens in new tab)" text (sr-only span)
    - Test Script component loads from correct Twitch embed URL with lazyOnload strategy
    - Test fallback UI renders on script error (simulate onError)
    - Test fallback UI renders on 10-second timeout (use jest fake timers)
    - Test fallback contains direct link to Twitch channel
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3_

  - [ ]* 4.2 Write integration test for page section ordering
    - Create test verifying TwitchSection renders between AboutSection and InstagramFeed on the home page
    - Mock all child section components to verify render order
    - _Requirements: 1.1_

- [x] 5. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- The design explicitly states property-based testing is not applicable for this feature
- Unit tests validate DOM structure, attributes, and error handling behavior
- The existing test convention uses `@testing-library/react` with `describe`/`it` blocks

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1"] },
    { "id": 3, "tasks": ["4.1", "4.2"] }
  ]
}
```
