# 🤌 FUGGEDABOUTIT MONITOR

**What exit? What node? Fuggedaboutit!**

A Garden State-inspired customization of [MeshMonitor](https://github.com/Yeraze/meshmonitor), monitoring Meshtastic, MeshCore, and MQTT networks. This fork keeps the upstream monitoring engine and adds a Jersey-flavored identity.

## Jersey design tokens

| Role | Color |
| --- | --- |
| Jersey Blue | `#003B71` |
| Jersey Buff | `#F0DC82` |
| Turnpike Asphalt | `#121820` |
| Midnight Blue | `#202B38` |
| Parkway Green | `#22C55E` |
| Taylor Ham Red | `#D62828` |
| Disco Fries Gold | `#FFCC33` |
| Diner White | `#F5F5F5` |

## Planned interface vocabulary

- Dashboard → The Diner
- Nodes → The Crew
- Node map → What Exit?!
- Network status → Parkway Traffic
- Alerts → Ay! We Got a Problem!
- Settings → Tony's Office

These are **proposed UI copy changes**, not yet implemented. Core networking, authentication, and configuration identifiers should remain stable.

## Development and deployment

This is a source fork, **not** a new published container image. The existing Docker Compose example references the upstream image and will not display fork-only changes. Build a local image or publish a fork-specific image before deploying the customized app.

Refer to the upstream [README](https://github.com/Yeraze/meshmonitor#readme) and [documentation](https://meshmonitor.org/) for installation and security guidance. Preserve the upstream BSD-3-Clause license and notices.
