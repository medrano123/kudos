var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/test.tsx
var require_test = __commonJS({
  "app/routes/test.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-HNQYDAJS.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
var import_node3 = require("@remix-run/node");

// app/utils/auth.server.ts
var import_node2 = require("@remix-run/node");

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"));

// app/utils/users.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    }
  })).id, email: user.email };
}, getOtherUsers = async (userId) => await prisma.user.findMany({
  where: {
    id: { not: userId }
  },
  orderBy: {
    profile: {
      firstName: "asc"
    }
  }
}), getUserById = async (userId) => await prisma.user.findUnique({
  where: {
    id: userId
  }
});

// app/utils/auth.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "kudos-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
}), register = async (form) => {
  if (await prisma.user.findUnique({
    where: { email: form.email }
  }))
    return (0, import_node2.json)(
      { error: "User already exists with that email" },
      { status: 400 }
    );
  if (!form.email || !form.password)
    return (0, import_node2.json)(
      { error: "Please fill in all fields." },
      { status: 400 }
    );
  if (form.password.length < 6)
    return (0, import_node2.json)(
      { error: "Password must be at least 5 characters." },
      { status: 400 }
    );
  let newUser = await createUser(form);
  return newUser ? createUserSession(newUser.id, "/") : (0, import_node2.json)(
    { error: "Something went wrong trying to create a new user.", fields: { email: form.email, password: form.password } },
    { status: 400 }
  );
}, login = async (form) => {
  let user = await prisma.user.findUnique({
    where: { email: form.email }
  });
  return !user || !await import_bcryptjs2.default.compare(form.password, user.password) ? (0, import_node2.json)({ error: "Login incorrect" }, { status: 400 }) : createUserSession(user.id, "/");
};
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0, profile: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/routes/logout.ts
var action = async ({ request }) => logout(request), loader = async () => (0, import_node3.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => (await requireUserId(request), (0, import_node4.redirect)("/home"));
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen bg-slate-700 flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-blue-600 font-extrabold text-5xl", children: "TailwindCSS Is Working!" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  loader: () => loader3
});
var import_react4 = require("react"), import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/layout.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-hero-pattern bg-cover bg-cover-no-repeat bg-center h-screen w-full", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/FormField.tsx
var import_react3 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FormField({ htmlFor, label, type = "text", value, onChange = () => {
}, placeholder, error }) {
  let [errorText, setErrorText] = (0, import_react3.useState)(error);
  return (0, import_react3.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor, className: "font-black text-[#915eff] text-2xl", children: label }, void 0, !1, {
      fileName: "app/components/FormField.tsx",
      lineNumber: 24,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "input",
      {
        onChange: (e) => {
          onChange(e), setErrorText("");
        },
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2 bg-tertiary",
        style: { color: "white" },
        value,
        placeholder
      },
      void 0,
      !1,
      {
        fileName: "app/components/FormField.tsx",
        lineNumber: 27,
        columnNumber: 10
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-xs font-black text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, !1, {
      fileName: "app/components/FormField.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormField.tsx",
    lineNumber: 23,
    columnNumber: 8
  }, this);
}

// app/utils/validators.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Please enter a password that is at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/routes/login.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUser(request) ? (0, import_node5.redirect)("/") : null, action2 = async ({ request }) => {
  let form = await request.formData(), action4 = form.get("_action"), email = form.get("email"), password = form.get("password"), firstName = form.get("firstName"), lastName = form.get("lastName");
  if (typeof action4 != "string" || typeof email != "string" || typeof password != "string")
    return (0, import_node5.json)({ error: "Invalid Form Data1", form: action4 }, { status: 400 });
  if (action4 === "register" && (typeof firstName != "string" || typeof lastName != "string"))
    return (0, import_node5.json)({ error: "Invalid Form Data2", form: action4 }, { status: 400 });
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...action4 === "register" ? {
      firstName: validateName(firstName || ""),
      lastName: validateName(lastName || "")
    } : {}
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node5.json)({ errors, fields: { email, password, firstName, lastName }, form: action4 }, { status: 400 });
  switch (action4) {
    case "login":
      return await login({ email, password });
    case "register":
      return firstName = firstName, lastName = lastName, await register({ email, password, firstName, lastName });
    default:
      return alert({ errors }), (0, import_node5.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
};
function Login() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react5.useActionData)(), [formError, setFormError] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.error) || ""), [errors, setErrors] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.errors) || {}), firstLoad = (0, import_react4.useRef)(!0), [action4, setAction] = (0, import_react4.useState)("login"), [formData, setFormData] = (0, import_react4.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return (0, import_react4.useEffect)(() => {
    if (!firstLoad.current) {
      let newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState), setFormError(""), setFormData(newState);
    }
  }, [action4]), (0, import_react4.useEffect)(() => {
    firstLoad.current || setFormError("");
  }, [formData]), (0, import_react4.useEffect)(() => {
    firstLoad.current = !1;
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-full flex justify-center items-center flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-5xl font-black text-[#915eff]", children: "Welcome to Kudos!" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-black text-2xl text-secondary", children: action4 ? "Login to give some praise!" : "Sign up to get started" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        onClick: () => setAction(action4 == "login" ? "register" : "login"),
        className: " text-secondary text-sm font-extrabold ",
        children: action4 === "login" ? "Sign Up" : "Already have an account? Sign In"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 126,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", className: "rounded-2xl p-6 w-96 flex flex-col gap-4 mb-8 bg-black-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: formError }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 133,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          FormField,
          {
            htmlFor: "email",
            label: "Email",
            value: formData.email,
            onChange: (e) => handleInputChange(e, "email"),
            placeholder: "Enter your email address",
            error: errors == null ? void 0 : errors.email
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 139,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          FormField,
          {
            htmlFor: "password",
            type: "password",
            label: "Password",
            value: formData.password,
            onChange: (e) => handleInputChange(e, "password"),
            placeholder: "Enter your password",
            error: errors == null ? void 0 : errors.password
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 148,
            columnNumber: 25
          },
          this
        ),
        action4 !== "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            FormField,
            {
              htmlFor: "firstName",
              label: "First Name",
              value: formData.firstName,
              onChange: (e) => handleInputChange(e, "firstName"),
              placeholder: "Enter your first name",
              error: errors == null ? void 0 : errors.firstName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 160,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            FormField,
            {
              htmlFor: "lastName",
              label: "Last Name",
              value: formData.lastName,
              onChange: (e) => handleInputChange(e, "lastName"),
              placeholder: "Enter your last name",
              error: errors == null ? void 0 : errors.lastName
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 168,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 158,
          columnNumber: 25
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            type: "submit",
            name: "_action",
            value: action4,
            className: "rounded-xl mt-2 bg-tertiary px-3 py-2 text-[#915eff] font-black transition duration-300 ease-in-out hover:bg-[#fdsf3] hover:-translate-y-1",
            children: action4 === "login" ? "Sign In" : "Sign Up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 194,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 188,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 132,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 115,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 114,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/User-Circle.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function UserCircle({ profile: profile2, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "div",
    {
      className: `${className} cursor-pointer bg-gray-600 rounded-full flex justify-center items-center`,
      onClick,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: [
        profile2.firstName.charAt(0).toUpperCase(),
        profile2.lastName.charAt(0).toUpperCase()
      ] }, void 0, !0, {
        fileName: "app/components/User-Circle.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/User-Circle.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/utils/constants.ts
var colorMap = {
  RED: "text-red-400",
  GREEN: "text-green-400",
  BLUE: "text-blue-400",
  WHITE: "text-white",
  YELLOW: "text-yellow-300",
  PURPLE: "text-[#915eff]",
  BLACK: "text-TERTIARY"
}, backgroundColorMap = {
  RED: "bg-red-400",
  GREEN: "bg-green-400",
  BLUE: "bg-blue-400",
  WHITE: "bg-white",
  YELLOW: "bg-yellow-300",
  PURPLE: "bg-[#915eff]",
  BLACK: "bg-tertiary"
}, emojiMap = {
  THUMBSUP: "\u{1F44D}",
  PARTY: "\u{1F389}",
  HANDSUP: "\u{1F64C}\u{1F3FB}"
}, sortOptions = [
  {
    name: "Date",
    value: "date"
  },
  {
    name: "Sender Name",
    value: "sender"
  },
  {
    name: "Emoji",
    value: "emoji"
  }
];

// app/components/RecentBar.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function RecentBar({ kudos }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-1/5 border-l-4 border-l-black flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-xl text-[#915eff] font-semibold my-6", children: "Recent Kudos" }, void 0, !1, {
      fileName: "app/components/RecentBar.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-full flex flex-col gap-y-10 mt-10", children: kudos.map((kudo) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-24 w-24 relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UserCircle, { profile: kudo.recipient.profile, className: "w-20 h-20" }, void 0, !1, {
          fileName: "app/components/RecentBar.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-8 w-8 text-3xl bottom-2 right-4 rounded-full absolute flex justify-center items-center", children: emojiMap[((_a = kudo == null ? void 0 : kudo.style) == null ? void 0 : _a.emoji) || "THUMBSUP"] }, void 0, !1, {
          fileName: "app/components/RecentBar.tsx",
          lineNumber: 19,
          columnNumber: 25
        }, this)
      ] }, kudo.recipient.id, !0, {
        fileName: "app/components/RecentBar.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/RecentBar.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RecentBar.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UserPanel.tsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function UserPanel({ users }) {
  let navigate = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-1/6 flex bg-black flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-center bg-black-100 h-20 flex items-center justify-center rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-xl text-[#915eff] font-semibold", children: "My Team" }, void 0, !1, {
      fileName: "app/components/UserPanel.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UserPanel.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10 ", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      UserCircle,
      {
        profile: user.profile,
        className: "h-24 w-24 mx-auto flex-shrink-0",
        onClick: () => navigate(`kudo/${user.id}`)
      },
      user.id,
      !1,
      {
        fileName: "app/components/UserPanel.tsx",
        lineNumber: 22,
        columnNumber: 39
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/UserPanel.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-center p-6 bg-black-100 rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded-2xl bg-black font-semibold text-[#915eff] px-3 py-2 transition duration-300 ease-in-out hover:bg-tertiary hover:-translate-y-1",
        children: "Sign Out"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UserPanel.tsx",
        lineNumber: 32,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/UserPanel.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UserPanel.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UserPanel.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/utils/kudo.server.ts
var createKudo = async (message, userId, recipientId, style) => {
  await prisma.kudo.create({
    data: {
      message,
      author: {
        connect: {
          id: userId
        }
      },
      recipient: {
        connect: {
          id: recipientId
        }
      },
      style
    }
  });
}, getFilteredKudos = async (userId, sortFilter, whereFilter) => await prisma.kudo.findMany({
  select: {
    id: !0,
    style: !0,
    message: !0,
    author: {
      select: {
        profile: !0
      }
    }
  },
  orderBy: {
    ...sortFilter
  }
}), getRecentKudos = async () => await prisma.kudo.findMany({
  take: 3,
  orderBy: {
    createdAt: "desc"
  },
  select: {
    style: {
      select: {
        emoji: !0
      }
    },
    recipient: {
      select: {
        id: !0,
        profile: !0
      }
    }
  }
});

// app/components/Kudo.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Kudo({ profile: profile2, kudo }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "div",
    {
      className: `flex ${backgroundColorMap[((_a = kudo.style) == null ? void 0 : _a.backgroundColor) || "BLACK"]} p-4 rounded-xl w-full gap-x-2 relative`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserCircle, { profile: profile2, className: "h-16 w-16" }, void 0, !1, {
          fileName: "app/components/Kudo.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Kudo.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: `${colorMap[((_b = kudo.style) == null ? void 0 : _b.textColor) || "PURPLE"]} font-bold text-lg whitespace-pre-wrap break-all`, children: [
            profile2.firstName,
            " ",
            profile2.lastName
          ] }, void 0, !0, {
            fileName: "app/components/Kudo.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: `${colorMap[((_c = kudo.style) == null ? void 0 : _c.textColor) || "PURPLE"]} whitespace-pre-wrap break-all text-sm`, children: kudo.message }, void 0, !1, {
            fileName: "app/components/Kudo.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Kudo.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl", children: emojiMap[((_d = kudo.style) == null ? void 0 : _d.emoji) || "THUMBSUP"] }, void 0, !1, {
          fileName: "app/components/Kudo.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Kudo.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/SearchBar.tsx
var import_react7 = require("@remix-run/react");

// app/components/SelectBox.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function SelectBox({
  options = [],
  onChange = () => {
  },
  className = "",
  containerClassName = "",
  name,
  id,
  value,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: id, className: "text-[#915eff] font-black", children: label }, void 0, !1, {
      fileName: "app/components/SelectBox.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: `flex items-center ${containerClassName} my-2 bg-tertiary`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("select", { className: `${className} appearance-none bg-tertiary`, id, name, onChange, value: value || "", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: option.value, children: option.name }, option.name, !1, {
        fileName: "app/components/SelectBox.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/SelectBox.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "svg",
        {
          className: "w-4 h-4 fill-current text-[#915eff] -ml-7 mt-1 pointer-events-none",
          viewBox: "0 0 140 140",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" }, void 0, !1, {
            fileName: "app/components/SelectBox.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/SelectBox.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/SelectBox.tsx",
          lineNumber: 37,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/SelectBox.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SelectBox.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

// app/components/SearchBar.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function SearchBar({ profile: profile2 }) {
  let [searchParams] = (0, import_react7.useSearchParams)(), navigate = (0, import_react7.useNavigate)(), clearFilters = () => {
    searchParams.delete("filter"), searchParams.delete("sort"), navigate("/home");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("form", { className: "w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-900 border-opacity-30 h-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "input",
      {
        type: "text",
        name: "filter",
        className: "w-2/3 rounded-xl px-3 py-2 bg-black text-white",
        placeholder: "Search a message or name"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SearchBar.tsx",
        lineNumber: 24,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "svg",
      {
        className: "w-4 h-4 fill-current text-gray-400 -ml-8",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M0 0h24v24H0V0z", fill: "none" }, void 0, !1, {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 35,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }, void 0, !1, {
            fileName: "app/components/SearchBar.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SearchBar.tsx",
        lineNumber: 30,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      SelectBox,
      {
        className: "w-full rounded-xl px-3 py-2 text-[#915eff]",
        containerClassName: "w-40",
        name: "sort",
        options: sortOptions
      },
      void 0,
      !1,
      {
        fileName: "app/components/SearchBar.tsx",
        lineNumber: 40,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded-xl bg-tertiary font-semibold text-[#915eff] px-3 py-2 transition duration-300 ease-in-out hover:bg-black hover:-translate-y-1",
        children: "Search"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SearchBar.tsx",
        lineNumber: 46,
        columnNumber: 13
      },
      this
    ),
    searchParams.get("filter") && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "button",
      {
        onClick: clearFilters,
        className: "rounded-xl bg-tertiary font-semibold text-[#915eff] px-3 py-2 transition duration-300 ease-in-out hover:bg-black hover:-translate-y-1",
        children: "Clear"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SearchBar.tsx",
        lineNumber: 53,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
      fileName: "app/components/SearchBar.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SearchBar.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/routes/home.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let userId = await requireUserId(request), users = await getOtherUsers(userId), user = await getUser(request), url = new URL(request.url), sort = url.searchParams.get("sort"), filter = url.searchParams.get("filter"), sortOptions2 = {};
  sort && (sort === "date" && (sortOptions2 = { createdAt: "desc" }), sort === "sender" && (sortOptions2 = { author: { profile: { firstName: "asc" } } }), sort === "emoji" && (sortOptions2 = { style: { emoji: "asc" } }));
  let textFilter = {};
  filter && (textFilter = {
    OR: [
      { message: { mode: "insensitive", contains: filter } },
      {
        author: {
          OR: [
            { profile: { is: { firstName: { mode: "insensitive", contains: filter } } } },
            { profile: { is: { lastName: { mode: "insensitive", contains: filter } } } }
          ]
        }
      }
    ]
  });
  let kudos = await getFilteredKudos(userId, sortOptions2, textFilter), recentKudos = await getRecentKudos();
  return (0, import_node6.json)({ users, kudos, recentKudos, user, userId });
};
function Home() {
  let { users, kudos, recentKudos, user, userId } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "h-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(UserPanel, { users }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SearchBar, { profile: user.profile }, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex-1 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full p-10 flex flex-col gap-y-4", children: [
            console.log(kudos),
            kudos.map((kudo) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Kudo, { kudo, profile: kudo.author.profile }, kudo.id, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 91,
              columnNumber: 33
            }, this))
          ] }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 85,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(RecentBar, { kudos: recentKudos }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 94,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, this);
}

// app/routes/home/kudo.$userId.tsx
var kudo_userId_exports = {};
__export(kudo_userId_exports, {
  action: () => action3,
  default: () => KudoModal,
  loader: () => loader5
});
var import_react11 = require("react");

// app/components/Portal.tsx
var import_react_dom = require("react-dom"), import_react9 = require("react"), createWrapper = (wrapperId) => {
  let wrapper = document.createElement("div");
  return wrapper.setAttribute("id", wrapperId), document.body.appendChild(wrapper), wrapper;
}, Portal = ({ children, wrapperId }) => {
  let [wrapper, setWrapper] = (0, import_react9.useState)(null);
  return (0, import_react9.useEffect)(() => {
    let element = document.getElementById(wrapperId), created = !1;
    return element || (created = !0, element = createWrapper(wrapperId)), setWrapper(element), () => {
      created && (element == null ? void 0 : element.parentNode) && element.parentNode.removeChild(element);
    };
  }, [wrapperId]), wrapper === null ? null : (0, import_react_dom.createPortal)(children, wrapper);
};

// app/components/Modal.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Modal = ({ children, isOpen, ariaLabel, className }) => {
  let navigate = (0, import_react10.useNavigate)();
  return isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Portal, { wrapperId: "modal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-80",
        "aria-labelledby": ariaLabel ?? "modal-title",
        role: "dialog",
        "aria-modal": "true",
        onClick: () => navigate("/home")
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modal.tsx",
        lineNumber: 18,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: `${className} p-4 bg-black pointer-events-auto max-h-screen md:rounded-xl`, children }, void 0, !1, {
      fileName: "app/components/Modal.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Modal.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modal.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) : null;
};

// app/routes/home/kudo.$userId.tsx
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let form = await request.formData(), userId = await requireUserId(request), message = form.get("message"), backgroundColor = form.get("backgroundColor"), textColor = form.get("textColor"), emoji = form.get("emoji"), recipientId = form.get("recipientId");
  return typeof message != "string" || typeof recipientId != "string" || typeof backgroundColor != "string" || typeof textColor != "string" || typeof emoji != "string" ? (0, import_node7.json)({ error: "Invalid Form Data" }, { status: 400 }) : message.length ? recipientId.length ? (await createKudo(message, userId, recipientId, {
    backgroundColor,
    textColor,
    emoji
  }), (0, import_node7.redirect)("/home")) : (0, import_node7.json)({ error: "No recipient found..." }, { status: 400 }) : (0, import_node7.json)({ error: "Please provide a message." }, { status: 400 });
}, loader5 = async ({ params, request }) => {
  let { userId } = params;
  if (typeof userId != "string")
    return (0, import_node7.redirect)("/home");
  let user = await getUser(request), recipient = await getUserById(userId);
  return (0, import_node7.json)({ recipient, user });
};
function KudoModal() {
  let actionData = (0, import_react12.useActionData)(), [formError] = (0, import_react11.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react11.useState)({
    message: "",
    style: {
      backgroundColor: "BLACK",
      textColor: "PURPLE",
      emoji: "PARTY"
    }
  }), handleStyleChange = (e, field) => {
    setFormData((data) => ({
      ...data,
      style: {
        ...data.style,
        [field]: e.target.value
      }
    }));
  }, handleChange = (e, field) => {
    setFormData((data) => ({ ...data, [field]: e.target.value }));
  }, getOptions = (data) => Object.keys(data).reduce((acc, curr) => (acc.push({
    name: curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase(),
    value: curr
  }), acc), []), colors = getOptions(colorMap), emojis = getOptions(emojiMap), { recipient, user } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Modal, { isOpen: !0, className: "w-2/3 p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2", children: formError }, void 0, !1, {
      fileName: "app/routes/home/kudo.$userId.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", value: recipient.id, name: "recipientId" }, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-y-2 md:gap-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "text-center flex flex-col items-center gap-y-2 pr-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UserCircle, { profile: recipient.profile, className: "h-24 w-24" }, void 0, !1, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 111,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "font-black text-[#915eff]", children: [
            recipient.profile.firstName,
            " ",
            recipient.profile.lastName
          ] }, void 0, !0, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 112,
            columnNumber: 25
          }, this),
          recipient.profile.department && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto", children: recipient.profile.department[0].toUpperCase() + recipient.profile.department.toLowerCase().slice(1) }, void 0, !1, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 116,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex-1 flex flex-col gap-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "textarea",
            {
              name: "message",
              className: "w-full rounded-xl h-40 p-4 bg-tertiary text-white ",
              value: formData.message,
              onChange: (e) => handleChange(e, "message"),
              placeholder: `Say something nice about ${recipient.profile.firstName}...`
            },
            void 0,
            !1,
            {
              fileName: "app/routes/home/kudo.$userId.tsx",
              lineNumber: 122,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row md:justify-start gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              SelectBox,
              {
                options: colors,
                name: "backgroundColor",
                value: formData.style.backgroundColor,
                onChange: (e) => handleStyleChange(e, "backgroundColor"),
                label: "Background Color",
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 130,
                columnNumber: 29
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              SelectBox,
              {
                options: colors,
                name: "textColor",
                value: formData.style.textColor,
                onChange: (e) => handleStyleChange(e, "textColor"),
                label: "Text Color",
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 139,
                columnNumber: 29
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              SelectBox,
              {
                options: emojis,
                label: "Emoji",
                name: "emoji",
                value: formData.style.emoji,
                onChange: (e) => handleStyleChange(e, "emoji"),
                containerClassName: "w-36",
                className: "w-full rounded-xl px-3 py-2 text-gray-400"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 148,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 129,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 121,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-[#915eff] font-black mb-2", children: "Preview" }, void 0, !1, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 161,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row gap-x-24 gap-y-2 md:gap-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Kudo, { profile: user.profile, kudo: formData }, void 0, !1, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex-1" }, void 0, !1, {
          fileName: "app/routes/home/kudo.$userId.tsx",
          lineNumber: 164,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl bg-tertiary font-semibold text-[#915eff] w-80 h-12 transition duration-300 ease-in-out hover:bg-black hover:-translate-y-1",
            children: "Send"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 165,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 162,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/kudo.$userId.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/kudo.$userId.tsx",
    lineNumber: 103,
    columnNumber: 9
  }, this);
}

// app/routes/home/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), profile = () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "profile" }, void 0, !1, {
  fileName: "app/routes/home/profile.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), profile_default = profile;

// server-entry-module:@remix-run/dev/server-build
var route7 = __toESM(require_test());

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "801aa52d", entry: { module: "/build/entry.client-FO5BZRYQ.js", imports: ["/build/_shared/chunk-GTNGNULT.js", "/build/_shared/chunk-3JQ6X2CB.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RJJ5OHML.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-FW6AUNYQ.js", imports: ["/build/_shared/chunk-CAIELZLP.js", "/build/_shared/chunk-UCZWI7OM.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/kudo.$userId": { id: "routes/home/kudo.$userId", parentId: "routes/home", path: "kudo/:userId", index: void 0, caseSensitive: void 0, module: "/build/routes/home/kudo.$userId-VH2U64U4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profile": { id: "routes/home/profile", parentId: "routes/home", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profile-WGV4V4YZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LMFH33H2.js", imports: ["/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-MEPBRD2Y.js", imports: ["/build/_shared/chunk-CAIELZLP.js", "/build/_shared/chunk-OZVJ2KGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-NVA4EOD7.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-PEMT6OW3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-801AA52D.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/home/kudo.$userId": {
    id: "routes/home/kudo.$userId",
    parentId: "routes/home",
    path: "kudo/:userId",
    index: void 0,
    caseSensitive: void 0,
    module: kudo_userId_exports
  },
  "routes/home/profile": {
    id: "routes/home/profile",
    parentId: "routes/home",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
