Siap bro. Untuk **website portfolio pribadi** kamu, pendekatannya memang boleh lebih technical daripada Labq.dev. Kalau Labq.dev menjual “problem bisnis + workflow solution”, portfolio pribadi kamu harus menunjukkan:

> **project context → role → technical contribution → architecture/approach → technologies → measurable impact**

Ini penting karena software engineering portfolio idealnya tidak cuma menampilkan tools, tapi juga keputusan teknis, problem solving, dan dampak ke sistem/produk. Secara umum, engineering itu memang tentang merancang, membangun, menguji, dan memperbaiki sistem/proses untuk menyelesaikan masalah nyata. ([University of Bath][1]) Untuk konteks software, investasi pada testing juga penting untuk memungkinkan tim merilis perubahan lebih cepat dan lebih aman. ([arXiv][2])

Di bawah ini aku susun list lengkap dari portfolio PDF kamu + tambahan DC Trans Nabati yang kamu ceritakan. Project dari PDF mencakup eFishery, Pertamina Bina Medika IHC, Virtual Spirit, dan Komers.

---

# Technical Portfolio Projects

## 1. DC Trans — Logistics Dispatch & Shipment Tracking System

**Company:** Nabati
**Role:** Software Engineer / Frontend Engineer
**Type:** Logistics system, vendor portal, mobile field workflow
**Platform:** Web app + mobile driver app
**Context:** Founder/previous work experience

### Project overview

DC Trans was a logistics dispatch system designed to manage booking orders, vendor allocation, and shipment tracking for distribution operations.

Booking orders were created from another upstream system, then pulled into DC Trans. Vendors could access available booking orders based on their tier. Orders were first broadcasted to the highest vendor tier. If no vendor accepted the order within a defined time window, such as 2 hours, the system would re-broadcast the order to the next vendor tier.

The workflow also included shipment tracking, where drivers updated delivery progress through a mobile app.

### What I worked on

- Built or contributed to the logistics dispatch interface.
- Implemented booking order list and vendor-facing workflow.
- Supported tier-based vendor access logic.
- Supported time-based re-broadcast workflow for unclaimed orders.
- Built or contributed to shipment tracking features.
- Worked on driver mobile app workflow for delivery status updates.
- Integrated data from an upstream booking/order system into the logistics flow.

### Technical approach

- Designed the frontend around multiple user roles: internal operations, vendors, and drivers.
- Structured the UI around booking status, vendor eligibility, order acceptance, and shipment progress.
- Used state-driven views to represent order lifecycle and shipment status.
- Integrated frontend with APIs from logistics/order systems.
- Supported mobile-first workflows for driver updates in the field.

### Key technical challenges

- Handling multi-role access and different views per user type.
- Representing vendor tier logic clearly in the UI.
- Supporting time-sensitive order re-broadcasting behavior.
- Keeping order status and shipment status understandable across vendors, drivers, and operations teams.
- Designing a workflow that depends on both system automation and human action.

### Technologies

Because the exact stack was not in the PDF, write this only if accurate:

**Possible format:**

> React / React Native, TypeScript or JavaScript, REST API, mobile app workflow, role-based UI, order tracking, logistics workflow.

### Portfolio card version

**DC Trans — Logistics Dispatch & Shipment Tracking System**
Built a logistics workflow system for booking order distribution, vendor tier allocation, timed re-broadcasting, and driver-based shipment tracking. The system pulled orders from an upstream source, exposed eligible bookings to vendors based on tier, and supported mobile delivery updates from drivers.

**Tech focus:** Logistics workflow, vendor portal, role-based UI, REST API integration, mobile tracking, order lifecycle management.

---

## 2. Crowdver Tool — Offline-First Farmer Verification PWA

**Company:** eFishery
**Role:** Frontend Engineer
**Type:** Progressive Web App, field operations, verification workflow
**Period:** Oct 2022 – Feb 2025
**Source:** Listed in your portfolio under eFishery.

### Project overview

Crowdver Tool was a Progressive Web App used to manage farmer verification orders. The system supported field verification workflows and helped increase the number of verified farmers, contributing to fraud-reduction efforts.

