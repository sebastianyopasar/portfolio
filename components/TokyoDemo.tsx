"use client";

import { useState } from "react";

type DemoView =
  | "home"
  | "companies"
  | "inventory"
  | "work";

const views: {
  id: DemoView;
  label: string;
}[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "companies",
    label: "Companies",
  },
  {
    id: "inventory",
    label: "Inventory",
  },
  {
    id: "work",
    label: "Work Orders",
  },
];

export default function TokyoDemo() {
  const [activeView, setActiveView] =
    useState<DemoView>("home");

  return (
    <section className="tokyo-demo-section">
      <div className="tokyo-demo-heading">
        <div>
          <span>
            Interactive product preview
          </span>

          <strong>
            Explore Project Tokyo
          </strong>
        </div>

        <p>
          A simplified interactive preview based
          on the current product structure and
          workflows. Representative sample data is
          used to demonstrate the experience.
        </p>
      </div>

      <div className="tokyo-demo-shell">
        {/* ===================================================
            SIDE RAIL
        =================================================== */}

        <aside className="tokyo-demo-rail">
          <div className="tokyo-demo-logo">
            PT
          </div>

          <button
            type="button"
            className={
              activeView === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveView("home")
            }
            aria-label="Home"
          >
            ⌂
          </button>

          <button
            type="button"
            className={
              activeView === "companies"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveView("companies")
            }
            aria-label="Companies"
          >
            ▦
          </button>

          <button
            type="button"
            className={
              activeView === "inventory"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveView("inventory")
            }
            aria-label="Inventory"
          >
            ◇
          </button>

          <button
            type="button"
            className={
              activeView === "work"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveView("work")
            }
            aria-label="Work Orders"
          >
            ⚒
          </button>

          <span className="tokyo-demo-rail-spacer" />

          <button
            type="button"
            aria-label="Settings"
          >
            ⚙
          </button>
        </aside>

        {/* ===================================================
            APP
        =================================================== */}

        <div className="tokyo-demo-app">
          <header className="tokyo-demo-topbar">
            <div className="tokyo-demo-breadcrumb">
              <span>
                Project Tokyo
              </span>

              <i>/</i>

              <strong>
                {
                  views.find(
                    (view) =>
                      view.id === activeView
                  )?.label
                }
              </strong>
            </div>

            <div className="tokyo-demo-org">
              <span>
                Japan Company ORG
              </span>

              <small>
                OWNER
              </small>
            </div>

            <div className="tokyo-demo-top-actions">
              <span>
                Search...
              </span>

              <i />

              <b>
                S
              </b>

              <strong>
                Sebastian
              </strong>
            </div>
          </header>

          {/* =================================================
              VIEW NAVIGATION
          ================================================= */}

          <nav className="tokyo-demo-tabs">
            {views.map((view) => (
              <button
                key={view.id}
                type="button"
                className={
                  activeView === view.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveView(view.id)
                }
              >
                {view.label}
              </button>
            ))}
          </nav>

          {/* =================================================
              CURRENT VIEW
          ================================================= */}

          <div
            key={activeView}
            className="tokyo-demo-content"
          >
            {activeView === "home" && (
              <HomeView />
            )}

            {activeView === "companies" && (
              <CompaniesView />
            )}

            {activeView === "inventory" && (
              <InventoryView />
            )}

            {activeView === "work" && (
              <WorkOrdersView />
            )}
          </div>
        </div>
      </div>

      <div className="tokyo-demo-footer">
        <span>
          Interactive product preview
        </span>

        <span>
          Representative demo data
        </span>
      </div>
    </section>
  );
}


/* =====================================================
   HOME
===================================================== */

