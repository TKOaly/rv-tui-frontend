# rv-tui-frontend

## Setup

### Prerequisites
- install `node` and `npm`
- install, configure and start [`rv-backend`](https://github.com/TKOaly/rv-backend)

### Frontend
```bash
$
git clone git@github.com:TKOaly/rv-tui-frontend.git
cd rv-tui-frontend 
npm install
npm run build
npm link
```
Copy `.env.example` to `.env` and modify it to your environment

After this the app can be lauched with
```bash
$ npm run dev
```
```bash
$ rv
```

## Project structure

The project uses [`ink`](https://github.com/vadimdemedes/ink) to turn React JSX into a terminal UI code.
Styling and layout are unconventional but hooks and other main react features work as normal.

Local state management should be kept at a minimum for maintainability and panels/views/layouts should mosty handle their own state.
[`Jotai`](https://jotai.org/docs/core/use-atom) is used for atomic states where abolutely necessary. [`React Query`](https://tanstack.com/query/latest/docs/framework/react/overview#enough-talk-show-me-some-code-already) should be used to handle server state and a lot of the stage management can be relegated to it.

Good API documentation can be built from the backend's OpenApi spec

```
src
├──ui
│  ├──panels
│  ├──components
│  ╰──prompts
│
├──queries
│  ├──admin
│  ╰──user
╰──lib
```

### panels

Houses the layouts/panels/views of the application. Most of the state management and data querying should be done inside these components. 

### components

Reusable, headless and more general components go here. They shouldn't do any data fetching and only handle state for contained functionality like scrolling.

### prompts

ASCII art etc. for backgrounds, debt nag prompts or easter eggs.

### queries

Queries and hooks for fetching data. Both fetch calls and react queries can live here.
The queries are divided in admin and user queries; both requiring different authentication for access.

See the [Backend](https://github.com/TKOaly/rv-backend) OpenApi [spec](https://github.com/TKOaly/rv-backend/blob/develop/openapi.yaml) for available endpoints.

### lib

Contains application state atoms and miscellaneous utility functions. These should separated at some point. 

## Tests

Will be implemented once the codebase is not horribly unstable.

## Code Style
Linting with IDE extensions or NPM scripts, eslint and prettier config done in the project.