### What I worked on

- Developed and maintained the PWA frontend.
- Built interfaces for managing farmer verification orders.
- Implemented offline-first capabilities for low-connectivity environments.
- Integrated frontend with REST APIs.
- Maintained data fetching and server-state handling.
- Contributed to testing and frontend reliability.

### Technical approach

- Used PWA capabilities to make the app accessible without stable internet.
- Structured data fetching and caching around field workflow constraints.
- Used React Query for server-state management.
- Built reusable UI components with Ant Design and RefineJS.
- Maintained frontend quality with Jest testing.
- Used Bitbucket Pipelines for CI/CD workflow.

### Key technical challenges

- Supporting app usage when internet connectivity is limited.
- Managing field verification order data reliably.
- Balancing offline access with API-based data synchronization.
- Keeping the UI usable for field users, not only office users.

### Technologies

TypeScript, Next.js, RefineJS, REST API, React Query, Ant Design, Jest, PWA, Bitbucket Pipelines.

### Portfolio card version

**Crowdver Tool — Offline-First Farmer Verification PWA**
Developed and maintained a PWA for managing farmer verification orders, including offline-first capabilities to support field users in low-connectivity environments.

**Tech focus:** TypeScript, Next.js, RefineJS, REST API, React Query, Ant Design, Jest, PWA, Bitbucket Pipelines.

---

## 3. CRM Dashboard — Customer, Order & Transaction Management

**Company:** eFishery
**Role:** Frontend Engineer
**Type:** CRM dashboard, internal tool, customer operations
**Source:** Listed in your portfolio under eFishery.

### Project overview

CRM Dashboard was an internal dashboard for managing customer-related data, including customer profiles, orders, and transactions.

### What I worked on

- Built and maintained CRM dashboard features.
- Developed customer profile management interfaces.
- Built order and transaction data views.
- Integrated dashboard UI with backend APIs.
- Improved frontend test coverage with Jest.
- Maintained reusable components and frontend patterns.

### Technical approach

- Used Next.js and TypeScript for scalable frontend development.
- Managed API data and async state using React Query.
- Used Ant Design to build consistent dashboard interfaces.
- Implemented unit tests with Jest.
- Improved test coverage by 80%.

### Key technical challenges

- Presenting customer, order, and transaction data in a clear operational dashboard.
- Maintaining reliability across data-heavy views.
- Improving test coverage without slowing down feature development.
- Keeping dashboard components reusable and maintainable.

### Technologies

TypeScript, Next.js, React Query, CodePush, Bitbucket Pipelines, Ant Design, Jest.

### Portfolio card version

**CRM Dashboard — Customer Operations Tool**
Built and maintained a CRM dashboard for managing customer profiles, orders, and transactions, while improving frontend test coverage by 80%.

**Tech focus:** TypeScript, Next.js, React Query, Ant Design, Jest, Bitbucket Pipelines.

---

## 4. Sales Diary — Mobile App for Sales & Field Teams

**Company:** eFishery
**Role:** Frontend Engineer
**Type:** React Native mobile app, field operations, sales activity
**Source:** Listed in your portfolio under eFishery.

### Project overview

Sales Diary was a mobile app for sales and field teams to manage operational activities such as supply management, order tracking, and reporting.

### What I worked on

- Developed mobile app features for field and sales teams.
- Built supply management workflows.
- Built order tracking and reporting interfaces.
- Integrated API data into mobile screens.
- Integrated CodePush to speed up deployment.
- Supported mobile app release and update workflow.

### Technical approach

- Used React Native with TypeScript for cross-platform mobile development.
- Used React Query for API data management.
- Integrated CodePush for faster over-the-air updates.
- Used Bitbucket Pipelines for CI/CD.
- Structured app screens around field team workflows.

### Key technical challenges

- Building mobile workflows for users operating outside office environments.
- Supporting frequent updates without relying fully on app store release cycles.
- Managing order and activity data in a mobile-first interface.
- Keeping field reporting simple and usable.

### Technologies

TypeScript, React Native, React Query, CodePush, Bitbucket Pipelines.

