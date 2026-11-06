# Product Requirements Document (PRD)
## Digital Wellbeing & Nomophobia Awareness, Monitoring and Recovery Platform

**Working product name:** Unplug Life  
**Product tagline:** Don't disconnect from technology. Reconnect with life.  
**Document version:** 1.0  
**Status:** Initial product definition  
**Platforms:** Android, iOS and Web  
**Initial language:** English  
**Primary market:** India, with architecture supporting international expansion  
**Target audience:** All age groups  
**Product category:** Digital Wellbeing, Mental Health Education and Behavioural Habit Management

---

# 1. Executive Summary

Unplug Life is a unified digital wellbeing platform designed to help individuals and families understand, identify, manage and gradually overcome unhealthy smartphone dependency, including nomophobia.

The platform will provide educational resources, self-assessment tools, screen-time awareness, personalised recovery programs, age-specific learning, daily challenges, AI-powered guidance and family wellbeing features.

Unlike traditional screen-time applications that primarily focus on measuring or restricting mobile usage, Unplug Life will focus on understanding the behavioural and emotional reasons behind smartphone dependency and helping people develop healthier habits.

The application will serve:

- Babies and infants through parent-guided digital parenting resources.
- Preschool and school-age children.
- Teenagers.
- College and university students.
- Young adults.
- Working professionals.
- Housewives and homemakers.
- Parents and caregivers.
- Women and girls.
- Senior citizens.

The same platform will provide different experiences based on age, responsibilities, lifestyle and individual wellbeing goals.

## 1.1 Product vision

Build a trusted digital wellbeing platform that helps every generation maintain a healthy relationship with technology.

## 1.2 Product mission

Help people understand their digital behaviour, reduce unhealthy dependency, improve real-world relationships and rediscover activities beyond their smartphones.

## 1.3 Core philosophy

Technology should improve human life, not control it.

## 1.4 Product objectives

1. Educate people about nomophobia and smartphone dependency.
2. Identify unhealthy smartphone usage patterns.
3. Provide age-specific educational experiences.
4. Help users understand their personal triggers.
5. Provide structured and personalised recovery programs.
6. Encourage healthier offline activities.
7. Help families establish healthy digital habits.
8. Provide actionable insights through analytics.
9. Offer accessible resources for senior citizens and children.
10. Connect users with qualified professionals when necessary.

---

# 2. Problem Statement

Smartphones have become essential for communication, education, entertainment, work and everyday activities.

However, excessive or uncontrolled usage can negatively affect concentration, sleep, relationships, productivity and emotional wellbeing.

People may repeatedly check their phones even without notifications, feel uncomfortable when disconnected, or struggle to spend time away from their devices.

Existing screen-time applications often focus on:
- Daily screen-time limits.
- App blocking.
- Notification restrictions.
- Usage statistics.
- Productivity timers.

These capabilities are useful but do not adequately address the educational, emotional, behavioural and family dimensions of smartphone dependency.

Unplug Life addresses this gap through a complete digital wellbeing experience.

# 3. Target Audience and User Segmentation

The platform will have one unified application with multiple age-specific experiences.

| Segment | Age | Primary objective |
|---|---:|---|
| Infants | 0–2 | Parent awareness and healthy digital parenting |
| Preschool | 3–5 | Healthy early childhood routines |
| School children | 6–12 | Balanced learning, play and device usage |
| Teenagers | 13–17 | FOMO, social media and emotional awareness |
| College students | 18–24 | Focus, productivity and independent habits |
| Young adults | 25–35 | Digital balance and personal development |
| Working adults | 36–55 | Work-life balance and stress management |
| Senior citizens | 56+ | Digital confidence, safe usage and social connection |

These are initial product segmentation bands, not clinical age categories.

### Additional lifestyle profiles

Users should also be able to select one or more lifestyle profiles:

- Student.
- College student.
- Working professional.
- Homemaker.
- Parent or caregiver.
- Senior citizen.
- Teacher or educator.
- Other.

### Specialised content

Women and girls will have access to dedicated digital confidence, online safety, social comparison and emotional wellbeing resources. These resources will remain inclusive and will not be restricted by gender.

### Important infant and child considerations

Infants cannot independently use or benefit from a nomophobia recovery application. Their experience must be parent-managed.

For younger children, the platform should prioritise offline activities, age-appropriate learning and parental involvement rather than encouraging additional independent screen usage.

---

# 4. Product Scope

## 4.1 Core product modules

The product will consist of the following major modules:

1. User onboarding and personalisation.
2. Nomophobia awareness and education.
3. Self-assessment and habit identification.
4. Age-specific learning experiences.
5. Smartphone usage monitoring.
6. Personalised recovery programs.
7. Daily activities and challenges.
8. Mindfulness and emotional wellbeing.
9. AI-powered wellbeing assistant.
10. Family digital wellbeing.
11. Progress tracking and reports.
12. Offline activity recommendations.
13. Professional support resources.
14. Web-based administration and content management.

## 4.2 Out of scope for the initial release

The following capabilities should not be included in the first MVP:

- Clinical diagnosis of nomophobia.
- Medical treatment recommendations.
- Automatic psychiatric assessments.
- Unrestricted public social networking.
- Public leaderboards displaying mental wellbeing scores.
- Mandatory device locking.
- Unauthorised monitoring of family members.
- Automated emergency intervention.
- Claims of clinically proven recovery.

