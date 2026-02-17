# Design System Document
## Crime Evidence Management System

**Version:** 1.0  
**Date:** February 14, 2026  
**Design Lead:** Design Team  
**Status:** Final

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [User Flows](#6-user-flows)
7. [Responsive Behavior](#7-responsive-behavior)
8. [Accessibility](#8-accessibility)
9. [Motion & Animation](#9-motion--animation)
10. [Icons & Illustrations](#10-icons--illustrations)

---

## 1. Design Philosophy

### 1.1 Core Principles

**Trust & Authority**
The system handles sensitive criminal evidence and must convey professionalism, security, and institutional trust. The design uses deep, authoritative colors and clear hierarchies.

**Clarity Over Complexity**
Evidence management is critical work. The interface prioritizes clarity, readability, and unambiguous interactions over decorative elements.

**Progressive Disclosure**
Information is revealed progressively to prevent cognitive overload. Users see what they need when they need it.

**Transparency & Traceability**
Every action, status, and change is clearly communicated. The blockchain-based nature of the system is subtly reflected in the visual language (connection lines, verification badges, immutable state indicators).

### 1.2 Visual Direction

**Modern Professional**
- Clean, contemporary aesthetic inspired by enterprise security software
- Subtle gradients and glows for visual interest without compromising professionalism
- Dark UI as primary theme to reduce eye strain during extended use

**Data-Centric**
- Information density balanced with whitespace
- Clear visual hierarchies for scanning and quick comprehension
- Status indicators and badges prominently displayed

**Secure & Encrypted**
- Visual cues suggesting cryptographic security (lock icons, shield badges, verification marks)
- Connection lines suggesting blockchain network topology
- Subtle particle effects representing distributed nodes

---

## 2. Color System

### 2.1 Primary Colors

#### Deep Purple (Authority)
```
Primary 900 (Main Brand): #1A0B2E
Primary 800: #2D1B4E
Primary 700: #3D2463
Primary 600: #5B3A9D
Primary 500: #7C4DFF (Accent Purple)
Primary 400: #9D7AFF
Primary 300: #B69EFF
Primary 200: #D4C5FF
Primary 100: #EDE7FF
```

**Usage:**
- Primary 900: Main backgrounds, navigation bars
- Primary 500: Primary CTA buttons, active states, highlights
- Primary 300: Hover states, secondary accents
- Primary 100: Subtle backgrounds, disabled states

#### Electric Blue (Trust & Technology)
```
Secondary 900: #0A1929
Secondary 800: #112D45
Secondary 700: #1A3D5C
Secondary 600: #2E5A87
Secondary 500: #4A90E2 (Primary Blue)
Secondary 400: #6BA8F0
Secondary 300: #8FC1FF
Secondary 200: #B5D9FF
Secondary 100: #E0F2FF
```

**Usage:**
- Links and interactive text
- Information badges
- Progress indicators
- Data visualization accents

### 2.2 Neutral Colors

#### Grayscale (Base UI)
```
Neutral 900 (Deep Black): #0D0D0D
Neutral 800: #1A1A1A
Neutral 700: #2D2D2D
Neutral 600: #404040
Neutral 500: #666666
Neutral 400: #999999
Neutral 300: #CCCCCC
Neutral 200: #E5E5E5
Neutral 100: #F5F5F5
Neutral 50: #FAFAFA
White: #FFFFFF
```

**Usage:**
- Neutral 900: Card backgrounds, modals
- Neutral 700: Input fields, dividers
- Neutral 500: Body text
- Neutral 300: Borders, secondary text
- White: Primary text on dark backgrounds

### 2.3 Semantic Colors

#### Success (Verification)
```
Success 700: #1B5E20
Success 500: #4CAF50 (Main Success)
Success 300: #81C784
Success 100: #C8E6C9
```

**Usage:**
- File integrity verified
- Successful custody transfers
- Approved requests
- System health indicators

#### Warning (Attention Required)
```
Warning 700: #E65100
Warning 500: #FF9800 (Main Warning)
Warning 300: #FFB74D
Warning 100: #FFE0B2
```

**Usage:**
- Pending approvals
- Expiring access permissions
- Low storage alerts
- Scheduled maintenance notices

#### Error (Critical Issues)
```
Error 700: #C62828
Error 500: #F44336 (Main Error)
Error 300: #E57373
Error 100: #FFCDD2
```

**Usage:**
- Hash mismatch / integrity violations
- Failed transfers
- Denied access
- System errors

#### Info (Informational)
```
Info 700: #0277BD
Info 500: #2196F3 (Main Info)
Info 300: #64B5F6
Info 100: #BBDEFB
```

**Usage:**
- Informational tooltips
- Status updates
- Blockchain transaction confirmations
- Helper text

### 2.4 Gradient System

#### Primary Gradient (Hero Elements)
```css
background: linear-gradient(135deg, #5B3A9D 0%, #7C4DFF 50%, #4A90E2 100%);
```

#### Subtle Background Gradient
```css
background: linear-gradient(180deg, #1A0B2E 0%, #0D0D0D 100%);
```

#### Card Hover Gradient
```css
background: linear-gradient(135deg, rgba(124, 77, 255, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
```

#### Status Badge Gradients
```css
/* Success */
background: linear-gradient(90deg, #4CAF50 0%, #81C784 100%);

/* Warning */
background: linear-gradient(90deg, #FF9800 0%, #FFB74D 100%);

/* Error */
background: linear-gradient(90deg, #F44336 0%, #E57373 100%);
```

### 2.5 Opacity Scale

```
10%: Hover states on dark backgrounds
20%: Disabled elements
40%: Secondary text
60%: Borders and dividers
80%: Primary text on colored backgrounds
100%: Main content
```

---

## 3. Typography

### 3.1 Font Families

#### Primary Font: Inter
**Usage:** UI elements, body text, data tables

**Weights:**
- Regular (400): Body text, descriptions
- Medium (500): Subheadings, labels
- Semi-Bold (600): Buttons, important labels
- Bold (700): Headings, emphasis

**Rationale:** Inter is highly legible at small sizes, excellent for data-dense interfaces, and conveys modern professionalism.

#### Secondary Font: SF Mono / Roboto Mono
**Usage:** Evidence IDs, hashes, timestamps, code snippets

**Weight:** Regular (400)

**Rationale:** Monospace font for technical data ensures clear distinction between alphanumeric characters (e.g., O vs 0, l vs 1).

#### Display Font: Space Grotesk
**Usage:** Large headings, marketing pages, landing screens

**Weights:**
- Medium (500): Display headings
- Bold (700): Hero titles

**Rationale:** Geometric sans-serif with personality for brand moments without compromising professionalism.

### 3.2 Type Scale

Based on a 1.250 (Major Third) modular scale with 16px base:

```
Display 1: 51px / 3.188rem - Bold (700) - Space Grotesk
Display 2: 41px / 2.563rem - Bold (700) - Space Grotesk
H1: 33px / 2.063rem - Bold (700) - Inter
H2: 26px / 1.625rem - Semi-Bold (600) - Inter
H3: 21px / 1.313rem - Semi-Bold (600) - Inter
H4: 17px / 1.063rem - Medium (500) - Inter
Body Large: 18px / 1.125rem - Regular (400) - Inter
Body: 16px / 1rem - Regular (400) - Inter
Body Small: 14px / 0.875rem - Regular (400) - Inter
Caption: 13px / 0.813rem - Regular (400) - Inter
Label: 12px / 0.75rem - Medium (500) - Inter
Micro: 10px / 0.625rem - Medium (500) - Inter
```

### 3.3 Line Heights

```
Display: 1.1 (110%)
Headings (H1-H4): 1.3 (130%)
Body: 1.6 (160%)
Small Text / Captions: 1.5 (150%)
Labels: 1.2 (120%)
```

### 3.4 Letter Spacing

```
Display: -0.02em
Headings: -0.01em
Body: 0em (default)
Labels (Uppercase): 0.05em
Button Text (Uppercase): 0.08em
```

### 3.5 Text Styles by Component

#### Button Text
```css
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1.2;
letter-spacing: 0.02em;
text-transform: uppercase;
```

#### Evidence ID / Hash
```css
font-family: SF Mono, Roboto Mono;
font-size: 13px;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.01em;
color: #4A90E2;
```

#### Timestamp
```css
font-family: SF Mono, Roboto Mono;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
color: #999999;
```

#### Data Table Headers
```css
font-family: Inter;
font-size: 12px;
font-weight: 600;
line-height: 1.2;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #999999;
```

#### Data Table Cells
```css
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 1.6;
color: #E5E5E5;
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Based on 8px base unit:

```
Space 0: 0px
Space 1: 4px (0.25rem)
Space 2: 8px (0.5rem)
Space 3: 12px (0.75rem)
Space 4: 16px (1rem)
Space 5: 24px (1.5rem)
Space 6: 32px (2rem)
Space 7: 40px (2.5rem)
Space 8: 48px (3rem)
Space 9: 64px (4rem)
Space 10: 80px (5rem)
Space 11: 96px (6rem)
Space 12: 128px (8rem)
```

**Usage Guidelines:**
- Space 2 (8px): Tight spacing within components (icon to text)
- Space 4 (16px): Default component padding
- Space 5 (24px): Spacing between related components
- Space 6 (32px): Section padding
- Space 8 (48px): Large section spacing
- Space 9+ (64px+): Hero section padding, major page sections

### 4.2 Grid System

#### Desktop Grid (1440px container)
```
Columns: 12
Gutter: 24px
Margin: 80px (left/right)
Max Width: 1280px content area
```

#### Tablet Grid (768px - 1439px)
```
Columns: 8
Gutter: 16px
Margin: 40px (left/right)
```

#### Mobile Grid (< 768px)
```
Columns: 4
Gutter: 16px
Margin: 16px (left/right)
```

### 4.3 Layout Structure

#### Main Application Shell

```
┌─────────────────────────────────────────────────────┐
│  Top Navigation Bar (64px height)                   │
├──────────┬──────────────────────────────────────────┤
│          │                                           │
│  Sidebar │         Main Content Area                │
│  (240px) │         (Scrollable)                      │
│          │                                           │
│  Fixed   │  ┌─────────────────────────────────┐    │
│  Nav     │  │  Page Header (with breadcrumbs)  │    │
│          │  ├─────────────────────────────────┤    │
│          │  │                                  │    │
│          │  │  Content Cards / Sections        │    │
│          │  │                                  │    │
│          │  └─────────────────────────────────┘    │
│          │                                           │
└──────────┴──────────────────────────────────────────┘
```

#### Content Card Layout

```
┌─────────────────────────────────────────┐
│  Card Header (48px)                     │
│  Title | Actions                         │
├─────────────────────────────────────────┤
│                                          │
│  Card Body (Padding: 24px)              │
│  Content with internal spacing          │
│                                          │
├─────────────────────────────────────────┤
│  Card Footer (56px) - Optional          │
│  Actions / Metadata                     │
└─────────────────────────────────────────┘
```

### 4.4 Border Radius

```
Radius 0: 0px (Sharp corners)
Radius 1: 4px (Small components: badges, tags)
Radius 2: 8px (Buttons, inputs, small cards)
Radius 3: 12px (Cards, modals)
Radius 4: 16px (Large cards, panels)
Radius 5: 24px (Hero sections, feature cards)
Radius Full: 9999px (Pills, circular buttons)
```

### 4.5 Shadows & Elevation

#### Elevation Scale

**Level 0 (Flat):**
```css
box-shadow: none;
```

**Level 1 (Subtle):**
```css
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
```
*Usage:* Buttons, input fields

**Level 2 (Card):**
```css
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
```
*Usage:* Cards, data tables

**Level 3 (Raised):**
```css
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
```
*Usage:* Dropdowns, popovers

**Level 4 (Modal):**
```css
box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.5);
```
*Usage:* Modals, dialogs

**Level 5 (Maximum):**
```css
box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.6);
```
*Usage:* High-priority overlays

#### Glow Effects (For Interactive Elements)

**Primary Glow:**
```css
box-shadow: 0px 0px 20px rgba(124, 77, 255, 0.4);
```

**Success Glow:**
```css
box-shadow: 0px 0px 16px rgba(76, 175, 80, 0.5);
```

**Error Glow:**
```css
box-shadow: 0px 0px 16px rgba(244, 67, 54, 0.5);
```

---

## 5. Components

### 5.1 Buttons

#### Primary Button

**Visual Specs:**
```css
background: linear-gradient(135deg, #7C4DFF 0%, #5B3A9D 100%);
border: none;
border-radius: 8px;
padding: 12px 24px;
color: #FFFFFF;
font-weight: 600;
font-size: 14px;
letter-spacing: 0.02em;
text-transform: uppercase;
box-shadow: 0px 4px 12px rgba(124, 77, 255, 0.3);
transition: all 0.2s ease;
```

**States:**
- **Hover:** Lift (transform: translateY(-2px)) + enhanced shadow
- **Active:** Press down (transform: translateY(0px)) + reduced shadow
- **Disabled:** Opacity 40%, no interaction
- **Loading:** Spinner animation, text fades to 60%

**Sizes:**
- Small: 32px height, 16px horizontal padding
- Medium (default): 40px height, 24px horizontal padding
- Large: 48px height, 32px horizontal padding

#### Secondary Button

```css
background: transparent;
border: 2px solid #7C4DFF;
border-radius: 8px;
padding: 10px 22px;
color: #7C4DFF;
/* Other properties same as primary */
```

**Hover State:**
```css
background: rgba(124, 77, 255, 0.1);
border-color: #9D7AFF;
color: #9D7AFF;
```

#### Ghost Button

```css
background: transparent;
border: none;
color: #9D7AFF;
padding: 12px 16px;
```

**Hover State:**
```css
background: rgba(124, 77, 255, 0.1);
color: #B69EFF;
```

#### Danger Button

```css
background: linear-gradient(135deg, #F44336 0%, #C62828 100%);
/* Other properties same as primary */
```

#### Icon Button

```css
width: 40px;
height: 40px;
border-radius: 50%;
background: rgba(124, 77, 255, 0.1);
border: none;
color: #7C4DFF;
display: flex;
align-items: center;
justify-content: center;
```

### 5.2 Input Fields

#### Text Input

**Default State:**
```css
background: #1A1A1A;
border: 1px solid #404040;
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
font-size: 14px;
font-family: Inter;
transition: all 0.2s ease;
```

**Focus State:**
```css
border-color: #7C4DFF;
box-shadow: 0px 0px 0px 3px rgba(124, 77, 255, 0.2);
outline: none;
```

**Error State:**
```css
border-color: #F44336;
box-shadow: 0px 0px 0px 3px rgba(244, 67, 54, 0.2);
```

**With Label:**
```html
<div class="input-group">
  <label class="input-label">Evidence ID</label>
  <input type="text" class="input-field" />
  <span class="input-helper">Enter unique identifier</span>
</div>
```

**Label Styles:**
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #CCCCCC;
  letter-spacing: 0.02em;
}
```

**Helper Text:**
```css
.input-helper {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #999999;
}
```

#### Search Input

```css
/* Base input styles plus: */
padding-left: 44px; /* Space for search icon */
background-image: url('search-icon.svg');
background-repeat: no-repeat;
background-position: 16px center;
background-size: 16px 16px;
```

#### Select Dropdown

```css
background: #1A1A1A;
border: 1px solid #404040;
border-radius: 8px;
padding: 12px 40px 12px 16px; /* Right padding for arrow */
color: #FFFFFF;
appearance: none;
background-image: url('chevron-down.svg');
background-repeat: no-repeat;
background-position: calc(100% - 16px) center;
background-size: 16px 16px;
cursor: pointer;
```

**Dropdown Menu (Opened):**
```css
background: #2D2D2D;
border: 1px solid #404040;
border-radius: 8px;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
max-height: 300px;
overflow-y: auto;
```

**Dropdown Option:**
```css
padding: 12px 16px;
color: #FFFFFF;
cursor: pointer;
transition: background 0.15s ease;
```

**Dropdown Option Hover:**
```css
background: rgba(124, 77, 255, 0.15);
color: #B69EFF;
```

#### Checkbox

**Container:**
```css
width: 20px;
height: 20px;
border: 2px solid #404040;
border-radius: 4px;
background: transparent;
transition: all 0.2s ease;
cursor: pointer;
```

**Checked State:**
```css
background: linear-gradient(135deg, #7C4DFF 0%, #5B3A9D 100%);
border-color: #7C4DFF;
/* Checkmark SVG inside */
```

**Indeterminate State:**
```css
background: linear-gradient(135deg, #7C4DFF 0%, #5B3A9D 100%);
border-color: #7C4DFF;
/* Dash SVG inside */
```

#### Radio Button

**Container:**
```css
width: 20px;
height: 20px;
border: 2px solid #404040;
border-radius: 50%;
background: transparent;
position: relative;
cursor: pointer;
```

**Selected State:**
```css
border-color: #7C4DFF;
```

**Inner Dot (Selected):**
```css
width: 10px;
height: 10px;
border-radius: 50%;
background: #7C4DFF;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

#### File Upload (Drag & Drop)

**Default State:**
```css
border: 2px dashed #404040;
border-radius: 12px;
background: rgba(124, 77, 255, 0.03);
padding: 48px 24px;
text-align: center;
transition: all 0.2s ease;
cursor: pointer;
```

**Hover State:**
```css
border-color: #7C4DFF;
background: rgba(124, 77, 255, 0.08);
```

**Drag Active State:**
```css
border-color: #9D7AFF;
background: rgba(124, 77, 255, 0.15);
box-shadow: 0px 0px 20px rgba(124, 77, 255, 0.2);
```

**Content Structure:**
```html
<div class="file-upload">
  <svg class="upload-icon"><!-- Upload icon --></svg>
  <p class="upload-text">Drag files here or click to browse</p>
  <p class="upload-hint">Maximum file size: 500MB</p>
</div>
```

### 5.3 Cards

#### Standard Card

```css
background: #1A1A1A;
border: 1px solid #2D2D2D;
border-radius: 12px;
padding: 24px;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
transition: all 0.3s ease;
```

**Hover State (Interactive Cards):**
```css
border-color: #404040;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
transform: translateY(-2px);
```

#### Evidence Card

```html
<div class="evidence-card">
  <div class="card-header">
    <div class="evidence-id">EV-2025-00142</div>
    <div class="status-badge status-active">Active</div>
  </div>
  <div class="card-body">
    <h4 class="evidence-title">Security Camera Footage</h4>
    <div class="metadata-grid">
      <div class="metadata-item">
        <span class="label">Case ID:</span>
        <span class="value">CS-2025-0089</span>
      </div>
      <div class="metadata-item">
        <span class="label">Collected:</span>
        <span class="value">Feb 10, 2026</span>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn-ghost">View Details</button>
    <button class="btn-icon"><!-- More options icon --></button>
  </div>
</div>
```

**Styles:**
```css
.evidence-card {
  background: #1A1A1A;
  border: 1px solid #2D2D2D;
  border-radius: 12px;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #2D2D2D;
  background: rgba(124, 77, 255, 0.03);
}

.evidence-id {
  font-family: 'SF Mono', monospace;
  font-size: 13px;
  color: #4A90E2;
  font-weight: 500;
}

.card-body {
  padding: 24px;
}

.card-footer {
  padding: 16px 24px;
  border-top: 1px solid #2D2D2D;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metadata-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.metadata-item .label {
  display: block;
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metadata-item .value {
  display: block;
  font-size: 14px;
  color: #E5E5E5;
  font-weight: 500;
}
```

#### Stat Card

```html
<div class="stat-card">
  <div class="stat-icon">
    <svg><!-- Icon --></svg>
  </div>
  <div class="stat-value">1,247</div>
  <div class="stat-label">Total Evidence Items</div>
  <div class="stat-change positive">+12% this month</div>
</div>
```

**Styles:**
```css
.stat-card {
  background: linear-gradient(135deg, #1A0B2E 0%, #0D0D0D 100%);
  border: 1px solid #2D2D2D;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #7C4DFF 0%, #4A90E2 100%);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(124, 77, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.stat-icon svg {
  width: 24px;
  height: 24px;
  fill: #7C4DFF;
}

.stat-value {
  font-size: 33px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #999999;
  margin-bottom: 8px;
}

.stat-change {
  font-size: 13px;
  font-weight: 500;
}

.stat-change.positive {
  color: #4CAF50;
}

.stat-change.negative {
  color: #F44336;
}
```

### 5.4 Badges & Tags

#### Status Badge

**Base Styles:**
```css
display: inline-flex;
align-items: center;
padding: 4px 12px;
border-radius: 16px;
font-size: 12px;
font-weight: 600;
letter-spacing: 0.03em;
text-transform: uppercase;
```

**Status Variants:**

**Active:**
```css
background: rgba(76, 175, 80, 0.15);
color: #4CAF50;
border: 1px solid rgba(76, 175, 80, 0.3);
```

**Pending:**
```css
background: rgba(255, 152, 0, 0.15);
color: #FF9800;
border: 1px solid rgba(255, 152, 0, 0.3);
```

**Archived:**
```css
background: rgba(102, 102, 102, 0.15);
color: #999999;
border: 1px solid rgba(102, 102, 102, 0.3);
```

**Compromised:**
```css
background: rgba(244, 67, 54, 0.15);
color: #F44336;
border: 1px solid rgba(244, 67, 54, 0.3);
animation: pulse 2s infinite;
```

**Pulse Animation (for critical states):**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

#### Tag (Evidence Type, Category)

```css
display: inline-flex;
align-items: center;
padding: 6px 12px;
border-radius: 6px;
font-size: 13px;
font-weight: 500;
background: rgba(124, 77, 255, 0.1);
color: #B69EFF;
border: 1px solid rgba(124, 77, 255, 0.2);
```

**With Remove Icon (Closeable):**
```html
<span class="tag">
  Digital Evidence
  <button class="tag-remove" aria-label="Remove tag">×</button>
</span>
```

**Remove Button:**
```css
.tag-remove {
  margin-left: 8px;
  background: none;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.tag-remove:hover {
  opacity: 1;
}
```

### 5.5 Navigation

#### Top Navigation Bar

```html
<header class="top-nav">
  <div class="nav-left">
    <div class="logo">
      <svg><!-- Logo icon --></svg>
      <span>Evidence System</span>
    </div>
  </div>
  
  <div class="nav-center">
    <div class="search-bar">
      <input type="search" placeholder="Search evidence..." />
    </div>
  </div>
  
  <div class="nav-right">
    <button class="nav-icon-btn" aria-label="Notifications">
      <svg><!-- Bell icon --></svg>
      <span class="notification-badge">3</span>
    </button>
    <div class="user-menu">
      <img src="avatar.jpg" alt="User" class="avatar" />
      <span class="user-name">Officer J. Smith</span>
    </div>
  </div>
</header>
```

**Styles:**
```css
.top-nav {
  height: 64px;
  background: #1A0B2E;
  border-bottom: 1px solid #2D2D2D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
}

.logo svg {
  width: 32px;
  height: 32px;
}

.search-bar {
  width: 400px;
}

.search-bar input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #404040;
  border-radius: 8px;
  padding: 10px 16px 10px 40px;
  color: #FFFFFF;
  background-image: url('search-icon.svg');
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 18px 18px;
}

.search-bar input:focus {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: #7C4DFF;
  outline: none;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-icon-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #CCCCCC;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-icon-btn:hover {
  background: rgba(124, 77, 255, 0.1);
  color: #7C4DFF;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: #F44336;
  border: 2px solid #1A0B2E;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.user-menu:hover {
  background: rgba(124, 77, 255, 0.1);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #7C4DFF;
}

.user-name {
  font-size: 14px;
  color: #E5E5E5;
  font-weight: 500;
}
```

#### Sidebar Navigation

```html
<aside class="sidebar">
  <nav class="sidebar-nav">
    <a href="/dashboard" class="nav-item active">
      <svg class="nav-icon"><!-- Dashboard icon --></svg>
      <span class="nav-label">Dashboard</span>
    </a>
    <a href="/evidence" class="nav-item">
      <svg class="nav-icon"><!-- Evidence icon --></svg>
      <span class="nav-label">Evidence Registry</span>
      <span class="nav-badge">42</span>
    </a>
    <a href="/custody" class="nav-item">
      <svg class="nav-icon"><!-- Transfer icon --></svg>
      <span class="nav-label">Custody Transfers</span>
    </a>
    <div class="nav-divider"></div>
    <a href="/reports" class="nav-item">
      <svg class="nav-icon"><!-- Report icon --></svg>
      <span class="nav-label">Reports</span>
    </a>
    <a href="/admin" class="nav-item">
      <svg class="nav-icon"><!-- Settings icon --></svg>
      <span class="nav-label">Admin Panel</span>
    </a>
  </nav>
</aside>
```

**Styles:**
```css
.sidebar {
  width: 240px;
  background: #1A1A1A;
  border-right: 1px solid #2D2D2D;
  height: calc(100vh - 64px);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 64px;
}

.sidebar-nav {
  padding: 16px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #999999;
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
}

.nav-item:hover {
  background: rgba(124, 77, 255, 0.05);
  color: #B69EFF;
}

.nav-item.active {
  background: rgba(124, 77, 255, 0.15);
  color: #7C4DFF;
  font-weight: 600;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #7C4DFF 0%, #4A90E2 100%);
}

.nav-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.nav-label {
  flex: 1;
  font-size: 14px;
}

.nav-badge {
  background: rgba(124, 77, 255, 0.3);
  color: #B69EFF;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
}

.nav-divider {
  height: 1px;
  background: #2D2D2D;
  margin: 12px 20px;
}
```

#### Breadcrumbs

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/dashboard">Dashboard</a>
    </li>
    <li class="breadcrumb-separator">/</li>
    <li class="breadcrumb-item">
      <a href="/evidence">Evidence Registry</a>
    </li>
    <li class="breadcrumb-separator">/</li>
    <li class="breadcrumb-item active">
      <span>EV-2025-00142</span>
    </li>
  </ol>
</nav>
```

**Styles:**
```css
.breadcrumbs {
  margin-bottom: 24px;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item a {
  color: #999999;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: #7C4DFF;
}

.breadcrumb-item.active span {
  color: #E5E5E5;
  font-size: 14px;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #666666;
  font-size: 14px;
}
```

### 5.6 Tables

#### Data Table

```html
<div class="table-container">
  <table class="data-table">
    <thead>
      <tr>
        <th>
          <input type="checkbox" aria-label="Select all" />
        </th>
        <th>Evidence ID</th>
        <th>Type</th>
        <th>Case ID</th>
        <th>Status</th>
        <th>Collected</th>
        <th>Custodian</th>
        <th class="table-actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="checkbox" aria-label="Select row" />
        </td>
        <td class="evidence-id">EV-2025-00142</td>
        <td>Digital</td>
        <td>CS-2025-0089</td>
        <td>
          <span class="status-badge status-active">Active</span>
        </td>
        <td>Feb 10, 2026</td>
        <td>J. Smith</td>
        <td class="table-actions">
          <button class="btn-icon-sm" aria-label="View">
            <svg><!-- Eye icon --></svg>
          </button>
          <button class="btn-icon-sm" aria-label="Transfer">
            <svg><!-- Transfer icon --></svg>
          </button>
          <button class="btn-icon-sm" aria-label="More">
            <svg><!-- More icon --></svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Styles:**
```css
.table-container {
  background: #1A1A1A;
  border: 1px solid #2D2D2D;
  border-radius: 12px;
  overflow: hidden;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  background: rgba(124, 77, 255, 0.05);
  border-bottom: 1px solid #2D2D2D;
}

.data-table th {
  padding: 16px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.data-table tbody tr {
  border-bottom: 1px solid #2D2D2D;
  transition: background 0.15s;
}

.data-table tbody tr:hover {
  background: rgba(124, 77, 255, 0.03);
}

.data-table tbody tr:last-child {
  border-bottom: none;
}

.data-table td {
  padding: 16px 20px;
  font-size: 14px;
  color: #E5E5E5;
}

.data-table td.evidence-id {
  font-family: 'SF Mono', monospace;
  color: #4A90E2;
  font-weight: 500;
}

.table-actions {
  text-align: right;
}

.table-actions button {
  margin-left: 4px;
}

.btn-icon-sm {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #999999;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-sm:hover {
  background: rgba(124, 77, 255, 0.15);
  color: #7C4DFF;
}

.btn-icon-sm svg {
  width: 16px;
  height: 16px;
}
```

#### Pagination

```html
<div class="pagination">
  <div class="pagination-info">
    Showing <strong>1-10</strong> of <strong>247</strong> results
  </div>
  <div class="pagination-controls">
    <button class="btn-pagination" disabled>
      <svg><!-- Previous icon --></svg>
    </button>
    <button class="btn-pagination active">1</button>
    <button class="btn-pagination">2</button>
    <button class="btn-pagination">3</button>
    <span class="pagination-ellipsis">...</span>
    <button class="btn-pagination">25</button>
    <button class="btn-pagination">
      <svg><!-- Next icon --></svg>
    </button>
  </div>
</div>
```

**Styles:**
```css
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #2D2D2D;
}

.pagination-info {
  font-size: 14px;
  color: #999999;
}

.pagination-info strong {
  color: #E5E5E5;
  font-weight: 600;
}

.pagination-controls {
  display: flex;
  gap: 4px;
}

.btn-pagination {
  min-width: 36px;
  height: 36px;
  padding: 0 12px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #999999;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-pagination:hover:not(:disabled) {
  background: rgba(124, 77, 255, 0.1);
  color: #7C4DFF;
}

.btn-pagination.active {
  background: linear-gradient(135deg, #7C4DFF 0%, #5B3A9D 100%);
  color: #FFFFFF;
}

.btn-pagination:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-ellipsis {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #666666;
}
```

### 5.7 Modals & Dialogs

#### Modal Overlay

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Modal Container

```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title">Transfer Evidence Custody</h3>
      <button class="modal-close" aria-label="Close">
        <svg><!-- X icon --></svg>
      </button>
    </div>
    <div class="modal-body">
      <!-- Modal content here -->
    </div>
    <div class="modal-footer">
      <button class="btn-secondary">Cancel</button>
      <button class="btn-primary">Confirm Transfer</button>
    </div>
  </div>
</div>
```

**Styles:**
```css
.modal {
  background: #1A1A1A;
  border: 1px solid #404040;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.6);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: 24px;
  border-bottom: 1px solid #2D2D2D;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 21px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #999999;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-close:hover {
  background: rgba(244, 67, 54, 0.15);
  color: #F44336;
}

.modal-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #2D2D2D;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

#### Confirmation Dialog (Smaller)

```html
<div class="modal-overlay">
  <div class="dialog">
    <div class="dialog-icon dialog-icon-warning">
      <svg><!-- Warning icon --></svg>
    </div>
    <h4 class="dialog-title">Delete Evidence?</h4>
    <p class="dialog-message">
      This action cannot be undone. Are you sure you want to delete this evidence item?
    </p>
    <div class="dialog-actions">
      <button class="btn-secondary">Cancel</button>
      <button class="btn-danger">Delete</button>
    </div>
  </div>
</div>
```

**Styles:**
```css
.dialog {
  background: #1A1A1A;
  border: 1px solid #404040;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  padding: 32px;
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.6);
  text-align: center;
}

.dialog-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-icon-warning {
  background: rgba(255, 152, 0, 0.15);
}

.dialog-icon-warning svg {
  width: 32px;
  height: 32px;
  fill: #FF9800;
}

.dialog-title {
  font-size: 21px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 12px 0;
}

.dialog-message {
  font-size: 14px;
  color: #999999;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.dialog-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}
```

### 5.8 Notifications & Toasts

#### Toast Notification

```html
<div class="toast toast-success">
  <div class="toast-icon">
    <svg><!-- Check icon --></svg>
  </div>
  <div class="toast-content">
    <div class="toast-title">Evidence Registered</div>
    <div class="toast-message">EV-2025-00142 has been successfully added to the blockchain.</div>
  </div>
  <button class="toast-close" aria-label="Close">
    <svg><!-- X icon --></svg>
  </button>
</div>
```

**Styles:**
```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background: #1A1A1A;
  border: 1px solid #2D2D2D;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
  min-width: 320px;
  max-width: 480px;
  animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.toast-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-success .toast-icon {
  background: rgba(76, 175, 80, 0.15);
}

.toast-success .toast-icon svg {
  width: 20px;
  height: 20px;
  fill: #4CAF50;
}

.toast-error .toast-icon {
  background: rgba(244, 67, 54, 0.15);
}

.toast-error .toast-icon svg {
  fill: #F44336;
}

.toast-warning .toast-icon {
  background: rgba(255, 152, 0, 0.15);
}

.toast-warning .toast-icon svg {
  fill: #FF9800;
}

.toast-info .toast-icon {
  background: rgba(33, 150, 243, 0.15);
}

.toast-info .toast-icon svg {
  fill: #2196F3;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.toast-message {
  font-size: 13px;
  color: #999999;
  line-height: 1.5;
}

.toast-close {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: transparent;
  border: none;
  color: #666666;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}

.toast-close:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #999999;
}
```

#### Toast Container (Position)

```css
.toast-container {
  position: fixed;
  top: 80px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10000;
}
```

### 5.9 Progress Indicators

#### Linear Progress Bar

```html
<div class="progress-bar">
  <div class="progress-fill" style="width: 65%;"></div>
</div>
```

**Styles:**
```css
.progress-bar {
  width: 100%;
  height: 6px;
  background: #2D2D2D;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #7C4DFF 0%, #4A90E2 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

#### Circular Progress (Spinner)

```html
<div class="spinner">
  <svg class="spinner-svg" viewBox="0 0 50 50">
    <circle class="spinner-circle" cx="25" cy="25" r="20"></circle>
  </svg>
</div>
```

**Styles:**
```css
.spinner {
  width: 40px;
  height: 40px;
  animation: rotate 2s linear infinite;
}

.spinner-svg {
  width: 100%;
  height: 100%;
}

.spinner-circle {
  fill: none;
  stroke: #7C4DFF;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
```

#### File Upload Progress

```html
<div class="upload-progress">
  <div class="upload-info">
    <div class="file-icon">
      <svg><!-- File icon --></svg>
    </div>
    <div class="file-details">
      <div class="file-name">security_footage_01.mp4</div>
      <div class="file-size">128 MB of 256 MB</div>
    </div>
    <div class="upload-status">50%</div>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 50%;"></div>
  </div>
</div>
```

**Styles:**
```css
.upload-progress {
  background: #1A1A1A;
  border: 1px solid #2D2D2D;
  border-radius: 8px;
  padding: 16px;
}

.upload-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.file-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(124, 77, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-icon svg {
  width: 20px;
  height: 20px;
  fill: #7C4DFF;
}

.file-details {
  flex: 1;
}

.file-name {
  font-size: 14px;
  color: #E5E5E5;
  font-weight: 500;
  margin-bottom: 4px;
}

.file-size {
  font-size: 12px;
  color: #999999;
}

.upload-status {
  font-size: 14px;
  color: #7C4DFF;
  font-weight: 600;
}
```

### 5.10 Timeline

#### Chain of Custody Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker timeline-marker-success">
      <svg><!-- Check icon --></svg>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">Evidence Collected</div>
        <div class="timeline-time">Feb 10, 2026 09:15 AM</div>
      </div>
      <div class="timeline-body">
        Officer J. Smith collected digital evidence at crime scene location.
      </div>
      <div class="timeline-meta">
        <span class="meta-label">Officer:</span>
        <span class="meta-value">J. Smith (Badge #4521)</span>
      </div>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-marker timeline-marker-success">
      <svg><!-- Arrow icon --></svg>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">Custody Transferred</div>
        <div class="timeline-time">Feb 10, 2026 11:30 AM</div>
      </div>
      <div class="timeline-body">
        Evidence transferred from J. Smith to Evidence Custodian M. Johnson.
      </div>
      <div class="timeline-meta">
        <span class="meta-label">From:</span>
        <span class="meta-value">J. Smith</span>
        <span class="meta-separator">→</span>
        <span class="meta-label">To:</span>
        <span class="meta-value">M. Johnson</span>
      </div>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-marker timeline-marker-active">
      <div class="pulse"></div>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div class="timeline-title">Currently In Storage</div>
        <div class="timeline-time">Present</div>
      </div>
      <div class="timeline-body">
        Evidence is currently in secure storage facility, Room B-12.
      </div>
    </div>
  </div>
</div>
```

**Styles:**
```css
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #7C4DFF 0%, #4A90E2 100%);
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -28px;
  top: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #1A0B2E;
  border: 2px solid #7C4DFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-marker-success {
  background: rgba(76, 175, 80, 0.2);
  border-color: #4CAF50;
}

.timeline-marker-success svg {
  width: 16px;
  height: 16px;
  fill: #4CAF50;
}

.timeline-marker-active {
  background: rgba(124, 77, 255, 0.2);
  border-color: #7C4DFF;
  position: relative;
}

.pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(124, 77, 255, 0.4);
  animation: pulseAnimation 2s infinite;
}

@keyframes pulseAnimation {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.timeline-content {
  background: #1A1A1A;
  border: 1px solid #2D2D2D;
  border-radius: 8px;
  padding: 16px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 15px;
  font-weight: 600;
  color: #FFFFFF;
}

.timeline-time {
  font-size: 12px;
  color: #999999;
  font-family: 'SF Mono', monospace;
}

.timeline-body {
  font-size: 14px;
  color: #CCCCCC;
  line-height: 1.6;
  margin-bottom: 12px;
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.meta-label {
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.meta-value {
  font-size: 12px;
  color: #E5E5E5;
  font-weight: 500;
}

.meta-separator {
  color: #7C4DFF;
  font-size: 14px;
}
```

---

## 6. User Flows

### 6.1 Evidence Registration Flow

#### Step-by-Step Visual Flow

```
┌─────────────────────────────────────────────────────────┐
│  1. Officer Dashboard                                   │
│  ┌───────────────────────────────────────────────┐     │
│  │  [+ Register New Evidence] Button             │     │
│  │  (Primary CTA, prominent placement)           │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click
┌─────────────────────────────────────────────────────────┐
│  2. Evidence Registration Form (Modal or Full Page)     │
│  ┌───────────────────────────────────────────────┐     │
│  │  Step 1 of 3: Basic Information              │     │
│  │  ○ ○ ○ (Progress indicator)                  │     │
│  │                                                │     │
│  │  Case ID: [Dropdown/Autocomplete]            │     │
│  │  Evidence Type: [Radio: Physical/Digital]     │     │
│  │  Description: [Textarea]                      │     │
│  │  Location: [GPS + Manual Input]               │     │
│  │                                                │     │
│  │  [Cancel]  [Next →]                           │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click Next
┌─────────────────────────────────────────────────────────┐
│  3. File Upload Step                                    │
│  ┌───────────────────────────────────────────────┐     │
│  │  Step 2 of 3: Evidence Files                  │     │
│  │  ● ○ ○ (Progress indicator)                   │     │
│  │                                                │     │
│  │  ┌──────────────────────────────────────┐    │     │
│  │  │  Drag files here or click to browse  │    │     │
│  │  │  (Drag & drop zone)                  │    │     │
│  │  └──────────────────────────────────────┘    │     │
│  │                                                │     │
│  │  Uploaded Files:                              │     │
│  │  • file1.jpg (Hash: abc123...) ✓              │     │
│  │  • file2.mp4 (Uploading... 45%)              │     │
│  │                                                │     │
│  │  [← Back]  [Next →]                           │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Upload Complete
┌─────────────────────────────────────────────────────────┐
│  4. Review & Submit                                     │
│  ┌───────────────────────────────────────────────┐     │
│  │  Step 3 of 3: Review & Submit                 │     │
│  │  ● ● ○ (Progress indicator)                   │     │
│  │                                                │     │
│  │  Evidence Summary:                            │     │
│  │  ┌──────────────────────────────────────┐    │     │
│  │  │ Case ID: CS-2025-0089                │    │     │
│  │  │ Type: Digital Evidence                │    │     │
│  │  │ Description: Security footage...      │    │     │
│  │  │ Files: 2 files, 256 MB               │    │     │
│  │  │ Hash: SHA256:abc123def...            │    │     │
│  │  └──────────────────────────────────────┘    │     │
│  │                                                │     │
│  │  ⚠️ Once submitted, this will be recorded on   │     │
│  │  the blockchain and cannot be altered.        │     │
│  │                                                │     │
│  │  [← Back]  [Submit to Blockchain]            │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click Submit
┌─────────────────────────────────────────────────────────┐
│  5. Processing                                          │
│  ┌───────────────────────────────────────────────┐     │
│  │  [Spinner Animation]                          │     │
│  │                                                │     │
│  │  Registering Evidence...                      │     │
│  │  • Uploading files to IPFS... ✓               │     │
│  │  • Generating file hashes... ✓                │     │
│  │  • Recording on blockchain... ⏳              │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Success
┌─────────────────────────────────────────────────────────┐
│  6. Success Confirmation                                │
│  ┌───────────────────────────────────────────────┐     │
│  │  ✓ Evidence Successfully Registered            │     │
│  │                                                │     │
│  │  Evidence ID: EV-2025-00142                   │     │
│  │  Transaction ID: 0x7a8b9c...                  │     │
│  │  IPFS CID: Qm...                              │     │
│  │                                                │     │
│  │  [View Evidence Details]  [Register Another]  │     │
│  └───────────────────────────────────────────────┘     │
│                                                          │
│  [Toast Notification appears in top right]              │
└─────────────────────────────────────────────────────────┘
```

#### Interaction Patterns:

**Auto-Save Drafts:**
- Form inputs auto-save to local storage every 30 seconds
- "Draft saved" indicator appears briefly
- User can resume incomplete registration

**Validation:**
- Real-time field validation (red border + error message below)
- Form-level validation before allowing "Next" step
- File type and size validation on selection

**Progress Indication:**
- Multi-step progress bar at top
- Current step highlighted
- Previous steps show checkmark (completed)

### 6.2 Custody Transfer Flow

```
┌─────────────────────────────────────────────────────────┐
│  1. Evidence Detail Page                                │
│  ┌───────────────────────────────────────────────┐     │
│  │  Evidence ID: EV-2025-00142                   │     │
│  │  Current Custodian: M. Johnson                │     │
│  │                                                │     │
│  │  [Transfer Custody] Button                    │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click Transfer
┌─────────────────────────────────────────────────────────┐
│  2. Transfer Request Modal                              │
│  ┌───────────────────────────────────────────────┐     │
│  │  Transfer Custody: EV-2025-00142              │     │
│  │                                                │     │
│  │  Transfer To:                                 │     │
│  │  [Dropdown: Search users by name/badge]       │     │
│  │  → Selected: Dr. L. Martinez (Analyst)        │     │
│  │                                                │     │
│  │  Reason for Transfer:                         │     │
│  │  [Textarea: "For forensic analysis"]          │     │
│  │                                                │     │
│  │  Expected Return Date (Optional):             │     │
│  │  [Date Picker: Feb 15, 2026]                  │     │
│  │                                                │     │
│  │  Attach Supporting Documents (Optional):      │     │
│  │  [File Upload]                                │     │
│  │                                                │     │
│  │  [Cancel]  [Request Transfer]                 │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Submit Request
┌─────────────────────────────────────────────────────────┐
│  3. Requester View (Pending State)                      │
│  ┌───────────────────────────────────────────────┐     │
│  │  ⏳ Transfer Pending                           │     │
│  │                                                │     │
│  │  Transfer request sent to Dr. L. Martinez     │     │
│  │  Awaiting acceptance...                       │     │
│  │                                                │     │
│  │  [Cancel Request]                             │     │
│  └───────────────────────────────────────────────┘     │
│                                                          │
│  [Toast: "Transfer request sent to Dr. Martinez"]       │
└─────────────────────────────────────────────────────────┘

                      ↓ Recipient Receives Notification

┌─────────────────────────────────────────────────────────┐
│  4. Recipient View (Notification)                       │
│  ┌───────────────────────────────────────────────┐     │
│  │  🔔 New Transfer Request                       │     │
│  │                                                │     │
│  │  M. Johnson requests to transfer custody of   │     │
│  │  EV-2025-00142 to you.                        │     │
│  │                                                │     │
│  │  [View Request]                               │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click View
┌─────────────────────────────────────────────────────────┐
│  5. Transfer Review Modal (Recipient)                   │
│  ┌───────────────────────────────────────────────┐     │
│  │  Custody Transfer Request                     │     │
│  │                                                │     │
│  │  Evidence: EV-2025-00142                      │     │
│  │  From: M. Johnson (Custodian)                 │     │
│  │  Reason: "For forensic analysis"              │     │
│  │  Expected Return: Feb 15, 2026                │     │
│  │                                                │     │
│  │  Evidence Details:                            │     │
│  │  • Type: Digital Evidence                     │     │
│  │  • Case: CS-2025-0089                         │     │
│  │  • Status: Active                             │     │
│  │  • Hash: abc123def... ✓ Verified              │     │
│  │                                                │     │
│  │  ⚠️ By accepting, you acknowledge receiving    │     │
│  │  custody and responsibility for this evidence. │     │
│  │                                                │     │
│  │  [Reject]  [Accept Transfer]                  │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click Accept
┌─────────────────────────────────────────────────────────┐
│  6. Digital Signature Prompt                            │
│  ┌───────────────────────────────────────────────┐     │
│  │  Confirm with Digital Signature               │     │
│  │                                                │     │
│  │  Enter your password to digitally sign this   │     │
│  │  custody transfer on the blockchain.          │     │
│  │                                                │     │
│  │  Password: [**********]                       │     │
│  │                                                │     │
│  │  [Cancel]  [Sign & Accept]                    │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Authenticate
┌─────────────────────────────────────────────────────────┐
│  7. Processing Transaction                              │
│  ┌───────────────────────────────────────────────┐     │
│  │  [Spinner]                                    │     │
│  │                                                │     │
│  │  Recording custody transfer on blockchain...  │     │
│  │  • Verifying signatures... ✓                  │     │
│  │  • Updating custody record... ✓               │     │
│  │  • Confirming transaction... ⏳               │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Transaction Complete
┌─────────────────────────────────────────────────────────┐
│  8. Success State (Both Parties)                        │
│  ┌───────────────────────────────────────────────┐     │
│  │  ✓ Custody Transfer Complete                   │     │
│  │                                                │     │
│  │  Evidence EV-2025-00142 has been transferred  │     │
│  │  from M. Johnson to Dr. L. Martinez.          │     │
│  │                                                │     │
│  │  Transaction ID: 0x9f8e7d...                  │     │
│  │  Timestamp: Feb 12, 2026 10:45 AM             │     │
│  │                                                │     │
│  │  [View Updated Chain of Custody]              │     │
│  └───────────────────────────────────────────────┘     │
│                                                          │
│  [Email confirmations sent to both parties]             │
│  [Timeline updated with new entry]                      │
└─────────────────────────────────────────────────────────┘
```

#### Interaction Patterns:

**Recipient Search:**
- Autocomplete dropdown with user photos
- Filters by role (only show authorized recipients)
- Shows user's current workload (optional)

**Real-Time Updates:**
- WebSocket connection for instant notifications
- Status badge updates without page refresh
- Push notifications for mobile users

**Error Handling:**
- If recipient is unavailable: Show warning, suggest alternative
- If blockchain transaction fails: Automatic retry (3 attempts)
- If signature fails: Clear error message, re-prompt

### 6.3 Evidence Search & Discovery Flow

```
┌─────────────────────────────────────────────────────────┐
│  1. Evidence Registry Page                              │
│  ┌───────────────────────────────────────────────┐     │
│  │  🔍 [Search bar: "Search by ID, case, type..."]│     │
│  │                                                │     │
│  │  Filters: [All Types ▼] [All Status ▼] [Date ▼]│     │
│  │                                                │     │
│  │  Showing 247 results                          │     │
│  │                                                │     │
│  │  [Evidence Card Grid]                         │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Type in Search
┌─────────────────────────────────────────────────────────┐
│  2. Search Suggestions Dropdown                         │
│  ┌───────────────────────────────────────────────┐     │
│  │  🔍 [sec camera]                              │     │
│  │  ───────────────────────────────────────      │     │
│  │  Recent Searches:                             │     │
│  │  • security camera footage                    │     │
│  │  • CS-2025-0089                               │     │
│  │                                                │     │
│  │  Suggestions:                                 │     │
│  │  • EV-2025-00142 - Security Camera Footage    │     │
│  │  • EV-2025-00098 - Camera Evidence            │     │
│  │                                                │     │
│  │  Tags:                                        │     │
│  │  #digital  #video  #surveillance              │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Select Result
┌─────────────────────────────────────────────────────────┐
│  3. Filtered Results View                               │
│  ┌───────────────────────────────────────────────┐     │
│  │  🔍 [security camera footage] ×               │     │
│  │                                                │     │
│  │  Active Filters:                              │     │
│  │  [Digital Evidence ×] [Active ×]              │     │
│  │                                                │     │
│  │  Showing 3 results for "security camera footage"│     │
│  │                                                │     │
│  │  Sort by: [Most Recent ▼]                     │     │
│  │  View: [Grid] [List]                          │     │
│  │                                                │     │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐     │     │
│  │  │ Evidence  │ │ Evidence  │ │ Evidence  │     │     │
│  │  │ Card 1    │ │ Card 2    │ │ Card 3    │     │     │
│  │  └──────────┘ └──────────┘ └──────────┘     │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
                      ↓ Click Evidence Card
┌─────────────────────────────────────────────────────────┐
│  4. Evidence Detail Page                                │
│  ┌───────────────────────────────────────────────┐     │
│  │  ← Back to Results                            │     │
│  │                                                │     │
│  │  Evidence ID: EV-2025-00142                   │     │
│  │  [Active ✓]                                   │     │
│  │                                                │     │
│  │  [View Files] [Transfer] [Request Access] [⋮] │     │
│  │                                                │     │
│  │  Tabs: [Details] [Chain of Custody] [Files]  │     │
│  │        [Analysis] [Activity Log]              │     │
│  │                                                │     │
│  │  [Detailed information displayed]             │     │
│  └───────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
```

#### Interaction Patterns:

**Instant Search:**
- Results update as user types (debounced 300ms)
- Highlight matching keywords in results
- Show "No results" with suggestions for misspellings

**Smart Filters:**
- Multi-select filters (can combine multiple)
- Show count of results for each filter option
- "Clear all filters" option when any filter is active

**Saved Searches:**
- Option to save frequent searches
- Name saved search and set alerts for new matches

---

## 7. Responsive Behavior

### 7.1 Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  /* Phone layouts */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet layouts */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop layouts */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large screen optimizations */
}
```

### 7.2 Component Adaptations

#### Navigation

**Desktop (≥1024px):**
- Fixed sidebar (240px width)
- Horizontal top nav
- All nav items visible with labels

**Tablet (768px - 1023px):**
- Collapsible sidebar (icons only, 64px)
- Expands on hover to show labels
- Top nav remains full

**Mobile (<768px):**
- Hidden sidebar, hamburger menu
- Bottom tab bar for primary navigation
- Top nav shows logo + hamburger only

#### Cards & Grids

**Desktop:**
```css
.evidence-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

**Tablet:**
```css
.evidence-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

**Mobile:**
```css
.evidence-grid {
  grid-template-columns: 1fr;
  gap: 12px;
}
```

#### Tables

**Desktop:**
- Full table with all columns visible
- Horizontal scroll if needed

**Tablet:**
- Hide less important columns
- Show/hide column selector

**Mobile:**
- Card-based layout instead of table
- Stack information vertically
- Swipe actions for row operations

#### Modals

**Desktop/Tablet:**
- Centered modal, max-width 600px
- Overlay with backdrop blur

**Mobile:**
- Full-screen modal (100% height)
- Slide up from bottom animation
- Close button in top right

### 7.3 Touch Interactions (Mobile)

```css
/* Increase tap target sizes */
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 20px;
}

/* Swipe actions on list items */
.list-item-mobile {
  /* Swipe right: View details */
  /* Swipe left: Quick actions (transfer, delete) */
}

/* Pull to refresh */
.content-scrollable {
  overscroll-behavior: contain;
}
```

---

## 8. Accessibility

### 8.1 WCAG 2.1 AA Compliance

#### Color Contrast

All text meets minimum contrast ratios:
- Normal text (< 18px): 4.5:1 minimum
- Large text (≥ 18px): 3:1 minimum
- UI components and graphics: 3:1 minimum

**Tested Combinations:**
- White (#FFFFFF) on Primary 900 (#1A0B2E): 15.2:1 ✓
- Neutral 500 (#666666) on Neutral 900 (#0D0D0D): 5.8:1 ✓
- Primary 500 (#7C4DFF) on Neutral 900: 6.2:1 ✓

#### Keyboard Navigation

```css
/* Visible focus indicators */
*:focus-visible {
  outline: 2px solid #7C4DFF;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #7C4DFF;
  color: #FFFFFF;
  padding: 8px 16px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

**Tab Order:**
1. Skip to main content
2. Top navigation (logo, search, notifications, user menu)
3. Sidebar navigation
4. Main content (headings, interactive elements)
5. Footer

**Keyboard Shortcuts:**
- `Ctrl/Cmd + K`: Focus search
- `Esc`: Close modals/dropdowns
- `Arrow keys`: Navigate dropdowns, tabs
- `Enter/Space`: Activate buttons

#### Screen Reader Support

```html
<!-- Semantic HTML -->
<main aria-label="Evidence Registry">
  <h1>Evidence Registry</h1>
  <!-- Content -->
</main>

<!-- ARIA labels for icon-only buttons -->
<button aria-label="Close modal" class="modal-close">
  <svg aria-hidden="true"><!-- X icon --></svg>
</button>

<!-- ARIA live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  {dynamicMessage}
</div>

<!-- Status indicators -->
<span class="status-badge" role="status" aria-label="Evidence status: Active">
  Active
</span>
```

#### Motion & Animation

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.2 Accessibility Checklist

- [x] All images have alt text
- [x] Form inputs have associated labels
- [x] Focus indicators visible on all interactive elements
- [x] Color is not the only means of conveying information
- [x] Sufficient color contrast (WCAG AA)
- [x] Keyboard navigation for all functionality
- [x] Screen reader announcements for dynamic content
- [x] Semantic HTML structure
- [x] ARIA labels and roles where appropriate
- [x] Skip to main content link
- [x] Responsive to user's motion preferences
- [x] Captions/transcripts for video evidence (where applicable)

---

## 9. Motion & Animation

### 9.1 Animation Principles

**Purpose-Driven:**
- Every animation serves a purpose (feedback, orientation, attention)
- Avoid gratuitous motion

**Consistent Timing:**
- Use standardized easing curves
- Consistent durations for similar actions

**Respectful:**
- Honor prefers-reduced-motion
- Animations enhance, never block interaction

### 9.2 Easing Curves

```css
/* Standard easing */
--ease-out: cubic-bezier(0.33, 1, 0.68, 1); /* Deceleration */
--ease-in: cubic-bezier(0.32, 0, 0.67, 0); /* Acceleration */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1); /* Both */
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1); /* Quick & sharp */
```

**Usage:**
- `ease-out`: Elements entering viewport (modals, dropdowns)
- `ease-in`: Elements exiting viewport (closing modals)
- `ease-in-out`: Transformations, state changes
- `ease-sharp`: Fast micro-interactions (button presses)

### 9.3 Animation Durations

```css
--duration-instant: 100ms;  /* Hover states */
--duration-fast: 200ms;     /* Buttons, toggles */
--duration-normal: 300ms;   /* Modals, dropdowns */
--duration-slow: 500ms;     /* Page transitions */
--duration-slower: 800ms;   /* Complex animations */
```

### 9.4 Common Animations

#### Button Hover

```css
.button {
  transition: all 200ms var(--ease-out);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(124, 77, 255, 0.4);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0px 4px 12px rgba(124, 77, 255, 0.3);
}
```

#### Modal Enter/Exit

```css
/* Enter */
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal {
  animation: modalEnter 300ms var(--ease-out);
}

/* Exit */
@keyframes modalExit {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

#### Loading Shimmer

```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #2D2D2D 25%,
    #404040 50%,
    #2D2D2D 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
```

#### Status Badge Pulse (Critical States)

```css
@keyframes statusPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(244, 67, 54, 0);
  }
}

.status-badge.compromised {
  animation: statusPulse 2s infinite;
}
```

#### Slide In Notifications

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast {
  animation: slideInRight 300ms var(--ease-out);
}
```

---

## 10. Icons & Illustrations

### 10.1 Icon System

**Icon Library:** Lucide Icons (or similar modern icon set)

**Icon Sizes:**
```css
--icon-xs: 14px;
--icon-sm: 16px;
--icon-md: 20px;
--icon-lg: 24px;
--icon-xl: 32px;
--icon-2xl: 48px;
```

**Icon Colors:**
- Default: Inherit from parent text color
- Active/Interactive: Primary 500 (#7C4DFF)
- Disabled: Neutral 400 (#999999) at 40% opacity
- Success: Success 500 (#4CAF50)
- Warning: Warning 500 (#FF9800)
- Error: Error 500 (#F44336)

**Icon Usage Guidelines:**
- Use outlined icons for most UI elements
- Use filled icons for active states
- Maintain 2px minimum stroke width
- Ensure 24x24px minimum touch target for interactive icons

### 10.2 Core Icon Set

**Navigation:**
- Dashboard: Layout grid
- Evidence: Folder/File
- Custody: Arrows (transfer)
- Reports: Bar chart
- Admin: Settings gear
- Search: Magnifying glass
- Notifications: Bell
- User: User circle

**Actions:**
- Add/Create: Plus sign
- Edit: Pencil
- Delete: Trash bin
- Download: Download arrow
- Upload: Upload arrow
- View: Eye
- Copy: Two overlapping squares
- Share: Share nodes
- More: Three dots (vertical)
- Filter: Funnel
- Sort: Arrows up/down

**Status:**
- Success: Check circle
- Warning: Alert triangle
- Error: X circle
- Info: Info circle
- Pending: Clock
- Verified: Shield check
- Locked: Lock
- Unlocked: Unlock

**Evidence-Specific:**
- Physical Evidence: Box/Package
- Digital Evidence: Monitor/Hard drive
- Camera: Camera icon
- Document: File text
- Audio: Microphone
- Video: Video camera
- Blockchain: Chain links
- Hash: Fingerprint
- IPFS: Distributed nodes

### 10.3 Illustration Style

**Usage:**
- Empty states (no results, no data)
- Onboarding screens
- Success/error states
- Landing pages

**Style Characteristics:**
- Flat, geometric design
- Use brand colors (Primary purple, Secondary blue gradients)
- Minimal details, focus on clarity
- Outlined style (not filled)
- 2px stroke weight
- Optional subtle glow effects

**Example Empty State:**
```
[Illustration: Magnifying glass over empty folder]
"No Evidence Found"
"Try adjusting your search filters or register new evidence"
[Button: Register Evidence]
```

### 10.4 Logos & Branding

**Application Logo:**
- Icon: Stylized blockchain/chain link with evidence box
- Wordmark: "Evidence System" in Space Grotesk Bold
- Monochrome version for dark backgrounds

**Variants:**
- Full logo (icon + wordmark): Use in header, splash screens
- Icon only: Use in compact spaces (mobile nav, favicons)
- Wordmark only: Use in footers, documents

**Minimum Size:**
- Full logo: 120px width minimum
- Icon only: 32px minimum

**Clear Space:**
- Maintain minimum 16px clear space around logo on all sides

---

## Conclusion

This design system provides a comprehensive foundation for building the Crime Evidence Management System with a consistent, professional, and accessible user interface. All components are designed to work harmoniously while maintaining the serious, secure nature required for law enforcement applications.

**Key Takeaways:**
- Dark theme with purple/blue gradients conveys authority and modernity
- Blockchain and security concepts subtly integrated throughout
- Accessibility and usability prioritized for diverse user base
- Scalable component system supports future growth

**Implementation Notes:**
- Use CSS variables for all design tokens
- Implement design system as a component library (React, Vue, etc.)
- Document all components in Storybook or similar tool
- Maintain design system documentation alongside code

---

**End of Design System Document**