### Portfolio card version

**Sales Diary — Sales & Field Activity Mobile App**
Developed a mobile app for sales and field teams to manage supply activities, order tracking, and reporting. Integrated CodePush to accelerate deployment by 50%.

**Tech focus:** TypeScript, React Native, React Query, CodePush, Bitbucket Pipelines.

---

## 5. Fish Internal Tool — Business Unit Admin Platform

**Company:** eFishery
**Role:** Frontend Engineer
**Type:** Internal admin tool, business operations dashboard
**Source:** Listed in your portfolio under eFishery.

### Project overview

Fish Internal Tool was an internal administrative platform for the Fish Business Unit team, built to handle various administrative tasks.

### What I worked on

- Created internal admin tool interfaces.
- Built administrative workflows for business unit operations.
- Developed reusable frontend components.
- Integrated frontend with backend APIs.
- Managed application state and server state.
- Added unit testing for frontend reliability.

### Technical approach

- Used Next.js and TypeScript for frontend architecture.
- Used RefineJS to accelerate admin panel development.
- Used React Query for server-state management.
- Used Zustand for client-side state management.
- Used Ant Design for admin UI components.
- Maintained code quality with Jest.

### Key technical challenges

- Building admin interfaces that support recurring business-unit tasks.
- Keeping internal tools maintainable as workflows evolve.
- Combining server-state and client-state cleanly.
- Reusing components across admin screens.

### Technologies

TypeScript, CSS, Next.js, RefineJS, React Query, Zustand, Ant Design, Jest.

### Portfolio card version

**Fish Internal Tool — Business Unit Admin Platform**
Created an internal administrative tool for the Fish Business Unit team, supporting recurring operational tasks through custom admin interfaces.

**Tech focus:** TypeScript, Next.js, RefineJS, React Query, Zustand, Ant Design, Jest.

---

## 6. eFisheryku — Membership, Commerce & Loan Application App

**Company:** eFishery
**Role:** Frontend Engineer
**Type:** Customer-facing web app, membership, commerce, financing workflow
**Source:** Listed in your portfolio under eFishery.

### Project overview

eFisheryku was a membership app that enabled users to sell commodities, purchase feed, and apply for loans through the Kabayan feature.

### What I worked on

- Developed customer-facing membership app features.
- Built commodity selling workflows.
- Built feed purchasing experiences.
- Supported loan application flow through Kabayan.
- Integrated frontend with GraphQL APIs.
- Managed server and client state.
- Added testing with Jest.

### Technical approach

- Used React.js with Vite for frontend development.
- Used GraphQL for API integration.
- Used React Query for server-state management.
- Used Zustand for local/client-side state.
- Built user-facing flows across commerce and financing features.
- Maintained frontend quality with Jest.

### Key technical challenges

- Combining multiple business flows in one membership app.
- Handling commerce and financing-related user journeys.
- Managing GraphQL data and local app state.
- Creating a usable experience across different user intents: sell, buy, and apply.

### Technologies

TypeScript, CSS, React.js, Vite, GraphQL, React Query, Zustand, Jest.

### Portfolio card version

**eFisheryku — Membership, Commerce & Loan Application App**
Developed a membership app that enabled users to sell commodities, purchase feed, and apply for loans through the Kabayan feature.

**Tech focus:** TypeScript, React.js, Vite, GraphQL, React Query, Zustand, Jest.

---

## 7. Medinesia — Hospital Information System

**Company:** Pertamina Bina Medika IHC
**Role:** Lead Frontend Engineer
**Type:** Hospital information system, healthcare operations, legacy improvement
**Period:** Oct 2020 – June 2023
**Source:** Listed in your portfolio under Pertamina Bina Medika IHC.

### Project overview

Medinesia was a Hospital Information System web app for Pertamina Hospital, used to manage patient treatment data and maintain records for future providers.

### What I worked on

- Developed HIS web app features.
- Built interfaces for managing patient treatment data.
- Improved legacy React applications.
- Enhanced frontend performance.
- Reduced build times.
- Established coding standards.
- Created reusable components.
- Led frontend engineering decisions.

