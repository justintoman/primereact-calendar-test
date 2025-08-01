# PrimeReact Calendar Test

This is a minimal example of the `<Calendar />` component not working as expect in tests

```bash
npm install
npm test
```

For some reason, the dialog in the `<Calendar />` component is always hidden with `display: none` set as an element style directly on the dialog div.
