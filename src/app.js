"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
const PORT = 3000;
exports.prisma = new client_1.PrismaClient();
const cors = require("cors"); //NOICEEEE
// compresses all the responses
app.use(compression_1.default);
// make the headers secure
app.use((0, helmet_1.default)());
// app.use (cors())
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Yoga server is running on port ${PORT}`);
});