---

# 5. User Roles and Permissions

The application will support multiple roles.

| Role | Permissions |
|---|---|
| Individual user | Manage own profile, assessments and recovery |
| Parent | Manage authorised child profiles and family activities |
| Child | Access age-appropriate supervised activities |
| Senior user | Access simplified interface and guided learning |
| Educator | Access approved educational resources and group programs |
| Professional | Access only explicitly authorised information |
| Content administrator | Create and manage educational content |
| Platform administrator | Manage users, configuration and system settings |

### Access control requirements

- Users can only access their own personal wellbeing information.
- Parents can access child profiles only through an appropriate authorised relationship.
- Professional access requires explicit user consent.
- Administrative roles must not automatically grant access to private assessments or journal entries.
- Child accounts must have age-appropriate safeguards.

---

# 6. Functional Requirements and Feature Specifications

## FR-01: User Registration and Onboarding

**Objective:** Understand the user's age group, lifestyle and wellbeing requirements.

### Features

- Email registration.
- Secure login.
- Password reset.
- Optional supported social authentication.
- Age-group selection.
- Lifestyle selection.
- Personal goals.
- Consent management.
- Accessibility preferences.

### Onboarding journey

1. Welcome screen.
2. Introduction to digital wellbeing.
3. Date of birth or age-band selection.
4. Parent-managed or individual account selection.
5. Lifestyle selection.
6. Primary smartphone usage selection.
7. Main concerns selection.
8. Recovery goal selection.
9. Consent and privacy explanation.
10. Personalised dashboard generation.

### Acceptance criteria

- Users must not access restricted content before completing required age and consent checks.
- The application must show appropriate experiences for each age group.
- Users can modify their preferences later.
- Onboarding must be accessible and easy to understand.

## FR-02: Nomophobia Awareness and Education

**Objective:** Explain nomophobia in simple language.

### Content categories

1. What is nomophobia?
2. History and meaning of nomophobia.
3. Causes and contributing factors.
4. Common signs and symptoms.
5. Psychological effects.
6. Physical effects.
7. Social and relationship effects.
8. Academic impact.
9. Professional impact.
10. Social media dependency.
11. Fear of missing out.
12. Smartphone dependency versus necessary smartphone use.
13. Healthy digital habits.
14. Prevention strategies.
15. When to seek professional help.

### Content formats

- Articles.
- Short videos.
- Illustrations.
- Audio lessons.
- Infographics.
- Interactive quizzes.
- Real-life scenarios.
- Frequently asked questions.

### Acceptance criteria

- Content must be categorised by age and topic.
- Users must be able to bookmark lessons.
- Completed lessons must be tracked.
- Content must have a defined reading level and appropriate age restrictions.
- Medical and psychological claims must undergo expert review.

## FR-03: Self-Assessment

**Objective:** Help users understand their phone-related habits and discomfort.

### Assessment types

**A. Nomophobia assessment**

Use the validated NMP-Q questionnaire where appropriate and legally permitted.

**B. Daily phone habit assessment**

Questions covering:
- Frequency of checking the phone.
- Anxiety without access.
- Battery-related concerns.
- Network connectivity concerns.
- Social media usage patterns.
- Sleep-related phone usage.
- Work and study interruptions.
- Family interaction interruptions.

**C. Emotional trigger assessment**

Identify situations in which users frequently reach for their phones.

Examples:
- Boredom.
- Loneliness.
- Stress.
- Anxiety.
- Fear of missing out.
- Habit.
- Work requirements.

### Results

- Assessment completion summary.
- Identified behavioural patterns.
- Personal areas for improvement.
- Suggested learning content.
- Recommended recovery activities.

### Acceptance criteria

- The application must distinguish validated instruments from custom awareness questionnaires.
- Assessment results must not be presented as a medical diagnosis.
- Users must be able to retake eligible assessments.
- Assessment history must be private.
- Recommendations must explain their purpose.

## FR-04: Age-Specific Learning

**Objective:** Deliver relevant content for each generation.

### Student experience

- Study-focus activities.
- Homework challenges.
- Concentration exercises.
- Educational offline games.
- Reading activities.
- Parent-supported goals.

### Teenager experience

- FOMO education.
- Social media awareness.
- Online safety.
- Confidence-building activities.
- Healthy social relationships.
- Sleep awareness.

### College student experience

- Pomodoro sessions.
- Examination focus mode.
- Productivity exercises.
- Social media habit management.
- Career-development activities.

### Working professional experience

- Work notification boundaries.
- Meeting focus.
- Email checking schedules.
- Work-life separation.
- Stress management.

### Homemaker experience

- Personal development.
- Offline hobbies.
- Gardening and creative activities.
- Family interaction.
- Self-care routines.
- Learning activities.

### Senior citizen experience

- Simple digital wellbeing education.
- Large fonts.
- Audio instructions.
- Safe internet usage.
- Scam awareness.
- Family communication.
- Offline social engagement.

### Parent experience

- Healthy digital parenting.
- Age-appropriate media guidance.
- Family media agreements.
- Parent-child activities.
- Personal digital wellbeing.

## FR-05: Screen-Time and Usage Monitoring

**Objective:** Help users understand how they spend time on their devices.

### Initial capabilities