### Technical approach

- Improved legacy React architecture and maintainability.
- Introduced reusable component patterns.
- Applied frontend performance optimization.
- Standardized coding practices across the frontend codebase.
- Used React Query for data fetching and state synchronization.
- Worked with multiple state management tools depending on system needs.

### Key technical challenges

- Working with healthcare data workflows where reliability matters.
- Improving a legacy frontend while continuing product development.
- Reducing build time and improving developer experience.
- Creating standards that help a frontend team move faster and more consistently.

### Technologies

JavaScript, CSS, Styled Components, React.js, React Query, Redux, Recoil, Ant Design.

### Portfolio card version

**Medinesia — Hospital Information System**
Developed a hospital information system for managing patient treatment data and records. Improved legacy React applications through performance enhancements, reduced build times, coding standards, and reusable components.

**Tech focus:** JavaScript, React.js, React Query, Redux, Recoil, Ant Design, Styled Components.

---

## 8. SIRS Admin — Admin Application Built from Scratch

**Company:** Pertamina Bina Medika IHC
**Role:** Lead Frontend Engineer
**Type:** Admin dashboard, healthcare internal tool
**Source:** Listed in your portfolio under Pertamina Bina Medika IHC.

### Project overview

SIRS Admin was an admin application built from scratch using Next.js, with a focus on high performance and rapid development through reusable components.

### What I worked on

- Built the admin application from scratch.
- Designed frontend structure and component patterns.
- Implemented reusable components.
- Applied frontend best practices for performance and maintainability.
- Integrated admin UI with backend data.
- Helped establish development patterns for faster feature delivery.

### Technical approach

- Used Next.js as the frontend framework.
- Used TypeScript for type safety.
- Used React Query for API state.
- Used Recoil for state management.
- Used Ant Design for dashboard/admin UI.
- Built reusable components to accelerate development.

### Key technical challenges

- Starting an admin product from scratch.
- Creating frontend architecture that supports rapid development.
- Balancing performance, maintainability, and reusable UI.
- Building a healthcare admin tool with internal operational needs.

### Technologies

TypeScript, CSS, Styled Components, Next.js, React Query, Recoil, Ant Design.

### Portfolio card version

**SIRS Admin — Healthcare Admin Application**
Built a healthcare admin application from scratch using Next.js, applying reusable components and frontend best practices to support high performance and faster development.

**Tech focus:** TypeScript, Next.js, React Query, Recoil, Ant Design, Styled Components.

---

## 9. Circles.MD — Healthcare Communication Mobile App

**Company:** Virtual Spirit
**Role:** Frontend Engineer
**Type:** React Native mobile app, healthcare communication
**Period:** Apr 2019 – Aug 2022
**Source:** Listed in your portfolio under Virtual Spirit.

### Project overview

Circles.MD was a mobile communication app designed to improve the working lives of health professionals and promote better patient care in hospitals.

### What I worked on

- Developed mobile app features using React Native.
- Built healthcare communication interfaces.
- Integrated Google API.
- Integrated real-time communication using PubNub.
- Managed app state with Redux Saga.
- Styled mobile UI with Styled Components.

### Technical approach

- Used React Native for mobile development.
- Used PubNub for real-time communication capabilities.
- Used Redux Saga for side-effect and async flow management.
- Integrated Google API for supporting app features.
- Built responsive and maintainable mobile UI.

### Key technical challenges

- Supporting communication workflows for healthcare professionals.
- Handling real-time messaging or updates.
- Managing complex asynchronous flows in a mobile app.
- Building a reliable mobile experience for hospital-related use cases.

### Technologies

TypeScript, Styled Components, Google API, PubNub, React Native, Redux Saga.

### Portfolio card version

**Circles.MD — Healthcare Communication Mobile App**
Developed a React Native communication app for healthcare professionals, integrating real-time communication and supporting hospital collaboration workflows.

**Tech focus:** TypeScript, React Native, PubNub, Google API, Redux Saga, Styled Components.

---

## 10. PropSocial — Property Discovery Mobile App

