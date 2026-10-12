//snacks unit test
import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Cheetos'", () => {
    expect(snacks).toContain("Cheetos");
  });
});

//guest unit test
import { guests } from "./guests";
describe("guests", () => {
  it("should have at least 3 items", () => {
    expect(guests.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Anna'", () => {
    expect(guests).toContain("Anna");
  });
});