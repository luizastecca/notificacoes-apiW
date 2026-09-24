const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
    // Teste de exemplo fornecido
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    // DESAFIO 2.4: Um id "12abc" não deve ser aceito
    it("lança ValidationError quando o id contém letras e números (ex: '12abc')", () => {
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
});