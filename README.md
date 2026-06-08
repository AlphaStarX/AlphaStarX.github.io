# 🕹️ Bhavin Machhi | Gameplay Programmer & Technical Designer

<div align="center">
  
  [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin&logoColor=white&color=0077B5)](https://www.linkedin.com/in/bhavinmachhi)
  [![ArtStation Badge](https://img.shields.io/badge/ArtStation-Portfolio-black?style=for-the-badge&logo=artstation&logoColor=white&color=131722)](https://www.artstation.com/bhavinmachhi)
  [![GitHub Badge](https://img.shields.io/badge/GitHub-Profile-black?style=for-the-badge&logo=github&logoColor=white&color=181717)](https://github.com/AlphaStarX)
  [![Unreal Engine 5 Badge](https://img.shields.io/badge/Unreal_Engine_5-Gameplay-black?style=for-the-badge&logo=unrealengine&logoColor=white&color=313131)](#)

  **[🔗 Visit Live Portfolio Website](https://AlphaStarX.github.io)**
</div>

---

## 🎭 Character Sheet: Bhavin Machhi

```text
Class         : Gameplay Programmer & Technical Gameplay Designer
Level / Exp   : 5+ Years of Game Development Experience
Specialization: Unreal Engine 5, C++, Networked Multiplayer Replication
Mana Source   : Clean C++ Architecture, Gameplay Ability System (GAS)
```

### 📊 Base Stats
| Stat | Attribute | Rating | Description |
| :---: | :--- | :---: | :--- |
| **STR** | **C++ Core Systems** | `Level 92` | High-performance C++, memory management, custom templates, advanced math & game physics integration. |
| **DEX** | **Gameplay & AI Systems** | `Level 95` | Movement mechanics, combat formulas, custom AI Behavior Trees, sensory systems, and pathfinding. |
| **INT** | **Multiplayer Replication** | `Level 90` | Client-server architecture, net-serialization, RPCs, lag compensation (Client Prediction, Server-Side Rewind). |
| **VIT** | **Unreal Engine Ecosystem** | `Level 95` | Blueprint scripting, Gameplay Ability System (GAS), custom editor tools, Session hosting & matchmaking. |
| **AGI** | **Workflow & Versioning** | `Level 88` | Agile/Scrum cross-discipline alignment, technical design documentation (TDD), Git version control. |

### 🛠️ Active Skill Trees
```
 ⚔️ Combat & Gameplay Systems (Active)
 ├── Gameplay Ability System (GAS) ── Custom Attributes, Effects, Abilities & Cooldowns
 ├── Advanced Locomotion ──────────── Weapon-based movements, custom animations blending
 └── Souls-Like Prototypes ────────── Weapon collision trace sweeps, active target lock-on

 📡 Networking & Multiplayer (Passive)
 ├── Steam Online Subsystem ───────── Session hosting, lobby configurations, matchmaking
 ├── Network Synchronization ──────── RPCs, variable replication, replication conditions
 └── Lag Mitigation ───────────────── Server-Side Rewind, frame history interpolation
```

---

## 🎮 Game Project Showcase

Here are the primary projects showcased in this repository:

### 1. Multiplayer Shooter Game (Work In Progress)
A high-fidelity third-person multiplayer shooter prototype built with Unreal Engine and C++. It features lag compensation algorithms and standard match-making loops.
*   **Key Features**:
    *   Steam Multiplayer session matchmaking (Host, Find, Join).
    *   Multiplayer projectile and hit-scan weapon types.
    *   Match state management (Waiting to Start, In Progress, Cooldown, Cooldown to Restart).
    *   Lag mitigation mechanisms: Client-Side Prediction, Server-Side Rewind, and Frame Interpolation.
    *   Replicated Player Stats: Announcements, Kill Feeds, and Team Scores.
*   **Tech Tags**: `UE5`, `C++`, `Steam Online Subsystem`, `Client-Server Architecture`, `Replication`, `FABRIK IK`.

### 2. Steam Multiplayer Plugin
A reusable plugin for Unreal Engine that streamlines multiplayer lobby setups, allowing developers to easily add online matchmaking.
*   **Key Features**:
    *   Convenient C++ wrapper class interfaces for creating, finding, and joining sessions.
    *   Integrated menu UI widget blueprints matching Steam overlay templates.
*   **Tech Tags**: `UE5`, `C++`, `Steam Online Subsystem`, `OnlineSubsystem`, `SessionSettings`.

### 3. RPG Combat Prototype
A souls-like combat prototype featuring modular AI enemies and customizable weapon traits. Built 90% in C++ for optimal scalability.
*   **Key Features**:
    *   Souls-like attributes: Health, Stamina, Souls count, Coins.
    *   Custom AI enemy classes (Knights, Dragons, Insects) with sensory perception.
    *   Extendable base blueprints for rapid creation of weapons, items, and AI templates.
*   **Tech Tags**: `UE5`, `C++`, `AI Behavior Trees`, `Combat Mechanics`.

---

## 🌐 Portfolio Website Features

The codebase hosting this portfolio is designed with a high-fidelity **Neon Cyber / Unreal Synth** aesthetic:
*   **CRT Scanlines & HUD Glows**: Implements subtle, transparent grid and scanline overlays with neon glowing components to create a retro game console feel.
*   **Gameplay Hover Preview**: Automatically instantiates a muted, looping gameplay preview video when hovering over any project card.
*   **Scroll-Spy Sidebar**: Highlights active navigation menu items dynamically as you scroll through different sections using the native `IntersectionObserver` API.
*   **Smooth Navigation Offset**: Calculated link scrolling that compensates for the fixed mobile header to prevent visual overlaps.
*   **Blinking Terminal Subtitle**: Custom typewriter typing loop running on the landing hero section subtitle.

---

## 📁 Repository Overview

*   [index.html](index.html): Holds the primary page markup, metadata, SEO structure, grid layouts, and copy.
*   [css/theme-cyber.css](css/theme-cyber.css): Master styling token repository containing HSL color variables, CSS scanline grids, responsive media styling, and keyframe loops.
*   [js/main.js](js/main.js): Interactive script logic mapping scroll spy observers, typewriter delays, copyright date handlers, and video hover plays.
*   [css/style.css](css/style.css): Legacy styling baseline.
