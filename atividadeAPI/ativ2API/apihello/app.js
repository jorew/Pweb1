const express = require("express");
const app = express();
const PORT = 8000;

app.set("json spaces", 4);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Dicionário de mensagens para a v2
const TRANSLATIONS = {
  "pt-br": {
    hello: "Olá, mundo!",
    user: (name) => `Olá, ${name}!`,
    post: (name) => `Olá, ${name} via POST!`,
    error_name: "O nome é obrigatório",
    error_lang: "Idioma não suportado. Use: pt-br, es, ou en.",
  },
  es: {
    hello: "¡Hola, mundo!",
    user: (name) => `¡Hola, ${name}!`,
    post: (name) => `¡Hola, ${name} desde POST!`,
    error_name: "El nombre es obligatorio",
    error_lang: "Idioma no soportado. Use: pt-br, es, o en.",
  },
  en: {
    hello: "Hello, world!",
    user: (name) => `Hello, ${name}!`,
    post: (name) => `Hello, ${name} from POST!`,
    error_name: "Name is required",
    error_lang: "Unsupported language. Use: pt-br, es, or en.",
  },
};

// Função auxiliar para resolver o idioma (URL param, Query param ou Body)
function getLanguage(req) {
  const lang = req.params.lang || req.query.lang || req.body.lang || "pt-br";
  return lang.toLowerCase();
}

// Middleware de Logging (mantido da v1)
app.use((req, res, next) => {
  const originalJson = res.json;

  res.json = function (body) {
    res.locals.responseBody = body;
    return originalJson.call(this, body);
  };

  res.on("finish", () => {
    const timestamp = new Date().toISOString();
    const endpoint = req.originalUrl;
    const responseJson = JSON.stringify(res.locals.responseBody);

    console.log(
      `[${timestamp}] Endpoint: ${endpoint} | Saída: ${responseJson}`
    );
  });

  next();
});

app.listen(PORT, () => {
  const msg = `Hello API running on PORT ${PORT}`;
  const link = `http://localhost:${PORT}`;
  const flink = `\x1b[1m${link}\x1b[0m`;
  console.log(msg + "\n" + flink);
});

/* ==========================================================================
   VERSÃO 1 (v1) - Mantida intacta
   ========================================================================== */

app.get("/v1/hi", function (req, res) {
  res.status(200).json({ msg: "Hello, world!" });
});

app.get("/v1/hi/user/:name", function (req, res) {
  res.status(200).json({ msg: "Hello, " + req.params.name.toUpperCase() });
});

app.post("/v1/hi", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.status(200).json({ msg: `Hello, ${name.toUpperCase()} from POST!` });
});

/* ==========================================================================
   VERSÃO 2 (v2) - Suporte a idiomas (pt-br, es, en)
   ========================================================================== */

// GET /v2/hi ou GET /v2/hi/:lang (aceita idioma por parâmetro de rota ou query ?lang=)
app.get(["/v2/hi", "/v2/hi/:lang"], function (req, res) {
  const lang = getLanguage(req);
  const dictionary = TRANSLATIONS[lang];

  if (!dictionary) {
    return res.status(400).json({ error: TRANSLATIONS["en"].error_lang });
  }

  res.status(200).json({ msg: dictionary.hello });
});

// GET /v2/hi/user/:name (aceita query ?lang=)
app.get("/v2/hi/user/:name", function (req, res) {
  const lang = getLanguage(req);
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const formattedName = req.params.name.toUpperCase();

  res.status(200).json({ msg: dictionary.user(formattedName) });
});

// POST /v2/hi (recebe 'name' e 'lang' via body do formulário ou query)
app.post("/v2/hi", (req, res) => {
  const lang = getLanguage(req);
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: dictionary.error_name });
  }

  res.status(200).json({ msg: dictionary.post(name.toUpperCase()) });
});

/* ==========================================================================
   Rota genérica de erro
   ========================================================================== */

// express v4 use '/*' | express v5 use '/*splat'
app.get("/*splat", function (req, res) {
  res.status(404).json({ error: "Invalid endpoint" });
});
