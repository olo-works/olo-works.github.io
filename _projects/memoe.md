---
layout: project
title: "Me-Moe"
order: 4
year: 2024
client: "Università degli studi Mediterranea di Reggio Calabria"
role: "Product Design, UX Design, Graphic Design"
materials: "Steel, Composite Panels, Electronics"
duration: "Thesis project"
tags: [Product, Transport, UX]
cover: /images/projects/memoe/cover.png
accent: "#E8196E"
accent_dark: "#B80F53"
accent_bg: "#F2D0DC"
accent_white: "#FAF0F4"
excerpt_text: "A modular last-mile delivery system: a compact urban vehicle, an onboard cobot, an exoskeleton, a new parcel language, and an app that treats shipping like ride-hailing."
gallery_cols: 2
gallery:
  - src: /images/projects/memoe/render-street.png
    alt: "Me-Moe in context"
    layout: wide
  - src: /images/projects/memoe/render-front.png
    alt: "Front three-quarter"
  - src: /images/projects/memoe/render-rear-open.png
    alt: "Cargo bay open"
  - src: /images/projects/memoe/render-night.png
    alt: "Night render"
  - src: /images/projects/memoe/render-colors.png
    alt: "Fleet variants — SDA, UPS, DHL"
    layout: wide
  - src: /images/projects/memoe/vano-cobot.png
    alt: "Cargo bay with cobot and exoskeleton"
    layout: wide
  - src: /images/projects/memoe/struttura-exploded.png
    alt: "Exploded structure"
  - src: /images/projects/memoe/riadattabilita-modules.png
    alt: "Module components"
  - src: /images/projects/memoe/riadattabilita-retrofit.png
    alt: "Retrofit on different chassis"
    layout: wide
  - src: /images/projects/memoe/agadexo-render.png
    alt: "AGADEXO render"
  - src: /images/projects/memoe/agadexo-deploy.png
    alt: "Exoskeleton deployment sequence"
    layout: wide
  - src: /images/projects/memoe/pacchi-full.png
    alt: "Full label system"
    layout: wide
  - src: /images/projects/memoe/app-screens.png
    alt: "App — booking and tracking"
    layout: wide
  - src: /images/projects/memoe/tecnici.png
    alt: "Technical drawings"
    layout: wide
---

A complete system for urban last-mile delivery. Not a single object but a set of things designed to work together — a compact vehicle, a modular cargo bay, an onboard collaborative robot, a wearable exoskeleton, a new parcel label language, and an app. The whole is called *Me-Moe*: *Mezzo Express Multifunzione Operativa Essenziale*.

<h2>The brief</h2>

Urban proximity logistics fails in three predictable places: vehicles too large for city streets, local restrictions that fragment the working day, and deliveries that collapse when no one is home. The thesis asked to design a system that addresses all three without reinventing the vehicle from scratch — working instead at the level of the cargo module, the tools inside it, and the service wrapped around it.

The reference vehicle is the kei-truck format. Compact by regulation, already proven in dense Japanese cities, partially adopted in Europe through the Piaggio Porter. The project starts here and builds outward.

<h2>The cargo module</h2>

The cargo bay is the structural core of the project. It was designed as a standardised unit independent from any specific chassis so that it can be retrofitted onto existing vehicles through a simple attachment system. Every component can be positioned in any order and repeated across a mixed fleet. The module is also stackable — a second unit can sit on top of the first where ceiling clearance allows.

Access points were completely reorganised. Two rear doors open the full width of the bay. A lateral sliding door gives access mid-route without repositioning. A motorised floor rail moves packages toward the opening automatically. The result is a loading and unloading sequence that no longer requires the driver to climb inside.

<h3>Structure</h3>

<div class="proj-gallery-grid" data-cols="2" style="margin:20px 0;">
  <img src="/images/projects/memoe/struttura-exploded.png" alt="Exploded structure" class="gallery-img square"/>
  <div style="background:var(--white);padding:28px 24px;display:flex;flex-direction:column;justify-content:space-between;">
    <p style="font-family:var(--mono);font-size:.72rem;line-height:1.8;color:var(--ink-m);margin:0;">The bay is built on a tubular steel frame with composite panel cladding. The base houses the battery pack in the electric configuration. Interior shelving runs on standardised rails shared with the cobot cart so the robot and shelf units are interchangeable in position.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px;margin-top:24px;">
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Bay width</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">1530 mm</div>
      </div>
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Bay height</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">1371 mm</div>
      </div>
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Total length</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">2035 mm</div>
      </div>
    </div>
  </div>
</div>

<h2>AGADEXO</h2>

Repetitive heavy lifting is the leading cause of long-term injury in delivery work. AGADEXO is a wearable exoskeleton designed as a structural component of the vehicle rather than a stored accessory. It replaces the passenger seat entirely.

<h3>Deployment</h3>

<div class="proj-gallery-grid" data-cols="2" style="margin:20px 0;">
  <div style="background:var(--white);padding:28px 24px;display:flex;flex-direction:column;justify-content:space-between;">
    <p style="font-family:var(--mono);font-size:.72rem;line-height:1.8;color:var(--ink-m);margin:0;">A single hydraulic arm activates the moment the cab door opens. The exoskeleton pivots outward and descends to standing height. The driver steps into it without bending down or reaching inside. Door closes. The mechanism resets. Under ten seconds.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:24px;">
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Assisted load</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">> 30 kg</div>
      </div>
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Quick releases</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">Shoulder · Torso · Arm</div>
      </div>
    </div>
  </div>
  <img src="/images/projects/memoe/agadexo-deploy.png" alt="Deployment sequence" class="gallery-img square"/>