- Daily screen-time overview.
- Weekly screen-time trends.
- Application usage categories.
- Device pickup counts where supported.
- Usage patterns by time of day.
- User-defined goals.
- Manual usage logging.

### Platform implementation

**Android**
- Investigate UsageStatsManager.
- Request the necessary user permissions.
- Explain what information is collected.
- Provide local usage aggregation where practical.

**iOS**
- Investigate FamilyControls, DeviceActivity and ManagedSettings.
- Confirm required Apple entitlements and approval.
- Obtain appropriate user authorisation.
- Provide a reduced-feature fallback where access is unavailable.

**Web**
- Provide self-reported tracking and activity logging.
- Do not claim that browser analytics can measure total device screen time.

### Acceptance criteria

- Monitoring must be opt-in.
- Usage data must be collected only with appropriate permission.
- Unsupported device capabilities must be communicated clearly.
- Users can disable monitoring.
- The application must never silently monitor another person.

## FR-06: Personalised Recovery Program

**Objective:** Help users gradually establish healthier smartphone habits.

### Available programs

- 7-day awareness program.
- 14-day habit-control program.
- 30-day digital wellbeing program.
- Custom personal goals.

### Recovery stages

**Stage 1: Awareness**
- Understand phone habits.
- Identify triggers.
- Review screen time.
- Recognise emotional patterns.

**Stage 2: Control**
- Manage unnecessary notifications.
- Introduce phone-free meals.
- Establish morning and bedtime boundaries.
- Practise short phone-free activities.

**Stage 3: Replacement**
- Reading.
- Exercise.
- Outdoor activities.
- Social interaction.
- Hobbies.

**Stage 4: Independence**
- Sustainable phone boundaries.
- Longer phone-free activities.
- Self-evaluation.
- Long-term maintenance plan.

### Adaptive behaviour

The program should:
- Adjust daily challenges based on user feedback.
- Avoid excessively difficult tasks.
- Allow missed days without punishment.
- Recommend easier activities when users struggle.
- Encourage consistency rather than perfection.

## FR-07: Daily Challenges

**Objective:** Turn digital wellbeing education into practical habits.

### Challenge categories

- Study without interruptions.
- Phone-free meals.
- Morning without social media.
- Reading for 20 minutes.
- Outdoor walking.
- Family conversation.
- Notification cleanup.
- Bedtime without unnecessary scrolling.
- Weekend hobby.
- Mindfulness exercises.

### Challenge lifecycle

1. Display challenge.
2. Explain its purpose.
3. Start activity.
4. Complete activity.
5. Record completion.
6. Collect optional feedback.
7. Update progress.

### Reward system

Use:
- Achievement milestones.
- Positive encouragement.
- Personal progress indicators.
- Completion badges.
- Meaningful offline activity milestones.

Do not use shame, negative streaks or competitive addiction rankings.

## FR-08: Mindfulness and Emotional Wellbeing

**Objective:** Help users manage uncomfortable feelings and digital triggers.

### Features

- Guided breathing.
- Grounding exercises.
- Short meditation.
- Emotional journaling.
- Stress-awareness lessons.
- Relaxation exercises.
- Sleep preparation activities.

### Anxiety SOS

Provide a simple interface with:
- Pause and breathe.
- Guided grounding exercise.
- Identify what triggered the feeling.
- Choose an appropriate next step.
- Access professional support information.

This is an educational self-regulation tool, not emergency or clinical care.

## FR-09: AI-Powered Wellbeing Assistant

**Objective:** Provide personalised educational guidance.

### Example questions

- Why do I feel uncomfortable without my phone?
- How can I stop scrolling before sleeping?
- How can I manage FOMO?
- How can I help my child develop healthy phone habits?
- How can I stop checking work messages after office hours?
- How can I help my parents use smartphones safely?

### AI capabilities

- Answer educational questions.
- Explain nomophobia.
- Recommend suitable activities.
- Explain assessment results cautiously.
- Suggest age-appropriate learning resources.
- Help users create healthy routines.
- Provide supportive conversation.

### AI safety requirements

- No clinical diagnosis.
- No medication recommendations.
- No claims of guaranteed recovery.
- No replacement for psychologists or psychiatrists.
- Clear escalation guidance for severe distress.
- Child-safe responses.
- Privacy-aware conversation handling.
- Human-reviewed educational knowledge base.

## FR-10: Family Digital Wellbeing

**Objective:** Help families establish healthy technology habits together.

### Features

- Family profiles.
- Parent-managed child experiences.
- Family screen-free activities.
- Shared challenges.
- Family media agreements.
- Family wellbeing education.
- Weekly family activity suggestions.

### Example challenge

Every family member spends 30 minutes together without unnecessary phone interruptions.

Participation must be voluntary and age-appropriate.

## FR-11: Offline Activity Recommendation

**Objective:** Give users meaningful alternatives to smartphone usage.

### Activity categories

- Sports.
- Reading.
- Gardening.
- Cooking.
- Drawing.
- Music.
- Walking.
- Cycling.
- Board games.
- Social interaction.
- Volunteering.
- Creative hobbies.
- Skill development.

### Personalisation inputs

- Age.
- Interests.
- Available time.
- Physical accessibility.
- Indoor or outdoor preference.
- Available resources.

Recommendations must be inclusive and must not assume that all users have the same financial, physical or social circumstances.

