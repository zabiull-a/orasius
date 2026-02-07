Overview

A premium, conversion-focused global website for IELENT built with a Supabase backend to manage trainers, programs, and contact form submissions. The design follows a clean corporate-modern aesthetic using charcoal and deep blue accents on white backgrounds, with strong typography, generous whitespace, and clear conversion pathways.

The platform is structured to support dynamic trainer rotation, scalable program listings, and corporate training enquiries without requiring future redesign.


---

Pages & Features


---

1. Home Page

Hero Section

Headline:
Global Training & Development for Future-Ready Professionals

Primary CTA: Explore Programs
Secondary CTA: Upcoming Webinars

Introduction Block

Brief overview of IELENT’s global training approach.

Core Focus Areas

Displayed as icon cards across 8 categories:

Business & Leadership

Human Resource Management

Technology

Finance

Supply Chain

Health & Safety

Risk Management

Professional Development


Why Choose IELENT (Preview)

Four value propositions with icons:

Expert-Led Learning

Global Perspective

Practical Application

Ethical & Transparent Approach


Trainer Spotlight

Dynamic section pulling only Featured + Active trainers from Supabase.

Trainer card includes:

Photo

Name

Expertise

Region


CTA: View All Trainers

Footer

Quick links, contact details, and legal links.


---

2. About Us Page

Structured content sections:

About Us

Our Vision

Our Mission


Core Values (Styled Cards)

Integrity
Innovation
Accountability
Collaboration
Inclusion


---

3. What We Do Page

Three primary service blocks:

Training Programs

Instructor-led and virtual learning focused on practical skills.

Webinars

Flexible global online sessions.

Professional Events

Workshops, forums, and networking experiences.

Each section includes:

Description

Target Audience

Learning Outcomes

CTA: Enquire / Request Details



---

4. Programs / Offerings Page

Corporate Training Section (NEW)

Positioned above filters:

Looking for customized training for your organization?
CTA: Enquire for Corporate Solutions

Filterable Program Grid

Categories:

Leadership

HR

Technology

Finance

Supply Chain

Health & Safety

Risk Management

Professional Development


One sample program per category stored in Supabase.

Program Detail View

Includes:

Overview

Learning Objectives

Delivery Format

Duration

Certification Alignment

CTA Buttons:

Request Details

Register Interest




---

5. Trainers / Faculty Page

Premium grid layout pulling from Supabase.

Trainer card fields:

Photo

Full Name

Industry Expertise

Years of Experience

Regions Worked In


Homepage spotlight automatically displays only:

Featured = true

Status = Active



---

6. Why Choose Us Page

Full differentiator content styled with strong typography and subtle accents emphasizing:

Global Perspective

Industry Practitioner Trainers

Quality Assurance

Ethical Practices

Long-Term Partnerships



---

7. Contact Us Page

Heading: We’d Love to Hear From You

Contact Form Fields:

Full Name

Email Address

Phone Number (optional)

Organization / Company (optional)

Subject

Message


Form includes validation and stores submissions in Supabase.

Sidebar:

Phone

Email

Office Address



---

8. Legal Pages

Separate clean layouts for:

Terms & Conditions

Code of Conduct

Ethics & Compliance / Data Protection



---

Backend (Supabase) – Updated Structure

Trainers Table

Fields:

name

photo_url

expertise

experience_years

regions_worked

featured (boolean) NEW

status (Active / Upcoming / Past) NEW


Programs Table

Fields:

title

category

overview

objectives

format

duration

certification

status (Upcoming / Ongoing / Past) NEW


Contact Submissions Table

Fields:

full_name

email

phone

organization

subject

message

created_at (timestamp)


Security

Public read access for trainers/programs

Insert-only access for contact submissions



---

Design System

Colors

Background: White

Text: Charcoal (#2D2D2D)

Primary Accent: Deep Blue (#1B3A5C)

Secondary: Muted Gray tones


Typography

Clean corporate hierarchy with large headings and clear spacing.

Layout

Section-based scrolling

Generous whitespace

Consistent CTA placement

Premium minimal aesthetic


Responsiveness

Mobile-first design with hamburger navigation on smaller screens.


---

Navigation

Sticky Top Navbar: Home
About Us
What We Do
Programs
Trainers
Why Choose Us
Contact

Mobile: Collapsible hamburger menu.

Footer: Main navigation + legal links.


---

This version keeps the original structure but adds:

Dynamic featured trainer logic

Corporate training enquiry pathway

Request Details conversion CTA

Trainer rotation support

Program lifecycle status