# Sync Driver

# ETL Pipeline for mForm (Sync Driver)

**Organization**: Dhwani RIS  
**Product**: mForm  
**Project**: ETL Pipeline for mForm (Sync Driver)  

---

## Project Overview

The **ETL Pipeline for mForm** is a modular and scalable data processing engine designed to extract, transform, and load survey submissions collected via **mForm** a MERN-stack-based mobile and web tool used by NGOs and development agencies.

This sync-driver acts as the transformation layer between **raw mForm submissions** (stored in MongoDB or exposed via REST APIs) and **analytics-ready structured data**, exported to formats such as **MySQL, PostgreSQL, CSV, or DBT**.

By automating this transformation, the project empowers organizations to:
- Reduce manual data wrangling
- Accelerate dashboard/report generation
- Improve the accuracy and accessibility of field-collected data

---

## Goals

- Support **offline-first data collection**
- Perform **incremental syncs** (only new/updated records)
- Flatten complex nested JSON submissions into **relational table structures**
- Enable **bulk upsert/export** to RDBMS or CSV
- Provide **logs, reports**, and **error tracking**
- Be compatible with **CLI, cron jobs, or Airflow orchestration**

---

##  Expected Outcomes

A runnable ETL pipeline that:
- Connects to MongoDB or mForm REST API
- Pulls new or updated survey submissions only
- Flattens data into:
  - A master table for non-repeating fields
  - Child tables for grouped/repeating sections
- Outputs to:
  - MySQL or PostgreSQL (via bulk INSERT/UPSERT)
  - CSV files
  - DBT-compatible datasets
- Logs summary stats for each run:
  - Records processed, skipped, errored
- Offers traceable error logs with record IDs and exceptions

---

## Installation & Setup

>>> Note: The project is currently under active development. Codebase and environment setup scripts will be added soon.

To get started with the repository:

### Clone the Repository

```bash
git clone https://github.com/dhwani-ris/sync-driver.git
cd sync-driver
```

### Suggested Environment Setup

- Python 3.8+ or Node.js (TBD based on implementation)
- MongoDB URI or REST API Endpoint for mForm data source
- Docker (for containerized deployments)
- MySQL/PostgreSQL instance (optional for target storage)
- Airflow (optional for orchestration)

Further setup instructions and environment configs will be added as the implementation progresses.

---

##  Components

### Data Extraction
- Connects to MongoDB or REST API
- Supports batch querying
- Uses "last processed" timestamps or submission IDs

###  Data Transformation
- Parses and flattens deeply nested JSON
- Generates a master table for static fields
- Creates normalized child tables for repeat sections
- Maintains parent-child (foreign key) relationships

###  Data Loading
- Bulk load into MySQL/PostgreSQL
- Optionally export as CSV or DBT datasets

###  Orchestration & Monitoring
- Can run via:
  - Command Line Interface (CLI)
  - Cron Jobs
  - Apache Airflow
- Generates reports/logs at the end of each run

---

##  Contribution Guidelines

We welcome contributions to improve the sync-driver and documentation!

### Good First Tasks:
- [ ] Add detailed `setup.md` to explain local installation
- [ ] Create UML/project diagrams for architecture understanding
- [ ] Build Airflow DAG for pipeline orchestration
- [ ] Containerize pipeline using Docker

Please check the [Issues](https://github.com/dhwani-ris/sync-driver/issues) tab for open tasks or raise your own suggestions.

---

##  Diagrams

To help visualize the flow and structure, contributors are encouraged to add:
- UML Class Diagrams
- ETL Flow Diagrams
- Schema Mapping between mForm JSON and relational tables

(raise a PR with these in a `docs/` or folder.)

---

##  Maintainers & Contacts

- @ShlokRana  
- @abhijitnairDhwani  
- @dhwani-ris  

---

##  About Dhwani RIS

**Dhwani Rural Information Systems** builds tech-for-good solutions to empower social sector organizations and NGOs with tools for data collection, decision-making, and impact assessment.

---

##  License

_TBD (To be added by the maintainers)_

---
