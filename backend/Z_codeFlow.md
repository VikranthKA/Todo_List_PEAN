# Initialize npm
npm init -y

# Install TypeScript and necessary packages
npm install typescript ts-node @types/node --save-dev

# Install Express and types
npm install express
npm install @types/express --save-dev

# Install Sequelize, Postgres, and types
npm install sequelize pg pg-hstore
npm install @types/sequelize --save-dev

# Install other required packages
npm install dotenv
npm install bcryptjs jsonwebtoken
npm install @types/bcryptjs @types/jsonwebtoken --save-dev

___

2. Set Up TypeScript
# Create a tsconfig.json file for TypeScript configuration:

npx tsc --init

This will generate the tsconfig.json. Ensure it has the following configurations:

```Javascript
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

```


# Code structure

├── src
│   ├── config
│   │   └── database.ts
│   ├── controllers
│   │   └── todo.controller.ts
│   ├── models
│   │   ├── todo.model.ts
│   │   └── user.model.ts
│   ├── routes
│   │   └── todo.routes.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── tsconfig.json
└── package.json

