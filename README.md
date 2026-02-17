<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-blueviolet?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge" alt="Version" />
</p>

<h1 align="center">🔒 Crime Evidence Management System</h1>

<p align="center">
  <strong>A blockchain-powered platform for tamper-proof, transparent, and legally defensible criminal evidence management.</strong>
</p>

<p align="center">
  <em>Built with Hyperledger Fabric · IPFS · React.js · Node.js</em>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [User Roles](#-user-roles)
- [Smart Contracts](#-smart-contracts)
- [Project Roadmap](#-project-roadmap)
- [Getting Started](#-getting-started)
- [Project Documents](#-project-documents)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧭 Overview

The **Crime Evidence Management System** is a blockchain-based platform designed to revolutionize how law enforcement agencies handle, store, and track criminal evidence. By leveraging **Hyperledger Fabric**, **IPFS**, and **smart contracts**, the system provides an **immutable, transparent, and legally defensible** chain of custody solution that addresses critical vulnerabilities in traditional evidence management.

> **Target Users:** Law enforcement agencies, forensic departments, judicial institutions, and prosecutors globally.

---

## ❗ The Problem

Traditional evidence management systems suffer from critical vulnerabilities:

| Problem | Impact |
|---------|--------|
| **Evidence Tampering** | Compromised cases, wrongful convictions |
| **Broken Chain of Custody** | Inadmissible evidence in court |
| **Data Silos** | No inter-agency collaboration |
| **Manual Processes** | Slow, error-prone evidence handling |
| **Legal Admissibility Challenges** | Cases dismissed due to questionable evidence integrity |

---

## 💡 The Solution

A decentralized, blockchain-powered evidence management platform that ensures:

- 🔗 **Immutable Audit Trails** — Every action is permanently recorded on the blockchain
- 🛡️ **Cryptographic Integrity** — SHA-256 hashing ensures files haven't been tampered with
- 🌐 **Decentralized Storage** — Evidence files stored on IPFS, eliminating single points of failure
- 📜 **Smart Contract Enforcement** — Automated custody rules, role validation, and access control
- 🏛️ **Court-Ready Reports** — Generate legally admissible chain of custody documentation

---

## ✨ Key Features

### Evidence Management
- 📝 **Evidence Registration** — Register physical and digital evidence with comprehensive metadata
- 📁 **Multi-File Upload** — Batch upload with individual hash generation per file
- 🔍 **Search & Filtering** — Find evidence by case ID, type, date, location, custodian, and more
- 📱 **Mobile Collection** — Field evidence capture with GPS tagging and offline mode

### Chain of Custody
- 🔄 **Custody Transfer Workflow** — Secure, auditable transfers with dual digital signatures
- 🔐 **Access Control** — Role-based, time-limited access with full logging
- 📊 **Custody Visualization** — Interactive timeline of all custody events
- 📦 **Bulk Operations** — Transfer multiple items with individual blockchain records

### Security & Verification
- ✅ **File Integrity Verification** — Re-hash on every download, compare with blockchain record
- 🚨 **Tampering Alerts** — Instant notifications on hash mismatches
- 🔑 **Multi-Factor Authentication** — TOTP, biometrics, and hardware token support
- 🎫 **X.509 Certificates** — Blockchain identity via Fabric Certificate Authority

### Reporting & Auditing
- 📄 **Court-Ready Reports** — PDF export with cryptographic proof and QR verification
- 📈 **Audit Dashboard** — Real-time feed of all blockchain transactions
- 📊 **Inventory Reports** — Evidence statistics by case, type, status, and location
- 🌍 **Inter-Agency Reports** — Track cross-agency evidence sharing

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Presentation Layer                     │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│   │ Web Client │  │ Mobile App │  │Admin Portal│       │
│   │ (React.js) │  │(iOS/Android)│ │            │       │
│   └────────────┘  └────────────┘  └────────────┘       │
└──────────────────────────┬──────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│              Application Layer (REST API)                │
│            Node.js / Express.js + Passport.js            │
│   Authentication · Evidence · Custody · Reporting        │
└────────┬──────────────────┬──────────────────┬──────────┘
         ▼                  ▼                  ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Blockchain  │   │ IPFS Storage │   │  PostgreSQL   │
│  Hyperledger │   │              │   │   + Redis     │
│    Fabric    │   │  Encrypted   │   │              │
│  (Chaincode) │   │ File Storage │   │  User Data   │
│   + MSP      │   │  + Pinning   │   │  + Metadata  │
└──────────────┘   └──────────────┘   └──────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js 18+, Redux Toolkit, Material-UI, Recharts/D3.js |
| **Mobile** | React Native (iOS & Android) |
| **Backend** | Node.js 18 LTS, Express.js, Passport.js + JWT |
| **Blockchain** | Hyperledger Fabric 2.5+, Raft consensus, X.509 via Fabric CA |
| **Chaincode** | Go / Node.js |
| **Storage** | IPFS (Kubo), MinIO/S3 |
| **Database** | PostgreSQL 15+, Redis 7+ |
| **DevOps** | Docker, Kubernetes, GitHub Actions |
| **Monitoring** | Prometheus + Grafana, ELK Stack |
| **Security** | TLS 1.3, AES-256, HashiCorp Vault, WAF |

---

## 👥 User Roles

| Role | Permissions |
|------|-------------|
| **🚔 Officer** | Register evidence, request access, view assigned cases |
| **📦 Custodian** | Accept transfers, manage storage, approve access requests |
| **🔬 Analyst** | Access evidence files, create analysis reports, version evidence |
| **⚖️ Prosecutor** | Read-only access, generate reports, export data |
| **🛠️ Admin** | User management, system configuration, network admin |
| **📋 Auditor** | Read-only access to all records, compliance reports |

---

## 📜 Smart Contracts

The system uses **Hyperledger Fabric chaincode** to enforce business logic on-chain:

| Contract | Purpose |
|----------|---------|
| **Evidence Registration** | Validates permissions, checks duplicates, stores metadata + file hash |
| **Custody Transfer** | Verifies ownership, validates recipient role, requires dual signatures |
| **Access Control** | Enforces RBAC, supports temporary role elevation, logs all access |
| **Evidence Lifecycle** | Manages status transitions (Collected → Analyzed → Presented → Archived/Destroyed) |

---

## 🗺️ Project Roadmap

```
Phase 1 ▸ Foundation (Months 1-3)
         Blockchain setup · IPFS deployment · Auth & RBAC · Basic registration

Phase 2 ▸ Core Features (Months 4-6)
         Custody workflows · Smart contracts · Integrity verification · Mobile MVP

Phase 3 ▸ Advanced Features (Months 7-9)
         Reporting · Forensic integration · Notifications · Inter-agency sharing

Phase 4 ▸ Testing & Hardening (Months 10-11)
         Comprehensive testing · Security audit · Performance optimization

Phase 5 ▸ Pilot Deployment (Month 12)
         Deploy to 2-3 police departments · Training · Feedback collection

Phase 6 ▸ Full Rollout (Months 13-15)
         Expand to 100+ departments · Legacy system integration · Scale infra
```

### Future Vision
- 🤖 AI-powered evidence analysis and anomaly detection
- 📡 IoT integration (smart evidence lockers with RFID)
- 🎥 Real-time body cam streaming to blockchain
- 🧬 DNA sequencing integration
- 🌍 Global evidence registry for international collaboration

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 LTS or later
- **Docker** & **Docker Compose**
- **Hyperledger Fabric** 2.5+ binaries
- **Go** 1.20+ (for chaincode development)
- **PostgreSQL** 15+
- **Redis** 7+
- **IPFS** (Kubo)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/crime-evidence-system.git
cd crime-evidence-system

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the blockchain network
./scripts/start-network.sh

# Start IPFS daemon
ipfs daemon &

# Run database migrations
npm run db:migrate

# Start the development server
npm run dev
```

> ⚠️ **Note:** Detailed setup instructions will be added as the project progresses through development phases.

---

## 📚 Project Documents

| Document | Description |
|----------|-------------|
| [Product Requirements (PRD)](./Crime_Evidence_System_PRD.md) | Complete functional & non-functional requirements, user personas, testing strategy, budget |
| [Design System Document](./Crime_Evidence_System_Design_Document.md) | UI/UX design system — colors, typography, spacing, components, user flows, animations |

---

## 🤝 Contributing

This project is currently in active development. Contribution guidelines will be published once the project reaches Phase 2.

For now, please reach out to the project team for collaboration opportunities.

---

## 📄 License

This project is proprietary software developed for law enforcement use. All rights reserved.

---

<p align="center">
  <strong>Built with ❤️ for a safer, more transparent justice system.</strong>
</p>
