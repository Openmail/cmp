[![Build Status](https://travis-ci.org/appnexus/cmp.svg?branch=master)](https://travis-ci.org/appnexus/cmp)

# AppNexus CMP
CMP is a tool for publishers to engage users of their properties and gather & store end user consent.

### Installation

```sh
git clone https://github.com/appnexus/cmp.git
cd cmp
yarn install
```

## Build for Production

```sh
yarn build
```

This produces a production build of the `cmp` script and the docs application:
+ `./build/cmp.bundle.js` - CMP script to include on your site
+ `./build/docs/` - Application hosting the documentation

## Documentation

Instructions to install the CMP as well as API docs and examples are available in the `docs`
application included with the repo.

```sh
yarn start
```

The documentation can be viewed at:
`http://localhost:8080/docs/`

## Development
You can start a development server that will monitor changes to all CMP and docs files with:
```sh
yarn dev:s1
```

Development server can be accessed at:
`http://localhost:8080/reference.html`

## Testing

```sh
yarn test
```

## Deployment

- [x] Bump the version in package.json for any new release
- [x] There are 2 branches, `master` and `modal`.
  - `master` branch is the latest CMP, it's not used anywhere in production yet.
	- `modal` branch is the MODAL-based CMP (based on an older version), but it is in use across many sites in production.
- [x] PR against master or modal depending on your work and get an approval
- [x] Once approved, you can use `yarn deploy` which will build and upload an immutable version of the System-1 CMP (and non-modified appnexus CMP + docs) to S3. 

```sh
yarn deploy
```
