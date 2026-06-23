# React Master > Chapter #2 Installation and Setup

Topics

1. Create React Application
2. `npm create` vs. `npm install`
3. The Role of `npx`
4. Setup React Project using Docker

---

## #1 Create React Application

Create React application using Vite.

`npm create vite@latest react-app -- --template react`
This command is used to scaffold a new React project with Vite as the build tool.

OR

`npm create vite@latest`
And then choose "react" template while creating an app with Vite as the build tool.

### #1.1 Breaking Down the Command `npm create vite@latest react-app -- --template react`

* **`npm create`**: This is a command that acts as a wrapper for `npx` (Node Package Execute). It's used to run a package that creates something, in this case, a new project. It downloads and executes the latest version of the specified package.

* **`vite@latest`**: This specifies the package to be executed, which is **Vite**. The `@latest` tag ensures that the most recent stable version of Vite is used. Vite is a **fast development server and build tool** that offers significant performance improvements over older tools like Create React App.

* **`react-app`**: This is the **name of the new project directory**. When the command runs, it will create a new folder named `react-app` and place all the project files inside it. You can change this to any name you want.

* **`--`**: This double-hyphen is a special syntax that separates the options for the `npm create` command itself from the options that are meant to be passed to the executed package, which is Vite. It tells `npm` to pass everything that follows directly to the `create-vite` script.

* **`--template react`**: This is an option for Vite. It specifies the **project template to use**. By using `--template react`, you're telling Vite to set up a new project with the necessary files and configurations for a standard React application. Vite also supports other templates like `vanilla`, `vue`, `preact`, `svelte`, and `solid`.

### #1.2 What Happens When You Run It?

When you execute this command, the following steps typically occur:

1. **Package Execution**: `npm` downloads and runs the `create-vite` package.
2. **Directory Creation**: A new directory named `react-app` is created.
3. **Template Scaffolding**: The `create-vite` script uses the `react` template to populate the `react-app` directory with the basic file structure for a React app. This includes essential files like `index.html`, `src/App.jsx`, `package.json`, and `vite.config.js`.
4. **Dependency Installation**: After the files are created, you'll be instructed to navigate into the new directory (`cd react-app`) and run `npm install` (or `npm i`). This command reads the `dependencies` listed in the `package.json` file and downloads all the required libraries (like `react` and `react-dom`) into a `node_modules` folder.
5. **Ready to Develop**: Once the dependencies are installed, you can start the development server by running `npm run dev`. This command starts a local server powered by Vite, providing features like hot module replacement (HMR), which allows you to see your changes instantly without a full page refresh.

In short, this command is the modern, fast alternative to the older `npx create-react-app` for setting up a new React project.

---

## #2 `npm create` vs. `npm install`

When you run `npm create vite@latest react-app -- --template react`, **Vite is not installed globally**. It is installed and executed **temporarily** to scaffold the new project.

Here is a detailed explanation of what happens:

* **`npm install`** (or `npm i`) is used to permanently add a package to your project's `node_modules` folder and list it in the `package.json` file. This is a **local** installation specific to that project.

* **`npm create`** is a shorthand for `npx create-<package-name>`. It is designed to run a one-time command that creates a project. The `create-vite` package is downloaded and executed, but it doesn't stay on your system as a global or local dependency after it finishes its job of generating the project files.

---

## #3 The Role of `npx`

Under the hood, `npm create` uses `npx` (Node Package Execute). `npx` allows you to run an executable from an npm package without installing it first.

Here's the process:

1. `npm create vite@latest` is executed.
2. `npm` translates this command to `npx create-vite@latest`.
3. `npx` checks if `create-vite` is already installed. If not, it downloads the package to a temporary cache.
4. `npx` then runs the `create-vite` executable.
5. The `create-vite` script uses the `--template react` option to create the new React project in the `my-app` directory. It sets up the file structure and a `package.json` file for you.
6. Once the script finishes, the temporary `create-vite` package is removed from the cache, or it simply expires.

The actual `vite` and `react` dependencies are added as **local dependencies** within your new `my-app` project. You'll see them listed in the `devDependencies` of your new `package.json` file. After the scaffolding is complete, you will run `npm install` inside the `my-app` directory to install these dependencies, including Vite itself, locally for that specific project.

This approach ensures that each project has its own isolated and specific version of Vite and its dependencies, avoiding potential conflicts that can arise from global installations.

Following video provides a good introduction to the basic commands of npm, including `npm run` and the difference between `npm` and `npx`.