function HomeView() {
  return (
    <div className="tokyo-demo-home">
      <div className="tokyo-demo-kicker">
        TODAY IN TOKYO
      </div>

      <div className="tokyo-demo-title-row">
        <div>
          <h3>
            Good afternoon, Sebastian
          </h3>

          <p>
            Your operational snapshot across
            sales, service, tasks, customer assets,
            inventory and cash collection.
          </p>
        </div>

        <button type="button">
          Open Reports →
        </button>
      </div>

      {/* ===============================================
          KPI CARDS
      =============================================== */}

      <div className="tokyo-demo-metrics">
        <Metric
          title="Outstanding"
          value="$18.4K"
          note="12 issued invoices"
          tone="blue"
        />

        <Metric
          title="Open Work"
          value="7"
          note="3 require attention"
          tone="orange"
        />

        <Metric
          title="Tasks Due"
          value="5"
          note="2 overdue"
          tone="red"
        />

        <Metric
          title="Zero Available"
          value="3"
          note="Inventory exceptions"
          tone="green"
        />
      </div>

      {/* ===============================================
          MAIN DASHBOARD GRID
      =============================================== */}

      <div className="tokyo-demo-home-grid">
        {/* WORK REQUIRING ATTENTION */}

        <section className="tokyo-demo-card tokyo-demo-attention">
          <div className="tokyo-demo-card-heading">
            <div>
              <strong>
                Work Requiring Attention
              </strong>

              <span>
                Open Work Orders ranked by priority
                and scheduled date.
              </span>
            </div>

            <a>
              View Work Orders →
            </a>
          </div>

          <div className="tokyo-demo-attention-list">
            <AttentionRow
              id="WO-1048"
              company="Northstar Facilities"
              description="Preventive maintenance"
              status="In Progress"
              priority="High"
              due="Today"
            />

            <AttentionRow
              id="WO-1046"
              company="Acme Corp"
              description="Equipment repair"
              status="Waiting for Parts"
              priority="Normal"
              due="Tomorrow"
            />

            <AttentionRow
              id="WO-1043"
              company="Orbit Technologies"
              description="Site inspection"
              status="Scheduled"
              priority="High"
              due="Sep 21"
            />
          </div>
        </section>

        {/* MY TASKS */}

        <section className="tokyo-demo-card tokyo-demo-tasks-card">
          <div className="tokyo-demo-card-heading">
            <div>
              <strong>
                My Tasks
              </strong>

              <span>
                Pending work, ordered by due date.
              </span>
            </div>

            <a>
              View all
            </a>
          </div>

          <Task
            title="Review Acme Corp renewal proposal"
            company="Acme Corp"
            priority="High"
            date="Today"
          />

          <Task
            title="Approve Q3 marketing budget"
            company="Internal"
            priority="Medium"
            date="Today"
          />

          <Task
            title="Follow up regarding product quote"
            company="Orbit Technologies"
            priority="High"
            date="Tomorrow"
          />

          <Task
            title="Confirm service appointment"
            company="Northstar Facilities"
            priority="Normal"
            date="Sep 21"
          />
        </section>

        {/* OUTSTANDING INVOICES */}

        <section className="tokyo-demo-card">
          <div className="tokyo-demo-card-heading">
            <div>
              <strong>
                Outstanding Invoices
              </strong>

              <span>
                Issued invoices awaiting payment.
              </span>
            </div>

            <a>
              Financial Reports
            </a>
          </div>

          <InvoiceRow
            company="Northstar Facilities"
            invoice="INV-2048"
            amount="$4,580"
            due="Due Sep 20"
          />

          <InvoiceRow
            company="Cedar Group"
            invoice="INV-2041"
            amount="$2,940"
            due="Due Sep 22"
          />

          <InvoiceRow
            company="Orbit Technologies"
            invoice="INV-2037"
            amount="$6,120"
            due="Due Sep 25"
          />
        </section>

        {/* FOLLOW UPS */}

        <section className="tokyo-demo-card">
          <div className="tokyo-demo-card-heading">
            <div>
              <strong>
                Follow-ups Due
              </strong>

              <span>
                Customer activity that needs
                attention.
              </span>
            </div>

            <a>
              Companies
            </a>
          </div>

          <FollowUpRow
            company="Northstar Facilities"
            type="Renewal follow-up"
            date="Today"
          />

          <FollowUpRow
            company="Apex Commercial"
            type="Quote follow-up"
            date="Tomorrow"
          />

          <FollowUpRow
            company="Lakefront Property"
            type="Service check-in"
            date="Sep 21"
          />
        </section>

        {/* INVENTORY WATCH */}

        <section className="tokyo-demo-card tokyo-demo-inventory-watch">
          <div className="tokyo-demo-card-heading">
            <div>
              <strong>
                Inventory Watch
              </strong>

              <span>
                Products with the lowest available
                stock.
              </span>
            </div>

            <a>
              Inventory
            </a>
          </div>

          <StockRow
            name="Diamond Guard"
            sku="DG-220"
            available="3 available"
            onHand="5 on hand"
            low
          />

          <StockRow
            name="Daily Disinfectant Plus"
            sku="DDP-004"
            available="5 available"
            onHand="8 on hand"
            low
          />

          <StockRow
            name="Citrus Clean"
            sku="CC-110"
            available="8 available"
            onHand="12 on hand"
          />

          <StockRow
            name="Supabase Product Test"
            sku="SUP-001"
            available="98 available"
            onHand="98 on hand"
          />
        </section>
      </div>
    </div>
  );
}


/* =====================================================
   COMPANIES
===================================================== */