## FR-12: Progress Tracking and Analytics

**Objective:** Make behavioural improvements understandable.

### Dashboard metrics

- Screen-time trends.
- Application usage where available.
- Completed challenges.
- Learning progress.
- Recovery program progress.
- Phone-free activity duration.
- Self-reported wellbeing.
- Personal goal completion.

### Reports

- Daily summary.
- Weekly report.
- Monthly report.
- Recovery journey summary.

### Important distinction

Reduced screen time alone must not be treated as proof of recovery. Users may need their phones for education, accessibility, employment or family communication.

Progress should be measured through a combination of usage patterns, self-reported distress, personal goals and everyday functioning.

## FR-13: Professional Support Directory

**Objective:** Help users find appropriate support when self-guided activities are insufficient.

### Features

- Educational information on when to seek help.
- Psychologist and mental health professional directory.
- Appointment enquiry or external referral links.
- Trusted support resources.
- Emergency guidance appropriate to the user's location.

Professional recommendations must be verified, and the platform must clearly distinguish professional services from general community resources.

## FR-14: Accessibility

The platform must support:

- Adjustable font sizes.
- High-contrast mode.
- Screen readers.
- Voice guidance.
- Clear navigation.
- Simple language.
- Senior-friendly interface.
- Keyboard navigation on web.
- Reduced-motion preferences.
- Appropriate captions and transcripts.

---

# 7. Screen-by-Screen Application Structure

## 7.1 Mobile Application – Primary Navigation

The main navigation will consist of:

1. Home.
2. Learn.
3. My Journey.
4. Progress.
5. Profile.

Additional features will be accessible through the home screen and relevant sections.

## 7.2 Complete Screen Inventory

### Module A – Authentication and onboarding

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-001 | Splash | Display branding and initialise app |
| SCR-002 | Welcome | Introduce Unplug Life |
| SCR-003 | Introduction | Explain the platform |
| SCR-004 | Sign Up | Create an account |
| SCR-005 | Login | Authenticate users |
| SCR-006 | Password Recovery | Reset credentials |
| SCR-007 | Age Selection | Determine appropriate experience |
| SCR-008 | Account Type | Individual or parent-managed |
| SCR-009 | Lifestyle Selection | Understand user's daily life |
| SCR-010 | Usage Habits | Identify common usage patterns |
| SCR-011 | Main Concerns | Understand user difficulties |
| SCR-012 | Personal Goals | Set recovery goals |
| SCR-013 | Consent | Capture privacy and permissions |
| SCR-014 | Onboarding Complete | Generate personalised dashboard |

### Module B – Home

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-015 | Home Dashboard | Main personalised dashboard |
| SCR-016 | Daily Goal | Show daily objectives |
| SCR-017 | Today's Activities | Display recommended actions |
| SCR-018 | Recommended Learning | Show relevant educational content |
| SCR-019 | Daily Motivation | Positive encouragement |
| SCR-020 | Notifications | Display relevant reminders |

### Module C – Learn and Awareness

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-021 | Learning Categories | Browse content |
| SCR-022 | Nomophobia Introduction | Understand the condition |
| SCR-023 | Causes and Triggers | Learn contributing factors |
| SCR-024 | Symptoms | Understand common signs |
| SCR-025 | Effects | Learn about potential impacts |
| SCR-026 | Age-Based Learning | Access personalised content |
| SCR-027 | Article Detail | Read lessons |
| SCR-028 | Video Lesson | Watch educational content |
| SCR-029 | Interactive Quiz | Test understanding |
| SCR-030 | Bookmarks | Saved resources |

### Module D – Assessment

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-031 | Assessment Introduction | Explain the questionnaire |
| SCR-032 | Assessment Questions | Collect responses |
| SCR-033 | Assessment Review | Review answers |
| SCR-034 | Assessment Results | Display results appropriately |
| SCR-035 | Personal Insights | Explain behavioural patterns |
| SCR-036 | Recommended Actions | Suggest next steps |
| SCR-037 | Assessment History | Review previous assessments |

### Module E – Recovery Journey

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-038 | Journey Overview | Select a recovery program |
| SCR-039 | Program Detail | Explain the selected program |
| SCR-040 | Daily Journey | Display today's recovery tasks |
| SCR-041 | Activity Detail | Explain individual exercises |
| SCR-042 | Activity Timer | Support timed exercises |
| SCR-043 | Activity Completion | Record completion |
| SCR-044 | Journey Progress | Track recovery milestones |
| SCR-045 | Journey Reflection | Collect user feedback |
| SCR-046 | Journey Completion | Review completed program |

### Module F – Challenges and activities

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-047 | Challenge Categories | Browse challenges |
| SCR-048 | Challenge Detail | Explain a challenge |
| SCR-049 | Start Challenge | Begin activity |
| SCR-050 | Challenge Timer | Track duration |
| SCR-051 | Challenge Completion | Record success |
| SCR-052 | Offline Activities | Discover alternatives |
| SCR-053 | Activity Recommendations | Personalised suggestions |
| SCR-054 | Achievement Gallery | Display earned milestones |

