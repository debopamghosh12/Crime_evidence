# Crime Evidence Management System - Project Prospectus

## 1. Project Overview

The **Crime Evidence Management System** is a secure, transparent, and digital solution designed to modernize how law enforcement agencies handle, store, and track criminal evidence.

### Vision
To abolish evidence tampering, data silos, and chain of custody disputes by providing an immutable, legally defensible, and digital-first evidence management platform.

### Core Value Proposition
- **Chain of Custody Integrity:** Every transfer and access event is logged immutably.
- **Digital Transformation:** Replaces paper logs with secure digital records.
- **Operational Efficiency:** Streamlines evidence submission, tracking, and retrieval.
- **Legal Admissibility:** Ensures evidence stands up in court through verifiable history.

---

## 2. Features & Functionalities

### 2.1 Evidence Management
- **Digital Registration:** Log physical and digital evidence with comprehensive metadata (Case ID, Type, Location, Collector).
- **Media Uploads:** Securely store digital evidence files (photos, videos, documents).
- **Search & Retrieval:** Fast filtering by case ID, evidence type, date, or officer.

### 2.2 Custody Tracking
- **Chain of Custody:** Automated tracking of current custodian and transfer history.
- **Secure Transfers:** Digital workflow for transferring evidence between officers/departments.
- **Custody Logs:** viewable history of every person who has handled the evidence.

### 2.3 Security & Access Control
- **Role-Based Access:** Distinct permissions for Officers, Custodians, Analysts, and Admins.
- **Audit Trails:** Comprehensive logs of all system actions (view, edit, transfer).
- **File Integrity:** Hashing of digital files to detect tampering (planned feature).

### 2.4 User Dashboard
- **Dashboard Metrics:** Real-time overview of active cases, pending transfers, and evidence stats.
- **My Tasks:** Personalized view of evidence requiring action (e.g., pending transfer acceptance).

---

## 3. Technology Stack

### Current Implementation (MVP/Demo)

The current codebase represents a functional **Minimum Viable Product (MVP)** designed for demonstration and rapid development.

#### **Frontend (Client)**
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Language:** TypeScript

#### **Backend (Server)**
- **Runtime:** Node.js
- **Framework:** Express.js
- **API Style:** REST API
- **MCP Support:** Implements [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) for AI agent integration.

#### **Data Layer**
- **Database:** SQLite (via `better-sqlite3`)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Note:** While the PRD envisions Hyperledger Fabric, this MVP uses a local SQLite database to simulate persistence and state management for ease of deployment.

---

## 4. Planned vs. Current State

| Feature | Current MVP State | Future Vision (PRD) |
| :--- | :--- | :--- |
| **Storage** | Local SQLite Database | Hyperledger Fabric Blockchain + IPFS |
| **Identity** | Basic JWT/Mock Auth | X.509 Certificates & SSI |
| **Deployment** | Monolithic (Client + Server) | Microservices (Docker/K8s) |
| **Files** | Local / Basic Upload | Decentralized IPFS Storage |

---

## 5. Running the Project

1.  **Install Dependencies:**
    ```bash
    npm install         # Root (Backend)
    cd client && npm install # Client (Frontend)
    ```

2.  **Start Development Servers:**
    - **Backend:** `npm run dev:api` (Runs on port 3001)
    - **Frontend:** `cd client && npm run dev` (Runs on port 3000)

3.  **Access:**
    - **Web App:** http://localhost:3000
    - **API Docs/Health:** http://localhost:3001/api/health
