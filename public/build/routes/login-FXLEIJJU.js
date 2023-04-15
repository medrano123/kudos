import {
  useActionData
} from "/build/_shared/chunk-AZWOQ5MV.js";
import {
  require_auth
} from "/build/_shared/chunk-OZVJ2KGS.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/utils/validators.server
var require_validators = __commonJS({
  "empty-module:~/utils/validators.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login.tsx
var import_react2 = __toESM(require_react());
var import_auth = __toESM(require_auth());

// app/components/layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-hero-pattern bg-cover bg-cover-no-repeat bg-center h-screen w-full", children }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/FormField.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function FormField({ htmlFor, label, type = "text", value, onChange = () => {
}, placeholder, error }) {
  const [errorText, setErrorText] = (0, import_react.useState)(error);
  (0, import_react.useEffect)(() => {
    setErrorText(error);
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor, className: "font-black text-[#915eff] text-2xl", children: label }, void 0, false, {
      fileName: "app/components/FormField.tsx",
      lineNumber: 24,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "input",
      {
        onChange: (e) => {
          onChange(e);
          setErrorText("");
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
      false,
      {
        fileName: "app/components/FormField.tsx",
        lineNumber: 27,
        columnNumber: 10
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs font-black text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, false, {
      fileName: "app/components/FormField.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FormField.tsx",
    lineNumber: 23,
    columnNumber: 8
  }, this);
}

// app/routes/login.tsx
var import_validators = __toESM(require_validators());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Login() {
  var _a, _b, _c, _d;
  const actionData = useActionData();
  const [formError, setFormError] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.error) || "");
  const [errors, setErrors] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.errors) || {});
  const firstLoad = (0, import_react2.useRef)(true);
  const [action, setAction] = (0, import_react2.useState)("login");
  const [formData, setFormData] = (0, import_react2.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      const newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState);
      setFormError("");
      setFormData(newState);
    }
  }, [action]);
  (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);
  (0, import_react2.useEffect)(() => {
    firstLoad.current = false;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full flex justify-center items-center flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-5xl font-black text-[#915eff]", children: "Welcome to Kudos!" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-black text-2xl text-secondary", children: action ? "Login to give some praise!" : "Sign up to get started" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 121,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        onClick: () => setAction(action == "login" ? "register" : "login"),
        className: " text-secondary text-sm font-extrabold ",
        children: action === "login" ? "Sign Up" : "Already have an account? Sign In"
      },
      void 0,
      false,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 127,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", className: "rounded-2xl p-6 w-96 flex flex-col gap-4 mb-8 bg-black-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: formError }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 134,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 140,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 149,
            columnNumber: 25
          },
          this
        ),
        action !== "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 161,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 169,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 159,
          columnNumber: 25
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            type: "submit",
            name: "_action",
            value: action,
            className: "rounded-xl mt-2 bg-tertiary px-3 py-2 text-[#915eff] font-black transition duration-300 ease-in-out hover:bg-[#fdsf3] hover:-translate-y-1",
            children: action === "login" ? "Sign In" : "Sign Up"
          },
          void 0,
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 195,
            columnNumber: 29
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 189,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 138,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 116,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-FXLEIJJU.js.map