### Module G – Mindfulness

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-055 | Mindfulness Home | Browse wellbeing exercises |
| SCR-056 | Breathing Exercise | Guided breathing |
| SCR-057 | Meditation | Guided meditation |
| SCR-058 | Grounding Exercise | Manage uncomfortable feelings |
| SCR-059 | Emotional Journal | Record personal reflections |
| SCR-060 | Sleep Routine | Support healthy bedtime habits |
| SCR-061 | Anxiety SOS | Quick self-regulation guidance |

### Module H – Screen-Time Monitoring

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-062 | Monitoring Introduction | Explain data collection |
| SCR-063 | Permission Setup | Obtain device permissions |
| SCR-064 | Usage Dashboard | Display screen-time information |
| SCR-065 | Application Breakdown | Show application usage |
| SCR-066 | Daily Trends | Show daily patterns |
| SCR-067 | Weekly Trends | Compare weekly usage |
| SCR-068 | Usage Goals | Set personal targets |
| SCR-069 | Usage Insights | Identify patterns |

### Module I – AI Assistant

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-070 | AI Assistant Home | Start conversation |
| SCR-071 | Conversation | Ask questions |
| SCR-072 | Suggested Prompts | Discover common questions |
| SCR-073 | Recommended Resources | Open related learning content |
| SCR-074 | AI Safety Information | Explain limitations |

### Module J – Family

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-075 | Family Dashboard | Manage family experience |
| SCR-076 | Add Family Member | Add authorised profile |
| SCR-077 | Child Profile | Manage supervised experience |
| SCR-078 | Family Activities | Browse shared activities |
| SCR-079 | Family Challenges | Participate together |
| SCR-080 | Family Media Agreement | Establish boundaries |
| SCR-081 | Parent Resources | Access parenting guidance |

### Module K – Progress

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-082 | Progress Dashboard | Overall progress |
| SCR-083 | Daily Report | Daily summary |
| SCR-084 | Weekly Report | Weekly improvements |
| SCR-085 | Monthly Report | Monthly trends |
| SCR-086 | Goal History | Review personal goals |
| SCR-087 | Personal Insights | Highlight improvements |
| SCR-088 | Export Report | Export permitted personal data |

### Module L – Profile and settings

| Screen ID | Screen | Purpose |
|---|---|---|
| SCR-089 | User Profile | Manage profile |
| SCR-090 | Edit Preferences | Update personalisation |
| SCR-091 | Notification Settings | Manage reminders |
| SCR-092 | Accessibility Settings | Adjust accessibility |
| SCR-093 | Privacy Settings | Manage data permissions |
| SCR-094 | Family Permissions | Manage authorised access |
| SCR-095 | Help and Support | Access assistance |
| SCR-096 | About | Product information |
| SCR-097 | Delete Account | Request account deletion |

## 7.3 Web Application Structure

The web application will support individual users and administrators.

### Individual user web experience

- Responsive home dashboard.
- Awareness and educational content.
- Assessment.
- Recovery programs.
- Progress reports.
- AI assistant.
- Family resources.
- Profile and settings.

Device-level usage monitoring will be limited to capabilities explicitly supported by the browser or connected device. The web application must not claim to monitor total smartphone usage.

### Administrative web portal

| Screen | Purpose |
|---|---|
| Admin Login | Secure administrator access |
| Admin Dashboard | Platform overview |
| User Management | Account administration |
| Content Management | Manage articles and videos |
| Age Category Management | Configure learning categories |
| Assessment Management | Configure approved questionnaires |
| Recovery Program Management | Manage journeys |
| Challenge Management | Manage activities |
| AI Knowledge Management | Manage approved knowledge |
| Professional Directory | Manage verified support resources |
| Notification Management | Configure communication |
| Analytics Dashboard | View aggregated product metrics |
| Roles and Permissions | Manage access |
| Audit Logs | Review administrative actions |
| System Configuration | Manage platform settings |

---

# 8. Key User Journeys

## Journey 1: College student experiencing smartphone dependency

**Persona:** Student, 21 years old.

1. Downloads the application.
2. Creates an individual account.
3. Selects College Student.
4. Completes onboarding.
5. Reads the introduction to nomophobia.
6. Completes a self-assessment.
7. Reviews personal usage habits.
8. Receives recommended learning resources.
9. Starts the 30-day recovery program.
10. Completes daily study-focus activities.
11. Uses focus sessions.
12. Reviews weekly progress.
13. Updates personal goals.

**Expected outcome:** Improved awareness, more intentional phone usage and better study routines.

## Journey 2: Parent managing a child's digital habits

**Persona:** Parent with a 9-year-old child.

1. Parent registers.
2. Selects parent-managed experience.
3. Creates an authorised child profile.
4. Reads digital parenting resources.
5. Reviews age-appropriate guidance.
6. Creates family media agreements.
7. Selects offline activities.
8. Participates in family challenges.
9. Reviews shared activity progress.

**Expected outcome:** Healthier family routines and age-appropriate digital habits.

## Journey 3: Working professional struggling with work notifications

**Persona:** IT professional, 32 years old.

1. Registers.
2. Selects Working Professional.
3. Identifies work notifications as the primary concern.
4. Completes the awareness assessment.
5. Receives a work-life balance program.
6. Creates notification boundaries.
7. Starts meeting-focus sessions.
8. Introduces after-work disconnection periods.
9. Reviews progress weekly.

**Expected outcome:** Better boundaries between professional responsibilities and personal time.

## Journey 4: Homemaker wanting to reduce unnecessary scrolling