**Company:** Virtual Spirit
**Role:** Frontend Engineer
**Type:** React Native mobile app, property platform, map-based experience
**Source:** Listed in your portfolio under Virtual Spirit.

### Project overview

PropSocial was a mobile property app featuring community reviews and an intuitive interface to help users find ideal properties.

### What I worked on

- Built mobile app screens and user flows.
- Developed property discovery interfaces.
- Integrated MapBox API.
- Managed mobile app state using Redux Saga.
- Styled mobile UI with Styled Components.
- Supported a review-driven property browsing experience.

### Technical approach

- Used React Native for cross-platform mobile development.
- Used MapBox API for map/location-based features.
- Used Redux Saga to manage async flows.
- Built UI around property search, discovery, and community review experiences.

### Key technical challenges

- Integrating map-based property discovery.
- Handling location/map interactions in a mobile app.
- Building intuitive property browsing flows.
- Managing async API calls and state in mobile screens.

### Technologies

JavaScript, Styled Components, MapBox API, React Native, Redux Saga.

### Portfolio card version

**PropSocial — Property Discovery Mobile App**
Built mobile app features for property discovery, community reviews, and map-based browsing using React Native and MapBox API.

**Tech focus:** JavaScript, React Native, MapBox API, Redux Saga, Styled Components.

---

## 11. Updated — Social Media Mobile App

**Company:** Virtual Spirit
**Role:** Frontend Engineer
**Type:** React Native mobile app, social media, photo/video sharing
**Source:** Listed in your portfolio under Virtual Spirit.

### Project overview

Updated was a social media mobile app focused on photo and video sharing, similar to Instagram. The work emphasized high performance and responsiveness.

### What I worked on

- Developed social media mobile app features.
- Built photo and video sharing interfaces.
- Integrated Firebase.
- Integrated Google API.
- Managed app state with Redux Saga.
- Focused on high performance and responsive UI.

### Technical approach

- Used React Native for mobile app development.
- Used Firebase for backend/platform capabilities.
- Used Redux Saga for async state and side effects.
- Built media-centric UI interactions.
- Optimized mobile experience for responsiveness.

### Key technical challenges

- Building performant media-heavy mobile screens.
- Handling photo/video sharing interactions.
- Managing async workflows and app state.
- Maintaining responsiveness across mobile devices.

### Technologies

JavaScript, Styled Components, Google API, React Native, Firebase, Redux Saga.

### Portfolio card version

**Updated — Photo & Video Sharing Mobile App**
Developed a React Native social media app focused on photo and video sharing, with attention to performance and responsive mobile interactions.

**Tech focus:** JavaScript, React Native, Firebase, Google API, Redux Saga, Styled Components.

---

## 12. VirtualSpace — Team Collaboration & Kanban App

**Company:** Virtual Spirit
**Role:** Frontend Engineer
**Type:** Mobile and web app, collaboration, Kanban workflow
**Source:** Listed in your portfolio under Virtual Spirit.

### Project overview

VirtualSpace was a mobile and web team collaboration app with features such as team discussions and Kanban task management.

### What I worked on

- Built mobile and web collaboration features.
- Developed team discussion interfaces.
- Built Kanban task management workflows.
- Integrated Google API.
- Integrated real-time communication using PubNub.
- Managed app state using Redux Saga.

### Technical approach

- Used React.js for web and React Native for mobile.
- Used PubNub for real-time collaboration features.
- Used Redux Saga for async workflows.
- Built Kanban-style task management interactions.
- Used Styled Components for consistent UI styling.

### Key technical challenges

- Supporting both mobile and web experiences.
- Building collaboration workflows across teams.
- Handling real-time discussion/task updates.
- Managing Kanban state and task interactions.

### Technologies

JavaScript, Styled Components, Google API, React.js, PubNub, React Native, Redux Saga.

### Portfolio card version

**VirtualSpace — Team Collaboration & Kanban App**
Created a mobile and web collaboration app with team discussions and Kanban task management to improve organizational communication.

**Tech focus:** JavaScript, React.js, React Native, PubNub, Google API, Redux Saga, Styled Components.

