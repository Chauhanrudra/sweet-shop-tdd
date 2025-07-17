# SweetShop Management System

it is a simple Node.js based sweet shop inventory system built with **Test-Driven Development (TDD)** using **Jest**.

## Features
- Add, delete, and view sweets
- Purchase and restock inventory
- Search by name, category, or price range
- Sort by name, price, or quantity

## Setup
```bash
npm install
npm test
```

## Commands
- addSweet(sweet)
- deleteSweet(id)
- purchaseSweet(id, qty)
- restockSweet(id, qty)
- searchSweets(filters)
- sortSweets(by, order)

### Assumptions 
I observed ambiguity around user roles. I assumed a single unified user (not separate admin and user roles), since the timeline and scope suggest a focus on core logic over multi-role systems.

## Test Coverage Report

[View Test Report](coverage/lcov-report/index.html)