**Persona:** Homemaker, 38 years old.

1. Creates an account.
2. Selects Homemaker.
3. Identifies boredom and extended video watching as concerns.
4. Receives suitable learning resources.
5. Starts the habit-control program.
6. Explores hobbies and offline activities.
7. Completes daily activities.
8. Reviews progress.
9. Sets personal development goals.

**Expected outcome:** More intentional smartphone usage and increased engagement with meaningful activities.

## Journey 5: Senior citizen learning healthy smartphone habits

**Persona:** Senior citizen, 66 years old.

1. Registers independently or with authorised assistance.
2. Selects Senior Citizen.
3. Enables large text and audio guidance.
4. Completes a simple awareness assessment.
5. Learns about safe smartphone usage.
6. Receives family communication guidance.
7. Explores offline social activities.
8. Reviews simple weekly insights.

**Expected outcome:** Improved digital confidence and balanced technology use without compromising important family communication.

## Journey 6: Individual seeking help during phone-related anxiety

1. Opens the application.
2. Selects Anxiety SOS.
3. Reads a brief supportive explanation.
4. Starts a guided grounding exercise.
5. Reflects on the triggering situation.
6. Receives an appropriate educational suggestion.
7. Accesses professional support information if needed.

**Expected outcome:** Access to an immediate self-regulation exercise and appropriate next steps.

---

# 9. Technical Architecture

## 9.1 Recommended technology stack

| Layer | Technology |
|---|---|
| Android and iOS | React Native with TypeScript |
| Web frontend | React with TypeScript |
| Backend | Node.js with NestJS |
| API architecture | REST APIs |
| Database | PostgreSQL |
| Cache | Redis |
| Authentication | Firebase Authentication or equivalent |
| Push notifications | Firebase Cloud Messaging and APNs |
| File storage | Secure cloud object storage |
| AI integration | LLM API with controlled knowledge retrieval |
| Analytics | Privacy-conscious event analytics |
| Hosting | Scalable cloud infrastructure |
| CI/CD | GitHub Actions or equivalent |
| Monitoring | Application performance and error monitoring |

## 9.2 High-level architecture

    Mobile Application (Android / iOS)
                   |
                   |
              API Gateway
                   |
          Backend Application
                   |
       +-----------+-----------+
       |           |           |
     Users       Content    Recovery
       |           |           |
       +-----------+-----------+
                   |
              PostgreSQL
                   |
             Redis Cache
                   |
       +-----------+-----------+
       |           |           |
    AI Service  Analytics  Notifications
       |
    Approved Knowledge Base

    Web Application
         |
      API Gateway

    Admin Portal
         |
      API Gateway

## 9.3 Backend service modules

1. Authentication Service.
2. User Profile Service.
3. Age and Role Management Service.
4. Content Management Service.
5. Assessment Service.
6. Recovery Program Service.
7. Challenge Service.
8. Usage Monitoring Service.
9. Analytics Service.
10. AI Assistant Service.
11. Family Management Service.
12. Notification Service.
13. Professional Directory Service.
14. Privacy and Consent Service.

## 9.4 Initial database entities

| Entity | Responsibility |
|---|---|
| users | User accounts |
| user_profiles | Age and lifestyle information |
| family_groups | Family relationships |
| family_members | Authorised family profiles |
| consent_records | User permissions |
| content_categories | Learning categories |
| learning_contents | Articles and lessons |
| assessments | Assessment definitions |
| assessment_questions | Assessment questions |
| assessment_responses | User answers |
| recovery_programs | Recovery program definitions |
| recovery_days | Program stages and daily plans |
| user_programs | User enrolments |
| challenges | Challenge definitions |
| user_challenges | Challenge participation |
| activity_logs | Activity completion |
| usage_summaries | Permitted usage aggregates |
| wellbeing_entries | Optional personal reflections |
| achievements | Milestones |
| notifications | Notification preferences |
| ai_conversations | User-authorised AI history |
| professional_resources | Verified support resources |
| audit_logs | Security and administration events |

Sensitive data should be separated logically, access-controlled and retained only as long as necessary.

---

# 10. API Requirements

The backend will expose versioned APIs.

### Authentication

- POST /api/v1/auth/register
- POST /api/v1/auth/login
- POST /api/v1/auth/logout
- POST /api/v1/auth/password/reset

### User profile

- GET /api/v1/users/me
- PUT /api/v1/users/me
- GET /api/v1/users/preferences
- PUT /api/v1/users/preferences

### Learning

- GET /api/v1/content/categories
- GET /api/v1/content
- GET /api/v1/content/{contentId}
- POST /api/v1/content/{contentId}/complete
- POST /api/v1/content/{contentId}/bookmark

### Assessment

- GET /api/v1/assessments
- GET /api/v1/assessments/{assessmentId}
- POST /api/v1/assessments/{assessmentId}/responses
- GET /api/v1/assessments/history

### Recovery

- GET /api/v1/recovery/programs
- GET /api/v1/recovery/programs/{programId}
- POST /api/v1/recovery/enrol
- GET /api/v1/recovery/progress
- POST /api/v1/recovery/activity/complete

### Challenges

- GET /api/v1/challenges
- POST /api/v1/challenges/{challengeId}/start
- POST /api/v1/challenges/{challengeId}/complete

