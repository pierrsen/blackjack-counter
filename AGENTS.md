<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Blackjack Counter Engine Guidelines

## Project Overview
Next.js (App Router) + TypeScript + Tailwind CSS Progressive Web App (PWA) for zero-latency blackjack card counting and strategy deviation analysis.

## Key Tech Stack
- **Framework**: Next.js (App Router, `src/` directory)
- **State Management**: Zustand (Client-side, zero re-render overhead)
- **Database / Auth**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + mobile-first PWA optimizations

## Critical Architectural Constraints

### 1. State & Calculation Latency
- ALL real-time shoe tracking, Running Count (RC), True Count (TC), and deviation evaluations MUST run in client-side memory using **Zustand**.
- NEVER trigger network calls or Supabase API requests on individual card tap inputs. Supabase is strictly for loading rules and saving completed session summaries.

### 2. Strategy Deviation Engine
- DO NOT hardcode nested `if/else` chains for strategy decisions or index values.
- Strategy deviations MUST use an $O(1)$ keyed lookup table formatted as:
  `"[Player Hand] vs [Dealer Upcard]"` (e.g., `"10-10 vs 6"` or `"16 vs 10"`).
- Rule evaluation logic should be passed to a pure evaluation function.

### 3. Mobile PWA & Touch Targets
- All interactive card input buttons must be mobile-friendly with large tap areas.
- Prevent default web browser behaviors in CSS (`user-select: none`, `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`).
- Include haptic feedback triggers (`navigator.vibrate`) where appropriate for touch actions.

## Development Commands
- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Run linter checks: `npm run lint`
- Type check: `npx tsc --noEmit`