[npm for absolute beginners](https://www.youtube.com/watch?v=UYz-9UaUp2E)

---

## #4 Setup React Project using Docker

High level steps to setup project using Docker are as follows:

Step #1  
Setup Project Files  
* Existing project then do git clone of a repo
* From scratch using npm create etc.
For this we may use a temporary Docker container.

Step #2  
Setup Docker Files - Dockerfile & .dockerignore

Step #3  
Build Image & Run Container

---

Lets dive deep into each of the setup steps above.

### Step #1  
Creating a brand new React application.  
Run the following command:  
`docker run --rm -v ${PWD}/hello-react-app:/app -w /app node:24-alpine npm create vite@latest . -- --template react`

This will create "hello-react-app" inside your present working directory.

**Breakdown of the command in Step #1**

`docker run --rm -v ${PWD}/hello-react-app:/app -w /app node:24-alpine npm create vite@latest . -- --template react`
`docker run --rm -v ${PWD}/tic-tac-toe:/app -w /app node:24-alpine npm create vite@latest . -- --template react`

There are mainly two parts of this command:  

1. The Docker Configuration - how the container behaves  
  `docker run --rm -v ${PWD}/hello-react-app:/app -w /app node:24-alpine`
2. The Node/Vite Command - what runs inside it  
  `npm create vite@latest . -- --template react`

---

#### Part 1: The Docker Flags (The Environment)

This half tells Docker Desktop on Windows how to set up the temporary virtual environment.

* **`docker run`**
This tells Docker to create and start a brand-new container.

* **`--rm`**
Short for "remove". This tells Docker to automatically delete the container the exact moment it finishes running the command. This ensures no leftover, stopped container images clutter your Windows 11 machine.

* **`-v ${PWD}/hello-react-app:/app`**
This is the **Volume Mount** (the link between systems).

* `${PWD}` stands for *Present Working Directory* (your `projects` folder on Windows).

* It tells Docker: *"Create a folder called `hello-react-app` on my Windows machine, and link it directly to the `/app` folder inside the Linux container."* * Anything Vite creates inside the container's `/app` folder will instantly appear on your Windows hard drive.

* **`-w /app`**
Short for **Working Directory**. It tells Docker to place you directly inside the `/app` folder *inside* the container before executing any commands (similar to running `cd /app`).

* **`node:24-alpine`**
This is the **Docker Image** used as the foundation. It tells Docker to pull the official Node.js version 24 environment built on "Alpine Linux" (a highly lightweight, secure, and fast version of Linux).

---

#### Part 2: The Vite Command (The Execution)

This half is the actual command passed directly to the Node.js environment inside the container.

* **`npm create vite@latest`**
This downloads and executes the latest version of the Vite project creation tool.

* **`.` (The Dot)**
This tells Vite *where* to install the files. Because `-w /app` put us inside the `/app` folder, the dot means: *"Install the React project files right here in this folder, do not create another subfolder."*

* **`--`**
This double-dash is an npm-specific operator. It tells npm: *"Stop looking at flags for yourself; pass any flags that follow directly to Vite."*

* **`--template react`**
This is the configuration flag passed to Vite telling it to skip the interactive menu and scaffold a standard JavaScript **React** application.

---

#### Summary of the Lifecycle

When you hit Enter in your Windows terminal, this is the exact sequence that occurs:

1. Docker looks at your `projects` folder and safely provisions a new, empty `hello-react-app` folder on Windows.
2. Docker fires up a temporary Linux container running Node 24.
3. It bridges the Windows `hello-react-app` folder with the container's `/app` folder.
4. Inside that container, Vite runs, sees the dot `.`, and dumps the React starter code into `/app`.
5. Because of the bridge, those files instantly manifest on your Windows machine.
6. Vite finishes its job, the command ends, and `--rm` instantly deletes the container, leaving your local Windows environment completely clean—holding nothing but your brand-new React project files.

---

### Step #2
Setup Docker Files - Dockerfile & .dockerignore

`Dockerfile`  

```Dockerfile
# Step 1: Use the latest Node 24 Alpine image
FROM node:24-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose Vite's default port
EXPOSE 5173

# Step 7: Run Vite dev server, exposing it to the network
CMD ["npm", "run", "dev", "--", "--host"]
```

`.dockerignore`  

```.dockerignore
node_modules
dist
.git
```

---

## References

- [React > Installation](https://react.dev/learn/installation)
- [React > Creating a React App](https://react.dev/learn/creating-a-react-app)
- [React > Build a React app from Scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [React > Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project)
- [npm for absolute beginners](https://www.youtube.com/watch?v=UYz-9UaUp2E)

---

## Explore

- HMR (Hot Module Replacement)
- npm
- npm Vs. npx

---

Next > [Chapter #3 Quick Start](3-Quick-Start.md)