### Usage monitoring

- POST /api/v1/usage/sync
- GET /api/v1/usage/summary
- GET /api/v1/usage/trends
- PUT /api/v1/usage/goals

### AI assistant

- POST /api/v1/assistant/message
- GET /api/v1/assistant/resources

### Family

- GET /api/v1/family
- POST /api/v1/family/members
- GET /api/v1/family/activities
- POST /api/v1/family/challenges

### Analytics

- GET /api/v1/analytics/daily
- GET /api/v1/analytics/weekly
- GET /api/v1/analytics/monthly

All endpoints must enforce authentication, role-based authorisation, request validation, rate limiting and appropriate audit logging.

---

# 11. Non-Functional Requirements

## Performance

- Fast application startup.
- Responsive screen transitions.
- Efficient API responses.
- Lazy loading of educational media.
- Pagination for content collections.
- Background synchronisation where supported.

## Security

- Encrypted communication using HTTPS.
- Secure authentication and session handling.
- Encryption of sensitive stored information.
- Role-based access control.
- Secure secret management.
- API rate limiting.
- Security audit logging.
- Regular vulnerability assessments.

## Privacy

- Explicit usage-monitoring consent.
- Data minimisation.
- Clear retention policies.
- Account and data deletion.
- User-controlled personal information.
- Restricted child profile access.
- No selling of personal wellbeing data.
- No advertising based on sensitive wellbeing information.

## Reliability

- Graceful handling of network interruptions.
- Offline access to selected educational resources.
- Retry mechanisms for failed synchronisation.
- Crash and error monitoring.
- Backup and recovery procedures.

## Accessibility

Target WCAG 2.2 AA for web accessibility where applicable.

## Scalability

Architecture must support increasing users, content, languages, organisations and regional deployments without requiring a complete redesign.

---

# 12. Privacy, Legal and Clinical Governance

The platform handles potentially sensitive behavioural and wellbeing information.

Before public launch, conduct appropriate legal and clinical reviews.

Key areas:

- Applicable Indian data protection requirements, including the DPDP Act and relevant rules and commencement provisions.
- Child consent and age-appropriate processing.
- Platform-specific app store requirements.
- Relevant healthcare and professional advertising rules.
- Questionnaire licensing and usage permissions.
- AI safety and disclosure requirements.
- Data retention and deletion.
- Cross-border processing where applicable.

Establish an expert review process involving clinical psychologists, child development specialists and digital wellbeing researchers.

The application must never describe a custom questionnaire score as a diagnosis or present a 30-day program as a guaranteed treatment.

---

# 13. Product Analytics and Success Metrics

The platform should measure whether it improves users' understanding and ability to manage their digital habits.

## Acquisition metrics

- New registrations.
- Onboarding completion.
- Age-group distribution.
- Platform distribution.

## Engagement metrics

- Daily and monthly active users.
- Learning completion.
- Assessment completion.
- Recovery program participation.
- Challenge completion.

## Wellbeing metrics

- Self-reported phone-related distress.
- Changes in personal habit goals.
- Improvements in phone-free activity participation.
- Sleep routine consistency.
- Self-reported concentration.
- Perceived work-life balance.

## Retention metrics

- Day 1 retention.
- Day 7 retention.
- Day 30 retention.
- Program completion.
- Return to learning and challenges.

## Quality metrics

- Application crash rate.
- API failure rate.
- Support requests.
- Accessibility issues.
- Content feedback.
- AI safety incidents.

### North-star metric

**Meaningful Wellbeing Progress:** The percentage of active users who report measurable improvement in at least one self-selected wellbeing goal over a defined period.

Avoid treating lower screen time or longer application usage as the sole indicator of success.

---

# 14. MVP Definition

The first public-ready version should focus on delivering a complete but manageable core experience.

## MVP features

1. Authentication.
2. Age-based onboarding.
3. Personalised dashboard.
4. Nomophobia educational library.
5. Age-specific content categories.
6. Awareness assessment.
7. Assessment results.
8. Seven-day and 30-day recovery programs.
9. Daily challenges.
10. Basic mindfulness exercises.
11. Progress tracking.
12. User profile and settings.
13. Responsive web experience.
14. Administrative content management.

## Features deferred to later releases

- Advanced Android usage monitoring.
- iOS Screen Time integration.
- AI wellbeing assistant.
- Advanced family dashboards.
- Professional booking integrations.
- Advanced analytics.
- Institutional and school management.

The MVP should still include the privacy, security, accessibility and child-safety foundations required for the selected audience.

---

# 15. Development Roadmap

The following is an indicative roadmap. Actual delivery dates depend on team size, design approval, platform entitlements and clinical review.

## Phase 0 – Product discovery and planning

**Indicative duration: 2 weeks**

Deliverables:
- Finalise product requirements.
- Define personas.
- Create detailed user stories.
- Define design system.
- Validate assessment instruments.
- Review privacy and child-safety requirements.
- Establish architecture.
- Define MVP acceptance criteria.

## Phase 1 – UX/UI and foundation

**Indicative duration: 3 weeks**

Deliverables:
- Wireframes.
- High-fidelity UI designs.
- Responsive design system.
- Navigation architecture.
- Authentication.
- Database foundation.
- Backend project setup.
- API specifications.

## Phase 2 – Core application development

**Indicative duration: 4 weeks**