</div>

Three quick-release buckles at the shoulder, torso and arm allow emergency removal at any point. The safety system is redundant by design — any single buckle is sufficient to disengage the unit completely. Integration was studied against the AGADEXO shoulder unit by Agade and the ABB SWIFTI CRB 1100 cobot.

<h2>The parcel label</h2>

Existing shipping labels were designed entirely for machine reading. Dense, visually undifferentiated and difficult to parse at a glance — they work for sensors but not for people. A new label system was designed from scratch around a chromatic coding logic compliant with ISO 3864 and OSHA 1910.145.

<h3>Five types, five colours</h3>

<div style="border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:28px 0;">
  <div style="padding:18px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div>
      <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Regular</div>
      <div style="font-family:var(--mono);font-size:.68rem;line-height:1.7;color:var(--ink-m);">Standard delivery. No special handling.</div>
    </div>
    <div style="width:28px;height:28px;border-radius:4px;background:#89C273;flex-shrink:0;"></div>
  </div>
  <div style="padding:18px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div>
      <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Fragile</div>
      <div style="font-family:var(--mono);font-size:.68rem;line-height:1.7;color:var(--ink-m);">Handle with care. Orientation constraints apply.</div>
    </div>
    <div style="width:28px;height:28px;border-radius:4px;background:#FCC046;flex-shrink:0;"></div>
  </div>
  <div style="padding:18px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div>
      <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Temperature sensitive</div>
      <div style="font-family:var(--mono);font-size:.68rem;line-height:1.7;color:var(--ink-m);">Requires thermal management throughout transport.</div>
    </div>
    <div style="width:28px;height:28px;border-radius:4px;background:#006FB9;flex-shrink:0;"></div>
  </div>
  <div style="padding:18px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div>
      <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Urgent</div>
      <div style="font-family:var(--mono);font-size:.68rem;line-height:1.7;color:var(--ink-m);">Priority. Always at the top of the sorting queue.</div>
    </div>
    <div style="width:28px;height:28px;border-radius:4px;background:#D70911;flex-shrink:0;"></div>
  </div>
  <div style="padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div>
      <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Hazardous</div>
      <div style="font-family:var(--mono);font-size:.68rem;line-height:1.7;color:var(--ink-m);">Restricted handling. Isolated section of the bay.</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;">
      <div style="width:28px;height:28px;border-radius:4px;background:#2D2926;"></div>
      <div style="width:28px;height:28px;border-radius:4px;background:#FCC046;"></div>
    </div>
  </div>
</div>

The label hierarchy puts the delivery type at the top in large format — readable from across the bay. Sender and recipient sit in the middle. International condition icons and a barcode close the bottom. A coordinated adhesive tape repeats the order code continuously across all seams so the parcel is identifiable even when stacked or partially covered.

<h2>The app</h2>

The service around Me-Moe was designed as a complete UX flow — booking, confirmation and tracking. The mental model is ride-hailing applied to parcels. The user does not fill a shipping form; they book a vehicle.

<h3>Booking</h3>

<div class="proj-gallery-grid" data-cols="2" style="margin:20px 0;">
  <img src="/images/projects/memoe/app-booking.png" alt="Booking flow" class="gallery-img square"/>
  <div style="background:var(--white);padding:28px 24px;display:flex;flex-direction:column;justify-content:space-between;">
    <p style="font-family:var(--mono);font-size:.72rem;line-height:1.8;color:var(--ink-m);margin:0;">Destination, parcel type, weight and dimensions go in first. The app then shows available Me-Moe units filtered by proximity and time slot. One tap confirms. A confirmation screen closes the flow and sends an email receipt.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:24px;">
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Flows</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">Book · Track · Return</div>
      </div>
      <div style="padding:12px 14px;background:var(--bg);">
        <div style="font-family:var(--mono);font-size:.48rem;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:4px;">Login</div>
        <div style="font-family:var(--mono);font-size:.65rem;color:var(--ink);">Google · Microsoft · Meta</div>
      </div>
    </div>
  </div>
</div>

<h3>Tracking</h3>

<div class="proj-gallery-grid" data-cols="2" style="margin:20px 0;">
  <div style="background:var(--white);padding:28px 24px;display:flex;flex-direction:column;justify-content:space-between;">
    <p style="font-family:var(--mono);font-size:.72rem;line-height:1.8;color:var(--ink-m);margin:0;">Standard parcel tracking shows hub-to-hub events — infrequent and imprecise. Me-Moe adds a live layer: the vehicle's exact position on a map, the current route and the estimated arrival time. One tells you where your parcel has been. The other tells you where it is right now.</p>
  </div>
  <img src="/images/projects/memoe/app-tracking.png" alt="Live tracking screen" class="gallery-img square"/>
</div>

<h2>The process</h2>

The project moved from a SWOT analysis of the proximity logistics sector through vehicle sizing, cargo bay structure, technology integration, label design and digital service design — each layer built in response to a specific failure identified in the research phase.

Supervised by Consuelo Nava with co-supervisors Carmine L. Quistelli and Domenico Lucanto.