function CompaniesView() {
  return (
    <div className="tokyo-demo-module-view">
      <div className="tokyo-demo-module-heading">
        <div>
          <span>
            CRM
          </span>

          <h3>
            Companies
          </h3>

          <p>
            Customer context, contacts, deals,
            activity and operational history in one
            place.
          </p>
        </div>

        <button type="button">
          + New Company
        </button>
      </div>

      <div className="tokyo-demo-company-layout">
        <div className="tokyo-demo-company-list">
          <CompanyRow
            name="Acme Corp"
            meta="3 contacts · 2 open deals"
            active
          />

          <CompanyRow
            name="Orbit Technologies"
            meta="2 contacts · 1 quote"
          />

          <CompanyRow
            name="Northstar Facilities"
            meta="4 contacts · 3 work orders"
          />

          <CompanyRow
            name="Lakefront Property"
            meta="1 contact · Active"
          />
        </div>

        <section className="tokyo-demo-card tokyo-demo-company-panel">
          <div className="tokyo-demo-company-title">
            <div>
              <small>
                COMPANY
              </small>

              <h4>
                Acme Corp
              </h4>
            </div>

            <span>
              Active
            </span>
          </div>

          <div className="tokyo-demo-company-tabs-row">
            <span className="active">
              Overview
            </span>

            <span>
              Contacts
            </span>

            <span>
              Deals
            </span>

            <span>
              Quotes
            </span>

            <span>
              Work Orders
            </span>
          </div>

          <TimelineItem
            title="Quote sent"
            meta="Q-1048 · $4,580"
            time="Today"
          />

          <TimelineItem
            title="Call completed"
            meta="Follow-up with customer"
            time="Yesterday"
          />

          <TimelineItem
            title="Work order created"
            meta="Preventive maintenance"
            time="Sep 16"
          />

          <TimelineItem
            title="Deal updated"
            meta="Renewal Opportunity"
            time="Sep 15"
          />
        </section>
      </div>
    </div>
  );
}


/* =====================================================
   INVENTORY
===================================================== */

function InventoryView() {
  return (
    <div className="tokyo-demo-module-view">
      <div className="tokyo-demo-module-heading">
        <div>
          <span>
            OPERATIONS
          </span>

          <h3>
            Inventory
          </h3>

          <p>
            Products, warehouses, stock levels and
            inventory movements managed through one
            workflow.
          </p>
        </div>

        <button type="button">
          + Movement
        </button>
      </div>

      <div className="tokyo-demo-search-row">
        <span>
          Search product, SKU or warehouse
        </span>

        <button type="button">
          All movements
        </button>
      </div>

      <div className="tokyo-demo-table">
        <div className="tokyo-demo-table-head">
          <span>
            Product
          </span>

          <span>
            Warehouse
          </span>

          <span>
            Type
          </span>

          <span>
            Available
          </span>
        </div>

        <InventoryRow
          product="Diamond Guard"
          sku="DG-220"
          warehouse="Main · WH01"
          type="On Hand"
          available="3"
          low
        />

        <InventoryRow
          product="Daily Disinfectant Plus"
          sku="DDP-004"
          warehouse="Main · WH01"
          type="On Hand"
          available="5"
          low
        />

        <InventoryRow
          product="Citrus Clean"
          sku="CC-110"
          warehouse="Service · WH02"
          type="Transfer"
          available="8"
        />

        <InventoryRow
          product="Supabase Product Test"
          sku="SUP-001"
          warehouse="Main · WH01"
          type="Received"
          available="98"
        />
      </div>
    </div>
  );
}


/* =====================================================
   WORK ORDERS
===================================================== */

function WorkOrdersView() {
  return (
    <div className="tokyo-demo-module-view">
      <div className="tokyo-demo-module-heading">
        <div>
          <span>
            SERVICE
          </span>

          <h3>
            Work Orders
          </h3>

          <p>
            Operational work organized by company,
            status, priority and activity context.
          </p>
        </div>

        <button type="button">
          + Work Order
        </button>
      </div>

      <div className="tokyo-demo-search-row">
        <span>
          Search work orders
        </span>

        <button type="button">
          All statuses
        </button>
      </div>

      <div className="tokyo-demo-work-list">
        <WorkRow
          id="WO-1048"
          company="Northstar Facilities"
          status="In Progress"
          priority="High"
        />

        <WorkRow
          id="WO-1047"
          company="Lakefront Property"
          status="Scheduled"
          priority="Normal"
        />

        <WorkRow
          id="WO-1046"
          company="Acme Corp"
          status="Waiting for Parts"
          priority="Normal"
        />

        <WorkRow
          id="WO-1045"
          company="Orbit Technologies"
          status="Open"
          priority="Urgent"
        />

        <WorkRow
          id="WO-1044"
          company="Apex Commercial"
          status="Completed"
          priority="Normal"
        />
      </div>
    </div>
  );
}


/* =====================================================
   SMALL COMPONENTS
===================================================== */

