## [2.0.5](https://github.com/openmail/system1-cmp/compare/2.0.4...2.0.5) (2020-09-23)

### Refactor

- [x] Update vendor-list to version 56
- [x] CMPVersion managed in package.json and incremented on each change
- [x] `isServiceSpecific` passed through config, default true. Store in pubconsent vs global consent

## [2.0.4](https://github.com/openmail/system1-cmp/compare/2.0.3...2.0.4) (2020-09-17)

### Styling

- [x] Downsize fonts and spacing mobile
- [x] Downsize spacing desktop
- [x] Add scroll bar
- [x] Auto-position CMP vertically based on purposes

## [2.0.3](https://github.com/openmail/system1-cmp/compare/2.0.2...2.0.3) (2020-09-15)

### Fix

- [x] tcf-2.0-loader add check for Promise finally.
- [x] Add more information on localize fetch error log.

## [2.0.2](https://github.com/openmail/system1-cmp/compare/2.0.1...2.0.2) (2020-09-02)

### Feat

- [x] Automatically set and persist consent signal if valid TC String present on URLParam `?gdpr_consent`
- [x] Enforce boolean properties in logger

## [2.0.1](https://github.com/openmail/system1-cmp/compare/2.0.0...2.0.1) (2020-08-31)

### Refactor

- [x] Switch to node 12
- [x] Animate modal on first reveal

### Fix

- [x] Update logging Error and Save schemas
- [x] Fix initial language configuration

## [2.0.0](https://github.com/openmail/system1-cmp/compare/1.5.6...2.0.0) (2020-08-14)

### Refactor

- [x] Introduce new CMP based on TCF 2.0 framework
