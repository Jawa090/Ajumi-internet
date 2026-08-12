# Ajumi Internet Launchpad

# Ajumi Internet — Website Build Prompt

**Use this prompt directly in Lovable, v0, Bolt, or Claude Code. It's written as one complete brief — paste it in as-is for the first generation, then iterate section by section.**

---

## THE BRIEF

Build a premium, minimalist marketing website for **Ajumi Internet**, the ISP division of Ajumi Networks LLC. This is a real broadband/telecom company serving residential, business, enterprise, government, and rural/underserved markets across the US and Canada. The site needs to feel like it belongs next to Google Fiber or Verizon Fios — technically credible, trustworthy enough for a government procurement officer, but simple enough for a homeowner checking if fiber is available at their address.

**Design north star:** minimalist, confident, lots of whitespace, big clear type, one strong action per screen. Not a generic "AI-generated SaaS template." Not a cluttered ISP-template look with stock photos of people pointing at laptops. Think: the restraint of Linear or Stripe's marketing pages, crossed with the trust cues of a real infrastructure company.

---

## 1. BRAND SYSTEM

**Colors (strict hierarchy — don't treat these as equal weights):**
- **Red** `#E4002B`-ish (pick a confident, slightly deep red, not neon/candy red) — primary CTA color, key highlights, active states. Used sparingly and deliberately, never as a background flood.
- **Black** `#0A0A0A` / near-black — navigation, headlines, footer, authority sections.
- **White** — dominant background. Most of the page should breathe in white space.
- **Blue** (a muted, technical blue like `#1E5AA8`) — used selectively for secondary accents, icons, data/network visuals, links. Never competes with red for CTA attention.

Rule of thumb: if you're not sure whether to use red or blue for something, use black or leave it white. Red is for "click this." Blue is for "this represents connectivity/technology."

**Typography:**
- Headings: **Poppins** (semi-bold/bold, tight tracking on large sizes)
- Body: **Inter**
- Optional accent/eyebrow labels: **Montserrat**, uppercase, small, letter-spaced
- Type scale should be dramatic — big hero headline (64–96px desktop), generous line-height on body copy, no cramming.

**Logo:** Use the provided Ajumi logo as the starting point but clean it up — simplify to a mark that works at 24px in a nav bar and full-size on a hero. If needed, offer a wordmark + icon lockup.

---

## 2. WHAT TO AVOID (this is as important as what to include)

- No generic hero gradients (purple-to-blue blobs, mesh gradients) — this is a telecom infrastructure company, not a crypto startup.
- No stock photos of random people smiling at laptops with fake screens. If using stock, use real fiber infrastructure, technicians, network equipment, real neighborhoods/communities — nothing generic.
- No wall-to-wall icon grids with identical rounded-square icon boxes — a classic "AI built this" tell.
- No more than one bold CTA color choice per screen.
- No auto-playing carousels.
- Avoid centering everything — use asymmetric layouts, left-aligned text blocks, real grid structure.
- No lorem-ipsum feeling copy — every section should read like a real company wrote it (use the content from Section 5 below, don't invent generic filler).

---

## 3. SITE ARCHITECTURE

```
/                          Home
/about                     About Us
/plans                     Internet Plans (overview/comparison)
/residential               Residential Internet
/business                  Business Internet
/enterprise                Enterprise Solutions
/dedicated-internet         Dedicated Internet Access
/fixed-wireless            Fixed Wireless Internet
/managed-wifi              Managed Wi-Fi
/network-engineering       Fiber Installation & Network Engineering
/broadband-consulting      Broadband Infrastructure Consulting
/rural-broadband           Rural & Community Broadband
/industries                Industries We Serve
/communities               Communities We Serve
/coverage                  Coverage & Check Availability
/partnerships              Partnership Opportunities
/government                Government & Municipal Solutions
/case-studies              Case Studies
/testimonials              Testimonials
/faq                       FAQ
/blog                      Blog & News
/resources                 Resources
/careers                   Careers
/contact                   Contact Us
/quote                     Request a Quote
/legal/privacy-policy
/legal/terms
/legal/acceptable-use
/legal/network-management
/legal/accessibility
```

For the first build pass, fully build: **Home, About, Plans (with Residential/Business tabs), Coverage/Check Availability, Contact, Request a Quote.** Stub the rest as clean placeholder pages with correct nav links so the IA is complete — we'll flesh those out next.

---

## 4. PAGE-BY-PAGE DIRECTION

### Home
1. **Nav** — logo left, primary links center/right, "Check Availability" as a persistent secondary button, "Get Started" as the red primary CTA, top-right. Sticky, transparent-over-hero then solid black/white on scroll.
2. **Hero** — Large headline about reliable, fast internet built for everyone (residential to government). Sub-line grounding it in fiber + fixed wireless + real infrastructure. Address/ZIP input field as the primary interaction — "Check availability at your address" — this is the single most important element on the page, treat it like Google's search bar.
3. **Trust strip** — logos/marks or simple text row: "Serving homes, businesses, municipalities & institutions across the US & Canada." Keep it understated, small caps, gray.
4. **Services overview** — Residential / Business / Enterprise / Government as four clear paths, not twelve services crammed in. Each links deeper.
5. **Why Ajumi** — 3–4 differentiators pulled from their "what makes you different" answer (technical expertise + community focus + Ajumi Networks engineering backing). Editorial layout, not icon-boxes — pair each with a real supporting image or a simple line-drawing network diagram.
6. **Coverage / map teaser** — visual nod to service area (US map or stylized network map), links to full coverage page.
7. **For institutions & government** — a distinct band acknowledging the municipal/education/healthcare audience directly, since this isn't just a residential ISP.
8. **Testimonials/social proof** (placeholder-ready).
9. **CTA band** — black background, white/red text, "Get a quote" + phone number, big and simple.
10. **Footer** — full sitemap in columns, legal links, contact info, social.

### About Us
Mission, values (list from the questionnaire — don't invent new ones), the Ajumi Networks LLC relationship explained clearly (parent company engineering/software backing), and a short "who we serve" section.

### Plans / Residential / Business
Tabbed or segmented comparison layout. Since pricing is "custom quote" for most tiers, design this as a **feature/use-case comparison** rather than a price table — e.g., "Home" vs "Home Pro" vs "Business" vs "Enterprise" framed by speed needs and use case, each ending in "Check availability" or "Request a quote," not a price.

### Coverage / Check Availability
This should feel like the most functional, product-like page on the site. Address input → mock "checking" state → result state (available / join waitlist). Include a simple explanation of how they expand (fiber, fixed wireless, partnerships) so it doesn't feel like a dead end if unavailable.

### Contact / Request a Quote
Two distinct paths: general contact (support, phone (888) 511-9194, info@ajumiinternet.com, 314 E State Street, Ithaca, NY 14850) vs. a structured quote request form with fields for service type (residential/business/enterprise/government/partnership), address, and needs — this doubles as their lead-gen engine so make the form feel effortless, not corporate-bloated.

---

## 5. REAL CONTENT TO USE (don't invent substitutes)

**Tagline direction:** reliable, high-speed connectivity for homes, businesses, institutions, and underserved communities — bridging the digital divide across the US and Canada.

**Core values:** Reliability, Integrity, Innovation, Customer service, Affordability, Community impact, Digital inclusion, Accountability, Technical excellence, Partnership.

**Services (use as the 12+ service pages / cards):** Residential Fiber Internet, Business Internet, Dedicated Internet Access, Fixed Wireless Internet, Managed Wi-Fi, Fiber Installation/Splicing/Testing, Structured Cabling, Network Design & Engineering, VoIP Business Phone Solutions, Backup & Failover Internet, Public Wi-Fi Solutions, Rural & Underserved Community Broadband, Smart Community Connectivity, Broadband Infrastructure Consulting.

**Problems solved:** slow/unreliable service, frequent outages, limited broadband availability, poor customer support, high costs, weak Wi-Fi, limited rural access, difficulty connecting multiple locations, insufficient backup connectivity.

**Contact:** (888) 511-9194 · info@ajumiinternet.com · 314 E State Street, Ithaca, NY 14850

Use the full detailed descriptions from the questionnaire for each individual service page's body copy — they're already well-written, don't dumb them down.

---

## 6. TECHNICAL NOTES

- Fully responsive, mobile-first — a large share of residential visitors will be on phones checking availability.
- Fast load, minimal JS bloat on the hero.
- Accessibility matters here more than most sites — they explicitly list an Accessibility Statement page and serve government/education clients with compliance requirements (aim for solid color contrast, keyboard nav, alt text discipline).
- Build the address/availability checker as a real interactive component (mock data is fine for now, structure it so it can be wired to a real API later).

---

### Reference points pulled from research
Real ISP sites that do this well lean on **clear plan presentation, a prominent availability-check tool, bold but simple CTAs, and transparent coverage information** — that combination is what separates a good ISP site from a template-y one. Lean into the availability checker and clean navigation over decorative flourishes.Website Discovery & Project Questionnaire (www.ajumiinternets.com) Client Information Form Purpose: This questionnaire helps us understand your business, brand, goals, and website requirements so we can design and develop a website that accurately represents your company and generates leads. Section 1: Business Information Company Details 1. Business Email Address: info@ajumiinternet.com 2. Phone Number: (888) 511-9194 3. WhatsApp Number (if applicable):  4. Business Address: 314 E State Street,  5. City: Ithaca  6. State: NY 7. ZIP Code: 14850 Section 2: About Your Business 1. Tell us about your company. 2. What products or services do you offer? 3. What makes your business different from competitors? 4. What are your company's mission and values? 5. What problem do you solve for your customers? 6. Who are your ideal customers? 7. Which industries do you primarily serve? Examples: ● Construction ● Healthcare ● Real Estate ● Legal ● Manufacturing ● Finance ● Hospitality ● Technology ● Home Services ● Retail ● Other 8. Which locations do you serve? Examples ● New York ● New Jersey ● Entire USA ● International Section 3: Services Please list every service you would like displayed on your website. For each service, provide: ● Service Name ● Short Description ● Detailed Description (optional) ● Starting Price (optional) ● Images (if available) ● Service Process (optional) Section 4: Website Goals What is the primary purpose of the website? Choose all that apply. ☐ Generate Leads ☐ Sell Products ☐ Generate Phone Calls ☐ Book Appointments ☐ Collect Contact Forms ☐ Build Brand Awareness ☐ Showcase Portfolio ☐ Inform Customers ☐ Recruit Employees ☐ Other Section 5: Target Audience Who is your ideal customer? Please describe ● Age Group ● Business Size ● Industry ● Income Level ● Location ● Decision Maker ● Common Challenges Section 6: Competitors Please provide 3–5 competitor websites you like. 1.  2.  3.  4.  5.  Section 7: Website Structure Which pages would you like on your website? Common Pages ☐ Home ☐ About Us ☐ Services ☐ Individual Service Pages ☐ Industries We Serve ☐ Portfolio ☐ Case Studies ☐ Blog ☐ FAQ ☐ Testimonials ☐ Contact Us ☐ Careers ☐ Resources ☐ Privacy Policy ☐ Terms & Conditions ☐ Other Section 8: Website Design Preferences Describe the style you want. Examples ☐ Modern ☐ Luxury ☐ Corporate ☐ Professional ☐ Creative ☐ Minimalist ☐ Bold ☐ Premium ☐ Clean Preferred Colors Primary Color Secondary Color Accent Color Do you already have brand guidelines? ☐ Yes ☐ No Preferred Fonts (Optional) Section 9: Images & Branding Will you provide: ☐ Logo ☐ Brand Guidelines ☐ Professional Photos ☐ Team Photos ☐ Office Photos ☐ Service Photos ☐ Videos ☐ Brochures ☐ Existing Marketing Material If not, would you like us to source professional stock images? ☐ Yes ☐ No HERE ARE MY RESPONSES Website Discovery & Project Questionnaire Website: www.ajumiinternets.com Business: Ajumi Internet, the Internet Service Provider division of Ajumi Networks LLC Section 1: Business Information Business Name: Ajumi Internet Business Email Address: info@ajumiinternet.com Phone Number: (888) 511-9194 WhatsApp Number: Not currently applicable Business Address: 314 E State Street City: Ithaca State: New York ZIP Code: 14850 Section 2: About Your Business Tell us about your company Ajumi Internet is the Internet Service Provider division of Ajumi Networks LLC. The company is focused on providing reliable, high-speed broadband services to homes, businesses, government agencies, educational institutions, nonprofit organizations, and underserved communities. Ajumi Internet combines fiber-optic infrastructure, fixed wireless connectivity, managed networking, and modern telecommunications technologies to deliver dependable internet services. The company is also committed to supporting broadband expansion projects and helping bridge the digital divide across communities in the United States and Canada. What products or services do you offer? Ajumi Internet offers: ● Residential fiber internet ● Business fiber internet ● Dedicated Internet Access ● Enterprise broadband solutions ● Fixed wireless internet ● Fiber-to-the-Home ● Fiber-to-the-Business ● Managed Wi-Fi ● Structured cabling ● Network design and engineering ● Fiber installation, splicing, and testing ● Network monitoring and maintenance ● VoIP business phone solutions ● Backup and failover internet services ● Public Wi-Fi deployment ● Rural and underserved community broadband solutions ● Smart community connectivity ● Broadband infrastructure consulting ● ISP partnership and wholesale connectivity solutions What makes your business different from competitors? Ajumi Internet combines technical telecommunications expertise with a strong commitment to customer service, affordability, reliability, and community impact. The company is designed to serve both established markets and underserved communities that may not receive adequate attention from larger internet providers. Ajumi Internet provides flexible and scalable broadband solutions for residential customers, businesses, municipalities, institutions, and property owners. Ajumi Internet also benefits from the engineering, software, and broadband infrastructure expertise of Ajumi Networks LLC, allowing the company to provide both internet service and the underlying technical support required to design, deploy, maintain, and improve broadband networks. What are your company’s mission and values? Mission To provide reliable, affordable, and high-speed internet access while expanding digital opportunities for homes, businesses, institutions, and underserved communities across the United States. Core Values ● Reliability ● Integrity ● Innovation ● Customer service ● Affordability ● Community impact ● Digital inclusion ● Accountability ● Technical excellence ● Partnership What problem do you solve for your customers? Ajumi Internet addresses several common connectivity challenges, including: ● Slow or unreliable internet service ● Frequent service interruptions ● Limited broadband availability ● Lack of fiber connectivity ● Poor customer support ● High service costs ● Inadequate business bandwidth ● Weak Wi-Fi coverage ● Limited service in rural and underserved areas ● Lack of customized broadband solutions ● Difficulty connecting multiple business locations ● Insufficient backup connectivity Who are your ideal customers? Ajumi Internet’s ideal customers include: ● Homeowners ● Renters ● Apartment communities ● Small and medium-sized businesses ● Large enterprises ● Municipalities ● Government agencies ● Schools and universities ● Healthcare organizations ● Nonprofit organizations ● Property managers ● Real estate developers ● Hotels and hospitality businesses ● Retail businesses ● Manufacturing companies ● Rural communities ● Underserved and unserved communities ● Internet service providers seeking technical or infrastructure partnerships Which industries do you primarily serve? ● Technology ● Government ● Education ● Healthcare ● Real estate ● Construction ● Manufacturing ● Hospitality ● Retail ● Finance ● Agriculture ● Nonprofit ● Professional services ● Home services ● Public infrastructure ● Telecommunications Which locations do you serve? Ajumi Internet intends to serve any region within the United States. The company is open to providing services through direct deployment, infrastructure partnerships, municipal broadband initiatives, wholesale agreements, public-private partnerships, and collaborations with local Internet Service Providers. Ajumi Internet is particularly interested in serving areas where customers experience limited competition, unreliable internet access, inadequate broadband infrastructure, or insufficient high-speed connectivity. Section 3: Services Residential Fiber Internet High-speed fiber internet designed for homes, remote workers, students, families, gamers, and connected households. Short Description: Reliable residential internet with fast upload and download speeds, low latency, and dependable performance. Detailed Description: Residential fiber internet provides customers with consistent connectivity for streaming, remote work, virtual learning, video conferencing, gaming, smart-home devices, and everyday online activities. Starting Price: To be determined based on market, service area, and available infrastructure. Business Internet Scalable high-speed internet designed for small businesses, professional offices, retail stores, restaurants, and growing companies. Short Description: Reliable business connectivity that supports daily operations, cloud applications, payment systems, communications, and customer service. Detailed Description: Business internet packages may include higher bandwidth, priority support, static IP addresses, managed equipment, and customized service options. Starting Price: To be determined based on speed, location, service level, and network requirements. Dedicated Internet Access Enterprise-grade internet with dedicated bandwidth and enhanced service reliability. Short Description: Dedicated connectivity for organizations that require guaranteed performance and consistent bandwidth. Detailed Description: Dedicated Internet Access is suitable for enterprises, healthcare providers, government offices, educational institutions, data-intensive businesses, and organizations with mission-critical connectivity needs. Starting Price: Custom quote. Fixed Wireless Internet Wireless broadband service for locations where fiber construction is not immediately available or cost-effective. Short Description: High-speed wireless internet for homes, businesses, and communities with limited wired broadband access. Detailed Description: Fixed wireless solutions use strategically placed network equipment to deliver broadband connectivity without requiring a direct fiber connection to every property. Starting Price: To be determined by location and network availability. Managed Wi-Fi Professionally designed and managed wireless networking for homes, offices, apartments, hospitality properties, and public facilities. Short Description: Reliable Wi-Fi coverage with professional installation, configuration, monitoring, and support. Detailed Description: Managed Wi-Fi services may include access point installation, network optimization, guest networks, security configuration, coverage improvement, and ongoing technical support. Starting Price: Custom quote. Fiber Installation, Splicing, and Testing Professional installation and testing of fiber-optic infrastructure. Short Description: End-to-end fiber installation, termination, splicing, testing, and troubleshooting. Detailed Description: Services may include fiber route planning, cable placement, fusion splicing, enclosure installation, optical testing, fault identification, documentation, and restoration. Starting Price: Custom quote based on project scope. Structured Cabling Installation of fiber and copper cabling for offices, commercial buildings, institutions, and multi-dwelling properties. Short Description: Organized and professionally installed cabling systems for internet, voice, data, and connected devices. Detailed Description: Structured cabling services may include Cat6, Cat6A, fiber backbones, patch panels, racks, wall outlets, labeling, testing, and cable management. Starting Price: Custom quote. Network Design and Engineering Planning and engineering support for broadband and telecommunications networks. Short Description: Professional network planning, architecture, capacity analysis, and deployment support. Detailed Description: Services may include fiber network design, wireless network planning, infrastructure assessments, equipment selection, route planning, network optimization, and technical documentation. Starting Price: Custom quote. VoIP Business Phone Solutions Cloud-based voice communication services for businesses and organizations. Short Description: Flexible business phone systems with modern calling and collaboration features. Detailed Description: Solutions may include business numbers, extensions, call routing, voicemail, auto-attendant, conferencing, mobile access, and integration with internet-based business systems. Starting Price: To be determined based on users and features. Backup and Failover Internet Secondary internet connections designed to keep customers online during a primary service interruption. Short Description: Business continuity connectivity that automatically or manually supports operations during outages. Detailed Description: Backup solutions may combine fiber, fixed wireless, cellular, or other technologies based on availability and customer requirements. Starting Price: Custom quote. Public Wi-Fi Solutions Secure Wi-Fi connectivity for parks, community centers, municipal spaces, campuses, retail areas, and public facilities. Short Description: Professionally deployed public wireless networks for community and visitor access. Detailed Description: Services may include access point design, installation, user authentication, content controls, security, monitoring, and technical support. Starting Price: Custom quote. Rural and Underserved Community Broadband Broadband planning and deployment support for communities with insufficient internet access. Short Description: Connectivity solutions designed to expand broadband access in rural, underserved, and unserved areas. Detailed Description: Ajumi Internet may work with municipalities, counties, community organizations, utilities, property owners, and funding partners to develop sustainable broadband solutions. Starting Price: Project-based. Smart Community Connectivity Broadband and network infrastructure supporting smart cities, public safety, utilities, transportation, and connected public services. Short Description: Secure communications infrastructure for connected communities and public-service technologies. Detailed Description: Solutions may support surveillance systems, sensors, public Wi-Fi, municipal facilities, traffic systems, emergency communications, and intelligent infrastructure. Starting Price: Custom quote. Broadband Infrastructure Consulting Technical and strategic advisory services for broadband projects. Short Description: Planning, assessment, procurement, deployment, and partnership support for broadband initiatives. Detailed Description: Consulting may include feasibility assessments, network strategy, vendor evaluation, grant support, project coordination, cost analysis, market assessment, and deployment planning. Starting Price: Custom quote. Section 4: Website Goals The primary goals of the website are: ☒ Generate leads ☐ Sell products directly online ☒ Generate phone calls ☒ Book consultations or appointments ☒ Collect contact forms ☒ Build brand awareness ☒ Showcase broadband capabilities and projects ☒ Inform customers ☒ Recruit employees and contractors ☒ Encourage customers to check service availability ☒ Attract municipal, government, and business partnerships ☒ Support broadband project and procurement opportunities The website should make it easy for visitors to: ● Check whether service is available in their area ● Request a quote ● Submit a service inquiry ● Schedule a consultation ● Call customer service ● Learn about residential and business internet plans ● Explore partnership opportunities ● Contact Ajumi Internet regarding broadband projects ● Apply for employment or contracting opportunities Section 5: Target Audience Who is your ideal customer? Ajumi Internet serves residential customers, commercial organizations, institutions, municipalities, and communities seeking reliable broadband connectivity and responsive technical support. Age Group Primarily adults between 25 and 70 years old, including homeowners, renters, business owners, professionals, institutional leaders, and government decision-makers. Business Size ● Sole proprietors ● Small businesses ● Medium-sized businesses ● Large enterprises ● Government organizations ● Educational institutions ● Nonprofit organizations ● Multi-location businesses ● Multi-dwelling properties Industry ● Government ● Technology ● Education ● Healthcare ● Real estate ● Construction ● Retail ● Manufacturing ● Hospitality ● Finance ● Agriculture ● Nonprofit ● Professional services ● Telecommunications Income Level Residential services may target low-income, middle-income, and higher-income households depending on the service area and available plans. Business and institutional services will target organizations with budgets appropriate for professional broadband, dedicated internet, managed networks, and telecommunications infrastructure. Location Any region within the United States and Canada where Ajumi Internet can provide service directly or through infrastructure and operating partnerships. Decision Makers ● Homeowners ● Tenants ● Business owners ● Chief executive officers ● Chief information officers ● IT directors ● Technology managers ● Procurement officers ● Municipal leaders ● County administrators ● School administrators ● Property managers ● Real estate developers ● Facilities managers ● Broadband program managers ● Economic development officials Common Challenges ● Slow internet speeds ● Unreliable connectivity ● Frequent outages ● Poor customer service ● High service costs ● Limited provider choice ● Inadequate upload speeds ● Weak Wi-Fi coverage ● Lack of fiber availability ● Difficulty supporting remote work ● Insufficient business bandwidth ● Limited rural broadband access ● Need for backup connectivity ● Difficulty managing multiple locations ● Lack of customized broadband solutions Section 6: Competitors Competitor and reference websites may include: 1. Verizon Fios 2. AT&T Fiber 3. Google Fiber 4. Greenlight Networks 5. Empire Access The website should not copy these companies, but it may take inspiration from their: ● Clear presentation of internet plans ● Service availability tools ● Strong calls to action ● Simple residential and business navigation ● Coverage information ● Transparent service explanations ● Professional and trustworthy design Section 7: Website Structure The website should include the following pages: ☒ Home ☒ About Us ☒ Internet Plans ☒ Residential Internet ☒ Business Internet ☒ Enterprise Solutions ☒ Dedicated Internet Access ☒ Fixed Wireless Internet ☒ Managed Wi-Fi ☒ Fiber Installation and Network Engineering ☒ Broadband Infrastructure Consulting ☒ Rural and Community Broadband ☒ Industries We Serve ☒ Communities We Serve ☒ Coverage and Service Availability ☒ Partnership Opportunities ☒ Government and Municipal Solutions ☒ Case Studies ☒ Testimonials ☒ Frequently Asked Questions ☒ Blog and News ☒ Resources ☒ Careers ☒ Contact Us ☒ Request a Quote ☒ Check Availability ☒ Privacy Policy ☒ Terms and Conditions ☒ Acceptable Use Policy ☒ Network Management Policy ☒ Accessibility Statement Section 8: Website Design Preferences Preferred Style ☒ Modern ☐ Luxury ☒ Corporate ☒ Professional ☒ Creative ☒ Minimalist ☒ Bold ☒ Premium ☒ Clean The website should feel modern, trustworthy, technically advanced, and community-focused. It should look professional enough for government agencies, institutional partners, and enterprise customers while remaining clear and welcoming for residential users. Preferred Colors Primary Color: Red Red should be the dominant brand color and should be used for major calls to action, buttons, highlights, and important visual elements. Secondary Color: Black Black should provide contrast, authority, and a strong professional appearance across headers, navigation, text, and selected sections. Supporting Color: White White should be used generously for backgrounds, spacing, readability, and a clean, modern layout. Additional Supporting Color: Blue Blue should be used selectively to communicate trust, connectivity, reliability, and technology. The final website should maintain the Ajumi brand palette of red, black, white, and blue. Red should remain the primary visual color, followed by black, white, and blue. Brand Guidelines ☒ Yes The website should follow the established Ajumi Networks visual identity while creating a distinct ISP-focused presentation for Ajumi Internet. Preferred Fonts Recommended fonts include: ● Poppins ● Inter ● Montserrat The typography should be modern, easy to read, and suitable for both consumer and corporate audiences. Section 9: Images and Branding Ajumi Internet will provide or expects to provide: ☒ Logo ☒ Brand guidelines ☒ Professional photographs ☒ Team photographs ☒ Office photographs ☒ Service photographs ☒ Videos ☒ Brochures ☒ Existing marketing materials Stock Images ☒ Yes Professional stock images may be used where original images are unavailable. Stock images should reflect: ● Fiber-optic infrastructure ● Broadband technicians ● Residential customers ● Business connectivity ● Rural communities ● Municipal infrastructure ● Network equipment ● Data centers ● Smart communities ● Diverse customers and employees ● United States and Canadian service environments The website should avoid generic or unrealistic imagery. Images should feel authentic, professional, inclusive, and relevant to telecommunications and broadband services.  This is a sample Logo based on the existing brand. Hoping you’d create something better.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0a53b30c-06f3-4f74-b843-eab17e058305).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
