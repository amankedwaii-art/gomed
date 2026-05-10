# GoMed — User Guide

**GoMed** is a Tuberculous Meningitis (TBM) Clinical Decision Support tool for neurologists and infectious disease specialists. It scores suspected TBM cases using the Uniform Case Definition (Marais et al., 2010) and returns an instant diagnostic classification alongside an optional AI neurologist assessment.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Dashboard](#2-dashboard)
3. [Running a New Assessment](#3-running-a-new-assessment)
   - [Step 1 — Patient & Clinical Features](#step-1--patient--clinical-features)
   - [Step 2 — CSF Analysis](#step-2--csf-analysis)
   - [Step 3 — Neuroimaging](#step-3--neuroimaging)
   - [Step 4 — TB Evidence](#step-4--tb-evidence)
   - [Step 5 — Review & Generate Report](#step-5--review--generate-report)
4. [Reading the Results](#4-reading-the-results)
5. [AI Neurologist Assessment](#5-ai-neurologist-assessment)
6. [Case History](#6-case-history)
7. [Exporting Reports](#7-exporting-reports)
8. [Reference Panels](#8-reference-panels)
9. [Installing GoMed (PWA)](#9-installing-gomed-pwa)
10. [Offline Use](#10-offline-use)
11. [Clinical Disclaimer](#11-clinical-disclaimer)

---

## 1. Getting Started

Open GoMed in any modern browser. You will be presented with the login screen.

| Field    | Value     |
|----------|-----------|
| Username | `Admin`   |
| Password | `123`     |

Click **Sign In**. Your session persists within the browser tab; closing the tab logs you out automatically.

---

## 2. Dashboard

After login you land on the **Dashboard**, which provides an at-a-glance summary of all assessments stored for your account.

| Stat card | What it shows |
|-----------|---------------|
| Total Cases | All assessments ever completed |
| Probable / Definite TBM | Cases classified as Probable or Definite |
| Possible TBM | Cases classified as Possible TBM |
| Today's Assessments | Cases created on the current date |

The **Recent Cases** panel lists the five most recently completed assessments. Click any row to re-open that case's results.

The **Clinical Alerts** panel on the right shows standing evidence-based reminders (e.g. treatment delay mortality risk, HIV co-infection caveats).

To start a new assessment, click **+ New Diagnosis** in the top-right corner or the **▶ Start Assessment** button in the dashboard panel.

---

## 3. Running a New Assessment

The wizard walks you through five steps. You can navigate backwards at any point using the **← Back** button. Progress is indicated by the step tracker at the top of the page.

---

### Step 1 — Patient & Clinical Features

**Patient Demographics**

| Field | Notes |
|-------|-------|
| Patient Name / ID | Free text; auto-generated if left blank |
| Age (years) | 0–120 |
| Sex | Male / Female / Other |
| HIV Status | Unknown / Negative / Positive |
| Known TB Contact or History | No / Yes / Unknown |

**Symptom Duration** *(select one)*

| Option | Points |
|--------|--------|
| Symptoms present for >5 days | 4 |
| Symptoms present for ≤5 days | 0 |

Subacute or chronic onset (>5 days) is a hallmark of TBM.

**Systemic Features**

| Finding | Points |
|---------|--------|
| Weight loss / night sweats / persistent cough >2 weeks | 2 |

**Neurological Features** *(select all that apply)*

| Finding | Points each |
|---------|-------------|
| Altered consciousness (GCS <15, confusion, agitation) | 1 |
| Cranial nerve palsy (III, IV, VI, VII) | 1 |
| Focal neurological deficit (hemiparesis, aphasia — not CN palsy) | 1 |

**Maximum clinical score: 6 points**

Click **Next: CSF Analysis →** to continue.

---

### Step 2 — CSF Analysis

First indicate whether a lumbar puncture was performed.

- **Yes** — enter the CSF results below.
- **No** — the score will be calculated without CSF criteria; this is noted in the report.

> Lumbar puncture may be deferred if raised intracranial pressure is suspected.

**CSF Criteria** *(if LP performed)*

| Field | Scoring |
|-------|---------|
| CSF Appearance: Clear / slightly turbid | 1 pt |
| Total WBC >10 cells/µL | 1 pt |
| Lymphocyte predominance (>50%) | 1 pt |
| CSF Protein >1 g/L | 1 pt |
| CSF/Serum glucose ratio <0.5 **or** absolute CSF glucose <2.2 mmol/L | 1 pt |

Enter either the **glucose ratio** (CSF ÷ serum) or the **absolute CSF glucose** — whichever is available.

**Microbiological Results** *(select all that apply; these trigger Definite classification)*

- CSF AFB smear positive
- CSF Mtb culture positive
- CSF Mtb PCR / GeneXpert positive

**Maximum CSF score: 4 points**

Click **Next: Neuroimaging →** to continue.

---

### Step 3 — Neuroimaging

Indicate whether CT or MRI brain imaging was performed.

- **Yes** — optionally upload images and enter findings.
- **No** — the score is calculated without imaging criteria (thresholds adjust accordingly — see [Reading the Results](#4-reading-the-results)).

**Image Upload (optional)**

Drag and drop or click the upload zone to attach JPG, PNG, or DICOM screenshots. Images are embedded in the PDF report and shown in the on-screen gallery.

**Imaging Criteria** *(select all that apply)*

| Finding | Points |
|---------|--------|
| Hydrocephalus | 1 |
| Basal meningeal enhancement (post-contrast) | 2 |
| Tuberculoma (ring-enhancing lesion) | 2 |
| Infarct (cerebral infarction) | 1 |
| Pre-contrast basal hyperdensity | 2 |

**Maximum imaging score: 6 points**

Click **Next: TB Evidence →** to continue.

---

### Step 4 — TB Evidence

**Chest X-Ray / Thoracic CT** *(select one)*

Optionally upload chest imaging before entering findings.

| Finding | Points |
|---------|--------|
| Miliary pattern on CXR | 4 |
| Hilar lymphadenopathy or pulmonary infiltrates (CXR) | 2 |
| CT thorax: lymphadenopathy or infiltrates (no CXR miliary) | 2 |
| Normal / not performed | 0 |

**Extra-CNS Microbiological Evidence** *(select all that apply)*

| Finding | Points |
|---------|--------|
| AFB smear or Mtb culture positive from non-CNS site (sputum, urine, lymph node, etc.) | 2 |
| Positive IGRA or TST ≥10 mm | 2 |

**Maximum TB elsewhere score: 4 points**

**Alternative Diagnoses Excluded?**

| Option | Effect |
|--------|--------|
| Yes — alternative diagnosis reasonably excluded | Required for Probable / Possible classification |
| Partial — workup ongoing | Reflected in recommendations |
| No — alternative still being considered | Reflected in recommendations |

**Clinical Notes** — free text for additional context, differentials, or treatment already initiated.

Click **Next: Review →** to continue.

---

### Step 5 — Review & Generate Report

A summary of all entered data is displayed for final confirmation. Scroll through and verify all values.

Click **🔬 Generate Diagnostic Report** to run the scoring algorithm and produce the results.

---

## 4. Reading the Results

The results screen shows:

### Classification banner

The banner colour and label indicate the TBM classification:

| Classification | Colour | Criteria |
|---------------|--------|----------|
| **Definite TBM** | Red | Positive CSF AFB smear, culture, or Mtb PCR |
| **Probable TBM** | Amber | Score ≥12 (with imaging) / ≥10 (without imaging), no alternative diagnosis |
| **Possible TBM** | Blue | Score 6–11 (with imaging) / 6–9 (without imaging), no alternative diagnosis |
| **Unlikely TBM** | Green | Score <6 |

### Score breakdown

The total score out of 20 is displayed along with the per-category breakdown:

| Category | Max points |
|----------|-----------|
| Clinical criteria | 6 |
| CSF criteria | 4 |
| Cerebral imaging | 6 |
| TB elsewhere | 4 |
| **Total** | **20** |

### Positive Findings

A list of all criteria that contributed to the score.

### Clinical Recommendations

Evidence-based next steps based on the classification (e.g. empirical anti-TB therapy for Probable TBM, further workup for Possible TBM).

### Uploaded Images Gallery

Any CT/MRI or CXR images uploaded during the assessment are shown here. Click any image to enlarge it.

---

## 5. AI Neurologist Assessment

GoMed integrates **Llama 3.3 70B via Groq** to generate a free-text clinical commentary on the case. This feature is optional and requires a free Groq API key.

### Setting up the API key

1. Obtain a free key from [console.groq.com/keys](https://console.groq.com/keys).
2. Click the **⚙** (gear) icon in the sidebar footer, or click **⚙ Add Free API Key** in the AI card on the results screen.
3. Paste your key (begins with `gsk_…`) into the **API Key** field.
4. Choose a **PIN** (minimum 4 characters). The key is AES-256 encrypted before storage; the raw key is never saved unencrypted.
5. Click **Encrypt & Save**.

To unlock a previously saved key (e.g. after a page reload), open the settings modal and enter your PIN.

### Using the assessment

Once a key is configured, the AI assessment runs automatically each time you generate a diagnostic report. The card shows a loading animation while the model processes the clinical data, then displays a structured narrative covering:

- Interpretation of the diagnostic score
- Key supporting findings
- Suggested next steps
- Caveats (e.g. HIV co-infection, early neutrophilic CSF)

> The AI assessment is advisory only. All clinical decisions remain the responsibility of the treating clinician.

---

## 6. Case History

Click **Case History** in the sidebar (or **View all →** on the dashboard) to see all completed assessments in a searchable table.

- Use the **search bar** to filter by patient name, ID, date, or classification.
- Click any row to open the full results for that case.

Cases are stored in the cloud (Supabase) and backed up to browser localStorage. If the cloud is unavailable, the local copy is used automatically.

---

## 7. Exporting Reports

From the results screen:

| Button | Action |
|--------|--------|
| **⬇ Download PDF** | Generates a PDF report including score breakdown, findings, recommendations, and any uploaded images |
| **🖨️ Print Report** | Opens the browser print dialog with a print-optimised layout |

---

## 8. Reference Panels

Two quick-reference modals are available from the sidebar under **Reference**:

- **📖 TBM Criteria** — Full Uniform TBM Case Definition (Marais 2010) scoring table and classification thresholds.
- **💊 Treatment Guide** — First-line anti-TB treatment regimens and corticosteroid guidance.

---

## 9. Installing GoMed (PWA)

GoMed is a Progressive Web App and can be installed on your device for faster access and offline support.

**On Chrome / Edge (desktop or Android)**

1. Open GoMed in the browser.
2. Click the install icon in the address bar, or open the browser menu and select **Install GoMed**.
3. Confirm the installation prompt.

**On Safari (iOS / iPadOS)**

1. Open GoMed in Safari.
2. Tap the **Share** button (box with upward arrow).
3. Select **Add to Home Screen**.
4. Tap **Add**.

Once installed, GoMed launches as a standalone app without browser chrome.

---

## 10. Offline Use

GoMed caches all core assets on first load. When network access is unavailable:

- The full assessment wizard works normally.
- Case history is read from the local backup copy.
- Completed cases are saved locally and synced to the cloud when connectivity is restored.
- **AI assessment is unavailable offline** — this requires a live connection to the Groq API.

---

## 11. Clinical Disclaimer

GoMed provides decision support based on the Uniform TBM Case Definition (Marais et al., 2010). It does **not** replace clinical judgement. All diagnoses and treatment decisions must be made by a qualified clinician who has reviewed the full clinical picture.

TBM is a medical emergency. A Probable TBM classification warrants empirical treatment while confirmatory results are awaited. Do not delay treatment pending a definitive microbiological diagnosis when clinical suspicion is high.
