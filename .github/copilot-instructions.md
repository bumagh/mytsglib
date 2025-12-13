# Copilot Instructions for mytsglib

## Project Overview

This is a TypeScript library for developing small games on the WeChat mini-program platform. It provides core utilities, type definitions, and UI abstractions for game development.

## Architecture

- **types/mytypes.ts**: Central type definitions including `GameState`, `ButtonConfig`, `ModalConfig`, `GameData`, event interfaces, and new types for characters, skills, items, animations, effects, and tweens.
- **core/**: Core framework with managers (`GameManager`), event system (`EventEmitter`), config system (`ConfigManager`), and utilities (screen utils).
- **gameplay/**: Game mechanics including characters, UI components, skills, and items.
- **common/**: Shared components for animations, effects, and tweening.

## Key Patterns

- **WeChat Integration**: Use `wx.getWindowInfo()` or `wx.getSystemInfoSync()` for dynamic screen properties. Example in `screenUtils.ts`:
  ```typescript
  const windowInfo = wx.getWindowInfo
    ? wx.getWindowInfo()
    : wx.getSystemInfoSync();
  ```
- **Event-Driven UI**: Components like `ButtonConfig` include `onClick` callbacks. Events extend `GameEvent` with specific types.
- **State Management**: `GameState` enum covers lifecycle: 'idle' → 'preview' → 'betting' → 'running' → 'paused' → 'finished'.
- **Modal System**: `ModalConfig` with `buttons` array for interactive dialogs, returning `ModalResult`.
- **Singleton Managers**: Use `getInstance()` for `GameManager` and `ConfigManager` to ensure single instances.
- **Event System**: Extend `EventEmitter` for custom events, using `on()`, `off()`, and `emit()` methods.
- **Component-Based Gameplay**: Characters, skills, and items as classes with data interfaces for type safety.

## Conventions

- Chinese comments and documentation.
- No build configuration; compile as part of parent WeChat mini-program project.
- Submodule usage: Add as git submodule in `libs/` directory for version control.

## Dependencies

- Relies on WeChat `wx` global object for platform features.
- No external npm dependencies; pure TypeScript.

## Workflows

- **Development**: Edit TS files directly; parent project handles compilation.
- **Screen Utils**: Call `getScreenInfo()` at runtime for responsive design, not compile-time constants.
- **Type Safety**: Use provided interfaces for game data and events to ensure consistency.
- **Animation and Effects**: Use `Animation`, `Effect`, and `Tween` classes for visual enhancements, calling `play()` and `update()` in game loops.

## Testing

- **Test Structure**: Tests are located in `test/` directory, mirroring the source structure.
- **Running Tests**: Import and call test functions from `test/index.ts` or individual test files.
- **Test Style**: Simple console-based tests for validation, suitable for WeChat mini-program environment.