---

## 13. Komers App — Mobile E-Commerce App

**Company:** Komers
**Role:** Frontend Engineer
**Type:** React Native mobile app, e-commerce
**Period:** Aug 2018 – Apr 2019
**Source:** Listed in your portfolio under Komers.

### Project overview

Komers App was a mobile e-commerce app built from scratch for selling textile components such as cloth and thread.

### What I worked on

- Developed and designed the mobile app from scratch.
- Built e-commerce user interfaces.
- Created product browsing and shopping flows.
- Managed app state with Redux Saga.
- Styled app screens with CSS/React Native styling.

### Technical approach

- Used React Native for mobile app development.
- Used Redux Saga to manage async flows and state.
- Built app screens from scratch, covering e-commerce browsing and purchase-related flows.
- Worked on both development and design aspects.

### Key technical challenges

- Building a mobile e-commerce app from zero.
- Creating intuitive product discovery and shopping flows.
- Managing product and transaction-related state.
- Designing usable mobile interfaces for textile components.

### Technologies

JavaScript, React Native, CSS, Redux Saga.

### Portfolio card version

**Komers App — Textile E-Commerce Mobile App**
Developed and designed a React Native e-commerce app from scratch for selling textile components such as cloth and thread.

**Tech focus:** JavaScript, React Native, Redux Saga, CSS, mobile commerce UX.

---

## 14. eSuite — Distribution Management System (DMS)

**Company:** eDOT
**Role:** Senior Frontend Engineer
**Type:** Web app, enterprise DMS platform, micro-frontend migration
**Platform:** Web app
**Context:** Current work experience

### Project overview

eSuite is a Distribution Management System (DMS) platform built by eDOT, designed to help businesses optimize distribution operations — including operational management, real-time insights, stock management, and marketing effectiveness. The platform serves as a centralized hub for managing end-to-end distribution workflows.

The platform originally ran as a monorepo with many tightly coupled modules. A major initiative was launched to rebuild the system into a new v2 architecture using a micro-frontend approach, allowing each module to be developed, deployed, and scaled independently while still functioning as a cohesive product.

### What I worked on

- Led the migration of the **emitra module** from the legacy monorepo to the new v2 micro-frontend architecture.
- Designed and implemented the micro-frontend integration for emitra using module federation patterns.
- Migrated existing emitra features from the old codebase to the new v2 structure.
- Implemented new features within the emitra module post-migration.
- Identified and resolved bugs in both migrated and newly implemented features.
- Collaborated with cross-functional teams to ensure smooth transition without disrupting ongoing business operations.

### Technical approach

- Applied micro-frontend architecture using Module Federation to decompose the monolith into independently deployable modules.
- Structured the emitra module as a standalone micro-frontend that integrates with the host shell application.
- Managed shared dependencies and state across micro-frontends to maintain a seamless user experience.
- Implemented incremental migration strategy — moving one module at a time to reduce risk.
- Maintained backward compatibility during the migration phase to avoid breaking existing workflows.
- Applied frontend best practices for code quality, testing, and performance optimization in the new architecture.

### Key technical challenges

- Migrating a tightly coupled module from a large monorepo into an independent micro-frontend without breaking existing functionality.
- Managing shared state and dependencies between micro-frontends and the host shell.
- Ensuring the emitra module could be developed and deployed independently while still integrating cleanly with other eSuite modules.
- Handling versioning and compatibility during the incremental migration process.
- Balancing new feature development with ongoing migration work.
- Maintaining data consistency and API integration integrity across the architectural transition.

### Technologies

TypeScript, React.js, Micro-Frontend (Module Federation), Webpack, REST API, Monorepo to Micro-Frontend Architecture.

### Portfolio card version

**eSuite — Distribution Management System (DMS)**
Led the migration of the emitra module from a legacy monorepo to a v2 micro-frontend architecture within eDOT's DMS platform. Implemented new features and resolved bugs while ensuring seamless integration across independently deployable modules.

**Tech focus:** TypeScript, React.js, Micro-Frontend, Module Federation, Monorepo Migration, REST API.
