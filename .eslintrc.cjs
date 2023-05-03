module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'], //COMILLAS SIMPLE EN JSX REACT
    'semi': ['warn', 'never'], //NO USAR PUNTO Y COMA ;
    'quotes': ['warn', 'single'], //USAR COMILLAS SIMPLES ''
    'indent': ['warn', 2], //USAR DOS ESPACIOS COMO TAB
    'no-var': ['warn'], //NO USAR VAR - USAR LET Y CONST -- DEFECTO
    'eqeqeq': ['warn'], //USAR SIEMPRE IGUALDAD ESTRICTA ===
  },
}