function Metric({
  title,
  value,
  note,
  tone,
}: {
  title: string;
  value: string;
  note: string;
  tone:
    | "blue"
    | "orange"
    | "red"
    | "green";
}) {
  return (
    <article
      className={`tokyo-demo-metric tokyo-demo-metric-${tone}`}
    >
      <span>
        {title}
      </span>

      <strong>
        {value}
      </strong>

      <small>
        {note}
      </small>
    </article>
  );
}


function AttentionRow({
  id,
  company,
  description,
  status,
  priority,
  due,
}: {
  id: string;
  company: string;
  description: string;
  status: string;
  priority: string;
  due: string;
}) {
  return (
    <div className="tokyo-demo-attention-row">
      <div className="tokyo-demo-attention-id">
        <span>
          {id}
        </span>

        <small>
          {due}
        </small>
      </div>

      <div className="tokyo-demo-attention-main">
        <strong>
          {company}
        </strong>

        <span>
          {description}
        </span>
      </div>

      <span className="tokyo-demo-attention-status">
        {status}
      </span>

      <span
        className={`tokyo-demo-priority ${
          priority === "High"
            ? "high"
            : ""
        }`}
      >
        {priority}
      </span>

      <i>
        →
      </i>
    </div>
  );
}


function Task({
  title,
  company,
  priority,
  date,
}: {
  title: string;
  company: string;
  priority: string;
  date: string;
}) {
  return (
    <div className="tokyo-demo-task-row">
      <i />

      <div>
        <strong>
          {title}
        </strong>

        <small>
          <b>
            {date}
          </b>

          <span>
            {company}
          </span>

          <span>
            {priority}
          </span>
        </small>
      </div>
    </div>
  );
}


function InvoiceRow({
  company,
  invoice,
  amount,
  due,
}: {
  company: string;
  invoice: string;
  amount: string;
  due: string;
}) {
  return (
    <div className="tokyo-demo-invoice-row">
      <div>
        <strong>
          {company}
        </strong>

        <small>
          {invoice}
        </small>
      </div>

      <div>
        <strong>
          {amount}
        </strong>

        <small>
          {due}
        </small>
      </div>
    </div>
  );
}


function FollowUpRow({
  company,
  type,
  date,
}: {
  company: string;
  type: string;
  date: string;
}) {
  return (
    <div className="tokyo-demo-followup-row">
      <i />

      <div>
        <strong>
          {company}
        </strong>

        <span>
          {type}
        </span>
      </div>

      <small>
        {date}
      </small>
    </div>
  );
}


function StockRow({
  name,
  sku,
  available,
  onHand,
  low = false,
}: {
  name: string;
  sku: string;
  available: string;
  onHand: string;
  low?: boolean;
}) {
  return (
    <div className="tokyo-demo-stock-row">
      <div>
        <strong>
          {name}
        </strong>

        <small>
          {sku}
        </small>
      </div>

      <div>
        <span
          className={
            low
              ? "low"
              : ""
          }
        >
          {available}
        </span>

        <small>
          {onHand}
        </small>
      </div>
    </div>
  );
}


function CompanyRow({
  name,
  meta,
  active = false,
}: {
  name: string;
  meta: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={
        active
          ? "active"
          : ""
      }
    >
      <strong>
        {name}
      </strong>

      <span>
        {meta}
      </span>
    </button>
  );
}


function TimelineItem({
  title,
  meta,
  time,
}: {
  title: string;
  meta: string;
  time: string;
}) {
  return (
    <div className="tokyo-demo-timeline-row">
      <i />

      <div>
        <strong>
          {title}
        </strong>

        <span>
          {meta}
        </span>
      </div>

      <small>
        {time}
      </small>
    </div>
  );
}


function InventoryRow({
  product,
  sku,
  warehouse,
  type,
  available,
  low = false,
}: {
  product: string;
  sku: string;
  warehouse: string;
  type: string;
  available: string;
  low?: boolean;
}) {
  return (
    <div
      className={`tokyo-demo-table-row ${
        low
          ? "low-stock"
          : ""
      }`}
    >
      <div>
        <strong>
          {product}
        </strong>

        <small>
          {sku}
        </small>
      </div>

      <span>
        {warehouse}
      </span>

      <span>
        {type}
      </span>

      <strong>
        {available}
      </strong>
    </div>
  );
}


function WorkRow({
  id,
  company,
  status,
  priority,
}: {
  id: string;
  company: string;
  status: string;
  priority: string;
}) {
  return (
    <article className="tokyo-demo-work-row">
      <span>
        {id}
      </span>

      <strong>
        {company}
      </strong>

      <span className="tokyo-demo-work-status">
        {status}
      </span>

      <small
        className={
          priority === "Urgent"
            ? "urgent"
            : priority === "High"
              ? "high"
              : ""
        }
      >
        {priority}
      </small>

      <i>
        →
      </i>
    </article>
  );
}