"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
// Configuração de conexão
const pgp = (0, pg_promise_1.default)({});
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'lovelystay',
    user: 'docker',
    password: 'docker',
});
exports.default = db;
