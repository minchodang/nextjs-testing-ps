module.exports = {
  esModule: true,
  validateToken: jest.fn().mockResolvedValue(true),
};

export {};

jest.mock("@/lib/auth/utils");
