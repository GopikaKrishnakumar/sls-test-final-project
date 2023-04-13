"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateSchema = void 0;
const tslib_1 = require("tslib");
const Yup = tslib_1.__importStar(require("yup"));
const MIN_NAME_LETTERS = 2;
const MAX_NAME_LETTERS = 20;
exports.userCreateSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required!')
        .min(MIN_NAME_LETTERS, `Name must be at least ${MIN_NAME_LETTERS} letters`)
        .max(MAX_NAME_LETTERS, `Name must not exceed ${MAX_NAME_LETTERS} letters`),
    lastName: Yup.string()
        .required('Surname is required!')
        .min(MIN_NAME_LETTERS, `Surname must be at least ${MIN_NAME_LETTERS} letters`)
        .max(MAX_NAME_LETTERS, `Surname must not exceed ${MAX_NAME_LETTERS} letters`),
    email: Yup.string()
        .required('Email is required')
        .email('Please input valid email'),
    avatarUrl: Yup.string(),
    userName: Yup.string()
        .required('Username is required!')
        .min(MIN_NAME_LETTERS, `Username must be at least ${MIN_NAME_LETTERS} letters`)
        .max(MAX_NAME_LETTERS, `Username must not exceed ${MAX_NAME_LETTERS} letters`)
});
//# sourceMappingURL=usersvalidation.js.map