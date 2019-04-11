# Solidity Smart Contracts Boilerplate

A minimalist boilerplate for creating Solidity Smart Contracts using truffle, ethlint and eslint.

## Usage

Installation:

```bash
yarn
```

Run tests:

```bash
# Test smart contracts
yarn test
```

Run development network (127.0.0.1:8545):

```bash
# Run the network with ganache
yarn ganache
# Run the tests
yarn test:dev
# Open the truffle console
yarn console:dev
```

Run linting tools:

```bash
# All linters
yarn fmt
# All linters with fixes (if possible)
yarn fmt!
```

Run coverage tool:

```bash
yarn coverage
```