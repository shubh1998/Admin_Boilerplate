# Admin Panel Boiler Plate
## Cloning the application
```
git clone https://example/admin-boilerplate.git
```

```
cd admin-boilerplate
```

## Setting up the local environment variables

### Create `.env` file at root of folder
```
REACT_APP_BASE_URL=http://localhost:8010/api/v1
REACT_APP_WS_URL=http://localhost:8010
```

## Installing Dependencies and Starting dev server
### Install packages
```
npm i
```

### Start App
```
npm start
```

### Install packages including dev dependencies
```
npm install --include=dev
```

### Start storybook
```
npm run storybook
```

### Snapshot Testing for basic ui components
```
npm run test
```

### Process to add svg icons and use as React components.
```
1. Download the svg images from figma or anywhere.
2. Copy them and paste in location - 'src/components/ui-kit/icons/svg'
3. Then to use them as react components and to generate storybook for them, Run command :
   npm run sync-icons
```


## Development System specifications
* OS - `Ubuntu 20.04`
* npm version - `v8.1.1`
* node version - `v16.13.1`