Deliverables:
- Onboarding.
- User profiles.
- Home dashboard.
- Learning library.
- Age-based content.
- Assessment module.
- Basic administrative portal.

## Phase 3 – Recovery and wellbeing

**Indicative duration: 4 weeks**

Deliverables:
- Recovery programs.
- Daily challenges.
- Mindfulness.
- Activity completion.
- Progress tracking.
- Personalised recommendations.

## Phase 4 – Web and platform integration

**Indicative duration: 3 weeks**

Deliverables:
- Complete responsive web application.
- API integration.
- Authentication integration.
- Notifications.
- Usage-monitoring feasibility implementation.
- Analytics foundations.

## Phase 5 – QA, security and launch

**Indicative duration: 3 weeks**

Deliverables:
- Functional testing.
- Regression testing.
- Android testing.
- iOS testing.
- Browser compatibility.
- Accessibility testing.
- Security review.
- User acceptance testing.
- Store submission and production release.

**Indicative MVP timeline: approximately 19 weeks**, assuming suitable parallel work and no major platform approval delays.

---

# 16. Suggested Development Team

| Role | Responsibility |
|---|---|
| Product Owner | Product decisions and prioritisation |
| UI/UX Designer | Design and user experience |
| React Native Developer | Android and iOS |
| React Web Developer | Web application |
| Backend Developer | APIs and business logic |
| QA Engineer | Testing and validation |
| DevOps Engineer | Infrastructure and deployment |
| Clinical Advisor | Psychological and educational review |
| Content Specialist | Learning resources and activities |

A smaller team can combine responsibilities, but clinical review, security and QA should not be omitted.

---

# 17. Initial Sprint Breakdown

### Sprint 1 – Foundation

- Project setup.
- React Native configuration.
- React web setup.
- Backend setup.
- Database setup.
- Authentication foundation.
- Navigation framework.

### Sprint 2 – Onboarding

- Welcome screens.
- Registration.
- Age selection.
- Lifestyle selection.
- User preferences.
- Consent flow.

### Sprint 3 – Dashboard and content

- Home dashboard.
- Learning categories.
- Content listing.
- Content detail.
- Bookmark functionality.
- CMS foundation.

### Sprint 4 – Assessment

- Assessment introduction.
- Question rendering.
- Response submission.
- Results presentation.
- Assessment history.

### Sprint 5 – Recovery

- Recovery program listing.
- Program details.
- Daily tasks.
- Activity completion.
- Journey progress.

### Sprint 6 – Challenges and mindfulness

- Challenge listing.
- Challenge timer.
- Completion tracking.
- Breathing exercises.
- Grounding exercises.
- Offline activity recommendations.

### Sprint 7 – Analytics and web

- Progress dashboards.
- Reports.
- Responsive web implementation.
- API integration.
- Notification preferences.

### Sprint 8 – Quality and release

- Regression testing.
- Performance optimisation.
- Security testing.
- Accessibility.
- Production readiness.
- Store submission.

Sprint count and scope will be refined after technical estimation.

---

# 18. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Excessive scope | Deliver MVP before advanced features |
| Platform monitoring restrictions | Implement native capability checks and fallbacks |
| Inaccurate assessments | Use validated instruments and expert review |
| AI giving harmful guidance | Guardrails, reviewed knowledge and escalation |
| Child privacy risks | Parent-managed profiles and strict access controls |
| Low engagement | Useful, short, age-specific activities |
| User abandonment | Adaptive programs without punishment |
| Misleading recovery claims | Evidence-based content and transparent limitations |
| Sensitive data exposure | Privacy-by-design and security reviews |

---

# 19. Release Acceptance Criteria

The MVP can be considered ready for release when:

1. Users can register and authenticate securely.
2. Onboarding correctly identifies age and lifestyle categories.
3. Appropriate content is displayed to each user.
4. Educational resources load correctly.
5. Assessments record and display responses accurately.
6. Recovery programs can be started and completed.
7. Daily activities update progress correctly.
8. Users can review their personal reports.
9. Responsive web screens work across supported browsers.
10. Mobile applications pass required platform testing.
11. Permissions are requested transparently.
12. Privacy and consent flows are functional.
13. Child-related safeguards are implemented.
14. Critical security and functional defects are resolved.
15. Support and account deletion processes are available.

---

# 20. Future Product Expansion

After establishing the MVP, consider:

- Additional Indian languages.
- Voice-first learning.
- School and university partnerships.
- Corporate digital wellbeing programs.
- Advanced family wellbeing.
- AI-powered personal learning plans.
- Verified psychologist network.
- Regional community awareness programs.
- Research partnerships.
- Additional accessibility experiences.
- International localisation.

The long-term objective is to establish Unplug Life as a trusted digital wellbeing ecosystem for individuals, families, schools and workplaces.

---

# 21. Final Product Definition

**Unplug Life is a cross-platform digital wellbeing platform that combines nomophobia awareness, age-specific education, smartphone usage monitoring, behavioural habit management, AI-assisted guidance and structured recovery experiences.**

It is designed to support every generation in developing a healthier relationship with technology.

**Product tagline: Don't disconnect from technology. Reconnect with life.**

**End of PRD – Version 1.0**



https://chatgpt.com/share/6aee5cb2-c500-83ec-a0e8-a0ae483d6739