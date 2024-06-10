## Setup For Development

- install [aws-cli](https://aws.amazon.com/cli/), [aws-sam](https://aws.amazon.com/serverless/sam/) in your system

## Project Design

### Requirements

Build a simple and effective solution to allow users to create a CV and download it as a PDF.

**Business Requirements**
- Privacy and security compliance: comply with all corresponding regulations for processing personal data.
- The UI should be user-friendly and intuitive.

**System Requirements**

- The front-end should be deployed on Vercel.
- The back-end part should utilize serverless solutions.
- Enforce usage limits to prevent abuse.

**Main Features**

- Users can choose among different templates.
- Users can provide their personal information using a multi-staged form.
- Provide users with live preview as they fill in the form.
- Users can download the CV as a PDF.

### Technical Design

Consider the following application components: client application, serverless API and templates storage.

#### Client Application

- Built using the Next.js framework.
- Deployed on Vercel.

#### API

- HTTP based.
- Deployed on AWS Lambda.
- Utilizes AWS API Gateway.
- Rate limiting:
  - Limit by IP address.
  - Global limit for all users.

#### Templates Storage

#### CI/CD